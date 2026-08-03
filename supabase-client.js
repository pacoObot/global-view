/**
 * Global View B2B Marketplace (GV-CPS)
 * Client API Wrapper for Supabase (PostgreSQL / Realtime / Auth)
 */
(function () {
    // Credenciais seguras e isoladas no escopo IIFE (não acessíveis via consola global)
    const SUPABASE_URL = "https://hpdxwmcdzzpunwewmaxb.supabase.co";
    const SUPABASE_ANON_KEY = "sb_publishable_Y1cdvYNp6m8oSkFggmtiUA_VYAeARuj";

    // Inicialização do cliente Supabase
    if (!window.supabase) {
        console.error("Supabase CDN não foi carregado corretamente.");
        return;
    }
    const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // Mapeamento e exportação da API pública da GV-CPS
    window.gvApi = {
        /**
         * Realiza login do utilizador na plataforma
         */
        login: async (email, password) => {
            const { data, error } = await supabaseClient.auth.signInWithPassword({
                email,
                password
            });
            if (error) throw error;
            return data;
        },

        /**
         * Inicia o fluxo de login com Google OAuth
         */
        loginWithGoogle: async () => {
            const { data, error } = await supabaseClient.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.origin + '/'
                }
            });
            if (error) throw error;
            return data;
        },

        /**
         * Realiza logout do utilizador
         */
        logout: async () => {
            const { error } = await supabaseClient.auth.signOut();
            if (error) throw error;
        },

        /**
         * Retorna a sessão ativa atual
         */
        getSession: async () => {
            const { data, error } = await supabaseClient.auth.getSession();
            if (error) return null;
            return data.session;
        },

        /**
         * Obtém o perfil completo do utilizador autenticado
         */
        getUserProfile: async (userId) => {
            const { data: profile, error: pError } = await supabaseClient
                .from('profiles')
                .select('*')
                .eq('id', userId)
                .single();
            if (pError) throw pError;

            // Tentar obter contactos privados (só funcionará para o próprio ou admin por RLS)
            const { data: contacts, error: cError } = await supabaseClient
                .from('profile_contacts')
                .select('*')
                .eq('id', userId)
                .single();

            return {
                ...profile,
                contacts: cError ? null : contacts
            };
        },

        /**
         * Carrega todo o mural público (Necessidades e Ofertas)
         */
        getMural: async () => {
            // Obter todos os requisitos ativos
            const { data: requirements, error: reqError } = await supabaseClient
                .from('requirements')
                .select('*, profiles(company_name, country)')
                .order('created_at', { ascending: false });

            if (reqError) throw reqError;

            // Obter todas as ofertas ativas
            const { data: offers, error: offError } = await supabaseClient
                .from('offers')
                .select('*, profiles(company_name, country)')
                .order('created_at', { ascending: false });

            if (offError) throw offError;

            // Normalizar formato para combinar no mural unificado
            const normalizedReqs = (requirements || []).map(r => ({
                id: r.id,
                type: 'need',
                title: r.title,
                category: r.category,
                description: r.description,
                quantity: r.quantity,
                country: r.country,
                logisticsIncluded: r.logistics_included,
                status: r.status,
                createdAt: r.created_at,
                ownerId: r.buyer_id,
                companyName: r.profiles?.company_name || 'Empresa B2B',
                // Tentar ler contactos privados (será nulo se não for admin/dono)
                contactEmail: null,
                contactWhatsapp: null
            }));

            const normalizedOffers = (offers || []).map(o => ({
                id: o.id,
                type: 'offer',
                title: o.title,
                category: o.category,
                description: o.description,
                quantity: o.quantity,
                country: o.country,
                logisticsIncluded: o.logistics_included,
                status: o.status,
                createdAt: o.created_at,
                ownerId: o.supplier_id,
                companyName: o.profiles?.company_name || 'Empresa B2B',
                contactEmail: null,
                contactWhatsapp: null
            }));

            // Agregar e ordenar por mais recente
            return [...normalizedReqs, ...normalizedOffers].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        },

        /**
         * Carrega contactos de uma proposta específica (disponível apenas para Admin ou Proprietário)
         */
        getProposalContacts: async (proposalId, type) => {
            const table = type === 'need' ? 'requirement_contacts' : 'offer_contacts';
            const idCol = type === 'need' ? 'requirement_id' : 'offer_id';
            
            const { data, error } = await supabaseClient
                .from(table)
                .select('*')
                .eq(idCol, proposalId)
                .single();
            
            if (error) return null; // Retorna null em vez de erro para lidar com a ocultação de RLS
            return data;
        },

        /**
         * Regista um Pedido de Necessidade (Comprador)
         */
        postRequirement: async (requirement, contacts) => {
            // 1. Inserir a necessidade
            const { data: newReq, error: reqError } = await supabaseClient
                .from('requirements')
                .insert({
                    buyer_id: requirement.buyer_id,
                    title: requirement.title,
                    category: requirement.category,
                    description: requirement.description,
                    quantity: parseFloat(requirement.quantity),
                    country: requirement.country,
                    logistics_included: requirement.logistics_included
                })
                .select()
                .single();

            if (reqError) throw reqError;

            // 2. Inserir os contactos privados correspondentes
            const { error: conError } = await supabaseClient
                .from('requirement_contacts')
                .insert({
                    requirement_id: newReq.id,
                    contact_email: contacts.email,
                    contact_whatsapp: contacts.whatsapp
                });

            if (conError) throw conError;
            return newReq;
        },

        /**
         * Regista uma Oferta (Fornecedor)
         */
        postOffer: async (offer, contacts) => {
            // 1. Inserir a oferta
            const { data: newOff, error: offError } = await supabaseClient
                .from('offers')
                .insert({
                    supplier_id: offer.supplier_id,
                    title: offer.title,
                    category: offer.category,
                    description: offer.description,
                    quantity: parseFloat(offer.quantity),
                    country: offer.country,
                    logistics_included: offer.logistics_included
                })
                .select()
                .single();

            if (offError) throw offError;

            // 2. Inserir os contactos privados correspondentes
            const { error: conError } = await supabaseClient
                .from('offer_contacts')
                .insert({
                    offer_id: newOff.id,
                    contact_email: contacts.email,
                    contact_whatsapp: contacts.whatsapp
                });

            if (conError) throw conError;
            return newOff;
        },

        /**
         * Obtém as salas de chat disponíveis para o utilizador
         */
        getChatRooms: async (userId) => {
            const { data, error } = await supabaseClient
                .from('chat_rooms')
                .select('*, negotiation:negotiations(*)')
                .or(`participant_id.eq.${userId},consultant_id.eq.${userId}`);
            
            if (error) throw error;
            return data;
        },

        /**
         * Obtém o histórico de mensagens de uma sala de chat
         */
        getChatMessages: async (roomId) => {
            const { data, error } = await supabaseClient
                .from('chat_messages')
                .select('*')
                .eq('room_id', roomId)
                .order('created_at', { ascending: true });

            if (error) throw error;
            return data;
        },

        /**
         * Envia uma mensagem numa sala de chat
         */
        sendChatMessage: async (roomId, senderId, text) => {
            const { data, error } = await supabaseClient
                .from('chat_messages')
                .insert({
                    room_id: roomId,
                    sender_id: senderId,
                    message_text: text
                })
                .select()
                .single();

            if (error) throw error;
            return data;
        },

        /**
         * Subscreve em tempo real a novas mensagens numa sala de chat
         */
        subscribeToMessages: (roomId, onMessageReceived) => {
            return supabaseClient
                .channel(`room_${roomId}`)
                .on(
                    'postgres_changes',
                    {
                        event: 'INSERT',
                        schema: 'public',
                        table: 'chat_messages',
                        filter: `room_id=eq.${roomId}`
                    },
                    (payload) => {
                        onMessageReceived(payload.new);
                    }
                )
                .subscribe();
        },

        /**
         * Cancela a subscrição de um canal de mensagens em tempo real
         */
        unsubscribe: async (channel) => {
            if (channel) {
                await supabaseClient.removeChannel(channel);
            }
        }
    };
})();
