// Global Application State Management
const STATE_KEY = 'gvcps_state_v1';

// DICTIONARY OF TRANSLATIONS FOR PT / EN
const UI_TRANSLATIONS = {
    pt: {
        secure_intermediation: "Intermediação Segura (GV-CPS)",
        responsible_consultant: "Consultor Responsável: ",
        closed_deal: "NEGÓCIO FECHADO",
        in_progress: "EM CURSO",
        secure_negotiation_warning: "Negociação Segura: O contacto direto entre comprador e fornecedor é protegido sob sigilo comercial.",
        write_secure_message: "Escreva uma mensagem segura...",
        no_messages: "Sem mensagens. Escreva algo para iniciar a intermediação.",
        waiting_response: "Aguardando resposta da contraparte...",
        // Chatbot strings
        bot_name: "Assistente GV",
        bot_welcome: "Olá! Seja bem-vindo ao portal GV-CPS. Como posso ajudar com a intermediação comercial da sua empresa hoje?",
        bot_title: "Suporte GV-CPS",
        bot_subtitle: "Assistente em tempo real",
        bot_input_placeholder: "Digite a sua mensagem...",
        bot_default_response: "Obrigado pela sua mensagem. Sou o assistente automático da GV-CPS. Toda a nossa intermediação é confidencial e segura.",
        bot_buy_response: "Para registar uma necessidade de compra, clique no botão \"Publicar Necessidade\" na parte superior da página. O formulário é curto e a nossa equipa tratará da intermediação com fornecedores validados.",
        bot_sell_response: "Pode cadastrar a sua oferta de fornecimento gratuitamente clicando em \"Publicar Oferta\". Os fornecedores não pagam taxas de subscrição para expor produtos.",
        bot_logistics_response: "A GV-CPS oferece logística integrada opcional. Pode optar por incluir o transporte de mercadorias no faturamento final da proposta.",
        // Alerts
        alert_no_contacts: "NÃO EXPONHA CONTATOS: Para sua segurança no marketplace B2B da GV-CPS, não compartilhe telefones ou emails diretamente no chat.",
        // Accessibility titles
        accessibility_title: "Acessibilidade",
        accessibility_language: "Idioma",
        accessibility_dark_mode: "Modo Escuro",
        accessibility_contrast: "Alto Contraste",
        accessibility_highlight_links: "Realçar Links",
        accessibility_text_size: "Tamanho do Texto",
        accessibility_normal: "Normal",
        // Additional UI
        read_more: "Ler Mais",
        read_less: "Ler Menos",
        volume: "Volume",
        country: "País",
        logistics: "Logística",
        included: "Incluída",
        not_included: "Não Incluída",
        published_on: "Publicado em",
        i_am_interested: "Tenho Interesse",
        procura: "Procura",
        oferta: "Oferta",
        category: "Categoria",
        actions: "Ações",
        no_opportunities: "Nenhuma oportunidade encontrada com os filtros selecionados.",
        status_pendente: "Pendente",
        status_analise: "Em Análise",
        status_atendimento: "Em Atendimento",
        status_concluida: "Concluída",
    },
    en: {
        secure_intermediation: "Secure Intermediation (GV-CPS)",
        responsible_consultant: "Responsible Consultant: ",
        closed_deal: "CLOSED DEAL",
        in_progress: "IN PROGRESS",
        secure_negotiation_warning: "Secure Negotiation: Direct contact between buyer and supplier is protected under commercial secrecy.",
        write_secure_message: "Write a secure message...",
        no_messages: "No messages. Write something to start intermediation.",
        waiting_response: "Waiting for counterparty response...",
        // Chatbot strings
        bot_name: "GV Assistant",
        bot_welcome: "Hello! Welcome to the GV-CPS portal. How can I help with your company's commercial intermediation today?",
        bot_title: "GV-CPS Support",
        bot_subtitle: "Real-time Assistant",
        bot_input_placeholder: "Type your message...",
        bot_default_response: "Thank you for your message. I am the GV-CPS automated assistant. All our intermediation is confidential and secure.",
        bot_buy_response: "To register a buying requirement, click the \"Publish Need\" button at the top of the page. The form is short, and our team will handle the secure matching with validated suppliers.",
        bot_sell_response: "You can list your supply offer for free by clicking on \"Publish Offer\". Suppliers do not pay fees to advertise lots.",
        bot_logistics_response: "GV-CPS offers optional integrated logistics and customs clearance (sea freight, road freight, port handling). You can request logistics in Step 4 of the purchase form.",
        // Alerts
        alert_no_contacts: "DO NOT SHARE CONTACT DETAILS: For your security on the GV-CPS B2B marketplace, do not share phone numbers or emails directly in the chat.",
        // Accessibility titles
        accessibility_title: "Accessibility",
        accessibility_language: "Language",
        accessibility_dark_mode: "Dark Mode",
        accessibility_contrast: "High Contrast",
        accessibility_highlight_links: "Highlight Links",
        accessibility_text_size: "Text Size",
        accessibility_normal: "Normal",
        // Additional UI
        read_more: "Read More",
        read_less: "Read Less",
        volume: "Volume",
        country: "Country",
        logistics: "Logistics",
        included: "Included",
        not_included: "Not Included",
        published_on: "Published on",
        i_am_interested: "I'm Interested",
        procura: "Buying",
        oferta: "Selling",
        category: "Category",
        actions: "Actions",
        no_opportunities: "No opportunities found with the selected filters.",
        status_pendente: "Pending",
        status_analise: "Under Review",
        status_atendimento: "In Progress",
        status_concluida: "Completed",
    }
};

// EN TRANSLATION CATALOG FOR THE WIZARD
const GV_CATALOG_EN = {
    agro: {
        label: 'Agribusiness',
        icon: 'agriculture',
        color: '#16a34a',
        categories: {
            fertilizantes: { 
                label: 'Fertilizers', 
                unit: 'Tons', 
                products: ['NPK 12-24-12', 'Prilled Urea 46%', 'DAP (Diammonium Phosphate)', 'Composted Organic Fertilizer'], 
                quantities: ['25 Tons', '50 Tons', '100 Tons', '250 Tons', '500 Tons'] 
            },
            sementes: { 
                label: 'Seeds & Seedlings', 
                unit: 'Kg', 
                products: ['Certified Soybean Seed', 'Hybrid Maize Seed', 'Selected Sesame Seed', 'Grafted Cashew Seedlings'], 
                quantities: ['250 Kg', '500 Kg', '1000 Kg', '5000 Kg'] 
            },
            caju: { 
                label: 'Cashews & Nuts', 
                unit: 'Tons', 
                products: ['Raw Cashew Nut (RCN)', 'Processed Cashew Kernel W180', 'Cashew Kernel W240', 'Cashew Shell Liquid (CNSL)'], 
                quantities: ['15 Tons (1 Container)', '30 Tons', '100 Tons', '300 Tons'] 
            },
            acucar: { 
                label: 'Sugar', 
                unit: 'Tons', 
                products: ['Refined Cane Sugar ICUMSA 45', 'VHP Cane Sugar', 'Organic Brown Sugar'], 
                quantities: ['50 Tons', '250 Tons', '500 Tons', '12500 Tons'] 
            },
            equipamentos: { 
                label: 'Agricultural Equipment', 
                unit: 'Units', 
                products: ['75HP 4x4 Farm Tractor', '3-Disk Moldboard Plow', 'Double-Row Planter', 'Drip Irrigation System'], 
                quantities: ['1 unit', '2 units', '5 units', '10 units'] 
            }
        }
    },
    oil: {
        label: 'Oil & Gas',
        icon: 'local_gas_station',
        color: '#f59e0b',
        categories: {
            equipamentos: { 
                label: 'Industrial Equipment', 
                unit: 'Units', 
                products: ['High-Flow Air Compressors', '500kVA Silent Generators', 'Centrifugal Slurry Pumps', 'Industrial Check Valves'], 
                quantities: ['1 unit', '2 units', '5 units'] 
            },
            lubrificantes: { 
                label: 'Lubricants & Chemicals', 
                unit: 'Liters', 
                products: ['Premium Hydraulic Oil ISO 68', 'Industrial Lithium Grease', 'Stationary Engine Additives', 'Drilling Fluids'], 
                quantities: ['200 Liters (1 Drum)', '1000 Liters', '5000 Liters'] 
            },
            servicos: { 
                label: 'Technical Services', 
                unit: 'Project', 
                products: ['Ultrasonic Weld Inspection (NDT)', 'Environmental Compliance Audit', 'Preventive Maintenance for Turbine Engines', 'Local Content Consulting'], 
                quantities: ['1 project', 'Quarterly Contract', 'Annual Contract'] 
            }
        }
    },
    tech: {
        label: 'Technology',
        icon: 'devices',
        color: '#2563eb',
        categories: {
            computadores: { 
                label: 'Computers & IT', 
                unit: 'Units', 
                products: ['Corporate i7 Laptops 16GB', 'Office i5 Desktops', '24-inch IPS LED Monitors', 'Thermal Label Printers'], 
                quantities: ['5 units', '10 units', '25 units', '50 units', '100 units'] 
            },
            servidores: { 
                label: 'Servers & Infrastructure', 
                unit: 'Units', 
                products: ['2U Dual Xeon Silver Rack Server', '64TB Enterprise NAS Storage', '10kVA Online UPS Unit'], 
                quantities: ['1 unit', '2 units', '5 units'] 
            },
            redes: { 
                label: 'Networks & Telecom', 
                unit: 'Project', 
                products: ['Structured Cat6 Cabling per Point', 'Cisco Managed Switches 24P', 'Hikvision IP CCTV Camera System'], 
                quantities: ['1 project', 'Technical Maintenance Contract', 'Complete Installation'] 
            },
            software: { 
                label: 'Software & Licenses', 
                unit: 'Licenses', 
                products: ['Primavera ERP System Licenses', 'Microsoft 365 Pro Annual Subscription', 'Sophos Endpoint Security Licenses'], 
                quantities: ['5 licenses', '25 licenses', '50 licenses', '100 licenses'] 
            }
        }
    },
    logistics: {
        label: 'Logistics',
        icon: 'local_shipping',
        color: '#4338ca',
        categories: {
            maritimo: { 
                label: 'Ocean Freight', 
                unit: 'Container', 
                products: ['20ft Standard Container Shipping (FCL)', '40ft High Cube Container Shipping (FCL)', 'Less than Container Load Consolidation (LCL)', 'Dry Bulk Shipping'], 
                quantities: ['1x 20ft Container', '1x 40ft Container', '5x Containers', '10x Containers'] 
            },
            terrestre: { 
                label: 'Road Freight', 
                unit: 'Trip', 
                products: ['Closed TIR Box Truck (Mozambique-South Africa)', 'Flatbed Container Carrier', 'Fuel Tanker Truck'], 
                quantities: ['1 trip', '5 trips', 'Monthly Route Contract'] 
            },
            aduaneiro: { 
                label: 'Customs Clearance', 
                unit: 'Process', 
                products: ['General Import Customs Clearance', 'Export Customs Clearance', 'International Cargo Customs Transit'], 
                quantities: ['1 process', '5 processes', 'Continuous Clearance'] 
            }
        }
    }
};

// HELPER FUNCTION TO GET TRANSLATED ITEM FIELDS (PT / EN)
function getTranslatedField(item, field) {
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    if (lang === 'en') {
        const enVal = item[field + 'En'] || item[field + '_en'];
        if (enVal !== undefined && enVal !== null && enVal !== '') return enVal;
        
        // Automatic fallbacks for titles
        if (field === 'title') {
            const t = item.title || '';
            if (t.includes('Óleo de Soja')) return 'Refined Soybean Oil Importation';
            if (t.includes('Subestação')) return 'Preventive Maintenance of Electrical Substation';
            if (t.includes('Tradução Juramentada')) return 'Sworn Translation of Commercial Contracts (EN-PT)';
            if (t.includes('Minério de Ferro')) return '62% Iron Ore Acquisition';
            if (t.includes('Licenciamento Ambiental')) return 'Environmental Licensing Consulting';
            if (t.includes('Servidores Rack')) return 'Supply of 2U Dual Xeon Rack Servers';
            if (t.includes('Açúcar ICUMSA')) return 'ICUMSA 45 Sugar Supply';
            if (t.includes('Transformadores')) return 'Three-Phase Transformers 33kV';
            if (t.includes('Solução ERP')) return 'Cloud ERP Software Solution';
            if (t.includes('Cabotagem')) return 'Mozambique Coastal Shipping Service';
            if (t.includes('Despacho Aduaneiro')) return 'Customs Clearance at Maputo Port';
        }
        
        // Automatic fallbacks for common fields
        if (field === 'category') {
            const cat = (item.category || '').toLowerCase();
            if (cat.includes('agropecuária') || cat.includes('agronegócio') || cat.includes('agro')) {
                return 'Agribusiness & Commodities Consulting';
            } else if (cat.includes('projectos') || cat.includes('projetos') || cat.includes('avaliação')) {
                return 'Project Evaluation & Monitoring';
            } else if (cat.includes('tradução')) {
                return 'Document Translation (PT/EN/FR)';
            } else if (cat.includes('trading') || cat.includes('commodities')) {
                return 'Commodities Trading Consulting';
            } else if (cat.includes('tecnologia') || cat.includes('informação')) {
                return 'IT & Enterprise Software Consulting';
            } else if (cat.includes('logística') || cat.includes('fretes')) {
                return 'Global Logistics & Freight';
            }
        }
        if (field === 'country') {
            const c = (item.country || '').toLowerCase();
            if (c.includes('moçambique')) return 'Mozambique';
            if (c.includes('brasil')) return 'Brazil';
            if (c.includes('portugal')) return 'Portugal';
            if (c.includes('emirados') || c.includes('árabes')) return 'United Arab Emirates';
            if (c.includes('china')) return 'China';
        }
        if (field === 'quantity') {
            const q = (item.quantity || '').toLowerCase();
            if (q.includes('toneladas')) return q.replace('toneladas', 'Tons');
            if (q.includes('contratos')) return q.replace('contratos', 'Contracts');
            if (q.includes('nível industrial')) return 'Industrial Level';
            if (q.includes('fluxo contínuo')) return 'Continuous Flow';
            if (q.includes('lote industrial')) return 'Industrial Batch';
            if (q.includes('unidades')) return q.replace('unidades', 'Units');
        }
        if (field === 'logistics') {
            const l = (item.logistics || '').toLowerCase();
            if (l === 'sim' || l === 'yes') return 'Yes';
            if (l === 'não' || l === 'no') return 'No';
        }
    }
    return item[field];
}

// HELPER TO GET ACTIVE SECTOR CATALOG DEPENDING ON LANGUAGE
function getCatalog() {
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    return lang === 'en' ? GV_CATALOG_EN : GV_CATALOG;
}

// Initial Mock Data
const INITIAL_STATE = {
    currentUser: {
        role: 'visitor', // visitor, buyer, supplier, consultant, admin
        id: null,
        name: 'Visitante'
    },
    users: {
        buyer_1: { id: 'buyer_1', name: 'João Silva', email: 'joao@buyer.com', role: 'buyer', initials: 'JS' },
        supplier_1: { id: 'supplier_1', name: 'Maria Santos', email: 'maria@supplier.com', role: 'supplier', initials: 'MS' },
        consultant_1: { id: 'consultant_1', name: 'Carlos Mendes', email: 'carlos@gv-cps.com', role: 'consultant', initials: 'CM' },
        admin_1: { id: 'admin_1', name: 'Pedro Gomes', email: 'pedro@gv-cps.com', role: 'admin', initials: 'PG' }
    },
    requirements: [
        {
            id: 'req_1',
            title: 'Importação de Óleo de Soja Refinado',
            titleEn: 'Refined Soybean Oil Importation',
            category: 'Consultoria para Agropecuária e Agronegócios',
            description: 'Buscamos fornecedor qualificado para suprir demanda recorrente de óleo de soja refinado de qualidade premium em Moçambique.',
            descriptionEn: 'We are looking for a qualified supplier to meet the recurring demand for premium quality refined soybean oil in Mozambique.',
            quantity: '500 Toneladas',
            country: 'Moçambique',
            logistics: 'Sim', // Yes - GV-CPS handles logistics
            date: '2026-06-17',
            status: 'atendimento', // pendente, analise, atendimento, concluida
            owner: 'buyer_1',
            assignedConsultant: 'consultant_1',
            contactWhatsapp: '+258 84 999 1111',
            contactEmail: 'compras@sojaco.mz'
        },
        {
            id: 'req_2',
            title: 'Manutenção Preventiva de Subestação Elétrica',
            titleEn: 'Preventive Maintenance of Electrical Substation',
            category: 'Avaliação, Elaboração e Monitoria de Projectos',
            description: 'Serviços técnicos especializados de engenharia para manutenção preventiva e corretiva de equipamentos elétricos de média tensão.',
            descriptionEn: 'Specialized technical engineering services for preventive and corrective maintenance of medium voltage electrical equipment.',
            quantity: 'Nível Industrial',
            country: 'Moçambique',
            logistics: 'Não',
            date: '2026-06-16',
            status: 'analise',
            owner: 'buyer_1',
            assignedConsultant: 'consultant_1',
            contactWhatsapp: '+258 82 444 5555',
            contactEmail: 'infra@engenharia.co.mz'
        },
        {
            id: 'req_3',
            title: 'Tradução Juramentada de Contratos Comerciais (EN-PT)',
            titleEn: 'Sworn Translation of Commercial Contracts (EN-PT)',
            category: 'Tradução de Documentos (Português, Inglês, Francês, línguas nacionais)',
            description: 'Tradução juramentada de contratos internacionais de exploração e trading de gás natural.',
            descriptionEn: 'Sworn translation of international contracts for the exploration and trading of natural gas.',
            quantity: '45 Contratos',
            country: 'Portugal',
            logistics: 'Não',
            date: '2026-06-14',
            status: 'pendente',
            owner: 'buyer_1',
            assignedConsultant: null,
            contactWhatsapp: '+351 912 345 678',
            contactEmail: 'legal@gascorp.pt'
        },
        {
            id: 'req_4',
            title: 'Aquisição de Minério de Ferro 62%',
            titleEn: 'Acquisition of Iron Ore 62%',
            category: 'Consultoria para Commodities Trading',
            description: 'Procuramos fornecedor confiável para entrega regular de minério de ferro de teor mínimo 62% Fe.',
            descriptionEn: 'We are looking for a reliable supplier for regular delivery of iron ore with a minimum grade of 62% Fe.',
            quantity: '50,000 MT/Mês',
            country: 'Emirados Árabes',
            logistics: 'Sim',
            date: '2026-05-12',
            status: 'concluida',
            owner: 'buyer_1',
            assignedConsultant: 'consultant_1',
            contactWhatsapp: '+971 4 123 4567',
            contactEmail: 'metals@dubaitrade.ae'
        }
    ],
    offers: [
        {
            id: 'off_1',
            title: 'Fornecimento de Açúcar ICUMSA 45',
            titleEn: 'Supply of ICUMSA 45 Sugar',
            category: 'Consultoria para Commodities Trading',
            description: 'Dispomos de cotas anuais para fornecimento e exportação de açúcar ICUMSA 45 refinado de alta qualidade.',
            descriptionEn: 'We have annual quotas for the supply and export of high-quality refined ICUMSA 45 sugar.',
            quantity: '12,500 MT',
            country: 'Brasil',
            logistics: 'Sim',
            date: '2026-06-15',
            status: 'atendimento',
            owner: 'supplier_1',
            assignedConsultant: 'consultant_1'
        },
        {
            id: 'off_2',
            title: 'Instalação de Painéis Fotovoltaicos Monocristalinos',
            titleEn: 'Installation of Monocrystalline Photovoltaic Panels',
            category: 'Consultoria para Tecnologias de Informação',
            description: 'Fornecimento e montagem de painéis solares industriais de alto rendimento para plantas comerciais.',
            descriptionEn: 'Supply and assembly of high-yield industrial solar panels for commercial plants.',
            quantity: 'Lote Industrial',
            country: 'China',
            logistics: 'Sim',
            date: '2026-06-10',
            status: 'analise',
            owner: 'supplier_1',
            assignedConsultant: 'consultant_1'
        },
        {
            id: 'off_3',
            title: 'Logística de Casca de Castanha de Caju Bruta',
            titleEn: 'Logistics of Raw Cashew Nut Shell',
            category: 'Consultoria para Agropecuária e Agronegócios',
            description: 'Castanha bruta de caju de ótima qualidade proveniente de cooperativas do norte de Moçambique.',
            descriptionEn: 'High-quality raw cashew nuts from cooperatives in northern Mozambique.',
            quantity: 'Fluxo Contínuo',
            country: 'Moçambique',
            logistics: 'Sim',
            date: '2026-05-08',
            status: 'concluida',
            owner: 'supplier_1',
            assignedConsultant: 'consultant_1'
        }
    ],
    matches: [
        {
            id: 'match_1',
            requirementId: 'req_1',
            offerId: 'off_1',
            date: '2026-06-17',
            status: 'negociacao', // negociacao, fechado, cancelado
            consultantId: 'consultant_1',
            internalNotes: 'Comprador precisa de Soja refinada, mas Fornecedor oferece Açúcar. Iniciando contacto alternativo de agrocommodities para ver aceitação de outras mercadorias.'
        }
    ],
    messages: [
        {
            id: 'msg_1',
            matchId: 'match_1',
            senderId: 'consultant_1',
            senderRole: 'consultant',
            text: 'Olá João (Comprador). Identificamos um potencial fornecedor de commodities agrícolas que pode atender à sua demanda de refino. Estamos a analisar a documentação de conformidade de carga.',
            timestamp: '2026-06-17T10:15:00Z',
            channel: 'buyer' // buyer channel (between consultant and buyer)
        },
        {
            id: 'msg_2',
            matchId: 'match_1',
            senderId: 'buyer_1',
            senderRole: 'buyer',
            text: 'Excelente! A logística precisa de estar incluída no vosso porto de destino (Porto de Beira). O fornecedor consegue tratar disso?',
            timestamp: '2026-06-17T10:20:00Z',
            channel: 'buyer'
        },
        {
            id: 'msg_3',
            matchId: 'match_1',
            senderId: 'consultant_1',
            senderRole: 'consultant',
            text: 'Olá Maria (Fornecedora). Temos um cliente interessado em adquirir grandes volumes de carga alimentar. Confirmamos que vocês possuem logística integrada na vossa proposta, correto?',
            timestamp: '2026-06-17T10:25:00Z',
            channel: 'supplier' // supplier channel (between consultant and supplier)
        },
        {
            id: 'msg_4',
            matchId: 'match_1',
            senderId: 'supplier_1',
            senderRole: 'supplier',
            text: 'Sim, confirmamos. Podemos incluir o frete marítimo internacional até ao porto de Beira diretamente na factura final intermediada pela GV-CPS.',
            timestamp: '2026-06-17T10:30:00Z',
            channel: 'supplier'
        }
    ],
    notifications: [
        { id: 'not_1', userId: 'buyer_1', text: 'Sua solicitação de Óleo de Soja foi vinculada a uma negociação intermediada.', date: '2026-06-17', read: false },
        { id: 'not_2', userId: 'supplier_1', text: 'Sua oferta de Açúcar ICUMSA 45 foi associada a um comprador em potencial.', date: '2026-06-17', read: false },
        { id: 'not_3', userId: 'consultant_1', text: 'Nova proposta de Tradução de Documentos cadastrada sem consultor atribuído.', date: '2026-06-14', read: true }
    ],
    categories: [
        'Agro & Commodities',
        'Energia & Industria',
        'Tecnologia & Inovacao',
        'Logistica & Projetos',
        'Consultoria & Servicos'
    ]
};

// DYNAMIC HERO SLIDER CONTROLLER
let currentSlide = 0;
const totalSlides = 3;
let slideInterval = null;
let isSliderPaused = false;

function initHeroSlider() {
    // Check if hero elements exist in the DOM
    const bullet = document.getElementById('bullet-0');
    if (!bullet) return; // Slider not present in current page
    
    setSlide(0);
    startSlideShow();
}

function startSlideShow() {
    if (slideInterval) clearInterval(slideInterval);
    if (isSliderPaused) return; // Don't auto rotate if paused
    slideInterval = setInterval(() => {
        nextSlide();
    }, 15000); // Auto rotate every 15 seconds
}

function setSlide(index) {
    currentSlide = index;
    for (let i = 0; i < totalSlides; i++) {
        const slide = document.getElementById(`hero-slide-${i}`);
        const bullet = document.getElementById(`bullet-${i}`);
        const bg = document.getElementById(`hero-bg-${i}`);
        
        if (slide) {
            if (i === index) {
                slide.classList.remove('opacity-0', 'pointer-events-none', 'translate-x-8');
                slide.classList.add('opacity-100', 'translate-x-0');
                slide.style.position = 'relative';
            } else {
                slide.classList.remove('opacity-100', 'translate-x-0');
                slide.classList.add('opacity-0', 'pointer-events-none', 'translate-x-8');
                slide.style.position = 'absolute';
            }
        }
        
        if (bullet) {
            if (i === index) {
                bullet.classList.remove('bg-white/30');
                bullet.classList.add('bg-white');
            } else {
                bullet.classList.remove('bg-white');
                bullet.classList.add('bg-white/30');
            }
        }

        if (bg) {
            if (i === index) {
                bg.classList.remove('inactive');
                bg.classList.add('active');
            } else {
                bg.classList.remove('active');
                bg.classList.add('inactive');
            }
        }
    }
}

function nextSlide() {
    let next = (currentSlide + 1) % totalSlides;
    setSlide(next);
    startSlideShow(); // Reset timer on manual navigation
}

function prevSlide() {
    let prev = (currentSlide - 1 + totalSlides) % totalSlides;
    setSlide(prev);
    startSlideShow(); // Reset timer on manual navigation
}

function togglePlayPause() {
    isSliderPaused = !isSliderPaused;
    const btn = document.getElementById('play-pause-btn');
    if (btn) {
        if (isSliderPaused) {
            btn.innerHTML = `<span class="material-symbols-outlined text-sm">play_arrow</span>`;
            btn.setAttribute('title', 'Iniciar slide');
            if (slideInterval) {
                clearInterval(slideInterval);
                slideInterval = null;
            }
        } else {
            btn.innerHTML = `<span class="material-symbols-outlined text-sm">pause</span>`;
            btn.setAttribute('title', 'Pausar slide');
            startSlideShow();
        }
    }
}

// Expose slider functions to global scope for HTML onclick events
window.setSlide = setSlide;
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.togglePlayPause = togglePlayPause;

let appState = null;

// Initialization
function initApp() {
    const saved = localStorage.getItem(STATE_KEY);
    if (saved) {
        try {
            appState = JSON.parse(saved);
        } catch (e) {
            console.error('Error loading state from localStorage, resetting', e);
            appState = JSON.parse(JSON.stringify(INITIAL_STATE));
        }
    } else {
        appState = JSON.parse(JSON.stringify(INITIAL_STATE));
    }
    
    // Default current user to visitor if not set
    if (!appState.currentUser) {
        appState.currentUser = { role: 'visitor', id: null, name: 'Visitante' };
    }
    
    saveState();
    setupRouting();
    setupRoleSwitcher();
    setupChatWidget();
    setupFormValidation();
    setupEventListeners();
    initHeroSlider();
    
    // Sync mural data from Supabase on init
    syncMuralFromSupabase();
    
    // English First auto-detection protocol
    function getInitialLang() {
        const saved = localStorage.getItem('gvcps_lang');
        if (saved === 'pt' || saved === 'en') return saved;
        
        // Auto-detect browser/system language: if Portuguese, set pt, otherwise default to English First ('en')
        const navLang = (navigator.language || (navigator.languages && navigator.languages[0]) || '').toLowerCase();
        if (navLang.startsWith('pt')) return 'pt';
        return 'en'; // English First
    }
    
    const currentLang = getInitialLang();
    setLanguage(currentLang);
    
    // Initialize accessibility options
    initAccessibility();
    
    // Auto load current view from hash or homepage
    const initialView = window.location.hash ? window.location.hash.substring(1) : 'home';
    navigate(initialView);
}

function saveState() {
    localStorage.setItem(STATE_KEY, JSON.stringify(appState));
}

// Toggle Mobile Navigation Menu Drawer
function toggleMobileMenu() {
    const drawer = document.getElementById('mobile-drawer');
    if (drawer) {
        drawer.classList.toggle('open');
    }
}
window.toggleMobileMenu = toggleMobileMenu;

// Navigation Router
function setupRouting() {
    window.addEventListener('hashchange', () => {
        const viewName = window.location.hash ? window.location.hash.substring(1) : 'home';
        navigate(viewName);
    });
}

function navigate(viewPath) {
    // Parse viewPath for potential query parameters (like ?id=req_1)
    const [viewName, paramString] = viewPath.split('?');
    const params = {};
    if (paramString) {
        paramString.split('&').forEach(pair => {
            const [k, v] = pair.split('=');
            params[k] = decodeURIComponent(v);
        });
    }

    // Close mobile drawer if open
    const drawer = document.getElementById('mobile-drawer');
    if (drawer) {
        drawer.classList.remove('open');
    }

    // Hide all view sections
    document.querySelectorAll('.view-section').forEach(el => {
        el.classList.remove('active');
    });
    
    // Header navigation active highlight (desktop & mobile)
    document.querySelectorAll('nav.main-nav a, .mobile-nav-link').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${viewName}`) {
            a.classList.add('active');
        }
    });

    // Check authorization rules
    if (viewName.endsWith('-portal')) {
        const requiredRole = viewName.replace('-portal', '');
        if (appState.currentUser.role !== requiredRole) {
            // Redirect unauthorized to home
            window.location.hash = 'home';
            openLoginModal();
            // Autofill mock credentials for demonstration
            const emailMap = {
                'buyer': 'buyer@gvcps.com',
                'supplier': 'supplier@gvcps.com',
                'consultant': 'consultant@gvcps.com',
                'admin': 'admin@gvcps.com'
            };
            if (emailMap[requiredRole]) {
                fillMockCreds(emailMap[requiredRole]);
            }
            return;
        }
    }

    // Load dynamic contents for target view
    switch(viewName) {
        case 'home':
            renderHomepage();
            break;
        case 'about':
        case 'services':
        case 'contact':
        case 'trust':
            // Static corporate views, nothing to render dynamically
            break;
        case 'wall':
            renderOpportunityWall(params);
            break;
        case 'detail':
            renderDetailView(params.id, params.type);
            break;
        case 'publish-need':
            resetForm('need-form');
            break;
        case 'publish-offer':
            resetForm('offer-form');
            break;
        case 'buyer-portal':
            renderBuyerPortal(params.tab || 'dashboard', params.id);
            break;
        case 'supplier-portal':
            renderSupplierPortal(params.tab || 'dashboard', params.id);
            break;
        case 'consultant-portal':
            renderConsultantPortal(params.tab || 'dashboard', params.id);
            break;
        case 'admin-portal':
            renderAdminPortal(params.tab || 'dashboard');
            break;
    }

    // Show target view
    const targetEl = document.getElementById(`view-${viewName}`);
    if (targetEl) {
        targetEl.classList.add('active');
    } else {
        // Fallback to home
        document.getElementById('view-home').classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Role Switcher Setup
function setupRoleSwitcher() {
    const dropdown = document.getElementById('roleDropdown');
    const switcherBtn = document.getElementById('roleSwitcherBtn');
    
    if (switcherBtn) {
        switcherBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('show');
        });
    }
    
    document.addEventListener('click', () => {
        if (dropdown) dropdown.classList.remove('show');
    });
    
    // Set UI according to current role
    updateSwitcherUI();
    
    document.querySelectorAll('.role-option').forEach(opt => {
        opt.addEventListener('click', () => {
            const role = opt.dataset.role;
            const userObj = appState.users[`${role}_1`] || null;
            
            appState.currentUser = {
                role: role,
                id: userObj ? userObj.id : null,
                name: userObj ? userObj.name : 'Visitante'
            };
            
            saveState();
            updateSwitcherUI();
            
            // Redirect based on role
            if (role === 'visitor') {
                const btnLogin = document.getElementById('btnHeaderLogin');
                const userMenu = document.getElementById('loggedInUserMenu');
                if (btnLogin) btnLogin.style.display = 'flex';
                if (userMenu) userMenu.style.display = 'none';
                window.location.hash = 'home';
            } else {
                window.location.hash = `${role}-portal`;
            }
        });
    });
}

function updateSwitcherUI() {
    const role = appState.currentUser.role;
    const label = document.getElementById('selectedRoleLabel');
    const memberNavs = document.querySelectorAll('.member-portal-link');
    const btnLogin = document.getElementById('btnHeaderLogin');
    const userMenu = document.getElementById('loggedInUserMenu');
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    
    document.querySelectorAll('.role-option').forEach(opt => {
        if (opt.dataset.role === role) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });
    
    let text = lang === 'pt' ? 'Demo: Visitante' : 'Demo: Visitor';
    
    const roleMap = {
        pt: { buyer: 'Comprador', supplier: 'Fornecedor', consultant: 'Consultor', admin: 'Admin' },
        en: { buyer: 'Buyer', supplier: 'Supplier', consultant: 'Consultant', admin: 'Admin' }
    };
    
    if (role !== 'visitor') {
        const name = appState.currentUser.name;
        const roleLabel = roleMap[lang][role];
        text = `Demo: ${roleLabel} (${name.split(' ')[0]})`;
    }
    if (label) label.textContent = text;
    
    // Toggle member portal links in header and mobile menu
    if (role !== 'visitor') {
        memberNavs.forEach(nav => {
            nav.href = `#${role}-portal`;
            const roleLabel = roleMap[lang][role];
            nav.textContent = lang === 'pt' ? `Painel ${roleLabel}` : `${roleLabel} Panel`;
            nav.style.display = 'inline-block';
        });
        if (btnLogin) btnLogin.style.display = 'none';
        if (userMenu) userMenu.style.display = 'block';
    } else {
        memberNavs.forEach(nav => {
            nav.style.display = 'none';
        });
        if (btnLogin) btnLogin.style.display = 'flex';
        if (userMenu) userMenu.style.display = 'none';
    }
}

// LOGIN MODAL SIMULATOR HANDLERS
function openLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
    }
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
}

function fillMockCreds(email) {
    document.getElementById('login-email').value = email;
    document.getElementById('login-password').value = 'gvcps123';
}

async function handleMockLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    
    // Feedback visual do botão
    const btn = event.submitter || document.querySelector('#loginModal button[type="submit"]');
    const originalText = btn ? btn.textContent : 'Aceder com Segurança';
    if (btn) {
        btn.textContent = 'A processar...';
        btn.disabled = true;
    }
    
    try {
        if (!window.gvApi) throw new Error("gvApi não inicializado.");
        
        // 1. Tenta login real no Supabase Auth
        const authData = await window.gvApi.login(email, password);
        const profile = await window.gvApi.getUserProfile(authData.user.id);
        
        appState.currentUser = {
            role: profile.role,
            id: profile.id,
            name: profile.contacts ? profile.contacts.real_name : (profile.company_name || 'Utilizador Supabase'),
            email: email
        };
        
        saveState();
        updateSwitcherUI();
        closeLoginModal();
        
        // Redireciona para o portal apropriado
        window.location.hash = `${profile.role}-portal`;
        
        // WhatsApp notification simulation
        setTimeout(() => {
            simulateWhatsAppNotification(profile.id, `Olá ${appState.currentUser.name}, bem-vindo ao portal seguro da GV-CPS.`);
        }, 1000);
        
        // Sincronizar o mural de imediato
        syncMuralFromSupabase();
        
    } catch (error) {
        console.warn("Supabase Auth indisponível ou credenciais erradas. Usando login simulado (Mock):", error.message);
        
        // 2. Fallback de Simulação
        let role = 'visitor';
        const lowerEmail = email.toLowerCase();
        if (lowerEmail.includes('buyer')) role = 'buyer';
        else if (lowerEmail.includes('supplier')) role = 'supplier';
        else if (lowerEmail.includes('consultant')) role = 'consultant';
        else if (lowerEmail.includes('admin')) role = 'admin';
        
        const userObj = appState.users[`${role}_1`] || null;
        
        appState.currentUser = {
            role: role,
            id: userObj ? userObj.id : null,
            name: userObj ? userObj.name : 'Visitante'
        };
        
        saveState();
        updateSwitcherUI();
        closeLoginModal();
        
        if (role !== 'visitor') {
            window.location.hash = `${role}-portal`;
            setTimeout(() => {
                simulateWhatsAppNotification(userObj.id, `Olá ${userObj.name}, bem-vindo de volta ao portal GV-CPS (Modo Simulado).`);
            }, 1000);
        } else {
            window.location.hash = 'home';
        }
    } finally {
        if (btn) {
            btn.textContent = originalText;
            btn.disabled = false;
        }
    }
}

// OMNICHANNEL WHATSAPP SIMULATOR
function simulateWhatsAppNotification(userId, messageText) {
    const role = userId.replace('_1', '');
    const syncActive = localStorage.getItem(`gvcps_whatsapp_sync_${role}`) !== 'false';
    
    if (syncActive) {
        const banner = document.createElement('div');
        banner.style.cssText = 'position: fixed; top: 88px; right: 24px; background-color: #25D366; color: white; padding: 16px 20px; border-radius: var(--radius-xl); box-shadow: var(--shadow-lg); z-index: 99999; display: flex; align-items: center; gap: 12px; max-width: 320px; font-size: 13px; font-family: var(--font-body); border-left: 6px solid #128C7E; animation: slideIn 0.3s ease-out;';
        banner.innerHTML = `
            <div style="font-size: 24px;">💬</div>
            <div style="text-align: left;">
                <div style="font-weight: bold; margin-bottom: 2px;">GV-CPS no WhatsApp</div>
                <div>${messageText}</div>
            </div>
        `;
        document.body.appendChild(banner);
        
        // Add slide-in animation styles
        if (!document.getElementById('whatsapp-banner-styles')) {
            const style = document.createElement('style');
            style.id = 'whatsapp-banner-styles';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(120%); }
                    to { transform: translateX(0); }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); }
                    to { transform: translateX(120%); }
                }
            `;
            document.head.appendChild(style);
        }
        
        setTimeout(() => {
            banner.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => banner.remove(), 300);
        }, 5000);
    }
}

function toggleWhatsAppAlerts(role, checkbox) {
    const active = checkbox.checked;
    localStorage.setItem(`gvcps_whatsapp_sync_${role}`, active ? 'true' : 'false');
    const label = document.getElementById(`${role}-whatsapp-status-label`);
    if (label) {
        label.textContent = active ? 'NOTIFICAÇÕES ATIVAS' : 'NOTIFICAÇÕES DESATIVADAS';
        label.style.color = active ? '#25D366' : 'var(--outline)';
    }
    
    if (active) {
        simulateWhatsAppNotification(`${role}_1`, 'Sincronização reativada com sucesso.');
    }
}

// EXPANDABLE SERVICES DETAIL CARD TOGGLE
function toggleCardDetail(btn) {
    const detailDiv = btn.previousElementSibling.querySelector('div');
    const isHidden = detailDiv.classList.contains('hidden');
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    if (isHidden) {
        detailDiv.classList.remove('hidden');
        if (lang === 'pt') {
            btn.innerHTML = `Ler Menos <span class="material-symbols-outlined text-xs">keyboard_arrow_up</span>`;
        } else {
            btn.innerHTML = `Read Less <span class="material-symbols-outlined text-xs">keyboard_arrow_up</span>`;
        }
    } else {
        detailDiv.classList.add('hidden');
        if (lang === 'pt') {
            btn.innerHTML = `Ler Mais <span class="material-symbols-outlined text-xs">keyboard_arrow_down</span>`;
        } else {
            btn.innerHTML = `Read More <span class="material-symbols-outlined text-xs">keyboard_arrow_down</span>`;
        }
    }
}

// BILINGUAL LANGUAGE SWITCHER HANDLERS
function setLanguage(lang) {
    localStorage.setItem('gvcps_lang', lang);
    document.documentElement.lang = lang; // Google Translate compatibility!
    applyTranslations(lang);
    
    const btnPt = document.getElementById('btn-lang-pt');
    const btnEn = document.getElementById('btn-lang-en');
    if (btnPt && btnEn) {
        if (lang === 'pt') {
            btnPt.style.backgroundColor = 'var(--secondary)';
            btnPt.style.color = 'white';
            btnPt.style.border = 'none';
            btnEn.style.backgroundColor = 'transparent';
            btnEn.style.color = 'var(--on-surface-variant)';
            btnEn.style.border = '1px solid var(--outline-variant)';
        } else {
            btnEn.style.backgroundColor = 'var(--secondary)';
            btnEn.style.color = 'white';
            btnEn.style.border = 'none';
            btnPt.style.backgroundColor = 'transparent';
            btnPt.style.color = 'var(--on-surface-variant)';
            btnPt.style.border = '1px solid var(--outline-variant)';
        }
    }
    
    // Also re-render switcher UI
    updateSwitcherUI();
    
    // Initialize/re-initialize chatbot welcome message
    initWidgetChatMessages(lang);
    
    // Re-render current page
    const hashParts = window.location.hash ? window.location.hash.substring(1).split('?') : ['home'];
    const currentView = hashParts[0] || 'home';
    const urlParams = new URLSearchParams(hashParts[1] || '');
    const tab = urlParams.get('tab') || 'dashboard';
    const id = urlParams.get('id');
    const type = urlParams.get('type');

    if (currentView === 'home') {
        renderHomepage();
        renderMarketExplorer();
    } else if (currentView === 'wall') {
        renderOpportunityWall();
    } else if (currentView === 'detail' && id && type) {
        renderDetailView(id, type);
    } else if (currentView === 'buyer-portal') {
        renderBuyerPortal(tab, id);
    } else if (currentView === 'supplier-portal') {
        renderSupplierPortal(tab, id);
    } else if (currentView === 'consultant-portal') {
        renderConsultantPortal(tab, id);
    } else if (currentView === 'admin-portal') {
        renderAdminPortal(tab);
    }
}

// ACCESSIBILITY CONTROL PANEL HANDLERS
function initAccessibility() {
    // Attach direct click handler matching chat-fab
    const fab = document.getElementById('accessibility-fab');
    if (fab) {
        fab.onclick = function(e) {
            const evt = e || window.event;
            if (evt && evt.stopPropagation) evt.stopPropagation();
            toggleAccessibilityMenu(evt);
        };
    }
    
    // Attach outside click listener to close accessibility panel safely
    document.addEventListener('click', (e) => {
        const panel = document.getElementById('accessibility-panel');
        const fabBtn = document.getElementById('accessibility-fab');
        if (panel && fabBtn && !panel.contains(e.target) && !fabBtn.contains(e.target)) {
            panel.style.display = 'none';
            panel.classList.add('hidden');
        }
    });

    // 1. Dark Mode
    const darkMode = localStorage.getItem('gvcps_dark_mode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-theme');
        const btn = document.getElementById('acc-dark-btn');
        if (btn) btn.classList.add('active');
    }
    
    // 2. High Contrast
    const contrast = localStorage.getItem('gvcps_high_contrast') === 'true';
    if (contrast) {
        document.body.classList.add('accessibility-high-contrast');
        const btn = document.getElementById('acc-contrast-btn');
        if (btn) btn.classList.add('active');
    }
    
    // 3. Highlight Links
    const highlightLinks = localStorage.getItem('gvcps_highlight_links') === 'true';
    if (highlightLinks) {
        document.body.classList.add('accessibility-highlight-links');
        const btn = document.getElementById('acc-links-btn');
        if (btn) btn.classList.add('active');
    }
    
    // 4. Text Size scale
    const scale = localStorage.getItem('gvcps_font_scale') || '1';
    if (scale !== '1') {
        document.body.style.setProperty('--accessibility-scale', scale);
        document.body.style.fontSize = scale + 'em';
    }
}

function toggleAccessibilityMenu(e) {
    const evt = e || window.event;
    if (evt && evt.stopPropagation) evt.stopPropagation();
    
    const panel = document.getElementById('accessibility-panel');
    if (!panel) return;
    
    const isHidden = panel.classList.contains('hidden') || panel.style.display === 'none' || getComputedStyle(panel).display === 'none';
    if (isHidden) {
        // Close chat window if open
        const chatWindow = document.getElementById('chat-window');
        if (chatWindow) {
            chatWindow.classList.add('hidden');
            chatWindow.style.setProperty('display', 'none', 'important');
            const chatIcon = document.getElementById('chat-icon');
            if (chatIcon) chatIcon.textContent = 'chat';
        }
        panel.classList.remove('hidden');
        panel.style.setProperty('display', 'flex', 'important');
    } else {
        panel.classList.add('hidden');
        panel.style.setProperty('display', 'none', 'important');
    }
}
window.toggleAccessibilityMenu = toggleAccessibilityMenu;

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('gvcps_dark_mode', isDark);
    
    const btn = document.getElementById('acc-dark-btn');
    if (btn) {
        if (isDark) btn.classList.add('active');
        else btn.classList.remove('active');
    }
}

function toggleContrast() {
    const isContrast = document.body.classList.toggle('accessibility-high-contrast');
    localStorage.setItem('gvcps_high_contrast', isContrast);
    
    const btn = document.getElementById('acc-contrast-btn');
    if (btn) {
        if (isContrast) btn.classList.add('active');
        else btn.classList.remove('active');
    }
}

function toggleLinkHighlight() {
    const isHighlight = document.body.classList.toggle('accessibility-highlight-links');
    localStorage.setItem('gvcps_highlight_links', isHighlight);
    
    const btn = document.getElementById('acc-links-btn');
    if (btn) {
        if (isHighlight) btn.classList.add('active');
        else btn.classList.remove('active');
    }
}

function changeTextSize(action) {
    let currentScale = parseFloat(document.body.style.getPropertyValue('--accessibility-scale') || '1');
    if (action === 'increase') {
        currentScale = Math.min(1.4, currentScale + 0.1);
    } else if (action === 'decrease') {
        currentScale = Math.max(0.8, currentScale - 0.1);
    } else {
        currentScale = 1.0;
    }
    
    document.body.style.setProperty('--accessibility-scale', currentScale);
    document.body.style.fontSize = currentScale + 'em';
    localStorage.setItem('gvcps_font_scale', currentScale);
}

// Expose functions globally
window.toggleAccessibilityMenu = toggleAccessibilityMenu;
window.toggleDarkMode = toggleDarkMode;
window.toggleContrast = toggleContrast;
window.toggleLinkHighlight = toggleLinkHighlight;
window.changeTextSize = changeTextSize;

function applyTranslations(lang) {
    document.querySelectorAll('[data-translate-pt]').forEach(el => {
        const text = el.getAttribute(`data-translate-${lang}`);
        if (!text) return;

        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = text;
            return;
        }

        const icon = el.querySelector('.material-symbols-outlined');
        const childSpan = el.querySelector('span:not(.material-symbols-outlined)');

        if (childSpan && childSpan.hasAttribute(`data-translate-${lang}`)) {
            // Let child span translate in its own query iteration
            return;
        }

        if (icon) {
            let textNodeFound = false;
            el.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim().length > 0) {
                    node.nodeValue = ' ' + text.trim();
                    textNodeFound = true;
                }
            });
            if (!textNodeFound) {
                el.appendChild(document.createTextNode(' ' + text.trim()));
            }
        } else if (text.includes('<') || text.includes('&lt;') || text.includes('&gt;')) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            el.innerHTML = doc.body.innerHTML;
        } else {
            if (el.children.length === 0) {
                el.textContent = text;
            } else {
                let textNode = Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE && n.nodeValue.trim().length > 0);
                if (textNode) {
                    textNode.nodeValue = ' ' + text.trim();
                } else {
                    el.textContent = text;
                }
            }
        }
    });
}

// RENDERERS
function renderHomepage() {
    // Show/hide admin-only dashboard section if user is admin
    const adminSec = document.getElementById('adminDashboardSection');
    if (adminSec) {
        if (appState.currentUser && appState.currentUser.role === 'admin') {
            adminSec.classList.remove('hidden');
        } else {
            adminSec.classList.add('hidden');
        }
    }

    // Render recent items on home wall
    const grid = document.getElementById('home-wall-recent-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    // Merge and sort latest requirements & offers
    const items = [
        ...appState.requirements.map(r => ({ ...r, type: 'procura' })),
        ...appState.offers.map(o => ({ ...o, type: 'oferta' }))
    ];
    
    // Sort by date desc, limit to 4
    items.sort((a, b) => new Date(b.date) - new Date(a.date));
    const recent = items.slice(0, 4);
    
    recent.forEach(item => {
        grid.appendChild(createOpportunityCard(item));
    });
    
    // Render B2B Directory explorer components
    renderMarketExplorer();
}

function renderMarketExplorer() {
    // 1. Render latest requirements
    const reqList = document.getElementById('home-latest-requirements-list');
    if (!reqList) return;
    reqList.innerHTML = '';
    
    const items = [
        ...appState.requirements.map(r => ({ ...r, type: 'procura' })),
        ...appState.offers.map(o => ({ ...o, type: 'oferta' }))
    ];
    
    // Sort by date desc
    items.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Display 6 latest requirements/offers in list
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const latestItems = items.slice(0, 6);
    latestItems.forEach(item => {
        const { code: catCode, label: catLabel, icon: catIcon } = getCategoryDetails(item.category);
        let flag = '🌎';
        const translatedCountry = getTranslatedField(item, 'country');
        const c = translatedCountry.toLowerCase();
        if (c.includes('moçambique') || c.includes('mozambique')) flag = '🇲🇿';
        else if (c.includes('brasil') || c.includes('brazil')) flag = '🇧🇷';
        else if (c.includes('portugal')) flag = '🇵🇹';
        else if (c.includes('china')) flag = '🇨🇳';
        else if (c.includes('emirados') || c.includes('árabes') || c.includes('united arab')) flag = '🇦🇪';
        
        const tr = document.createElement('tr');
        tr.className = `border-b border-slate-100 hover:bg-slate-50/80 transition cursor-pointer`;
        tr.onclick = () => {
            window.location.hash = `detail?id=${item.id}&type=${item.type}`;
        };
        
        const titleText = getTranslatedField(item, 'title');
        const qtyText = getTranslatedField(item, 'quantity');
        const btnText = lang === 'pt' ? 'Ver Detalhes' : 'View Details';
        
        tr.innerHTML = `
            <td class="py-4 px-6">
                <div class="flex items-center gap-3">
                    <span class="p-2 bg-slate-50 rounded-lg flex items-center justify-center text-slate-500 shrink-0">
                        <span class="material-symbols-outlined text-[18px]">${catIcon}</span>
                    </span>
                    <div class="min-w-0">
                        <span class="block truncate font-bold text-sm text-slate-800" title="${titleText}">${titleText}</span>
                        <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mt-0.5">${item.id}</span>
                    </div>
                </div>
            </td>
            <td class="py-4 px-6">
                <span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase border cat-badge cat-theme-${catCode}">${catLabel}</span>
            </td>
            <td class="py-4 px-6 text-slate-600 font-medium">
                <div class="flex items-center gap-1.5">
                    <span>${flag}</span>
                    <span>${translatedCountry}</span>
                </div>
            </td>
            <td class="py-4 px-6 text-slate-600 font-bold">
                ${qtyText}
            </td>
            <td class="py-4 px-6 text-center">
                <button class="btn btn-primary btn-sm" style="padding: 6px 12px; font-size: 11px; background-color: var(--primary); border: none; color: white; font-weight: bold; border-radius: var(--radius-md); cursor: pointer;">
                    ${btnText}
                </button>
            </td>
        `;
        reqList.appendChild(tr);
    });
    
    // 2. Render Countries Grid with counters
    const countriesGrid = document.getElementById('home-countries-grid');
    if (countriesGrid) {
        countriesGrid.innerHTML = '';
        const targetCountries = [
            { name: 'Moçambique', flag: '🇲🇿' },
            { name: 'Brasil', flag: '🇧🇷' },
            { name: 'Portugal', flag: '🇵🇹' },
            { name: 'China', flag: '🇨🇳' },
            { name: 'Emirados Árabes', flag: '🇦🇪' }
        ];
        
        targetCountries.forEach(tc => {
            const count = items.filter(i => i.country.toLowerCase().includes(tc.name.toLowerCase())).length;
            const btn = document.createElement('button');
            btn.className = `p-3 bg-white border border-slate-200/70 hover:border-gvTeal/30 hover:bg-gvTeal/5 rounded-xl shadow-sm transition duration-300 flex items-center justify-between text-left cursor-pointer border-none`;
            btn.onclick = () => {
                window.location.hash = `wall?country=${encodeURIComponent(tc.name)}`;
            };
            btn.innerHTML = `
                <div class="flex items-center gap-2 min-w-0">
                    <span class="text-lg">${tc.flag}</span>
                    <span class="font-bold text-slate-700 text-xs md:text-sm truncate">${tc.name}</span>
                </div>
                <span class="px-1.5 py-0.5 bg-slate-100 rounded text-[9px] font-bold text-slate-500">${count}</span>
            `;
            countriesGrid.appendChild(btn);
        });
    }
    
    // 3. Render Categories Grid with counters
    const categoriesGrid = document.getElementById('home-categories-grid');
    if (categoriesGrid) {
        categoriesGrid.innerHTML = '';
        
        const catMap = {
            'agro':       { label: 'Agro & Commodities',    search: 'agro' },
            'energy':     { label: 'Energia & Industria',   search: 'energy' },
            'tech':       { label: 'Tecnologia & Inovacao', search: 'tech' },
            'logistics':  { label: 'Logistica & Projetos',  search: 'logistics' },
            'consulting': { label: 'Consultoria & Servicos',search: 'consulting' }
        };
        
        // Compute count for each category
        const counts = { agro: 0, energy: 0, tech: 0, logistics: 0, consulting: 0 };
        items.forEach(i => {
            const details = getCategoryDetails(i.category);
            if (counts[details.code] !== undefined) {
                counts[details.code]++;
            }
        });
        
        Object.entries(catMap).forEach(([code, data]) => {
            const count = counts[code] || 0;
            const btn = document.createElement('button');
            btn.className = `w-full p-3 bg-white border border-slate-200/70 hover:border-gvTeal/30 hover:bg-gvTeal/5 rounded-xl shadow-sm transition duration-300 flex items-center justify-between text-left cursor-pointer border-none`;
            
            const catDetails = getCategoryDetails(data.label);
            btn.onclick = () => {
                window.location.hash = `wall?cat=${encodeURIComponent(data.search)}`;
            };
            
            btn.innerHTML = `
                <div class="flex items-center gap-2.5 min-w-0">
                    <span class="p-1.5 bg-slate-50 rounded-lg text-slate-500 flex items-center justify-center">
                        <span class="material-symbols-outlined text-[16px]">${catDetails.icon}</span>
                    </span>
                    <span class="font-bold text-slate-700 text-xs md:text-sm truncate">${data.label}</span>
                </div>
                <span class="px-1.5 py-0.5 bg-slate-100 rounded text-[9px] font-bold text-slate-500">${count}</span>
            `;
            categoriesGrid.appendChild(btn);
        });
    }
}

function renderOpportunityWall(params = {}) {
    const grid = document.getElementById('opportunities-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    let filterCat = params.cat || 'all';
    let filterCountry = params.country || 'all';
    const filterType = params.type || 'all'; // all, procura, oferta
    const sortBy = params.sort || 'latest';
    
    // Map verbose/old categories to the 5 canonical codes
    const lowerCat = filterCat.toLowerCase();
    if (lowerCat === 'agro' || lowerCat.includes('agro') || lowerCat.includes('commodities') || lowerCat.includes('trading')) {
        filterCat = 'agro';
    } else if (lowerCat === 'energy' || lowerCat.includes('energia') || lowerCat.includes('petróleo') || lowerCat.includes('gás') || lowerCat.includes('industry') || lowerCat.includes('indústria') || lowerCat.includes('solar')) {
        filterCat = 'energy';
    } else if (lowerCat === 'tech' || lowerCat.includes('tecnologia') || lowerCat.includes('tech') || lowerCat.includes('informática') || lowerCat.includes('inovação')) {
        filterCat = 'tech';
    } else if (lowerCat === 'logistics' || lowerCat.includes('logística') || lowerCat.includes('logistics') || lowerCat.includes('supply') || lowerCat.includes('projetos') || lowerCat.includes('avaliação')) {
        filterCat = 'logistics';
    } else if (lowerCat === 'consulting' || lowerCat.includes('consultoria') || lowerCat.includes('consulting') || lowerCat.includes('serviços') || lowerCat.includes('tradução') || lowerCat.includes('formação') || lowerCat.includes('jurídica')) {
        filterCat = 'consulting';
    }

    // Map verbose/old countries to shorthand ones
    const lowerCountry = filterCountry.toLowerCase();
    if (lowerCountry === 'moçambique' || lowerCountry === 'mozambique' || lowerCountry === 'mz') {
        filterCountry = 'mz';
    } else if (lowerCountry === 'portugal' || lowerCountry === 'pt') {
        filterCountry = 'pt';
    } else if (lowerCountry === 'brasil' || lowerCountry === 'brazil' || lowerCountry === 'br') {
        filterCountry = 'br';
    } else if (lowerCountry.includes('emirados') || lowerCountry.includes('árabes') || lowerCountry === 'ae') {
        filterCountry = 'ae';
    }
    
    // Set filter bar inputs values to match URL params if any (safely)
    const catInput = document.getElementById('filter-category');
    if (catInput) catInput.value = filterCat;
    
    const countryInput = document.getElementById('filter-country');
    if (countryInput) countryInput.value = filterCountry;
    
    const typeInput = document.getElementById('filter-type');
    if (typeInput) typeInput.value = filterType;
    
    const sortInput = document.getElementById('sort-by');
    if (sortInput) sortInput.value = sortBy;
    
    // Collect all opportunities
    let list = [];
    if (filterType === 'all' || filterType === 'procura') {
        list = list.concat(appState.requirements.map(r => ({ ...r, type: 'procura' })));
    }
    if (filterType === 'all' || filterType === 'oferta') {
        list = list.concat(appState.offers.map(o => ({ ...o, type: 'oferta' })));
    }
    
    // Apply filters
    if (filterCat !== 'all') {
        list = list.filter(item => {
            const cat = (item.category || '').toLowerCase();
            if (filterCat === 'agro') {
                return cat.includes('agro') || cat.includes('commodities') || cat.includes('açúcar') || cat.includes('caju') || cat.includes('soja') || cat.includes('minério') || cat.includes('trading') || cat.includes('agroneg');
            } else if (filterCat === 'energy') {
                return cat.includes('energia') || cat.includes('energy') || cat.includes('solar') || cat.includes('petróleo') || cat.includes('gás') || cat.includes('elétrica') || cat.includes('indústria') || cat.includes('industrial');
            } else if (filterCat === 'tech') {
                return cat.includes('tecnologia') || cat.includes('tech') || cat.includes('informática') || cat.includes('inovação') || cat.includes('data center') || cat.includes('redes') || cat.includes('desenvolvimento') || cat.includes('ti');
            } else if (filterCat === 'logistics') {
                return cat.includes('logística') || cat.includes('logistics') || cat.includes('supply') || cat.includes('frete') || cat.includes('projetos') || cat.includes('avaliação') || cat.includes('monitoria') || cat.includes('aduaneiro');
            } else if (filterCat === 'consulting') {
                return cat.includes('consultoria') || cat.includes('consulting') || cat.includes('tradução') || cat.includes('documentos') || cat.includes('jurídica') || cat.includes('formação') || cat.includes('serviços') || cat.includes('finanças') || cat.includes('pmes');
            }
            return cat.includes(filterCat.toLowerCase());
        });
    }
    if (filterCountry !== 'all') {
        list = list.filter(item => {
            const country = (item.country || '').toLowerCase();
            if (filterCountry === 'mz') return country.includes('moçambique');
            if (filterCountry === 'pt') return country.includes('portugal');
            if (filterCountry === 'br') return country.includes('brasil');
            if (filterCountry === 'ae') return country.includes('emirados') || country.includes('árabes');
            return country.includes(filterCountry.toLowerCase());
        });
    }
    
    // Apply sorting
    if (sortBy === 'latest') {
        list.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'scope' || sortBy === 'volume') {
        list.sort((a, b) => {
            const getNum = (q) => {
                const match = q.match(/[\d.,]+/);
                if (match) {
                    return parseFloat(match[0].replace(/,/g, ''));
                }
                return 0;
            };
            const numA = getNum(a.quantity || '');
            const numB = getNum(b.quantity || '');
            if (numA && numB) return numB - numA;
            return (b.quantity || '').length - (a.quantity || '').length;
        });
    }
    
    if (list.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12 text-on-surface-variant bg-surface-container-low rounded-2xl border border-outline-variant">
                <span class="material-symbols-outlined text-[48px] opacity-40 mb-4">search_off</span>
                <p class="body-lg font-body-lg">Nenhuma oportunidade encontrada com os filtros selecionados.</p>
            </div>
        `;
        return;
    }
    
    list.forEach(item => {
        grid.appendChild(createOpportunityCard(item));
    });
}

// Central category details — 5 canonical categories derived from GV-CPS green palette
function getCategoryDetails(category) {
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const cat = (category || '').toLowerCase();
    
    // Default: Consultoria & Servicos
    let code     = 'consulting';
    let label    = lang === 'en' ? 'Consulting & Services' : 'Consultoria & Serviços';
    let icon     = 'business_center';
    let sublabel = lang === 'en' ? 'PROFESSIONAL SERVICES' : 'SERVIÇOS PROFISSIONAIS';

    if (
        cat.includes('agro') || cat.includes('caju') || cat.includes('soja') ||
        cat.includes('açúcar') || cat.includes('minério') || cat.includes('commodities') ||
        cat.includes('trading') || cat.includes('agroneg') || cat.includes('sementes') ||
        cat.includes('fertiliz') || cat.includes('castanha') || cat.includes('mercado agr')
    ) {
        code     = 'agro';
        label    = lang === 'en' ? 'Agro & Commodities' : 'Agro & Commodities';
        icon     = 'agriculture';
        sublabel = lang === 'en' ? 'AGRICULTURAL MARKET' : 'MERCADO AGRÍCOLA';
    } else if (
        cat.includes('energia') || cat.includes('energy') || cat.includes('solar') ||
        cat.includes('petróleo') || cat.includes('gás') || cat.includes('elétrica') ||
        cat.includes('industrial') || cat.includes('indústria') || cat.includes('subestação') ||
        cat.includes('renovável') || cat.includes('fotovolt') || cat.includes('infraestrutura industrial')
    ) {
        code     = 'energy';
        label    = lang === 'en' ? 'Energy & Industry' : 'Energia & Indústria';
        icon     = 'bolt';
        sublabel = lang === 'en' ? 'INDUSTRIAL INFRASTRUCTURE' : 'INFRAESTRUTURA INDUSTRIAL';
    } else if (
        cat.includes('tecnologia') || cat.includes('tech') || cat.includes('informática') ||
        cat.includes('inovação') || cat.includes('data center') || cat.includes('redes') ||
        cat.includes('desenvolvimento') || cat.includes('software') || cat.includes('ti') ||
        cat.includes('iot') || cat.includes('conectividade') || cat.includes('servidores')
    ) {
        code     = 'tech';
        label    = lang === 'en' ? 'Technology & Innovation' : 'Tecnologia & Inovação';
        icon     = 'devices';
        sublabel = lang === 'en' ? 'ENTERPRISE SOFTWARE' : 'SOFTWARE CORPORATIVO';
    } else if (
        cat.includes('logística') || cat.includes('logistics') || cat.includes('supply') ||
        cat.includes('frete') || cat.includes('avaliação') || cat.includes('monitoria') ||
        cat.includes('projectos') || cat.includes('projetos') || cat.includes('aduaneiro') ||
        cat.includes('marítimo') || cat.includes('terrestre') || cat.includes('infraestrutura')
    ) {
        code     = 'logistics';
        label    = lang === 'en' ? 'Logistics & Projects' : 'Logística & Projetos';
        icon     = 'local_shipping';
        sublabel = lang === 'en' ? 'PROJECT MANAGEMENT' : 'GESTÃO DE PROJETOS';
    }

    return { code, label, icon, sublabel };
}

function createOpportunityCard(item) {
    const card = document.createElement('div');
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const { code: catCode, label: catLabel, icon: catIcon, sublabel: catSublabel } = getCategoryDetails(item.category);

    card.className = `opportunity-card cat-theme-${catCode} bg-white rounded-2xl overflow-hidden border border-slate-200 flex flex-col justify-between`;
    card.style.cssText = 'border-top: 4px solid var(--cat-color); box-shadow: 0 2px 8px rgba(0,0,0,0.06); transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s ease;';
    card.onmouseover = () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 16px 30px -6px rgba(2,56,64,0.12), 0 4px 12px -2px rgba(2,56,64,0.06)';
    };
    card.onmouseout = () => {
        card.style.transform = '';
        card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
    };

    const titleText  = getTranslatedField(item, 'title');
    const countryText = getTranslatedField(item, 'country');
    const qtyText    = getTranslatedField(item, 'quantity');

    // ---- Hero image per category — aligned with reference ----
    const imgMap = {
        agro: [
            'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&q=80'
        ],
        energy: [
            'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80'
        ],
        tech: [
            'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
        ],
        logistics: [
            'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1519003300449-424ad0405076?auto=format&fit=crop&w=800&q=80'
        ],
        consulting: [
            'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80'
        ]
    };
    const imgPool = imgMap[catCode] || imgMap.consulting;
    const imgUrl = imgPool[item.id.charCodeAt(item.id.length - 1) % imgPool.length];

    // ---- Country flag ----
    let flag = '';
    const c = countryText.toLowerCase();
    if (c.includes('moçambique') || c.includes('mozambique')) flag = '🇲🇿';
    else if (c.includes('brasil') || c.includes('brazil')) flag = '🇧🇷';
    else if (c.includes('portugal')) flag = '🇵🇹';
    else if (c.includes('china')) flag = '🇨🇳';
    else if (c.includes('emirados') || c.includes('árabes') || c.includes('dubai')) flag = '🇦🇪';
    else flag = '🌐';

    // ---- Type badge ----
    const typeRaw  = item.type || 'procura';
    const typePill = typeRaw === 'oferta' ? 'oferta' : (item.serviceType === 'servico' ? 'servico' : (item.serviceType === 'projeto' ? 'projeto' : 'demanda'));
    const typeLabels = {
        demanda: lang === 'pt' ? 'DEMANDA'  : 'DEMAND',
        oferta:  lang === 'pt' ? 'OFERTA'   : 'OFFER',
        servico: lang === 'pt' ? 'SERVICO'  : 'SERVICE',
        projeto: lang === 'pt' ? 'PROJETO'  : 'PROJECT'
    };
    const typeLabel = typeLabels[typePill] || 'DEMANDA';

    // ---- Logistics label ----
    const isLog = item.logistics === 'Sim';
    const logLabel = isLog
        ? (lang === 'pt' ? 'CIF Incluido' : 'CIF Included')
        : (lang === 'pt' ? 'Nao Incluida' : 'Not Included');

    // ---- Volume label (context-aware) ----
    const labelVol = (() => {
        if (catCode === 'logistics' || catCode === 'consulting') return lang === 'pt' ? 'Escopo' : 'Scope';
        return lang === 'pt' ? 'Volume' : 'Volume';
    })();
    const labelCountryKey = catCode === 'logistics' ? (lang === 'pt' ? 'Destino' : 'Destination') : (lang === 'pt' ? 'Pais Destino' : 'Country');
    const labelTerms = catCode === 'logistics' ? (lang === 'pt' ? 'Regime' : 'Regime') : (lang === 'pt' ? 'Logistica' : 'Logistics');
    const labelDate  = lang === 'pt' ? 'Data' : 'Date';
    const labelInterest = lang === 'pt' ? 'TENHO INTERESSE' : 'I AM INTERESTED';

    card.innerHTML = `
        <!-- Hero image -->
        <div class="relative overflow-hidden" style="height:180px;">
            <img
                src="${imgUrl}"
                alt="${titleText}"
                loading="lazy"
                style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;"
                onmouseover="this.style.transform='scale(1.05)'"
                onmouseout="this.style.transform='scale(1)'"
            >
            <!-- Dark gradient overlay -->
            <div style="position:absolute;inset:0;background:linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 60%, transparent 100%);"></div>

            <!-- Category badge (top left) -->
            <div style="position:absolute;top:12px;left:12px;">
                <span class="cat-badge" style="display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:999px;font-size:10px;font-weight:800;letter-spacing:0.06em;backdrop-filter:blur(6px);">
                    <span class="material-symbols-outlined" style="font-size:12px;">${catIcon}</span>
                    ${catLabel}
                </span>
            </div>

            <!-- Type badge (top right) -->
            <div style="position:absolute;top:12px;right:12px;">
                <span class="card-type-pill ${typePill}">${typeLabel}</span>
            </div>
        </div>

        <!-- Card body -->
        <div style="padding:18px 18px 20px;display:flex;flex-direction:column;flex:1;gap:10px;">

            <!-- Subcategory + Title -->
            <div>
                <span class="card-subcategory-label">${catSublabel}</span>
                <h3 style="margin:0;font-size:14px;font-weight:800;line-height:1.35;color:#0f172a;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;" title="${titleText}">${titleText}</h3>
            </div>

            <!-- Detail rows -->
            <div style="flex:1;margin-top:4px;">
                <div class="card-detail-row">
                    <span class="card-detail-label">
                        <span class="material-symbols-outlined">inventory_2</span>
                        ${labelVol}:
                    </span>
                    <span class="card-detail-value">${qtyText}</span>
                </div>
                <div class="card-detail-row">
                    <span class="card-detail-label">
                        <span class="material-symbols-outlined">public</span>
                        ${labelCountryKey}:
                    </span>
                    <span class="card-detail-value" style="display:flex;align-items:center;gap:4px;">
                        ${countryText} <span style="font-size:14px;line-height:1;">${flag}</span>
                    </span>
                </div>
                <div class="card-detail-row">
                    <span class="card-detail-label">
                        <span class="material-symbols-outlined">${isLog ? 'local_shipping' : 'remove_circle_outline'}</span>
                        ${labelTerms}:
                    </span>
                    <span class="card-detail-value tag">${isLog ? '&#10003; ' : ''}${logLabel}</span>
                </div>
                <div class="card-detail-row" style="border:none;padding-bottom:0;">
                    <span class="card-detail-label">
                        <span class="material-symbols-outlined">calendar_today</span>
                        ${labelDate}:
                    </span>
                    <span class="card-detail-value" style="color:#64748b;font-weight:500;">${formatDate(item.date)}</span>
                </div>
            </div>

            <!-- 2-Button Action Bar -->
            <div class="card-actions-grid" style="margin-top: 12px;">
                <button
                    onclick="event.stopPropagation(); openOpportunityDetailModal('${item.id}', '${item.type}')"
                    class="btn-card-details"
                >
                    <span class="material-symbols-outlined" style="font-size:14px;">info</span>
                    ${lang === 'pt' ? 'Detalhes' : 'Details'}
                </button>
                <button
                    onclick="event.stopPropagation(); startGuidedNegotiation('${item.id}', '${item.type}')"
                    class="btn-card-interest"
                >
                    <span class="material-symbols-outlined" style="font-size:14px;">handshake</span>
                    ${lang === 'pt' ? 'Interesse' : 'Interest'}
                </button>
            </div>
        </div>
    `;

    card.addEventListener('click', () => {
        openOpportunityDetailModal(item.id, item.type);
    });

    return card;
}


function renderDetailView(id, type) {
    const list = type === 'procura' ? appState.requirements : appState.offers;
    const item = list.find(x => x.id === id);
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    
    if (!item) {
        alert(lang === 'pt' ? 'Oportunidade não encontrada.' : 'Opportunity not found.');
        window.location.hash = 'wall';
        return;
    }
    
    const translatedTitle = getTranslatedField(item, 'title');
    const translatedDesc = getTranslatedField(item, 'description');
    const translatedCategory = getTranslatedField(item, 'category');
    const translatedQuantity = getTranslatedField(item, 'quantity');
    const translatedCountry = getTranslatedField(item, 'country');
    
    document.getElementById('detail-title').textContent = translatedTitle;
    document.getElementById('detail-type-badge').textContent = type === 'procura' 
        ? (lang === 'pt' ? 'PROCURA-SE / DEMANDA' : 'BUYING / DEMAND') 
        : (lang === 'pt' ? 'OFERTA / DISPONÍVEL' : 'SELLING / AVAILABLE');
    document.getElementById('detail-type-badge').className = `card-type-badge ${type === 'procura' ? 'procura' : 'oferta'}`;
    
    document.getElementById('detail-desc').textContent = translatedDesc;
    
    document.getElementById('detail-spec-category').textContent = translatedCategory;
    document.getElementById('detail-spec-quantity').textContent = translatedQuantity;
    document.getElementById('detail-spec-country').textContent = translatedCountry;
    document.getElementById('detail-spec-logistics').textContent = item.logistics === 'Sim' 
        ? (lang === 'pt' ? 'Sim (Incluída na facturação GV-CPS)' : 'Yes (Included in GV-CPS invoicing)') 
        : (lang === 'pt' ? 'Não (Por conta do cliente)' : 'No (Handled by the client)');
    document.getElementById('detail-spec-date').textContent = formatDate(item.date);
    
    // Render Admin-Only Contacts
    const adminContactsDiv = document.getElementById('detail-spec-admin-contacts');
    if (adminContactsDiv) {
        if (appState && appState.currentUser && appState.currentUser.role === 'admin') {
            adminContactsDiv.classList.remove('hidden');
            const whatsappVal = item.contactWhatsapp || '-';
            const emailVal = item.contactEmail || '-';
            document.getElementById('detail-spec-whatsapp').innerHTML = `WhatsApp: <strong>${whatsappVal}</strong>`;
            document.getElementById('detail-spec-email').innerHTML = `Email: <strong>${emailVal}</strong>`;
        } else {
            adminContactsDiv.classList.add('hidden');
        }
    }

    // Intermediary warning box logic
    const actionBtn = document.getElementById('detail-action-btn');
    
    // Custom button click behavior
    actionBtn.onclick = () => {
        // Open simulation form for showing interest
        if (lang === 'pt') {
            alert(`O seu interesse na proposta "${translatedTitle}" foi registado na plataforma GV-CPS.\n\nUm consultor especializado irá fazer a análise e entrará em contacto directo consigo via email para prosseguir com a intermediação.\n\n(Lembre-se: por regras de segurança, o contacto direto entre as contrapartes é proibido).`);
        } else {
            alert(`Your interest in the proposal "${translatedTitle}" has been registered on the GV-CPS platform.\n\nA specialized consultant will analyze it and contact you directly via email to proceed with the intermediation.\n\n(Remember: for security rules, direct contact between counterparties is prohibited).`);
        }
    };
    
    // Set dynamic detail image
    let imgPath = 'assets/images/cat_trading.png';
    if (item.category.includes('Agro')) imgPath = 'assets/images/cat_trading.png';
    else if (item.category.includes('Petróleo')) imgPath = 'assets/images/cat_oil_gas.png';
    else if (item.category.includes('Tecnologia')) imgPath = 'assets/images/cat_tech.png';
    else if (item.category.includes('Financeira') || item.category.includes('PMEs')) imgPath = 'assets/images/cat_finance.png';
    document.getElementById('detail-image').src = imgPath;
}

// BUYER PORTAL
function renderBuyerPortal(tab, activeId) {
    // Sidebar active item toggling
    document.querySelectorAll('#view-buyer-portal .portal-menu-item').forEach(a => {
        a.classList.remove('active');
        if (a.dataset.tab === tab) a.classList.add('active');
    });
    
    // View panels toggling
    document.getElementById('buyer-dashboard-tab').style.display = tab === 'dashboard' ? 'block' : 'none';
    document.getElementById('buyer-detail-tab').style.display = tab === 'detail' ? 'block' : 'none';
    document.getElementById('buyer-notifications-tab').style.display = tab === 'notifications' ? 'block' : 'none';
    document.getElementById('buyer-wall-tab').style.display = tab === 'wall' ? 'block' : 'none';
    
    const ownerId = appState.currentUser.id; // buyer_1
    const reqs = appState.requirements.filter(r => r.owner === ownerId);
    
    if (tab === 'dashboard') {
        // Update stats
        document.getElementById('buyer-stat-total').textContent = reqs.length;
        document.getElementById('buyer-stat-pending').textContent = reqs.filter(r => r.status === 'pendente').length;
        document.getElementById('buyer-stat-active').textContent = reqs.filter(r => r.status === 'atendimento' || r.status === 'analise').length;
        document.getElementById('buyer-stat-closed').textContent = reqs.filter(r => r.status === 'concluida').length;
        
        // Render requirements table
        const tbody = document.getElementById('buyer-requirements-table-body');
        tbody.innerHTML = '';
        
        if (reqs.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" class="text-center py-6 text-slate-400">Você ainda não publicou nenhuma necessidade.</td></tr>`;
            return;
        }
        
        reqs.forEach(r => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="py-4 px-6 font-bold text-slate-800">#${r.id.split('_')[1]}</td>
                <td class="py-4 px-6"><a href="#buyer-portal?tab=detail&id=${r.id}" class="text-gvTeal font-bold hover:underline">${r.title}</a></td>
                <td class="py-4 px-6"><span class="px-2 py-1 bg-slate-100 rounded text-[11px] font-medium text-slate-600">${r.quantity}</span></td>
                <td class="py-4 px-6"><span class="status-badge ${r.status}">${formatStatusPT(r.status)}</span></td>
                <td class="py-4 px-6 text-right">
                    <a href="#buyer-portal?tab=detail&id=${r.id}" class="inline-flex items-center gap-1 text-xs font-bold text-gvTeal hover:text-gvTeal-light hover:underline">
                        Gerenciar Negociação
                        <span class="material-symbols-outlined text-[14px]">chevron_right</span>
                    </a>
                </td>
            `;
            tbody.appendChild(tr);
        });
    } else if (tab === 'detail') {
        const targetReqId = activeId || (window.innerWidth >= 1024 ? (reqs[0] ? reqs[0].id : null) : null);
        
        // 1. Render Chat List in Left Column
        const listContainer = document.getElementById('buyer-chat-list-container');
        if (listContainer) {
            listContainer.innerHTML = '';
            if (reqs.length === 0) {
                listContainer.innerHTML = `<div class="text-center py-12 text-xs text-slate-400">Nenhuma requisição registada.</div>`;
            } else {
                reqs.forEach(r => {
                    const match = appState.matches.find(m => m.requirementId === r.id);
                    const isActive = r.id === targetReqId;
                    
                    const words = r.title.replace('Importação de ', '').replace('Aquisição de ', '').split(' ');
                    const initials = ((words[0] ? words[0][0] : '') + (words[1] ? words[1][0] : '')).toUpperCase() || 'RQ';
                    
                    const itemDiv = document.createElement('div');
                    itemDiv.className = `p-3 rounded-xl cursor-pointer transition flex gap-3 border ${
                        isActive 
                        ? 'bg-gvTeal/5 border-gvTeal/20 shadow-sm' 
                        : 'border-transparent hover:bg-slate-50'
                    }`;
                    itemDiv.onclick = () => {
                        window.location.hash = `#buyer-portal?tab=detail&id=${r.id}`;
                    };
                    
                    let subtitle = 'Aguardando consultor...';
                    let avatarBg = 'bg-slate-200 text-slate-600';
                    if (match) {
                        const consultant = appState.users[match.consultantId];
                        subtitle = `Consultor: ${consultant ? consultant.name : 'GV-CPS'}`;
                        avatarBg = r.status === 'atendimento' ? 'bg-gvTeal text-white' : 'bg-amber-500 text-white';
                    } else if (r.status === 'concluida') {
                        avatarBg = 'bg-emerald-500 text-white';
                        subtitle = 'Negócio Concluído';
                    }
                    
                    itemDiv.innerHTML = `
                        <div class="w-10 h-10 rounded-full ${avatarBg} flex items-center justify-center font-bold text-xs shrink-0">${initials}</div>
                        <div class="overflow-hidden w-full">
                            <div class="flex justify-between items-start">
                                <h4 class="font-bold text-xs text-slate-800 truncate">${r.title}</h4>
                                <span class="text-[9px] text-slate-400">${formatDate(r.date)}</span>
                            </div>
                            <p class="text-slate-500 text-[11px] truncate mt-0.5">${subtitle}</p>
                        </div>
                    `;
                    listContainer.appendChild(itemDiv);
                });
            }
        }
        
        // 2. Mobile Responsive Columns Toggle
        const listCol = document.getElementById('buyer-chat-list-column');
        const contentCol = document.getElementById('buyer-chat-content-column');
        
        if (listCol && contentCol) {
            if (targetReqId) {
                // Active chat selected: show content, hide list on mobile
                listCol.classList.add('hidden');
                listCol.classList.remove('block');
                contentCol.classList.add('flex');
                contentCol.classList.remove('hidden');
            } else {
                // No chat selected: show list, hide content on mobile
                listCol.classList.add('block');
                listCol.classList.remove('hidden');
                contentCol.classList.add('hidden');
                contentCol.classList.remove('flex');
            }
        }

        // 3. Show Placeholder or Render Details & Chat
        const placeholderEl = document.getElementById('buyer-chat-placeholder');
        const contentAreaEl = document.getElementById('buyer-active-chat-content');
        
        const req = appState.requirements.find(r => r.id === targetReqId);
        
        if (!req) {
            if (placeholderEl) {
                placeholderEl.classList.remove('hidden');
                placeholderEl.classList.add('flex');
            }
            if (contentAreaEl) {
                contentAreaEl.classList.add('hidden');
            }
            return;
        } else {
            if (placeholderEl) {
                placeholderEl.classList.add('hidden');
                placeholderEl.classList.remove('flex');
            }
            if (contentAreaEl) {
                contentAreaEl.classList.remove('hidden');
            }
        }
        
        // Render Detail Panel HTML
        document.getElementById('buyer-detail-title').textContent = req.title;
        document.getElementById('buyer-detail-status').className = `status-badge ${req.status}`;
        document.getElementById('buyer-detail-status').textContent = formatStatusPT(req.status);
        
        document.getElementById('buyer-detail-desc').textContent = req.description;
        document.getElementById('buyer-detail-category').textContent = req.category;
        document.getElementById('buyer-detail-quantity').textContent = req.quantity;
        document.getElementById('buyer-detail-country').textContent = req.country;
        document.getElementById('buyer-detail-logistics').textContent = req.logistics === 'Sim' ? 'Sim (Incluída na facturação)' : 'Não';
        document.getElementById('buyer-detail-date').textContent = formatDate(req.date);
        
        // Timeline Rendering
        renderTimeline('buyer-timeline', req);
        
        // Chat Mediated section
        const chatContainer = document.getElementById('buyer-chat-card-container');
        const match = appState.matches.find(m => m.requirementId === req.id);
        
        if (match) {
            chatContainer.style.display = 'block';
            renderPortalChat('buyer-chat-box', match.id, 'buyer');
        } else {
            chatContainer.style.display = 'block';
            chatContainer.innerHTML = `
                <div class="portal-chat-card">
                    <div class="portal-chat-header" style="padding: 16px 20px; border-bottom: 1px solid var(--outline-variant);">
                        <div class="portal-chat-title-info">
                            <span class="material-symbols-outlined" style="color: var(--primary);">corporate_fare</span>
                            <div>
                                <h4 class="font-bold" style="font-size: 14px; margin-bottom: 2px;">Intermediação GV-CPS</h4>
                                <p class="portal-chat-subtitle" style="font-size: 11px; color: var(--primary); font-weight: 600;">Suporte técnico dedicado</p>
                            </div>
                        </div>
                    </div>
                    <div class="portal-chat-messages" style="justify-content: center; align-items: center; text-align: center; padding: 32px 16px;">
                        <span class="material-symbols-outlined text-[48px] text-slate-300 mb-2">hourglass_empty</span>
                        <p class="body-md font-bold text-gvTeal">Aguardando Análise do Consultor</p>
                        <p class="text-xs text-slate-500 max-w-sm mx-auto mt-1 leading-relaxed">Esta proposta está sendo analisada pelos nossos consultores. Assim que identificarmos um fornecedor compatível, o canal de chat mediado será aberto aqui.</p>
                    </div>
                </div>
            `;
        }
    } else if (tab === 'notifications') {
        renderNotificationsList('buyer-notifications-list', 'buyer_1');
    } else if (tab === 'wall') {
        renderPortalWall('buyer');
    }
}

// SUPPLIER PORTAL
function renderSupplierPortal(tab, activeId) {
    document.querySelectorAll('#view-supplier-portal .portal-menu-item').forEach(a => {
        a.classList.remove('active');
        if (a.dataset.tab === tab) a.classList.add('active');
    });
    
    document.getElementById('supplier-dashboard-tab').style.display = tab === 'dashboard' ? 'block' : 'none';
    document.getElementById('supplier-detail-tab').style.display = tab === 'detail' ? 'block' : 'none';
    document.getElementById('supplier-notifications-tab').style.display = tab === 'notifications' ? 'block' : 'none';
    document.getElementById('supplier-wall-tab').style.display = tab === 'wall' ? 'block' : 'none';
    
    const ownerId = appState.currentUser.id; // supplier_1
    const offers = appState.offers.filter(o => o.owner === ownerId);
    
    if (tab === 'dashboard') {
        document.getElementById('supplier-stat-total').textContent = offers.length;
        document.getElementById('supplier-stat-pending').textContent = offers.filter(o => o.status === 'pendente').length;
        document.getElementById('supplier-stat-active').textContent = offers.filter(o => o.status === 'atendimento' || o.status === 'analise').length;
        document.getElementById('supplier-stat-closed').textContent = offers.filter(o => o.status === 'concluida').length;
        
        const tbody = document.getElementById('supplier-offers-table-body');
        tbody.innerHTML = '';
        
        if (offers.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" class="text-center py-6 text-on-surface-variant">Você ainda não publicou nenhuma oferta.</td></tr>`;
            return;
        }
        
        offers.forEach(o => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>#${o.id.split('_')[1]}</strong></td>
                <td><a href="#supplier-portal?tab=detail&id=${o.id}" class="text-primary font-bold hover:underline">${o.title}</a></td>
                <td><span class="label-sm">${o.quantity}</span></td>
                <td><span class="status-badge ${o.status}">${formatStatusPT(o.status)}</span></td>
                <td>
                    <a href="#supplier-portal?tab=detail&id=${o.id}" class="btn btn-ghost" style="padding: 4px 8px; font-size: 11px; text-transform: none;">
                        Gerenciar Proposta
                    </a>
                </td>
            `;
            tbody.appendChild(tr);
        });
    } else if (tab === 'detail') {
        const targetOffId = activeId || (offers[0] ? offers[0].id : null);
        const offer = appState.offers.find(o => o.id === targetOffId);
        
        if (!offer) {
            document.getElementById('supplier-detail-container').innerHTML = `
                <div class="text-center py-12 text-on-surface-variant">
                    <p class="body-lg">Nenhuma oferta selecionada ou cadastrada.</p>
                    <a href="#publish-offer" class="btn btn-primary mt-4">Publicar Oferta</a>
                </div>
            `;
            return;
        }
        
        document.getElementById('supplier-detail-title').textContent = offer.title;
        document.getElementById('supplier-detail-status').className = `status-badge ${offer.status}`;
        document.getElementById('supplier-detail-status').textContent = formatStatusPT(offer.status);
        
        document.getElementById('supplier-detail-desc').textContent = offer.description;
        document.getElementById('supplier-detail-category').textContent = offer.category;
        document.getElementById('supplier-detail-quantity').textContent = offer.quantity;
        document.getElementById('supplier-detail-country').textContent = offer.country;
        document.getElementById('supplier-detail-logistics').textContent = offer.logistics === 'Sim' ? 'Sim (Incluída na facturação)' : 'Não';
        document.getElementById('supplier-detail-date').textContent = formatDate(offer.date);
        
        renderTimeline('supplier-timeline', offer);
        
        // Chat Mediated section
        const chatContainer = document.getElementById('supplier-chat-card-container');
        const match = appState.matches.find(m => m.offerId === offer.id);
        
        if (match) {
            chatContainer.style.display = 'block';
            renderPortalChat('supplier-chat-box', match.id, 'supplier');
        } else {
            chatContainer.style.display = 'block';
            chatContainer.innerHTML = `
                <div class="portal-chat-card">
                    <div class="portal-chat-header">
                        <div class="portal-chat-title-info">
                            <span class="material-symbols-outlined">corporate_fare</span>
                            <div>
                                <h4 class="font-bold">Intermediação GV-CPS</h4>
                                <p class="portal-chat-subtitle">Suporte técnico dedicado</p>
                            </div>
                        </div>
                    </div>
                    <div class="portal-chat-messages" style="justify-content: center; align-items: center; text-align: center;">
                        <span class="material-symbols-outlined text-[48px] text-outline mb-2">hourglass_empty</span>
                        <p class="body-md font-bold text-primary">Aguardando Análise do Consultor</p>
                        <p class="body-sm text-on-surface-variant px-6">Nossos consultores estão analisando a sua oferta para correspondência. Assim que iniciarmos a negociação mediada, o chat aparecerá aqui.</p>
                    </div>
                </div>
            `;
        }
    } else if (tab === 'notifications') {
        renderNotificationsList('supplier-notifications-list', 'supplier_1');
    } else if (tab === 'wall') {
        renderPortalWall('supplier');
    }
}

// PRIVATE B2B OPPORTUNITY WALL RENDERER
function renderPortalWall(role) {
    const gridId = `${role}-portal-wall-grid`;
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = '';

    const cat = document.getElementById(`${role}-portal-filter-category`).value;
    const country = document.getElementById(`${role}-portal-filter-country`).value;

    let list = [
        ...appState.requirements.map(r => ({ ...r, type: 'procura' })),
        ...appState.offers.map(o => ({ ...o, type: 'oferta' }))
    ];

    if (cat !== 'all') {
        list = list.filter(item => item.category === cat);
    }
    if (country !== 'all') {
        list = list.filter(item => item.country === country);
    }

    if (list.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12 text-on-surface-variant bg-surface-container-low rounded-2xl border border-outline-variant" style="grid-column: 1 / -1; padding: 48px;">
                <span class="material-symbols-outlined text-[48px] opacity-40 mb-4">search_off</span>
                <p class="body-lg">Nenhuma proposta encontrada com os filtros selecionados.</p>
            </div>
        `;
        return;
    }

    list.forEach(item => {
        const card = createOpportunityCard(item);
        
        // Override button and click behaviors
        const btn = card.querySelector('button');
        if (btn) {
            btn.textContent = 'Solicitar Intermediação';
            btn.onclick = (e) => {
                e.stopPropagation();
                alert(`Intermediação Solicitada!\n\nA Global View (GV-CPS) registou o seu interesse na proposta "${item.title}".\nO nosso consultor técnico iniciará a validação do match nas próximas horas e contactará via Chat ou WhatsApp.`);
                
                // Add simulated notification
                const newId = `not_${appState.notifications.length + 1}`;
                appState.notifications.push({
                    id: newId,
                    userId: appState.currentUser.id,
                    text: `Você solicitou intermediação para a proposta: ${item.title}`,
                    date: new Date().toISOString().split('T')[0],
                    read: false
                });
                saveState();
                
                simulateWhatsAppNotification(appState.currentUser.id, `Recebemos o seu interesse em "${item.title}". O consultor Carlos já foi notificado.`);
            };
        }
        
        card.onclick = () => {
            alert(`Detalhes Confidenciais da Proposta:\n\nTítulo: ${item.title}\nCategoria: ${item.category}\nQuantidade: ${item.quantity}\nOrigem/Destino: ${item.country}\nLogística: ${item.logistics === 'Sim' ? 'Sim (Incluída na facturação)' : 'Não'}\n\nDescrição do Lote:\n${item.description}\n\n(Lembre-se: Para segurança jurídica das contrapartes, toda a negociação é mediada e fiscalizada pela GV-CPS)`);
        };

        grid.appendChild(card);
    });
}

function applyBuyerPortalFilters() {
    renderPortalWall('buyer');
}

function applySupplierPortalFilters() {
    renderPortalWall('supplier');
}

// CONSULTOR PORTAL (INTERNAL STAFF)
function renderConsultantPortal(tab, activeId) {
    document.querySelectorAll('#view-consultant-portal .portal-menu-item').forEach(a => {
        a.classList.remove('active');
        if (a.dataset.tab === tab) a.classList.add('active');
    });
    
    document.getElementById('consultant-dashboard-tab').style.display = tab === 'dashboard' ? 'block' : 'none';
    document.getElementById('consultant-matching-tab').style.display = tab === 'matching' ? 'block' : 'none';
    document.getElementById('consultant-negotiation-tab').style.display = tab === 'negotiation' ? 'block' : 'none';
    
    const consultantId = appState.currentUser.id; // consultant_1
    const myReqs = appState.requirements.filter(r => r.assignedConsultant === consultantId);
    const myOffers = appState.offers.filter(o => o.assignedConsultant === consultantId);
    const myMatches = appState.matches.filter(m => m.consultantId === consultantId);
    
    if (tab === 'dashboard') {
        document.getElementById('consultant-stat-reqs').textContent = myReqs.length;
        document.getElementById('consultant-stat-offers').textContent = myOffers.length;
        document.getElementById('consultant-stat-active').textContent = myMatches.filter(m => m.status === 'negociacao').length;
        document.getElementById('consultant-stat-closed').textContent = myMatches.filter(m => m.status === 'fechado').length;
        
        // Render Assigned Requirements Table
        const reqTbody = document.getElementById('consultant-reqs-table-body');
        reqTbody.innerHTML = '';
        if (myReqs.length === 0) {
            reqTbody.innerHTML = `<tr><td colspan="5" class="text-center py-4 text-on-surface-variant">Nenhuma requisição sob sua gerência.</td></tr>`;
        } else {
            myReqs.forEach(r => {
                const buyerObj = appState.users[r.owner] || { name: 'Desconhecido' };
                reqTbody.innerHTML += `
                    <tr>
                        <td><strong>#${r.id.split('_')[1]}</strong></td>
                        <td>${r.title}</td>
                        <td>${buyerObj.name}</td>
                        <td><span class="status-badge ${r.status}">${formatStatusPT(r.status)}</span></td>
                        <td>
                            <button class="btn btn-ghost btn-sm" onclick="window.location.hash='consultant-portal?tab=matching&id=${r.id}'" style="padding: 4px 8px; font-size: 11px;">
                                Ligar a Oferta
                            </button>
                        </td>
                    </tr>
                `;
            });
        }
        
        // Render Active Matches/Negotiations Table
        const matchTbody = document.getElementById('consultant-matches-table-body');
        matchTbody.innerHTML = '';
        if (myMatches.length === 0) {
            matchTbody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-on-surface-variant">Nenhuma negociação ativa.</td></tr>`;
        } else {
            myMatches.forEach(m => {
                const req = appState.requirements.find(r => r.id === m.requirementId) || { title: '?' };
                const off = appState.offers.find(o => o.id === m.offerId) || { title: '?' };
                const buyerObj = appState.users[req.owner] || { name: '?' };
                const suppObj = appState.users[off.owner] || { name: '?' };
                
                matchTbody.innerHTML += `
                    <tr>
                        <td><strong>#${m.id.split('_')[1]}</strong></td>
                        <td><span class="body-sm font-bold">${req.title}</span> <br><span class="label-sm opacity-50">vs ${off.title}</span></td>
                        <td>${buyerObj.name}</td>
                        <td>${suppObj.name}</td>
                        <td><span class="status-badge active">${m.status.toUpperCase()}</span></td>
                        <td>
                            <a href="#consultant-portal?tab=negotiation&id=${m.id}" class="btn btn-primary" style="padding: 4px 8px; font-size: 11px; text-transform: none;">
                                Abrir Painel de Conversas
                            </a>
                        </td>
                    </tr>
                `;
            });
        }
    } else if (tab === 'matching') {
        // Setup matching panel state
        const targetReqId = activeId || (myReqs[0] ? myReqs[0].id : null);
        const req = appState.requirements.find(r => r.id === targetReqId);
        
        const selectedReqContainer = document.getElementById('match-selected-req-container');
        if (!req) {
            selectedReqContainer.innerHTML = `<p class="body-lg text-on-surface-variant">Escolha uma necessidade no painel para realizar a correspondência.</p>`;
            document.getElementById('match-candidates-list').innerHTML = '';
            document.getElementById('match-action-panel-box').style.display = 'none';
            return;
        }
        
        // Render selected requirement card details
        selectedReqContainer.innerHTML = `
            <div class="glass-card" style="border-left: 4px solid var(--primary-light);">
                <div class="flex justify-between items-center mb-2">
                    <span class="status-badge ${req.status}">${formatStatusPT(req.status)}</span>
                    <span class="label-sm">${req.id.toUpperCase()}</span>
                </div>
                <h3 class="headline-sm text-primary mb-2">${req.title}</h3>
                <p class="body-sm text-on-surface-variant mb-4">${req.description}</p>
                <div class="grid grid-cols-2 gap-2 text-xs">
                    <div>Volume: <strong>${req.quantity}</strong></div>
                    <div>País: <strong>${req.country}</strong></div>
                    <div>Logística: <strong>${req.logistics === 'Sim' ? 'GV Intermedia' : 'Parceira'}</strong></div>
                    <div>Cliente: <strong>${appState.users[req.owner].name}</strong></div>
                </div>
            </div>
        `;
        
        // Render potential supplier offers as candidate cards
        const candidatesContainer = document.getElementById('match-candidates-list');
        candidatesContainer.innerHTML = '';
        
        // Find offers in similar categories or overall active offers
        const candidates = appState.offers.filter(o => o.status !== 'concluida');
        
        if (candidates.length === 0) {
            candidatesContainer.innerHTML = `<p class="body-sm text-on-surface-variant">Nenhuma oferta de fornecedor disponível.</p>`;
            document.getElementById('match-action-panel-box').style.display = 'none';
            return;
        }
        
        candidates.forEach(o => {
            const isSelected = document.getElementById('matching-selected-offer-id')?.value === o.id;
            const card = document.createElement('div');
            card.className = `match-select-card ${isSelected ? 'selected' : ''}`;
            card.innerHTML = `
                <div class="match-select-card-header">
                    <span class="match-select-card-title">${o.title}</span>
                    <span class="status-badge ${o.status}" style="font-size: 9px; padding: 2px 6px;">${formatStatusPT(o.status)}</span>
                </div>
                <p class="body-sm text-on-surface-variant line-clamp-2 mb-2" style="font-size: 12px;">${o.description}</p>
                <div class="match-select-card-meta">
                    <span>Vol: <strong>${o.quantity}</strong></span>
                    <span>País: <strong>${o.country}</strong></span>
                    <span>Fornecedor: <strong>${appState.users[o.owner].name}</strong></span>
                </div>
            `;
            
            card.addEventListener('click', () => {
                document.querySelectorAll('.match-select-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                
                // Show matching button block
                document.getElementById('matching-selected-offer-id').value = o.id;
                document.getElementById('match-action-panel-box').style.display = 'flex';
                document.getElementById('match-summary-text').innerHTML = `
                    Deseja iniciar negociação mediada ligando a necessidade <strong>#${req.id.split('_')[1]}</strong> (${req.title}) 
                    à oferta do fornecedor <strong>#${o.id.split('_')[1]}</strong> (${o.title})?
                `;
            });
            
            candidatesContainer.appendChild(card);
        });
        
        // Bind match action button
        const confirmBtn = document.getElementById('btn-confirm-match');
        confirmBtn.onclick = () => {
            const offId = document.getElementById('matching-selected-offer-id').value;
            if (!offId) return;
            
            // Create Match
            const newMatchId = `match_${appState.matches.length + 1}`;
            appState.matches.push({
                id: newMatchId,
                requirementId: req.id,
                offerId: offId,
                date: new Date().toISOString().split('T')[0],
                status: 'negociacao',
                consultantId: consultantId,
                internalNotes: 'Nova intermediação iniciada pelo consultor.'
            });
            
            // Update statuses to "atendimento"
            req.status = 'atendimento';
            req.assignedConsultant = consultantId;
            const off = appState.offers.find(o => o.id === offId);
            if (off) {
                off.status = 'atendimento';
                off.assignedConsultant = consultantId;
            }
            
            // Create initial messages
            appState.messages.push({
                id: `msg_${appState.messages.length + 1}`,
                matchId: newMatchId,
                senderId: consultantId,
                senderRole: 'consultant',
                text: `Olá ${appState.users[req.owner].name}. Identificamos uma oferta de fornecedor compatível para a sua necessidade "${req.title}". Sou o seu consultor dedicado para esta intermediação comercial.`,
                timestamp: new Date().toISOString(),
                channel: 'buyer'
            });
            
            appState.messages.push({
                id: `msg_${appState.messages.length + 1}`,
                matchId: newMatchId,
                senderId: consultantId,
                senderRole: 'consultant',
                text: `Olá ${appState.users[off.owner].name}. Identificamos uma demanda de comprador ativa na nossa plataforma correspondente à sua oferta "${off.title}". Vou guiar a intermediação dos termos comerciais e de logística.`,
                timestamp: new Date().toISOString(),
                channel: 'supplier'
            });
            
            saveState();
            alert('Correspondência realizada com sucesso! As abas de chat mediado foram criadas.');
            window.location.hash = `consultant-portal?tab=negotiation&id=${newMatchId}`;
        };
    } else if (tab === 'negotiation') {
        const targetMatchId = activeId || (myMatches[0] ? myMatches[0].id : null);
        const match = appState.matches.find(m => m.id === targetMatchId);
        
        if (!match) {
            document.getElementById('consultant-negotiation-container').innerHTML = `
                <div class="text-center py-12 text-on-surface-variant">
                    <p class="body-lg">Nenhuma negociação em andamento selecionada.</p>
                    <a href="#consultant-portal?tab=dashboard" class="btn btn-primary mt-4">Ver Painel</a>
                </div>
            `;
            return;
        }
        
        const req = appState.requirements.find(r => r.id === match.requirementId) || { title: '?' };
        const off = appState.offers.find(o => o.id === match.offerId) || { title: '?' };
        
        document.getElementById('consultant-negotiation-deal-title').innerHTML = `
            Negociação #${match.id.split('_')[1]}: <span style="color: var(--primary-light);">${req.title}</span> 
            <span style="font-weight: normal; color: var(--on-surface-variant); font-size: 16px;">vs</span> 
            <span style="color: var(--secondary);">${off.title}</span>
        `;
        
        // Render the double chats side-by-side
        renderPortalChat('consultant-buyer-chat-box', match.id, 'buyer');
        renderPortalChat('consultant-supplier-chat-box', match.id, 'supplier');
        
        // Internal Notes section
        const notesInput = document.getElementById('consultant-internal-notes');
        notesInput.value = match.internalNotes || '';
        
        const saveNotesBtn = document.getElementById('btn-save-internal-notes');
        saveNotesBtn.onclick = () => {
            match.internalNotes = notesInput.value;
            saveState();
            alert('Notas internas atualizadas com sucesso.');
        };
        
        // Finalize Deal button (Locked with Admin reviews & Proposal approval states)
        const finalizeBtn = document.getElementById('btn-finalize-deal');
        if (finalizeBtn) {
            finalizeBtn.removeAttribute('disabled');
            finalizeBtn.style.opacity = '1';
            finalizeBtn.style.cursor = 'pointer';
            
            if (match.status === 'fechado') {
                finalizeBtn.textContent = 'Negócio Concluído';
                finalizeBtn.setAttribute('disabled', 'true');
                finalizeBtn.style.opacity = '0.6';
                finalizeBtn.style.cursor = 'not-allowed';
            } else if (match.status === 'revisao') {
                finalizeBtn.textContent = 'Aguardando Aprovação do Admin';
                finalizeBtn.setAttribute('disabled', 'true');
                finalizeBtn.style.opacity = '0.6';
                finalizeBtn.style.cursor = 'not-allowed';
            } else if (match.proposalApprovedByClient) {
                finalizeBtn.textContent = 'Solicitar Aprovação do Admin';
                finalizeBtn.style.backgroundColor = 'var(--electric-amber)';
                finalizeBtn.onclick = () => {
                    if (confirm('Deseja enviar esta negociação para revisão e aprovação financeira/pagamento do Administrador?')) {
                        match.status = 'revisao';
                        
                        // Add notification to admin
                        appState.notifications.push({
                            id: `not_${appState.notifications.length + 1}`,
                            userId: 'admin_1',
                            text: `A negociação #${match.id.split('_')[1]} requer revisão de faturamento e aprovação de pagamento.`,
                            date: new Date().toISOString().split('T')[0],
                            read: false
                        });
                        
                        saveState();
                        alert('Solicitação enviada. A negociação está agora na fila de revisão do Administrador.');
                        renderConsultantPortal('dashboard');
                    }
                };
            } else {
                finalizeBtn.textContent = 'Fechar Negócio (Pendente Proposta)';
                finalizeBtn.style.backgroundColor = 'var(--outline)';
                finalizeBtn.onclick = () => {
                    alert('Não é possível fechar o negócio sem antes formular a proposta e obter a aceitação dos termos pelo cliente.');
                };
            }
        }
    }
}

// ADMIN PORTAL
function renderAdminPortal(tab) {
    document.querySelectorAll('#view-admin-portal .portal-menu-item').forEach(a => {
        a.classList.remove('active');
        if (a.dataset.tab === tab) a.classList.add('active');
    });
    
    document.getElementById('admin-dashboard-tab').style.display = tab === 'dashboard' ? 'block' : 'none';
    document.getElementById('admin-users-tab').style.display = tab === 'users' ? 'block' : 'none';
    document.getElementById('admin-categories-tab').style.display = tab === 'categories' ? 'block' : 'none';
    document.getElementById('admin-matches-tab').style.display = tab === 'matches' ? 'block' : 'none';
    document.getElementById('admin-approvals-tab').style.display = tab === 'approvals' ? 'block' : 'none';
    
    if (tab === 'dashboard') {
        // Stats
        document.getElementById('admin-stat-reqs').textContent = appState.requirements.length;
        document.getElementById('admin-stat-offers').textContent = appState.offers.length;
        document.getElementById('admin-stat-matches').textContent = appState.matches.length;
        
        // Calculate success rate
        const closedCount = appState.matches.filter(m => m.status === 'fechado').length;
        const totalMatches = appState.matches.length;
        const successRate = totalMatches > 0 ? Math.round((closedCount / totalMatches) * 100) : 0;
        document.getElementById('admin-stat-success').textContent = `${successRate}%`;
        
        // Render assignment queue (items without consultant)
        const unassignedReqs = appState.requirements.filter(r => !r.assignedConsultant);
        const queueContainer = document.getElementById('admin-unassigned-queue');
        queueContainer.innerHTML = '';
        
        if (unassignedReqs.length === 0) {
            queueContainer.innerHTML = `<div class="text-center py-6 text-on-surface-variant">Fila limpa. Todas as requisições estão sob responsabilidade de consultores.</div>`;
        } else {
            unassignedReqs.forEach(r => {
                const card = document.createElement('div');
                card.className = 'glass-card mb-4';
                card.style.padding = '16px';
                card.innerHTML = `
                    <div class="flex justify-between items-center mb-2">
                        <span class="status-badge pendente">Pendente</span>
                        <span class="label-sm">${r.date}</span>
                    </div>
                    <h4 class="font-bold text-primary mb-1">${r.title}</h4>
                    <p class="body-sm text-on-surface-variant mb-4" style="font-size: 12.5px;">${r.description.substring(0, 100)}...</p>
                    
                    <div class="flex gap-2 items-center">
                        <select class="form-select" id="assign-select-${r.id}" style="padding: 6px 12px; font-size: 12.5px; width: auto; flex-grow: 1;">
                            <option value="consultant_1">Carlos Mendes (Consultor)</option>
                        </select>
                        <button class="btn btn-primary btn-sm" onclick="assignRequirement('${r.id}')" style="padding: 8px 12px; font-size: 12px;">
                            Atribuir
                        </button>
                    </div>
                `;
                queueContainer.appendChild(card);
            });
        }
    } else if (tab === 'users') {
        // Clear search text and filters to display initial list
        document.getElementById('admin-users-search').value = '';
        document.getElementById('admin-users-filter-role').value = 'all';
        document.getElementById('admin-users-filter-status').value = 'all';
        applyAdminUserFilters();
    } else if (tab === 'matches') {
        const tbody = document.getElementById('admin-matches-table-body');
        if (tbody) {
            tbody.innerHTML = '';
            
            if (appState.matches.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="5" class="py-6 px-6 text-center text-slate-450 italic">
                            Nenhuma intermediação ativa de negociação no sistema.
                        </td>
                    </tr>
                `;
            } else {
                appState.matches.forEach(m => {
                    const req = appState.requirements.find(r => r.id === m.requirementId) || { title: '?' };
                    const off = appState.offers.find(o => o.id === m.offerId) || { title: '?' };
                    const consultantObj = appState.users[m.consultantId] || { name: 'Geral' };
                    
                    const statusBadge = m.status === 'fechado'
                        ? '<span class="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold text-[10px] uppercase">Concluído</span>'
                        : (m.status === 'revisao'
                            ? '<span class="px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 font-semibold text-[10px] uppercase animate-pulse">Revisão</span>'
                            : '<span class="px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold text-[10px] uppercase">Em Negociação</span>');
                    
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td class="py-4 px-6 font-bold text-slate-800">#${m.id.split('_')[1]}</td>
                        <td class="py-4 px-6">
                            <div class="font-bold text-slate-900">${req.title}</div>
                            <div class="text-[10px] text-slate-450 mt-0.5">vs ${off.title}</div>
                        </td>
                        <td class="py-4 px-6 font-semibold text-slate-700">${consultantObj.name}</td>
                        <td class="py-4 px-6">${statusBadge}</td>
                        <td class="py-4 px-6 text-right">
                            <div class="flex gap-2 justify-end">
                                <button onclick="openAdminInspectChatModal('${m.id}')" class="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg text-[11px] font-bold text-slate-600 flex items-center gap-1 transition cursor-pointer" title="Inspecionar Negociação">
                                    <span class="material-symbols-outlined text-[14px]">visibility</span>
                                    Espreitar Chat
                                </button>
                                <button onclick="adminTakeOverMatch('${m.id}')" class="px-2.5 py-1.5 bg-gvTeal/10 hover:bg-gvTeal/20 border border-gvTeal/20 rounded-lg text-[11px] font-bold text-gvTeal flex items-center gap-1 transition cursor-pointer" ${m.consultantId === 'admin_1' ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
                                    Assumir
                                </button>
                            </div>
                        </td>
                    `;
                    tbody.appendChild(tr);
                });
            }
        }
    } else if (tab === 'approvals') {
        const tbody = document.getElementById('admin-approvals-table-body');
        if (tbody) {
            tbody.innerHTML = '';
            const revisaoMatches = appState.matches.filter(m => m.status === 'revisao');
            
            if (revisaoMatches.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="5" class="py-6 px-6 text-center text-slate-450 italic">
                            Nenhum negócio aguardando aprovação de pagamento no momento.
                        </td>
                    </tr>
                `;
            } else {
                revisaoMatches.forEach(m => {
                    const req = appState.requirements.find(r => r.id === m.requirementId) || { title: '?' };
                    const off = appState.offers.find(o => o.id === m.offerId) || { title: '?' };
                    
                    const price = m.proposalPrice || 'A Definir';
                    const logistics = m.proposalLogistics || 'Não Especificado';
                    
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td class="py-4 px-6 font-bold text-slate-800">#${m.id.split('_')[1]}</td>
                        <td class="py-4 px-6">
                            <div class="font-bold text-slate-900">${req.title}</div>
                            <div class="text-[10px] text-slate-450 mt-0.5">Comprador: #${req.owner} | Fornecedor: #${off.owner}</div>
                        </td>
                        <td class="py-4 px-6 font-bold text-gvTeal">${price}</td>
                        <td class="py-4 px-6 font-semibold text-slate-650 text-xs">${logistics}</td>
                        <td class="py-4 px-6 text-right">
                            <div class="flex gap-2 justify-end">
                                <button onclick="openAdminInspectChatModal('${m.id}')" class="p-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg text-slate-650 transition cursor-pointer" title="Inspecionar Chat">
                                    <span class="material-symbols-outlined text-[16px] block">visibility</span>
                                </button>
                                <button onclick="adminApproveMatchPayment('${m.id}')" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg flex items-center gap-1 border-none shadow-sm transition cursor-pointer">
                                    <span class="material-symbols-outlined text-[14px]">done_all</span>
                                    Libertar Pagamento
                                </button>
                            </div>
                        </td>
                    `;
                    tbody.appendChild(tr);
                });
            }
        }
    } else if (tab === 'categories') {
        const listContainer = document.getElementById('admin-categories-list');
        listContainer.innerHTML = '';
        
        appState.categories.forEach((cat, index) => {
            const div = document.createElement('div');
            div.style.display = 'flex';
            div.style.justifyContent = 'space-between';
            div.style.alignItems = 'center';
            div.style.padding = '12px 16px';
            div.style.borderBottom = '1px solid var(--surface-container)';
            div.innerHTML = `
                <span class="body-sm font-bold">${cat}</span>
                <button class="btn-icon" onclick="deleteCategory(${index})" style="padding: 4px; color: var(--error);">
                    <span class="material-symbols-outlined" style="font-size: 18px;">delete</span>
                </button>
            `;
            listContainer.appendChild(div);
        });
        
        // Add Category form handler
        const addBtn = document.getElementById('btn-add-category');
        addBtn.onclick = () => {
            const input = document.getElementById('new-category-input');
            const val = input.value.trim();
            if (val) {
                appState.categories.push(val);
                input.value = '';
                saveState();
                renderAdminPortal('categories');
            }
        };
    }
}

window.assignRequirement = function(reqId) {
    const select = document.getElementById(`assign-select-${reqId}`);
    const consId = select.value;
    
    const req = appState.requirements.find(r => r.id === reqId);
    if (req) {
        req.assignedConsultant = consId;
        req.status = 'analise'; // Upgrade from pending to under review
        
        // Add notification
        appState.notifications.push({
            id: `not_${appState.notifications.length + 1}`,
            userId: req.owner,
            text: `Sua requisição "${req.title}" foi atribuída a um consultor e está em análise.`,
            date: new Date().toISOString().split('T')[0],
            read: false
        });
        
        saveState();
        alert('Consultor atribuído com sucesso.');
        renderAdminPortal('dashboard');
    }
};

window.deleteCategory = function(index) {
    if (confirm('Tem certeza de que deseja remover esta categoria de serviço?')) {
        appState.categories.splice(index, 1);
        saveState();
        renderAdminPortal('categories');
    }
};

// TIMELINE & CHATS
function renderTimeline(elementId, item) {
    const el = document.getElementById(elementId);
    if (!el) return;
    
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const statusOrder = ['pendente', 'analise', 'atendimento', 'concluida'];
    const currentIndex = statusOrder.indexOf(item.status);
    
    const t = lang === 'en' ? {
        s1Title: 'Registered Publication',
        s1Desc: 'The proposal was successfully submitted to the GV-CPS platform and is awaiting review.',
        s2Title: 'Technical & Compliance Review',
        s2Desc: 'A specialized consultant reviews documentation, origin, and restrictions of the proposal.',
        s3Title: 'Intermediation & Mediated Chat',
        s3Desc: 'GV-CPS handles the commercial and logistics bridge securely, opening the mediated chat room.',
        s4Title: 'Deal Completion',
        s4Desc: 'Commercial terms finalized, contracts signed, and logistics dispatched by GV-CPS.'
    } : {
        s1Title: 'Publicação Registada',
        s1Desc: 'A proposta foi submetida com sucesso à plataforma GV-CPS e aguarda análise.',
        s2Title: 'Análise Técnica e Conformidade',
        s2Desc: 'Um consultor especializado analisa a documentação, origem e restrições da proposta.',
        s3Title: 'Intermediação & Chat Mediado',
        s3Desc: 'GV-CPS realiza a ponte comercial e logística de forma segura, abrindo a sala de chat mediado.',
        s4Title: 'Conclusão do Negócio',
        s4Desc: 'Termos comerciais finalizados, contratos assinados e logística despachada pela GV-CPS.'
    };
    
    el.innerHTML = `
        <div class="timeline-item ${currentIndex >= 0 ? 'completed' : ''} ${item.status === 'pendente' ? 'active' : ''}">
            <div class="timeline-marker"></div>
            <div class="timeline-item-title">${t.s1Title}</div>
            <div class="timeline-item-date">${formatDate(item.date)}</div>
            <div class="timeline-item-desc">${t.s1Desc}</div>
        </div>
        <div class="timeline-item ${currentIndex >= 1 ? 'completed' : ''} ${item.status === 'analise' ? 'active' : ''}">
            <div class="timeline-marker"></div>
            <div class="timeline-item-title">${t.s2Title}</div>
            <div class="timeline-item-date">${currentIndex >= 1 ? formatDate(item.date) : '--'}</div>
            <div class="timeline-item-desc">${t.s2Desc}</div>
        </div>
        <div class="timeline-item ${currentIndex >= 2 ? 'completed' : ''} ${item.status === 'atendimento' ? 'active' : ''}">
            <div class="timeline-marker"></div>
            <div class="timeline-item-title">${t.s3Title}</div>
            <div class="timeline-item-date">${currentIndex >= 2 ? formatDate(item.date) : '--'}</div>
            <div class="timeline-item-desc">${t.s3Desc}</div>
        </div>
        <div class="timeline-item ${currentIndex >= 3 ? 'completed' : ''} ${item.status === 'concluida' ? 'active' : ''}">
            <div class="timeline-marker"></div>
            <div class="timeline-item-title">${t.s4Title}</div>
            <div class="timeline-item-date">${currentIndex >= 3 ? formatDate(item.date) : '--'}</div>
            <div class="timeline-item-desc">${t.s4Desc}</div>
        </div>
    `;
}

function renderPortalChat(containerId, matchId, channelType) {
    const el = document.getElementById(containerId);
    if (!el) return;
    
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const match = appState.matches.find(m => m.id === matchId);
    const msgs = appState.messages.filter(m => m.matchId === matchId && m.channel === channelType);
    
    const consultantObj = appState.users[match.consultantId];
    const headerTitle = lang === 'en' ? 'Shielded Intermediation (GV-CPS)' : 'Intermediação Segura (GV-CPS)';
    const consultantLabel = lang === 'en' ? 'Assigned Consultant' : 'Consultor Responsável';
    const statusLabel = match.status === 'fechado' 
        ? (lang === 'en' ? 'DEAL CLOSED' : 'NEGÓCIO FECHADO') 
        : (lang === 'en' ? 'IN PROGRESS' : 'EM CURSO');
    const warningText = lang === 'en'
        ? 'Shielded Negotiation: Direct contact between buyer and supplier is protected under commercial confidentiality.'
        : 'Negociação Segura: O contacto direto entre comprador e fornecedor é protegido sob sigilo comercial.';
    const placeholderText = lang === 'en' ? 'Write a secure message...' : 'Escreva uma mensagem segura...';
    
    el.innerHTML = `
        <div class="portal-chat-card">
            <div class="portal-chat-header" style="padding: 16px 20px; border-bottom: 1px solid var(--outline-variant);">
                <div class="portal-chat-title-info">
                    <span class="material-symbols-outlined" style="color: var(--secondary);">security</span>
                    <div>
                        <h4 class="font-bold" style="font-size: 14px; margin-bottom: 2px;">${headerTitle}</h4>
                        <p class="portal-chat-subtitle" style="font-size: 11px; color: #006d3d; font-weight: 600; display: flex; align-items: center; gap: 4px;">
                            <span style="display: inline-block; width: 6px; height: 6px; background-color: #25D366; border-radius: 50%;"></span>
                            ${consultantLabel}: ${consultantObj ? consultantObj.name : 'GV-CPS'}
                        </p>
                    </div>
                </div>
                <span class="portal-chat-badge" style="background-color: ${match.status === 'fechado' ? 'rgba(0, 109, 61, 0.1)' : 'rgba(217, 119, 6, 0.1)'}; color: ${match.status === 'fechado' ? '#006d3d' : '#d97706'}; font-weight: bold; font-size: 10px; padding: 4px 8px; border-radius: var(--radius-sm);">${statusLabel}</span>
            </div>
            
            <div class="bg-primary/5 text-primary text-xs font-semibold px-4 py-2 border-b border-outline-variant/30 text-center flex items-center justify-center gap-1.5" style="font-size: 10px; background-color: rgba(0, 55, 74, 0.05); color: var(--primary); border-bottom: 1px solid rgba(0, 0, 0, 0.05); font-weight: 600;">
                <span class="material-symbols-outlined" style="font-size: 13px; color: var(--primary);">lock</span>
                ${warningText}
            </div>
            
            <div class="portal-chat-messages" id="${containerId}-messages-area" style="padding: 16px;">
                <!-- Messages will be injected -->
            </div>
            
            <div class="portal-chat-input-area" style="padding: 12px 16px; border-top: 1px solid var(--outline-variant);">
                <form class="portal-chat-form" id="${containerId}-form" onsubmit="event.preventDefault(); sendChatMessage('${matchId}', '${channelType}', '${containerId}-input-field')">
                    <input type="text" class="portal-chat-input" id="${containerId}-input-field" placeholder="${placeholderText}" ${match.status === 'fechado' ? 'disabled' : ''}>
                    <button type="submit" class="portal-chat-send-btn" ${match.status === 'fechado' ? 'disabled' : ''}>
                        <span class="material-symbols-outlined">send</span>
                    </button>
                </form>
            </div>
        </div>
    `;
    
    // Inject messages
    const area = document.getElementById(`${containerId}-messages-area`);
    area.innerHTML = '';
    
    // Setup Supabase real-time sync if we have a real user session
    if (appState.currentUser && appState.currentUser.id && appState.currentUser.id.includes('-')) {
        setTimeout(() => {
            setupSupabaseChat(matchId, channelType, containerId);
        }, 50);
    }
    
    if (msgs.length === 0) {
        area.innerHTML = `<div class="text-center py-6 opacity-60 font-italic">${lang === 'en' ? 'No messages. Write something to start intermediation.' : 'Sem mensagens. Escreva algo para iniciar a intermediação.'}</div>`;
    } else {
        msgs.forEach(m => {
            const senderObj = appState.users[m.senderId] || { name: 'Sistema' };
            const isMe = appState.currentUser.id === m.senderId;
            
            const bubble = document.createElement('div');
            bubble.className = `chat-bubble ${isMe ? 'sent' : 'received'}`;
            
            let messageContentHTML = `<p>${m.text}</p>`;
            
            if (m.proposalData) {
                const pd = m.proposalData;
                const statusBadgeStyle = pd.status === 'aceite' 
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-200' 
                    : (pd.status === 'recusada' ? 'bg-rose-100 text-rose-800 border-rose-200' : 'bg-amber-100 text-amber-800 border-amber-200');
                
                const statusLabel = pd.status === 'aceite' ? 'Aceite' : (pd.status === 'recusada' ? 'Recusada' : 'Pendente');
                const showDetailsId = `proposal-details-${m.id}`;
                
                let actionButtonsHTML = '';
                if (pd.status === 'pendente') {
                    if (appState.currentUser.id !== m.senderId && appState.currentUser.role !== 'consultant' && appState.currentUser.role !== 'admin') {
                        actionButtonsHTML = `
                            <div class="flex gap-2 mt-3 pt-2 border-t border-slate-100 shrink-0">
                                <button class="px-3 py-1.5 bg-emerald-600 text-white font-bold text-[10px] rounded-lg hover:bg-emerald-700 transition uppercase tracking-wider cursor-pointer border-none" onclick="respondToProposal('${m.id}', 'aceite')">Aceitar Termos</button>
                                <button class="px-3 py-1.5 bg-rose-600 text-white font-bold text-[10px] rounded-lg hover:bg-rose-700 transition uppercase tracking-wider cursor-pointer border-none" onclick="respondToProposal('${m.id}', 'recusada')">Recusar</button>
                            </div>
                        `;
                    } else {
                        actionButtonsHTML = `
                            <div class="text-[10px] text-slate-400 font-semibold italic mt-2">Aguardando resposta da contraparte...</div>
                        `;
                    }
                }
                
                messageContentHTML = `
                    <div class="bg-white border border-slate-200 rounded-xl p-3 shadow-sm flex flex-col gap-2 my-1.5 max-w-[280px]">
                        <div class="flex justify-between items-center gap-2 border-b border-slate-100 pb-1.5 shrink-0">
                            <span class="text-[9px] font-bold text-slate-450 uppercase tracking-wider flex items-center gap-1">
                                <span class="material-symbols-outlined text-[12px]">description</span>
                                PROPOSTA COMERCIAL
                            </span>
                            <span class="px-1.5 py-0.5 rounded text-[8px] font-bold border ${statusBadgeStyle}">${statusLabel.toUpperCase()}</span>
                        </div>
                        <div class="text-left">
                            <span class="text-[9px] text-slate-400 block font-semibold uppercase tracking-wider">Valor Proposto</span>
                            <span class="text-base font-black text-gvTeal">${pd.price}</span>
                        </div>
                        
                        <button onclick="toggleProposalDetails('${showDetailsId}')" class="text-left text-[10px] font-bold text-gvTeal hover:underline flex items-center gap-0.5 mt-1 focus:outline-none border-none bg-none cursor-pointer">
                            <span>Ver mais detalhes</span>
                            <span class="material-symbols-outlined text-[12px]" id="arrow-${showDetailsId}">keyboard_arrow_down</span>
                        </button>
                        
                        <div id="${showDetailsId}" class="hidden space-y-1.5 mt-1 pt-1.5 border-t border-slate-100 text-[10px] text-slate-650 leading-normal text-left">
                            <div>Logística GV: <strong class="text-slate-800">${pd.logisticsIncluded ? 'Sim (Inclusa)' : 'Não'}</strong></div>
                            ${pd.logisticsIncluded ? `<div>Valor Frete: <strong class="text-slate-800">${pd.logisticsCost || 'MT 0'}</strong></div>` : ''}
                            <div class="bg-slate-50 p-2 rounded-lg border border-slate-100 mt-1 font-normal break-words">${pd.details}</div>
                        </div>
                        ${actionButtonsHTML}
                    </div>
                `;
            }
            
            bubble.innerHTML = `
                <span class="chat-bubble-sender">${senderObj.name} (${senderObj.role.toUpperCase()})</span>
                ${messageContentHTML}
                <span class="chat-bubble-time">${formatTime(m.timestamp)}</span>
            `;
            area.appendChild(bubble);
        });
    }
    
    // Scroll messages to bottom
    area.scrollTop = area.scrollHeight;
}

window.sendChatMessage = async function(matchId, channelType, inputFieldId) {
    const input = document.getElementById(inputFieldId);
    const text = input.value.trim();
    if (!text) return;
    
    // Validate anti-contact rules
    if (detectContactInfo(text)) {
        alert('ALERTA DE SEGURANÇA GV-CPS:\n\nPor regras rígidas de intermediação, é proibido enviar números de telefone, endereços de email ou websites nos canais de chat. Toda a negociação comercial e logística deve ocorrer estritamente através do intermédio da GV-CPS.\n\nSua mensagem foi bloqueada.');
        return;
    }
    
    const senderId = appState.currentUser.id;
    const senderRole = appState.currentUser.role;
    
    // If Supabase user, push to database
    if (senderId && senderId.includes('-')) {
        try {
            const rooms = await window.gvApi.getChatRooms(senderId);
            const activeRoom = rooms.find(r => r.negotiation_id === matchId);
            if (activeRoom) {
                await window.gvApi.sendChatMessage(activeRoom.id, senderId, text);
            } else {
                console.warn("Sala de chat correspondente não encontrada no Supabase.");
            }
        } catch (e) {
            console.error("Erro ao enviar mensagem no Supabase:", e);
        }
    } else {
        // Fallback simulated local push
        appState.messages.push({
            id: `msg_${appState.messages.length + 1}`,
            matchId: matchId,
            senderId: senderId,
            senderRole: senderRole,
            text: text,
            timestamp: new Date().toISOString(),
            channel: channelType
        });
        saveState();
    }
    
    input.value = '';
    
    // Re-render (for local users, Supabase users will be updated via Realtime trigger automatically)
    if (!senderId || !senderId.includes('-')) {
        if (senderRole === 'consultant') {
            renderConsultantPortal('negotiation', matchId);
        } else if (senderRole === 'buyer') {
            renderBuyerPortal('detail');
        } else if (senderRole === 'supplier') {
            renderSupplierPortal('detail');
        }
    }
};

function renderNotificationsList(elementId, userId) {
    const el = document.getElementById(elementId);
    if (!el) return;
    
    const list = appState.notifications.filter(n => n.userId === userId);
    el.innerHTML = '';
    
    if (list.length === 0) {
        el.innerHTML = `<p class="body-md text-on-surface-variant py-4 text-center">Você não tem novas notificações.</p>`;
        return;
    }
    
    list.forEach(n => {
        el.innerHTML += `
            <div class="glass-card mb-4" style="padding: 16px; border-left: 4px solid ${n.read ? 'var(--outline-variant)' : 'var(--secondary)'};">
                <div class="flex justify-between items-center mb-1">
                    <span class="label-sm opacity-55">${formatDate(n.date)}</span>
                    ${!n.read ? `<span class="status-badge" style="background-color: var(--secondary-container); color: var(--on-secondary-container); font-size: 9px; padding: 2px 6px;">NOVA</span>` : ''}
                </div>
                <p class="body-sm text-on-surface">${n.text}</p>
            </div>
        `;
        n.read = true; // Mark as read
    });
    saveState();
}

// FORM VALIDATION (ANTI-CONTACT LOGIC)
function setupFormValidation() {
    // Description inputs
    const needDesc = document.getElementById('need-description');
    const offerDesc = document.getElementById('offer-description');
    
    if (needDesc) {
        needDesc.addEventListener('input', () => validateFieldForContacts('need-description', 'need-desc-warning'));
    }
    
    if (offerDesc) {
        offerDesc.addEventListener('input', () => validateFieldForContacts('offer-description', 'offer-desc-warning'));
    }
}

function detectContactInfo(text) {
    // Regex matches:
    // 1. Email pattern: xxx@xxx.xx
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i;
    // 2. Phone patterns: like +258 84 123 4567, 841234567, 912345678, etc. (more than 7 digits clustered)
    const phoneRegex = /(\+?\d[\s-]?){8,15}/;
    // 3. URLs: www.site.com, http://, https://
    const urlRegex = /(https?:\/\/[^\s]+)|(www\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,})/i;
    
    return emailRegex.test(text) || phoneRegex.test(text) || urlRegex.test(text);
}

function validateFieldForContacts(inputId, warningId) {
    const input = document.getElementById(inputId);
    const warning = document.getElementById(warningId);
    if (!input) return;
    
    if (detectContactInfo(input.value)) {
        if (warning) warning.classList.add('show');
        input.style.borderColor = 'var(--error)';
    } else {
        if (warning) warning.classList.remove('show');
        input.style.borderColor = 'var(--outline-variant)';
    }
}

function setupFormHandlers() {
    // Need Form Submit
    const needForm = document.getElementById('need-form');
    if (needForm) {
        needForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const title = document.getElementById('need-title').value.trim();
            const category = document.getElementById('need-category').value;
            const description = document.getElementById('need-description').value.trim();
            const quantity = document.getElementById('need-quantity').value.trim();
            const country = document.getElementById('need-country').value;
            const logistics = document.querySelector('input[name="need-logistics"]:checked').value;
            
            // Re-validate anti-contact
            if (detectContactInfo(description)) {
                alert('BLOQUEIO COMERCIAL: Não é permitido colocar emails, telefones ou links externos na descrição da necessidade. Por favor, remova-os antes de submeter.');
                return;
            }
            
            const pushLocal = () => {
                const newId = `req_${appState.requirements.length + 1}`;
                appState.requirements.push({
                    id: newId,
                    title: title,
                    category: category,
                    description: description,
                    quantity: quantity,
                    country: country,
                    logistics: logistics,
                    date: new Date().toISOString().split('T')[0],
                    status: 'pendente',
                    owner: appState.currentUser.id || 'buyer_1',
                    assignedConsultant: null
                });
                saveState();
            };

            // Check if logged in with real Supabase user
            if (appState.currentUser && appState.currentUser.id && appState.currentUser.id.includes('-')) {
                try {
                    await window.gvApi.postRequirement({
                        buyer_id: appState.currentUser.id,
                        title: title,
                        category: category,
                        description: description,
                        quantity: parseFloat(quantity) || 1,
                        country: country,
                        logistics_included: logistics === 'Sim'
                    }, {
                        email: appState.currentUser.email || 'contato@gvcps.com',
                        whatsapp: '+258 84 000 0000'
                    });
                    
                    await syncMuralFromSupabase();
                } catch (err) {
                    console.error("Erro no Supabase. Gravando local:", err);
                    pushLocal();
                }
            } else {
                pushLocal();
            }
            
            alert('Necessidade publicada com sucesso no sistema! A sua proposta foi inserida em fila de análise técnica pelos nossos consultores. Não contêm dados expostos publicamente.');
            window.location.hash = 'wall';
        });
    }
    
    // Offer Form Submit
    const offerForm = document.getElementById('offer-form');
    if (offerForm) {
        offerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const title = document.getElementById('offer-title').value.trim();
            const category = document.getElementById('offer-category').value;
            const description = document.getElementById('offer-description').value.trim();
            const quantity = document.getElementById('offer-quantity').value.trim();
            const country = document.getElementById('offer-country').value;
            const logistics = document.querySelector('input[name="offer-logistics"]:checked').value;
            
            if (detectContactInfo(description)) {
                alert('BLOQUEIO COMERCIAL: Não é permitido colocar emails, telefones ou links externos na descrição da oferta. Remova-os para submeter.');
                return;
            }
            
            const pushLocal = () => {
                const newId = `off_${appState.offers.length + 1}`;
                appState.offers.push({
                    id: newId,
                    title: title,
                    category: category,
                    description: description,
                    quantity: quantity,
                    country: country,
                    logistics: logistics,
                    date: new Date().toISOString().split('T')[0],
                    status: 'pendente',
                    owner: appState.currentUser.id || 'supplier_1',
                    assignedConsultant: null
                });
                saveState();
            };

            // Check if logged in with real Supabase user
            if (appState.currentUser && appState.currentUser.id && appState.currentUser.id.includes('-')) {
                try {
                    await window.gvApi.postOffer({
                        supplier_id: appState.currentUser.id,
                        title: title,
                        category: category,
                        description: description,
                        quantity: parseFloat(quantity) || 1,
                        country: country,
                        logistics_included: logistics === 'Sim'
                    }, {
                        email: appState.currentUser.email || 'contato@gvcps.com',
                        whatsapp: '+258 84 000 0000'
                    });
                    
                    await syncMuralFromSupabase();
                } catch (err) {
                    console.error("Erro no Supabase. Gravando local:", err);
                    pushLocal();
                }
            } else {
                pushLocal();
            }
            
            alert('Oferta de fornecimento publicada de forma gratuita na plataforma GV-CPS! Entrou na fila de correspondência comercial.');
            window.location.hash = 'wall';
        });
    }
    
    // =====================================================================
    // EXTENSOES DO WIZARD (DDI, FORMATTING, SLIDER)
    // =====================================================================
    const wizardWhatsapp = document.getElementById('wizard-contact-whatsapp');
    const whatsappFlagBadge = document.getElementById('whatsapp-flag-badge');
    const countrySelect = document.getElementById('wizard-contact-country');

    function formatWhatsAppNumber(value) {
        let cleaned = value.replace(/[^\d+]/g, '');
        if (cleaned && !cleaned.startsWith('+')) {
            cleaned = '+' + cleaned;
        }
        
        let flag = '🌐';
        let countryVal = '';
        
        if (cleaned.startsWith('+258')) {
            flag = '🇲🇿';
            countryVal = 'Moçambique';
            let rest = cleaned.substring(4).replace(/\s/g, '');
            let formatted = '+258';
            if (rest.length > 0) {
                if (rest.length <= 2) formatted += ' ' + rest;
                else if (rest.length <= 5) formatted += ' ' + rest.substring(0, 2) + ' ' + rest.substring(2);
                else formatted += ' ' + rest.substring(0, 2) + ' ' + rest.substring(2, 5) + ' ' + rest.substring(5, 9);
            }
            return { text: formatted, flag, country: countryVal };
        } else if (cleaned.startsWith('+351')) {
            flag = '🇵🇹';
            countryVal = 'Portugal';
            let rest = cleaned.substring(4).replace(/\s/g, '');
            let formatted = '+351';
            if (rest.length > 0) {
                if (rest.length <= 3) formatted += ' ' + rest;
                else if (rest.length <= 6) formatted += ' ' + rest.substring(0, 3) + ' ' + rest.substring(3);
                else formatted += ' ' + rest.substring(0, 3) + ' ' + rest.substring(3, 6) + ' ' + rest.substring(6, 9);
            }
            return { text: formatted, flag, country: countryVal };
        } else if (cleaned.startsWith('+55')) {
            flag = '🇧🇷';
            countryVal = 'Brasil';
            let rest = cleaned.substring(3).replace(/[\s\(\)\-]/g, '');
            let formatted = '+55';
            if (rest.length > 0) {
                if (rest.length <= 2) formatted += ' (' + rest;
                else if (rest.length <= 7) formatted += ' (' + rest.substring(0, 2) + ') ' + rest.substring(2);
                else formatted += ' (' + rest.substring(0, 2) + ') ' + rest.substring(2, 7) + '-' + rest.substring(7, 11);
            }
            return { text: formatted, flag, country: countryVal };
        } else if (cleaned.startsWith('+971')) {
            flag = '🇦🇪';
            countryVal = 'Emirados Árabes';
            let rest = cleaned.substring(4).replace(/\s/g, '');
            let formatted = '+971';
            if (rest.length > 0) {
                if (rest.length <= 2) formatted += ' ' + rest;
                else if (rest.length <= 5) formatted += ' ' + rest.substring(0, 2) + ' ' + rest.substring(2);
                else formatted += ' ' + rest.substring(0, 2) + ' ' + rest.substring(2, 5) + ' ' + rest.substring(5, 9);
            }
            return { text: formatted, flag, country: countryVal };
        }
        
        return { text: cleaned, flag, country: countryVal };
    }

    if (wizardWhatsapp) {
        wizardWhatsapp.addEventListener('input', (e) => {
            let cursorPosition = e.target.selectionStart;
            let originalLength = e.target.value.length;
            
            const res = formatWhatsAppNumber(e.target.value);
            e.target.value = res.text;
            
            let newLength = e.target.value.length;
            e.target.selectionStart = e.target.selectionEnd = cursorPosition + (newLength - originalLength);

            if (whatsappFlagBadge) {
                whatsappFlagBadge.textContent = res.flag;
            }
            if (countrySelect && res.country) {
                countrySelect.value = res.country;
            }
        });
    }

    if (countrySelect) {
        countrySelect.addEventListener('change', (e) => {
            const country = e.target.value;
            if (!wizardWhatsapp) return;
            
            let prefix = '';
            let flag = '🌐';
            
            if (country === 'Moçambique') { prefix = '+258 '; flag = '🇲🇿'; }
            else if (country === 'Portugal') { prefix = '+351 '; flag = '🇵🇹'; }
            else if (country === 'Brasil') { prefix = '+55 '; flag = '🇧🇷'; }
            else if (country === 'Emirados Árabes') { prefix = '+971 '; flag = '🇦🇪'; }
            
            wizardWhatsapp.value = prefix;
            if (whatsappFlagBadge) whatsappFlagBadge.textContent = flag;
            wizardWhatsapp.focus();
        });
    }

    const qtyInput = document.getElementById('wizard-qty-input');
    const qtySlider = document.getElementById('wizard-qty-slider');
    
    if (qtyInput && qtySlider) {
        qtyInput.addEventListener('input', (e) => {
            let val = parseFloat(e.target.value) || 1;
            if (val > parseFloat(qtySlider.max)) {
                qtySlider.max = val;
                const maxLabel = document.getElementById('wizard-slider-max');
                if (maxLabel) maxLabel.textContent = Math.round(val);
            }
            qtySlider.value = val;
            wizardState.selectedQty = val.toString();
            
            document.querySelectorAll('#wizard-qty-chips .suggestion-chip').forEach(c => c.classList.remove('selected'));
        });
        
        qtySlider.addEventListener('input', (e) => {
            let val = e.target.value;
            qtyInput.value = val;
            wizardState.selectedQty = val.toString();
            
            document.querySelectorAll('#wizard-qty-chips .suggestion-chip').forEach(c => c.classList.remove('selected'));
        });
    }
}

function resetForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.reset();
        // Clear warning styles
        const warning = form.querySelector('.input-warning-msg');
        if (warning) warning.classList.remove('show');
        const descInput = form.querySelector('textarea');
        if (descInput) descInput.style.borderColor = 'var(--outline-variant)';
    }
}

// BILINGUAL CHATBOT HELPER FUNCTIONS
function detectMessageLanguage(text) {
    const textLower = text.toLowerCase();
    
    // Keywords for English
    const enKeywords = ["buy", "sell", "want", "need", "offer", "logistics", "shipping", "transport", "price", "how", "hello", "hi", "help", "thank", "english"];
    // Keywords for Spanish
    const esKeywords = ["comprar", "vender", "necesito", "oferta", "logistica", "transporte", "hola", "gracias", "ayuda", "contacto", "seguro"];
    // Keywords for French
    const frKeywords = ["acheter", "vendre", "besoin", "offre", "logistique", "transport", "bonjour", "merci", "aide", "securite"];
    // Keywords for Portuguese
    const ptKeywords = ["comprar", "vender", "preciso", "necessidade", "oferta", "logistica", "transporte", "ola", "obrigado", "ajuda", "seguro"];
    
    let enScore = 0, esScore = 0, frScore = 0, ptScore = 0;
    
    enKeywords.forEach(k => { if (textLower.includes(k)) enScore++; });
    esKeywords.forEach(k => { if (textLower.includes(k)) esScore++; });
    frKeywords.forEach(k => { if (textLower.includes(k)) frScore++; });
    ptKeywords.forEach(k => { if (textLower.includes(k)) ptScore++; });
    
    if (enScore > 0 && enScore >= esScore && enScore >= frScore && enScore >= ptScore) return 'en';
    if (esScore > 0 && esScore >= enScore && esScore >= frScore && esScore >= ptScore) return 'es';
    if (frScore > 0 && frScore >= enScore && frScore >= esScore && frScore >= ptScore) return 'fr';
    if (ptScore > 0 && ptScore >= enScore && ptScore >= esScore && ptScore >= frScore) return 'pt';
    
    return localStorage.getItem('gvcps_lang') || 'pt';
}

function getChatbotResponse(text) {
    const lang = detectMessageLanguage(text);
    const langResponses = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS['pt'];
    const textLower = text.toLowerCase();
    
    if (textLower.includes('comprar') || textLower.includes('necessidade') || textLower.includes('buy') || textLower.includes('need') || textLower.includes('compras') || textLower.includes('acheter') || textLower.includes('besoin')) {
        return langResponses.bot_buy_response;
    }
    if (textLower.includes('vender') || textLower.includes('oferta') || textLower.includes('sell') || textLower.includes('offer') || textLower.includes('vendre') || textLower.includes('offre')) {
        return langResponses.bot_sell_response;
    }
    if (textLower.includes('logistica') || textLower.includes('logistics') || textLower.includes('transporte') || textLower.includes('frete') || textLower.includes('shipping') || textLower.includes('fret') || textLower.includes('port')) {
        return langResponses.bot_logistics_response;
    }
    if (textLower.includes('contacto') || textLower.includes('contact') || textLower.includes('direto') || textLower.includes('direct') || textLower.includes('segur') || textLower.includes('safe') || textLower.includes('whatsapp') || textLower.includes('email')) {
        return langResponses.secure_negotiation_warning;
    }
    
    return langResponses.bot_default_response;
}

function initWidgetChatMessages(lang = 'pt') {
    const area = document.getElementById('widget-chat-messages');
    if (!area) return;
    area.innerHTML = '';
    
    const welcomeMsg = UI_TRANSLATIONS[lang].bot_welcome;
    const botName = UI_TRANSLATIONS[lang].bot_name;
    
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble received';
    bubble.innerHTML = `
        <span class="chat-bubble-sender" style="color: var(--primary-light);">${botName}</span>
        <p>${welcomeMsg}</p>
        <span class="chat-bubble-time">${lang === 'pt' ? 'Agora' : 'Now'}</span>
    `;
    area.appendChild(bubble);
}

// CHATBOT WIDGET
function setupChatWidget() {
    const chatFab = document.getElementById('chat-fab');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
    const chatIcon = document.getElementById('chat-icon');
    const chatForm = document.getElementById('widget-chat-form');
    const chatInput = document.getElementById('widget-chat-input');
    
    if (!chatFab) return;
    
    chatFab.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = chatWindow.classList.contains('hidden');
        if (isHidden) {
            // Close accessibility panel if open
            const accPanel = document.getElementById('accessibility-panel');
            if (accPanel) {
                accPanel.style.display = 'none';
                accPanel.classList.add('hidden');
            }
            chatWindow.classList.remove('hidden');
            chatWindow.style.display = 'flex';
            chatIcon.textContent = 'keyboard_arrow_down';
        } else {
            chatWindow.classList.add('hidden');
            chatWindow.style.display = 'none';
            chatIcon.textContent = 'chat';
        }
    });
    
    closeChat.addEventListener('click', (e) => {
        e.stopPropagation();
        chatWindow.classList.add('hidden');
        chatWindow.style.display = 'none';
        chatIcon.textContent = 'chat';
    });
    
    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (!text) return;
            
            const lang = localStorage.getItem('gvcps_lang') || 'pt';
            
            // Check anti-contact
            if (detectContactInfo(text)) {
                alert(UI_TRANSLATIONS[lang].alert_no_contacts);
                return;
            }
            
            // User bubble
            const userLabel = lang === 'pt' ? 'Você' : 'You';
            appendWidgetMessage(userLabel, text, 'sent');
            chatInput.value = '';
            
            // Delayed bot response simulation
            setTimeout(() => {
                const botResponse = getChatbotResponse(text);
                const botName = UI_TRANSLATIONS[lang].bot_name;
                appendWidgetMessage(botName, botResponse, 'received');
            }, 1000);
        });
    }
}

function appendWidgetMessage(sender, text, type) {
    const area = document.getElementById('widget-chat-messages');
    if (!area) return;
    
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${type}`;
    bubble.innerHTML = `
        <span class="chat-bubble-sender" style="${type === 'sent' ? 'color: var(--electric-amber);' : 'color: var(--primary-light);'}">${sender}</span>
        <p>${text}</p>
        <span class="chat-bubble-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
    `;
    area.appendChild(bubble);
    area.scrollTop = area.scrollHeight;
}

// EVENT LISTENERS & BINDINGS
function setupEventListeners() {
    // Filter submissions on Wall page
    const filterBtn = document.getElementById('btn-apply-filters');
    if (filterBtn) {
        filterBtn.addEventListener('click', () => {
            const cat = document.getElementById('filter-category').value;
            const country = document.getElementById('filter-country').value;
            const typeEl = document.getElementById('filter-type');
            const type = typeEl ? typeEl.value : 'all';
            const sort = document.getElementById('sort-by').value;
            
            window.location.hash = `wall?cat=${encodeURIComponent(cat)}&country=${encodeURIComponent(country)}&type=${encodeURIComponent(type)}&sort=${encodeURIComponent(sort)}`;
        });
    }
    
    setupFormHandlers();
}

// UTILS & FORMATTERS
function formatDate(dateStr) {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
        const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
        const day = parts[2];
        const month = months[parseInt(parts[1]) - 1];
        const year = parts[0];
        return `${day}-${month}-${year}`;
    }
    return dateStr;
}

function formatTime(isoStr) {
    const date = new Date(isoStr);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function formatStatus(status) {
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const mapPT = {
        'pendente': 'Pendente',
        'analise': 'Em Análise',
        'atendimento': 'Em Atendimento',
        'concluida': 'Concluída',
        'negociacao': 'Em Negociação',
        'revisao': 'Em Revisão',
        'fechado': 'Concluído / Fechado',
        'cancelado': 'Cancelado'
    };
    const mapEN = {
        'pendente': 'Pending',
        'analise': 'Under Review',
        'atendimento': 'In Progress',
        'concluida': 'Completed',
        'negociacao': 'In Negotiation',
        'revisao': 'In Review',
        'fechado': 'Completed / Closed',
        'cancelado': 'Cancelled'
    };
    const map = lang === 'en' ? mapEN : mapPT;
    return map[status] || status;
}

function formatStatusPT(status) {
    return formatStatus(status);
}

// Launch app on load
window.addEventListener('DOMContentLoaded', initApp);

// Mobile chat navigation helper
window.goBackToChatList = function() {
    window.location.hash = '#buyer-portal?tab=detail';
};

// PROPOSALS MANAGEMENT (CLIENT & CONSULTANT ACTIONS)
window.respondToProposal = function(msgId, status) {
    const m = appState.messages.find(msg => msg.id === msgId);
    if (!m) return;
    
    m.proposalData.status = status;
    const match = appState.matches.find(ma => ma.id === m.matchId);
    
    if (match) {
        const req = appState.requirements.find(r => r.id === match.requirementId);
        
        // Notify consultant
        appState.notifications.push({
            id: `not_${appState.notifications.length + 1}`,
            userId: match.consultantId,
            text: `A proposta comercial para a negociação #${match.id.split('_')[1]} foi ${status} pelo cliente.`,
            date: new Date().toISOString().split('T')[0],
            read: false
        });
        
        if (status === 'aceite') {
            match.proposalApprovedByClient = true;
            match.proposalPrice = m.proposalData.price;
            match.proposalLogistics = m.proposalData.logisticsIncluded 
                ? `Sim (Frete: ${m.proposalData.logisticsCost || 'A Combinar'})` 
                : 'Não';
            
            // Add system messages in BOTH channels
            appState.messages.push({
                id: `msg_${appState.messages.length + 1}`,
                matchId: match.id,
                senderId: 'system',
                senderRole: 'admin',
                text: `PROPOSTA ACEITE: O Comprador aceitou os termos de ${m.proposalData.price}. A negociação prossegue para a fase de faturamento e aprovação administrativa.`,
                timestamp: new Date().toISOString(),
                channel: 'buyer'
            });
            
            appState.messages.push({
                id: `msg_${appState.messages.length + 1}`,
                matchId: match.id,
                senderId: 'system',
                senderRole: 'admin',
                text: `PROPOSTA ACEITE: O Comprador aceitou os termos de ${m.proposalData.price}. A negociação prossegue para a fase de faturamento e aprovação administrativa.`,
                timestamp: new Date().toISOString(),
                channel: 'supplier'
            });
        }
    }
    
    saveState();
    
    // Re-render
    const role = appState.currentUser.role;
    if (role === 'buyer') {
        renderBuyerPortal('detail');
    } else if (role === 'supplier') {
        renderSupplierPortal('detail');
    } else if (role === 'consultant') {
        renderConsultantPortal('negotiation', m.matchId);
    } else if (role === 'admin') {
        renderAdminPortal('matches');
    }
};

window.toggleProposalDetails = function(id) {
    const el = document.getElementById(id);
    const arrow = document.getElementById(`arrow-${id}`);
    if (el) {
        if (el.classList.contains('hidden')) {
            el.classList.remove('hidden');
            if (arrow) arrow.textContent = 'keyboard_arrow_up';
        } else {
            el.classList.add('hidden');
            if (arrow) arrow.textContent = 'keyboard_arrow_down';
        }
    }
};

window.openConsultantProposalModalFromPortal = function() {
    const hash = window.location.hash;
    let matchId = null;
    let channelType = 'buyer';
    
    if (hash.includes('id=')) {
        matchId = hash.split('id=')[1].split('&')[0];
    }
    
    if (!matchId) {
        alert('Selecione uma negociação ativa primeiro.');
        return;
    }
    
    window.openConsultantProposalModal(matchId, channelType);
};

window.openConsultantProposalModal = function(matchId, channelType) {
    document.getElementById('proposal-match-id').value = matchId;
    document.getElementById('proposal-channel-type').value = channelType;
    document.getElementById('proposal-price').value = '';
    document.getElementById('proposal-logistics-cost').value = '';
    document.getElementById('proposal-details').value = '';
    
    window.toggleProposalLogisticsCost(true);
    
    const modal = document.getElementById('consultantProposalModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
    }
};

window.closeConsultantProposalModal = function() {
    const modal = document.getElementById('consultantProposalModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
};

window.toggleProposalLogisticsCost = function(show) {
    const container = document.getElementById('proposal-logistics-cost-container');
    if (container) {
        container.style.display = show ? 'block' : 'none';
    }
};

window.submitProposalForm = function(event) {
    event.preventDefault();
    const matchId = document.getElementById('proposal-match-id').value;
    const channelType = document.getElementById('proposal-channel-type').value;
    const price = document.getElementById('proposal-price').value.trim();
    const logisticsIncluded = document.getElementsByName('proposal-logistics')[0].checked;
    const logisticsCost = document.getElementById('proposal-logistics-cost').value.trim();
    const details = document.getElementById('proposal-details').value.trim();
    
    const msgId = `msg_${appState.messages.length + 1}`;
    appState.messages.push({
        id: msgId,
        matchId: matchId,
        senderId: appState.currentUser.id,
        senderRole: appState.currentUser.role,
        text: `PROPOSTA DE TERMOS ENVIADA: Valor comercial de ${price}.`,
        timestamp: new Date().toISOString(),
        channel: channelType,
        proposalData: {
            price: price,
            logisticsIncluded: logisticsIncluded,
            logisticsCost: logisticsIncluded ? logisticsCost : '',
            details: details,
            status: 'pendente'
        }
    });
    
    // Mirror proposal data to supplier channel as well
    const otherChannel = channelType === 'buyer' ? 'supplier' : 'buyer';
    appState.messages.push({
        id: `msg_${appState.messages.length + 1}`,
        matchId: matchId,
        senderId: appState.currentUser.id,
        senderRole: appState.currentUser.role,
        text: `PROPOSTA DE TERMOS ENVIADA: Valor comercial de ${price}.`,
        timestamp: new Date().toISOString(),
        channel: otherChannel,
        proposalData: {
            price: price,
            logisticsIncluded: logisticsIncluded,
            logisticsCost: logisticsIncluded ? logisticsCost : '',
            details: details,
            status: 'pendente'
        }
    });
    
    saveState();
    closeConsultantProposalModal();
    
    if (appState.currentUser.role === 'consultant') {
        renderConsultantPortal('negotiation', matchId);
    } else if (appState.currentUser.role === 'admin') {
        renderAdminPortal('matches');
    }
};


// ADMIN PORTAL - ADVANCED CONTROLS
window.applyAdminUserFilters = function() {
    const search = (document.getElementById('admin-users-search').value || '').toLowerCase();
    const roleFilter = document.getElementById('admin-users-filter-role').value;
    const statusFilter = document.getElementById('admin-users-filter-status').value;
    
    const tbody = document.getElementById('admin-users-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    Object.values(appState.users).forEach(u => {
        // Mock status field if undefined
        if (u.status === undefined) u.status = 'ativo';
        
        const matchesSearch = u.name.toLowerCase().includes(search) || u.email.toLowerCase().includes(search);
        const matchesRole = roleFilter === 'all' || u.role === roleFilter;
        const matchesStatus = statusFilter === 'all' || u.status === statusFilter;
        
        if (matchesSearch && matchesRole && matchesStatus) {
            const rolePT = u.role === 'buyer' ? 'Comprador' : (u.role === 'supplier' ? 'Fornecedor' : (u.role === 'consultant' ? 'Consultor' : 'Admin'));
            const statusBadge = u.status === 'ativo' 
                ? '<span class="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold text-[10px] uppercase">Ativo</span>'
                : '<span class="px-2 py-0.5 rounded bg-slate-100 text-slate-650 border border-slate-200 font-semibold text-[10px] uppercase">Inativo</span>';
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="py-4 px-6 font-bold text-slate-800">#${u.id}</td>
                <td class="py-4 px-6">
                    <div class="font-bold text-slate-900">${u.name}</div>
                    <div class="text-[10px] text-slate-400 mt-0.5">${u.email}</div>
                </td>
                <td class="py-4 px-6">
                    <span class="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-600">${rolePT}</span>
                </td>
                <td class="py-4 px-6">${statusBadge}</td>
                <td class="py-4 px-6 text-right">
                    <div class="flex gap-2 justify-end">
                        <button onclick="openAdminUserMessageModal('${u.id}')" class="p-1.5 bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-600 rounded-lg transition" title="Enviar Mensagem">
                            <span class="material-symbols-outlined text-[16px] block">chat</span>
                        </button>
                        <button onclick="adminToggleUserStatus('${u.id}')" class="p-1.5 bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-600 rounded-lg transition" title="${u.status === 'ativo' ? 'Desativar' : 'Ativar'}">
                            <span class="material-symbols-outlined text-[16px] block">${u.status === 'ativo' ? 'toggle_on' : 'toggle_off'}</span>
                        </button>
                        <button onclick="adminEditUserPrompt('${u.id}')" class="p-1.5 bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-600 rounded-lg transition" title="Editar Utilizador">
                            <span class="material-symbols-outlined text-[16px] block">edit</span>
                        </button>
                    </div>
                </td>
            `;
            tbody.appendChild(tr);
        }
    });
};

window.adminToggleUserStatus = function(userId) {
    const u = appState.users[userId];
    if (u) {
        u.status = u.status === 'inativo' ? 'ativo' : 'inativo';
        saveState();
        applyAdminUserFilters();
    }
};

window.adminEditUserPrompt = function(userId) {
    const u = appState.users[userId];
    if (u) {
        const newName = prompt('Editar nome completo do utilizador:', u.name);
        const newEmail = prompt('Editar e-mail corporativo:', u.email);
        if (newName !== null) u.name = newName.trim();
        if (newEmail !== null) u.email = newEmail.trim();
        saveState();
        applyAdminUserFilters();
    }
};

window.adminTakeOverMatch = function(matchId) {
    const match = appState.matches.find(m => m.id === matchId);
    if (match) {
        if (confirm('Tem certeza de que deseja assumir esta intermediação? Você passará a ser o consultor dedicado responsável.')) {
            match.consultantId = 'admin_1';
            
            // Add system messages
            appState.messages.push({
                id: `msg_${appState.messages.length + 1}`,
                matchId: match.id,
                senderId: 'system',
                senderRole: 'admin',
                text: 'ADMINISTRAÇÃO ASSUMIU: O Administrador Geral Pedro Gomes assumiu a responsabilidade direta por esta intermediação.',
                timestamp: new Date().toISOString(),
                channel: 'buyer'
            });
            appState.messages.push({
                id: `msg_${appState.messages.length + 1}`,
                matchId: match.id,
                senderId: 'system',
                senderRole: 'admin',
                text: 'ADMINISTRAÇÃO ASSUMIU: O Administrador Geral Pedro Gomes assumiu a responsabilidade direta por esta intermediação.',
                timestamp: new Date().toISOString(),
                channel: 'supplier'
            });
            
            saveState();
            alert('Você assumiu a intermediação com sucesso!');
            renderAdminPortal('matches');
        }
    }
};

window.adminTakeOverCurrentInspected = function() {
    const matchId = document.getElementById('inspect-match-id').textContent.replace('#', '');
    window.adminTakeOverMatch(matchId);
    closeAdminInspectChatModal();
};

window.adminUpdateMatchStatus = function(matchId, status) {
    const match = appState.matches.find(m => m.id === matchId);
    if (match) {
        match.status = status;
        
        // Synchronize requirement status
        const req = appState.requirements.find(r => r.id === match.requirementId);
        if (req) {
            if (status === 'fechado') req.status = 'concluida';
            else if (status === 'negociacao') req.status = 'atendimento';
        }
        
        saveState();
        alert('Estado da negociação alterado com sucesso.');
        renderAdminPortal('matches');
    }
};

window.adminUpdateCurrentInspectedStatus = function(status) {
    const matchId = document.getElementById('inspect-match-id').textContent.replace('#', '');
    window.adminUpdateMatchStatus(matchId, status);
};

window.adminSendGlobalNotice = function() {
    const matchId = document.getElementById('inspect-match-id').textContent.replace('#', '');
    const input = document.getElementById('inspect-admin-msg-input');
    const text = input.value.trim();
    if (!text) return;
    
    appState.messages.push({
        id: `msg_${appState.messages.length + 1}`,
        matchId: matchId,
        senderId: 'admin_1',
        senderRole: 'admin',
        text: `MENSAGEM DA ADMINISTRAÇÃO: ${text}`,
        timestamp: new Date().toISOString(),
        channel: 'buyer'
    });
    
    appState.messages.push({
        id: `msg_${appState.messages.length + 1}`,
        matchId: matchId,
        senderId: 'admin_1',
        senderRole: 'admin',
        text: `MENSAGEM DA ADMINISTRAÇÃO: ${text}`,
        timestamp: new Date().toISOString(),
        channel: 'supplier'
    });
    
    input.value = '';
    saveState();
    alert('Mensagem administrativa enviada para ambos os canais de chat.');
    
    // Refresh chats in the inspector modal
    window.openAdminInspectChatModal(matchId);
};

// AUDIT INSPECTOR MODAL
window.openAdminInspectChatModal = function(matchId) {
    const match = appState.matches.find(m => m.id === matchId);
    if (!match) return;
    
    const req = appState.requirements.find(r => r.id === match.requirementId) || { title: '?' };
    const off = appState.offers.find(o => o.id === match.offerId) || { title: '?' };
    const buyerObj = appState.users[req.owner] || { name: 'Cliente' };
    const supplierObj = appState.users[off.owner] || { name: 'Fornecedor' };
    
    document.getElementById('inspect-match-id').textContent = `#${match.id}`;
    document.getElementById('inspect-match-title').innerHTML = `
        <span class="font-bold text-gvTeal">${req.title}</span> 
        <span class="text-slate-400 font-normal">vs</span> 
        <span class="font-bold text-emerald-700">${off.title}</span>
    `;
    
    document.getElementById('inspect-buyer-name').textContent = buyerObj.name;
    document.getElementById('inspect-supplier-name').textContent = supplierObj.name;
    
    // Set status dropdown value
    document.getElementById('inspect-status-select').value = match.status;
    
    // Enable/disable takeover button
    const takeoverBtn = document.getElementById('inspect-takeover-btn');
    if (match.consultantId === 'admin_1') {
        takeoverBtn.textContent = 'Sob sua gestão';
        takeoverBtn.setAttribute('disabled', 'true');
        takeoverBtn.style.opacity = '0.5';
    } else {
        takeoverBtn.textContent = 'Assumir Intermediação';
        takeoverBtn.removeAttribute('disabled');
        takeoverBtn.style.opacity = '1';
    }
    
    // Inject buyer messages
    const buyerArea = document.getElementById('inspect-buyer-chat-area');
    buyerArea.innerHTML = '';
    const buyerMsgs = appState.messages.filter(m => m.matchId === matchId && m.channel === 'buyer');
    if (buyerMsgs.length === 0) {
        buyerArea.innerHTML = `<div class="text-center py-6 text-slate-400 italic">Nenhuma mensagem neste canal.</div>`;
    } else {
        buyerMsgs.forEach(m => {
            const sender = appState.users[m.senderId] || { name: 'Sistema' };
            const bubble = document.createElement('div');
            bubble.className = `p-2.5 rounded-xl text-xs leading-relaxed border ${
                sender.role === 'admin' 
                ? 'bg-amber-50 border-amber-200 text-amber-900' 
                : (sender.role === 'consultant' ? 'bg-gvTeal/5 border-gvTeal/10 text-slate-800' : 'bg-white border-slate-200 text-slate-850')
            }`;
            bubble.innerHTML = `
                <div class="flex justify-between items-center mb-1 shrink-0">
                    <strong class="text-[10px] text-gvTeal uppercase tracking-wider">${sender.name} (${sender.role.toUpperCase()})</strong>
                    <span class="text-[9px] text-slate-400">${formatTime(m.timestamp)}</span>
                </div>
                <p>${m.text}</p>
            `;
            buyerArea.appendChild(bubble);
        });
    }
    
    // Inject supplier messages
    const supplierArea = document.getElementById('inspect-supplier-chat-area');
    supplierArea.innerHTML = '';
    const supplierMsgs = appState.messages.filter(m => m.matchId === matchId && m.channel === 'supplier');
    if (supplierMsgs.length === 0) {
        supplierArea.innerHTML = `<div class="text-center py-6 text-slate-400 italic">Nenhuma mensagem neste canal.</div>`;
    } else {
        supplierMsgs.forEach(m => {
            const sender = appState.users[m.senderId] || { name: 'Sistema' };
            const bubble = document.createElement('div');
            bubble.className = `p-2.5 rounded-xl text-xs leading-relaxed border ${
                sender.role === 'admin' 
                ? 'bg-amber-50 border-amber-200 text-amber-900' 
                : (sender.role === 'consultant' ? 'bg-gvTeal/5 border-gvTeal/10 text-slate-800' : 'bg-white border-slate-200 text-slate-850')
            }`;
            bubble.innerHTML = `
                <div class="flex justify-between items-center mb-1 shrink-0">
                    <strong class="text-[10px] text-emerald-700 uppercase tracking-wider">${sender.name} (${sender.role.toUpperCase()})</strong>
                    <span class="text-[9px] text-slate-400">${formatTime(m.timestamp)}</span>
                </div>
                <p>${m.text}</p>
            `;
            supplierArea.appendChild(bubble);
        });
    }
    
    const modal = document.getElementById('adminInspectChatModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
    }
};

window.closeAdminInspectChatModal = function() {
    const modal = document.getElementById('adminInspectChatModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
};

// USER MESSAGES MODAL
window.openAdminUserMessageModal = function(userId) {
    const u = appState.users[userId];
    if (!u) return;
    
    document.getElementById('message-recipient-id').value = u.id;
    document.getElementById('message-recipient-label').textContent = `Para: ${u.name} (${u.email})`;
    document.getElementById('admin-message-text').value = '';
    
    const modal = document.getElementById('adminUserMessageModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
    }
};

window.closeAdminUserMessageModal = function() {
    const modal = document.getElementById('adminUserMessageModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
};

window.submitAdminMessageForm = function(event) {
    event.preventDefault();
    const recipientId = document.getElementById('message-recipient-id').value;
    const text = document.getElementById('admin-message-text').value.trim();
    
    // Inject notification for targeted user
    appState.notifications.push({
        id: `not_${appState.notifications.length + 1}`,
        userId: recipientId,
        text: `MENSAGEM DA ADMINISTRAÇÃO: ${text}`,
        date: new Date().toISOString().split('T')[0],
        read: false
    });
    
    saveState();
    closeAdminUserMessageModal();
    alert('Mensagem administrativa enviada como notificação oficial.');
};

// PUBLISH DIRECTLY BY ADMIN MODAL
window.openAdminPublishModal = function() {
    // Inject active categories into category dropdown
    const catSelect = document.getElementById('admin-pub-category');
    if (catSelect) {
        catSelect.innerHTML = '';
        appState.categories.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c;
            opt.textContent = c;
            catSelect.appendChild(opt);
        });
    }
    
    window.toggleAdminPubOwnerDropdown('requirement');
    
    const modal = document.getElementById('adminPublishResourceModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
    }
};

window.closeAdminPublishModal = function() {
    const modal = document.getElementById('adminPublishResourceModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
};

window.toggleAdminPubOwnerDropdown = function(type) {
    const ownerSelect = document.getElementById('admin-pub-owner');
    if (!ownerSelect) return;
    ownerSelect.innerHTML = '';
    
    // Find users match the type
    const targetRole = type === 'requirement' ? 'buyer' : 'supplier';
    Object.values(appState.users).forEach(u => {
        if (u.role === targetRole) {
            const opt = document.createElement('option');
            opt.value = u.id;
            opt.textContent = `${u.name} (${u.email})`;
            ownerSelect.appendChild(opt);
        }
    });
};

window.submitAdminPublish = function(event) {
    event.preventDefault();
    const pubType = document.getElementById('admin-pub-type').value;
    const ownerId = document.getElementById('admin-pub-owner').value;
    const title = document.getElementById('admin-pub-title').value.trim();
    const category = document.getElementById('admin-pub-category').value;
    const quantity = document.getElementById('admin-pub-quantity').value.trim();
    const country = document.getElementById('admin-pub-country').value;
    const logistics = document.getElementById('admin-pub-logistics').value;
    const description = document.getElementById('admin-pub-description').value.trim();
    const featured = document.getElementById('admin-pub-featured').checked;
    
    const newId = pubType === 'requirement' 
        ? `req_${appState.requirements.length + 1}` 
        : `off_${appState.offers.length + 1}`;
        
    const itemObj = {
        id: newId,
        title: title,
        category: category,
        description: description,
        quantity: quantity,
        country: country,
        logistics: logistics,
        date: new Date().toISOString().split('T')[0],
        status: 'pendente',
        owner: ownerId,
        assignedConsultant: null,
        featured: featured
    };
    
    if (pubType === 'requirement') {
        appState.requirements.push(itemObj);
    } else {
        appState.offers.push(itemObj);
    }
    
    saveState();
    closeAdminPublishModal();
    alert('Publicado com sucesso como recurso oficial na plataforma!');
    
    // Re-render
    renderAdminPortal('dashboard');
};

// TOGGLE HIGHLIGHT ACTION
window.adminToggleHighlight = function(type, itemId) {
    const list = type === 'requirement' ? appState.requirements : appState.offers;
    const item = list.find(x => x.id === itemId);
    if (item) {
        item.featured = !item.featured;
        saveState();
        alert(item.featured ? 'Item marcado como Destaque com sucesso.' : 'Item removido dos destaques.');
        renderAdminPortal('dashboard');
    }
};

// APPROVE DEAL PAYMENT (ADMIN LOCK TRANSITION)
window.adminApproveMatchPayment = function(matchId) {
    const match = appState.matches.find(m => m.id === matchId);
    if (match) {
        if (confirm(`Tem certeza de que deseja aprovar o faturamento e pagamentos para a negociação #${matchId.split('_')[1]}? Isso finalizará a intermediação com sucesso.`)) {
            match.status = 'fechado';
            
            const req = appState.requirements.find(r => r.id === match.requirementId);
            if (req) req.status = 'concluida';
            
            const off = appState.offers.find(o => o.id === match.offerId);
            if (off) off.status = 'concluida';
            
            // Add final system messages in BOTH channels
            appState.messages.push({
                id: `msg_${appState.messages.length + 1}`,
                matchId: match.id,
                senderId: 'admin_1',
                senderRole: 'admin',
                text: 'NEGÓCIO CONCLUÍDO E PAGAMENTO APROVADO: A GV-CPS faturou com sucesso os termos acordados. O processo de intermediação foi finalizado formalmente.',
                timestamp: new Date().toISOString(),
                channel: 'buyer'
            });
            
            appState.messages.push({
                id: `msg_${appState.messages.length + 1}`,
                matchId: match.id,
                senderId: 'admin_1',
                senderRole: 'admin',
                text: 'NEGÓCIO CONCLUÍDO E PAGAMENTO APROVADO: A GV-CPS faturou com sucesso os termos acordados. O processo de intermediação foi finalizado formalmente.',
                timestamp: new Date().toISOString(),
                channel: 'supplier'
            });
            
            // Notifications for users
            if (req) {
                appState.notifications.push({
                    id: `not_${appState.notifications.length + 1}`,
                    userId: req.owner,
                    text: `NEGÓCIO CONCLUÍDO: Pagamento para "${req.title}" aprovado pela administração.`,
                    date: new Date().toISOString().split('T')[0],
                    read: false
                });
            }
            
            if (off) {
                appState.notifications.push({
                    id: `not_${appState.notifications.length + 1}`,
                    userId: off.owner,
                    text: `NEGÓCIO CONCLUÍDO: Faturamento para "${off.title}" aprovado pela administração.`,
                    date: new Date().toISOString().split('T')[0],
                    read: false
                });
            }
            
            saveState();
            alert('Pagamento aprovado! Negociação finalizada no sistema.');
            renderAdminPortal('approvals');
        }
    }
};



// ============================================================
// GV-CPS CMS INLINE EDITOR ENGINE
// ============================================================

const CMS_KEY = 'gvcps_cms_v1';
let cmsState = { editMode: false, content: {}, history: [] };

function loadCmsContent() {
    try { const r = localStorage.getItem(CMS_KEY); return r ? JSON.parse(r) : {}; } catch(e) { return {}; }
}
function saveCmsContent() { localStorage.setItem(CMS_KEY, JSON.stringify(cmsState.content)); }

function initCmsEditor() {
    // Disabled for now
    return;
    
    if (!appState || appState.currentUser.role !== 'admin') return;
    cmsState.content = loadCmsContent();
    const bar = document.getElementById('cms-admin-bar');
    if (bar) { bar.classList.remove('hidden'); document.body.classList.add('cms-bar-open'); }
    renderCmsContent();
    if (cmsState.content['__sectionOrder']) applySectionOrder(cmsState.content['__sectionOrder']);
    if (cmsState.content['__hiddenSections']) {
        cmsState.content['__hiddenSections'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.add('cms-hidden');
        });
    }
}

function hideCmsEditor() {
    const bar = document.getElementById('cms-admin-bar');
    if (bar) { bar.classList.add('hidden'); document.body.classList.remove('cms-bar-open'); }
    if (cmsState.editMode) toggleCmsEditMode();
}

function renderCmsContent() {
    const c = cmsState.content;
    document.querySelectorAll('[data-cms-key]').forEach(el => {
        const key = el.getAttribute('data-cms-key');
        if (c[key] !== undefined) el.innerHTML = c[key];
    });
    document.querySelectorAll('[data-cms-img]').forEach(el => {
        const key = el.getAttribute('data-cms-img');
        if (c[key]) el.src = c[key];
    });
    document.querySelectorAll('[data-cms-bg]').forEach(el => {
        const key = el.getAttribute('data-cms-bg');
        if (c[key]) el.style.backgroundImage = `url('${c[key]}')`;
    });
}

function toggleCmsEditMode() {
    cmsState.editMode = !cmsState.editMode;
    const btn = document.getElementById('cms-edit-toggle');
    document.body.classList.toggle('cms-edit-active', cmsState.editMode);
    if (cmsState.editMode) {
        btn.classList.add('active');
        btn.innerHTML = `<span class="material-symbols-outlined" style="font-size:15px;">edit_off</span> Sair da Edição`;
        activateEditableTexts();
        activateImageWrappers();
        initSectionDragging();
    } else {
        btn.classList.remove('active');
        btn.innerHTML = `<span class="material-symbols-outlined" style="font-size:15px;">edit</span> Editar Página`;
        deactivateEditableTexts();
        deactivateSectionDragging();
    }
}

function activateEditableTexts() {
    document.querySelectorAll('[data-cms-key]').forEach(el => {
        el.setAttribute('contenteditable', 'true');
        el.addEventListener('blur', onCmsTextBlur);
        el.addEventListener('keydown', onCmsKeydown);
    });
}
function deactivateEditableTexts() {
    document.querySelectorAll('[data-cms-key]').forEach(el => {
        el.removeAttribute('contenteditable');
        el.removeEventListener('blur', onCmsTextBlur);
        el.removeEventListener('keydown', onCmsKeydown);
    });
}
function onCmsTextBlur(e) {
    const el = e.target, key = el.getAttribute('data-cms-key');
    if (!key) return;
    pushCmsHistory(key, cmsState.content[key]);
    cmsState.content[key] = el.innerHTML;
    saveCmsContent();
    showCmsToast('Texto guardado!');
}
function onCmsKeydown(e) {
    if (e.key === 'Escape') e.target.blur();
    if (e.key === 'Enter' && !e.shiftKey && ['H1','H2','H3','H4','SPAN'].includes(e.target.tagName)) {
        e.preventDefault(); e.target.blur();
    }
}

function activateImageWrappers() {
    document.querySelectorAll('[data-cms-img]').forEach(img => {
        if (img.closest('.cms-img-wrapper')) return;
        const wrapper = document.createElement('div');
        wrapper.className = 'cms-img-wrapper';
        img.parentNode.insertBefore(wrapper, img);
        wrapper.appendChild(img);
        const btn = document.createElement('button');
        btn.className = 'cms-img-btn';
        btn.innerHTML = `<span class="material-symbols-outlined" style="font-size:16px;">image</span> Trocar Imagem`;
        btn.onclick = e => { e.stopPropagation(); openCmsImageModal(img); };
        wrapper.appendChild(btn);
    });
    document.querySelectorAll('[data-cms-bg]').forEach(el => {
        if (el.querySelector('.cms-bg-edit-btn')) return;
        const btn = document.createElement('button');
        btn.className = 'cms-img-btn cms-bg-edit-btn';
        btn.innerHTML = `<span class="material-symbols-outlined" style="font-size:16px;">wallpaper</span> Trocar Fundo`;
        btn.onclick = e => { e.stopPropagation(); openCmsImageModal(el); };
        el.style.position = 'relative';
        el.appendChild(btn);
    });
}

window._cmsImgTarget = null;
function openCmsImageModal(el) {
    window._cmsImgTarget = el;
    const modal = document.getElementById('cms-image-modal');
    const input = document.getElementById('cms-image-url-input');
    const preview = document.getElementById('cms-img-preview');
    const src = el.tagName === 'IMG' ? el.src : '';
    input.value = src;
    preview.src = src || 'https://placehold.co/480x120/1e293b/64748b?text=Sem+imagem';
    modal.classList.remove('hidden');
    setTimeout(() => input.focus(), 50);
}
function updateCmsImgPreview(url) {
    const preview = document.getElementById('cms-img-preview');
    if (url) preview.src = url;
}
function applyCmsImage() {
    const url = document.getElementById('cms-image-url-input').value.trim();
    const el = window._cmsImgTarget;
    if (!url || !el) { closeCmsImageModal(); return; }
    const key = el.getAttribute('data-cms-img') || el.getAttribute('data-cms-bg');
    pushCmsHistory(key, cmsState.content[key]);
    if (el.tagName === 'IMG') el.src = url;
    else el.style.backgroundImage = `url('${url}')`;
    cmsState.content[key] = url;
    saveCmsContent();
    closeCmsImageModal();
    showCmsToast('Imagem atualizada!');
}
function closeCmsImageModal() {
    document.getElementById('cms-image-modal').classList.add('hidden');
    window._cmsImgTarget = null;
}

const CMS_SECTIONS = [
    { id: 'cms-wrap-services',      label: 'Setores de Atuação' },
    { id: 'cms-wrap-opportunities', label: 'Oportunidades em Destaque' },
    { id: 'cms-wrap-market',        label: 'Explorador de Mercado' },
    { id: 'cms-wrap-how',           label: 'Como Funciona' },
    { id: 'cms-wrap-about',         label: 'Sobre / Consultoria' },
    { id: 'cms-wrap-social',        label: 'Prova Social' }
];

function showSectionPicker() {
    const picker = document.getElementById('cms-section-picker');
    const list = document.getElementById('cms-section-list');
    list.innerHTML = '';
    CMS_SECTIONS.forEach(s => {
        const el = document.getElementById(s.id);
        const hidden = el && el.classList.contains('cms-hidden');
        const row = document.createElement('div');
        row.style.cssText = 'display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 12px;background:rgba(255,255,255,0.04);border-radius:8px;border:1px solid rgba(255,255,255,0.08);';
        row.innerHTML = `<span style="color:#e2e8f0;font-size:13px;font-weight:600;">${s.label}</span>
            <button onclick="toggleSectionVisibility('${s.id}',this)" class="cms-bar-btn ${hidden?'danger':'success'}" style="min-width:90px;">
                <span class="material-symbols-outlined" style="font-size:14px;">${hidden?'visibility_off':'visibility'}</span>
                ${hidden?'Oculta':'Visível'}
            </button>`;
        list.appendChild(row);
    });
    picker.style.display = 'flex';
}
function closeSectionPicker() { document.getElementById('cms-section-picker').style.display = 'none'; }
function toggleSectionVisibility(id, btn) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('cms-hidden');
    const isHidden = el.classList.contains('cms-hidden');
    btn.className = `cms-bar-btn ${isHidden?'danger':'success'}`;
    btn.innerHTML = `<span class="material-symbols-outlined" style="font-size:14px;">${isHidden?'visibility_off':'visibility'}</span> ${isHidden?'Oculta':'Visível'}`;
    const hidden = CMS_SECTIONS.filter(s => { const e=document.getElementById(s.id); return e&&e.classList.contains('cms-hidden'); }).map(s=>s.id);
    cmsState.content['__hiddenSections'] = hidden;
    saveCmsContent();
    showCmsToast(isHidden?'Secção ocultada':'Secção visível');
}

let _dragSrc = null;
function initSectionDragging() {
    CMS_SECTIONS.forEach(s => {
        const el = document.getElementById(s.id);
        if (!el) return;
        el.setAttribute('draggable','true');
        el.addEventListener('dragstart', _onDragStart);
        el.addEventListener('dragover', _onDragOver);
        el.addEventListener('dragleave', _onDragLeave);
        el.addEventListener('drop', _onDrop);
        el.addEventListener('dragend', _onDragEnd);
    });
}
function deactivateSectionDragging() {
    CMS_SECTIONS.forEach(s => {
        const el = document.getElementById(s.id);
        if (!el) return;
        el.removeAttribute('draggable');
        el.removeEventListener('dragstart',_onDragStart);
        el.removeEventListener('dragover',_onDragOver);
        el.removeEventListener('dragleave',_onDragLeave);
        el.removeEventListener('drop',_onDrop);
        el.removeEventListener('dragend',_onDragEnd);
    });
}
function _onDragStart(e) { _dragSrc=this; this.classList.add('cms-dragging'); e.dataTransfer.effectAllowed='move'; }
function _onDragOver(e) { e.preventDefault(); if(this!==_dragSrc) this.classList.add('cms-drag-over'); return false; }
function _onDragLeave() { this.classList.remove('cms-drag-over'); }
function _onDrop(e) {
    e.stopPropagation();
    if (!_dragSrc || _dragSrc===this) { this.classList.remove('cms-drag-over'); return; }
    const parent = this.parentNode;
    const els = [...parent.querySelectorAll('.cms-section-wrapper')];
    const si = els.indexOf(_dragSrc), ti = els.indexOf(this);
    if (si < ti) parent.insertBefore(_dragSrc, this.nextSibling);
    else parent.insertBefore(_dragSrc, this);
    cmsState.content['__sectionOrder'] = [...parent.querySelectorAll('.cms-section-wrapper')].map(e=>e.id);
    saveCmsContent();
    showCmsToast('Ordem guardada!');
    this.classList.remove('cms-drag-over');
    return false;
}
function _onDragEnd() { this.classList.remove('cms-dragging'); document.querySelectorAll('.cms-drag-over').forEach(e=>e.classList.remove('cms-drag-over')); }

function applySectionOrder(order) {
    const home = document.getElementById('view-home');
    if (!home) return;
    order.forEach(id => { const el=document.getElementById(id); if(el&&el.classList.contains('cms-section-wrapper')) home.appendChild(el); });
}

function pushCmsHistory(key, old) { cmsState.history.push({key,value:old}); if(cmsState.history.length>30) cmsState.history.shift(); }
function undoCmsChange() {
    if (!cmsState.history.length) { showCmsToast('Nada para desfazer.','warn'); return; }
    const last = cmsState.history.pop();
    if (last.value===undefined) delete cmsState.content[last.key];
    else cmsState.content[last.key] = last.value;
    saveCmsContent(); renderCmsContent();
    showCmsToast('Alteração desfeita!');
}

function saveAllCms() { saveCmsContent(); showCmsToast('Tudo guardado!'); }
function resetCmsContent() {
    if (!confirm('⚠️ Apagar todas as edições e restaurar conteúdo original?')) return;
    localStorage.removeItem(CMS_KEY);
    cmsState.content = {}; cmsState.history = [];
    location.reload();
}
function exportCmsContent() {
    const blob = new Blob([JSON.stringify(cmsState.content,null,2)],{type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href=url; a.download=`gvcps-content-${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showCmsToast('JSON exportado!');
}
function importCmsContent(e) {
    const file = e.target.files[0]; if(!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
        try {
            cmsState.content = JSON.parse(ev.target.result);
            saveCmsContent(); renderCmsContent();
            if (cmsState.content['__sectionOrder']) applySectionOrder(cmsState.content['__sectionOrder']);
            showCmsToast('Importado com sucesso!');
        } catch(err) { alert('Erro ao ler ficheiro JSON.'); }
    };
    reader.readAsText(file);
    e.target.value='';
}
function viewAsVisitor() {
    document.getElementById('cms-admin-bar').style.display='none';
    document.body.classList.remove('cms-bar-open');
    if (cmsState.editMode) toggleCmsEditMode();
    const btn = document.createElement('button');
    btn.style.cssText='position:fixed;bottom:20px;right:20px;z-index:9999;background:#0f172a;color:#f59e0b;border:1px solid rgba(245,158,11,0.3);padding:10px 18px;border-radius:10px;font-weight:700;font-size:12px;cursor:pointer;font-family:Outfit,sans-serif;box-shadow:0 4px 20px rgba(0,0,0,0.4);display:flex;align-items:center;gap:6px;';
    btn.innerHTML='<span class="material-symbols-outlined" style="font-size:16px;">arrow_back</span> Voltar ao Editor';
    btn.onclick=()=>{ document.getElementById('cms-admin-bar').style.display='flex'; document.body.classList.add('cms-bar-open'); btn.remove(); };
    document.body.appendChild(btn);
}
function showCmsToast(msg, type='success') {
    const t = document.getElementById('cms-toast');
    if(!t) return;
    t.style.background = type==='warn'?'#d97706':'#16a34a';
    t.innerHTML = `<span class="material-symbols-outlined" style="font-size:16px;">${type==='warn'?'warning':'check_circle'}</span> ${msg}`;
    t.style.opacity='1'; clearTimeout(t._t);
    t._t = setTimeout(()=>{ t.style.opacity='0'; }, 2500);
}

// ==========================================
// GUIDED SERVICE REQUEST WIZARD LOGIC
// ==========================================
const GV_CATALOG = {
    agro: {
        label: 'Agronegócio',
        icon: 'agriculture',
        color: '#16a34a',
        categories: {
            fertilizantes: { 
                label: 'Fertilizantes', 
                unit: 'Toneladas', 
                products: ['NPK 12-24-12', 'Ureia Prilada 46%', 'DAP (Fosfato Diamónico)', 'Adubo Orgânico Compostado'], 
                quantities: ['25 Toneladas', '50 Toneladas', '100 Toneladas', '250 Toneladas', '500 Toneladas'] 
            },
            sementes: { 
                label: 'Sementes & Mudas', 
                unit: 'Kg', 
                products: ['Semente de Soja Certificada', 'Semente de Milho Híbrido', 'Semente de Gergelim Selecionada', 'Mudas de Cajueiro Enxertado'], 
                quantities: ['250 Kg', '500 Kg', '1000 Kg', '5000 Kg'] 
            },
            caju: { 
                label: 'Caju & Castanha', 
                unit: 'Toneladas', 
                products: ['Castanha de Caju Bruta (Raw Cashew)', 'Amêndoa de Caju Processada W180', 'Amêndoa de Caju W240', 'Casca de Caju para LCC'], 
                quantities: ['15 Toneladas (1 Contentor)', '30 Toneladas', '100 Toneladas', '300 Toneladas'] 
            },
            acucar: { 
                label: 'Açúcar', 
                unit: 'Toneladas', 
                products: ['Açúcar Refinado ICUMSA 45', 'Açúcar VHP de Cana', 'Açúcar Mascavado Orgânico'], 
                quantities: ['50 Toneladas', '250 Toneladas', '500 Toneladas', '12500 Toneladas'] 
            },
            equipamentos: { 
                label: 'Equipamentos Agrícolas', 
                unit: 'Unidades', 
                products: ['Trator Agrícola 75HP 4x4', 'Charrua Aiveca 3 Discos', 'Semeadora Linha Dupla', 'Sistema de Irrigação por Gotejamento'], 
                quantities: ['1 unidade', '2 unidades', '5 unidades', '10 unidades'] 
            }
        }
    },
    oil: {
        label: 'Oil & Gas',
        icon: 'local_gas_station',
        color: '#f59e0b',
        categories: {
            equipamentos: { 
                label: 'Equipamentos Industriais', 
                unit: 'Unidades', 
                products: ['Compressores de Ar de Alta Vazão', 'Geradores Silenciosos 500kVA', 'Bombas Centrífugas de Lodo', 'Válvulas de Retenção Industriais'], 
                quantities: ['1 unidade', '2 unidades', '5 unidades'] 
            },
            lubrificantes: { 
                label: 'Lubrificantes & Químicos', 
                unit: 'Litros', 
                products: ['Óleo Hidráulico ISO 68 Premium', 'Graxa Industrial de Lítio', 'Aditivos para Motores Estacionários', 'Fluidos de Perfuração'], 
                quantities: ['200 Litros (1 Tambor)', '1000 Litros', '5000 Litros'] 
            },
            servicos: { 
                label: 'Serviços Técnicos', 
                unit: 'Projeto', 
                products: ['Inspeção de Solda por Ultra-som (NDT)', 'Auditoria de Conformidade Ambiental', 'Manutenção Preventiva de Motores Turbina', 'Consultoria de Conteúdo Local'], 
                quantities: ['1 projeto', 'Contrato Trimestral', 'Contrato Anual'] 
            }
        }
    },
    tech: {
        label: 'Tecnologia',
        icon: 'devices',
        color: '#2563eb',
        categories: {
            computadores: { 
                label: 'Computadores & TI', 
                unit: 'Unidades', 
                products: ['Laptops Corporativos Core i7 16GB', 'Desktops de Escritório Core i5', 'Monitores Led IPS 24 polegadas', 'Impressoras Térmicas de Etiquetas'], 
                quantities: ['5 unidades', '10 unidades', '25 unidades', '50 unidades', '100 unidades'] 
            },
            servidores: { 
                label: 'Servidores & Infraestrutura', 
                unit: 'Unidades', 
                products: ['Servidor Rack 2U Dual Xeon Silver', 'Storage NAS 64TB Enterprise', 'Unidade UPS On-line 10kVA'], 
                quantities: ['1 unidade', '2 unidades', '5 unidades'] 
            },
            redes: { 
                label: 'Redes & Telecomunicações', 
                unit: 'Projeto', 
                products: ['Cabeamento Estruturado Cat6 por Ponto', 'Switches Cisco Gerenciáveis 24P', 'Sistema de Câmaras CCTV IP Hikvision'], 
                quantities: ['1 projeto', 'Contrato de Manutenção Técnica', 'Instalação Completa'] 
            },
            software: { 
                label: 'Software & Licenças', 
                unit: 'Licenças', 
                products: ['Licenças do Sistema ERP Primavera', 'Subscrição Anual Microsoft 365 Pro', 'Licenças de Segurança Endpoint Sophos'], 
                quantities: ['5 licenças', '25 licenças', '50 licenças', '100 licenças'] 
            }
        }
    },
    logistics: {
        label: 'Logística',
        icon: 'local_shipping',
        color: '#4338ca',
        categories: {
            maritimo: { 
                label: 'Frete Marítimo', 
                unit: 'Contêiner', 
                products: ['Envio de Contêiner 20ft Standard (FCL)', 'Envio de Contêiner 40ft High Cube (FCL)', 'Consolidação de Carga Marítima (LCL)', 'Carga a Granel Marítima (Dry Bulk)'], 
                quantities: ['1x Contêiner 20ft', '1x Contêiner 40ft', '5x Contêineres', '10x Contêineres'] 
            },
            terrestre: { 
                label: 'Frete Terrestre', 
                unit: 'Viagem', 
                products: ['Camião Fechado Baú TIR (Moçambique-África do Sul)', 'Plataforma Porta-Contentor Flatbed', 'Camião Cisterna de Combustível'], 
                quantities: ['1 viagem', '5 viagens', 'Contrato Mensal de Rota'] 
            },
            aduaneiro: { 
                label: 'Desembaraço Aduaneiro', 
                unit: 'Processo', 
                products: ['Trâmite Aduaneiro de Importação Geral', 'Trâmite Aduaneiro de Exportação', 'Trânsito Aduaneiro Internacional de Carga'], 
                quantities: ['1 processo', '5 processos', 'Desembaraço Contínuo'] 
            }
        }
    }
};

let wizardState = {
    currentStep: 1,
    selectedSector: '',
    selectedCategory: '',
    selectedProduct: '',
    selectedQty: '',
    urgency: 'Urgente',
    whatsapp: '',
    email: '',
    country: 'Moçambique',
    logistics: 'Sim',
    description: ''
};

function openRequestWizard(preselectedSector = null) {
    const modal = document.getElementById('serviceWizardModal');
    if (!modal) return;
    
    // Reset state
    wizardState = {
        currentStep: 1,
        selectedSector: '',
        selectedCategory: '',
        selectedProduct: '',
        selectedQty: '',
        urgency: 'Urgente',
        whatsapp: '',
        email: '',
        country: 'Moçambique',
        logistics: 'Sim',
        description: ''
    };
    
    // Clear inputs in form
    document.getElementById('wizard-product-input').value = '';
    document.getElementById('wizard-qty-input').value = '';
    document.getElementById('wizard-contact-whatsapp').value = '';
    document.getElementById('wizard-contact-email').value = '';
    document.getElementById('wizard-contact-desc').value = '';
    if (document.getElementById('wizard-contact-port')) {
        document.getElementById('wizard-contact-port').value = '';
    }
    
    // Pre-fill contacts from logged-in user if available
    if (appState && appState.currentUser) {
        const uId = appState.currentUser.id;
        const fullUser = appState.users[uId];
        if (fullUser) {
            document.getElementById('wizard-contact-email').value = fullUser.email || '';
            const phoneInput = document.getElementById('wizard-contact-whatsapp');
            if (phoneInput) {
                phoneInput.value = fullUser.whatsapp || '+258 ';
                // Dispara o evento de input para que a bandeira e país sejam sincronizados imediatamente!
                setTimeout(() => {
                    phoneInput.dispatchEvent(new Event('input'));
                }, 50);
            }
        }
    }

    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    
    const activeCatalog = getCatalog();
    if (preselectedSector && activeCatalog[preselectedSector]) {
        selectWizardSector(preselectedSector);
    } else {
        wizardState.currentStep = 1;
        updateWizardUI();
    }
}

function closeRequestWizard() {
    const modal = document.getElementById('serviceWizardModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
}

function startGuidedNegotiation(opportunityId, type) {
    const list = type === 'oferta' ? appState.offers : appState.requirements;
    let item = list.find(x => x.id === opportunityId);
    if (!item) {
        item = appState.requirements.find(x => x.id === opportunityId) || appState.offers.find(x => x.id === opportunityId);
    }
    
    // Close detail modal if open
    closeOpportunityDetailModal();

    if (!item) {
        openRequestWizard();
        return;
    }

    const modal = document.getElementById('serviceWizardModal');
    if (!modal) return;

    const { code: catCode, label: catLabel } = getCategoryDetails(item.category);
    
    // Map canonical category code to catalog sector key
    const sectorMap = {
        'agro': 'commodities',
        'energy': 'energy',
        'tech': 'tech',
        'logistics': 'logistics',
        'consulting': 'consulting'
    };
    const sectorKey = sectorMap[catCode] || 'commodities';
    
    const titleText = getTranslatedField(item, 'title');
    const qtyText = getTranslatedField(item, 'quantity');
    const countryText = getTranslatedField(item, 'country');

    wizardState = {
        currentStep: 4,
        selectedSector: sectorKey,
        selectedCategory: catLabel,
        selectedProduct: titleText,
        selectedQty: qtyText || '100',
        urgency: 'Curto Prazo (30 dias)',
        whatsapp: '',
        email: '',
        country: countryText || 'Moçambique',
        logistics: item.logistics || 'Sim',
        description: `Oportunidade Ref: ${item.id}`
    };

    // Pre-fill wizard inputs
    const prodInput = document.getElementById('wizard-product-input');
    if (prodInput) prodInput.value = titleText;
    const qtyInput = document.getElementById('wizard-qty-input');
    if (qtyInput) qtyInput.value = qtyText;
    const countrySelect = document.getElementById('wizard-contact-country');
    if (countrySelect && countryText) {
        countrySelect.value = countryText;
    }
    
    // Pre-fill user contacts if logged in
    if (appState && appState.currentUser) {
        const uId = appState.currentUser.id;
        const fullUser = appState.users[uId];
        if (fullUser) {
            const emailInput = document.getElementById('wizard-contact-email');
            if (emailInput) emailInput.value = fullUser.email || '';
            const phoneInput = document.getElementById('wizard-contact-whatsapp');
            if (phoneInput) {
                phoneInput.value = fullUser.whatsapp || '+258 ';
                setTimeout(() => {
                    phoneInput.dispatchEvent(new Event('input'));
                }, 50);
            }
        }
    }

    modal.classList.remove('hidden');
    modal.style.display = 'flex';

    updateWizardUI();
}

function openOpportunityDetailModal(id, type) {
    const list = type === 'oferta' ? appState.offers : appState.requirements;
    let item = list.find(x => x.id === id);
    if (!item) {
        item = appState.requirements.find(x => x.id === id) || appState.offers.find(x => x.id === id);
    }
    if (!item) return;

    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const { code: catCode, label: catLabel, icon: catIcon, sublabel: catSublabel } = getCategoryDetails(item.category);

    const titleText = getTranslatedField(item, 'title');
    const countryText = getTranslatedField(item, 'country');
    const qtyText = getTranslatedField(item, 'quantity');
    const descText = getTranslatedField(item, 'description') || (lang === 'pt' ? 'Sem descrição adicional fornecida.' : 'No additional description provided.');

    // Image mapping per category
    const imgMap = {
        agro: [
            'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=1200&q=80'
        ],
        energy: [
            'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80'
        ],
        tech: [
            'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'
        ],
        logistics: [
            'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1519003300449-424ad0405076?auto=format&fit=crop&w=1200&q=80'
        ],
        consulting: [
            'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80'
        ]
    };
    const imgPool = imgMap[catCode] || imgMap.consulting;
    const imgUrl = imgPool[item.id.charCodeAt(item.id.length - 1) % imgPool.length];

    // Country flag
    let flag = '🌐';
    const c = countryText.toLowerCase();
    if (c.includes('moçambique') || c.includes('mozambique')) flag = '🇲🇿';
    else if (c.includes('brasil') || c.includes('brazil')) flag = '🇧🇷';
    else if (c.includes('portugal')) flag = '🇵🇹';
    else if (c.includes('china')) flag = '🇨🇳';
    else if (c.includes('emirados') || c.includes('árabes') || c.includes('dubai')) flag = '🇦🇪';

    // Type badge
    const typeRaw = item.type || 'procura';
    const typePill = typeRaw === 'oferta' ? 'oferta' : (item.serviceType === 'servico' ? 'servico' : (item.serviceType === 'projeto' ? 'projeto' : 'demanda'));
    const typeLabels = {
        demanda: lang === 'pt' ? 'DEMANDA' : 'DEMAND',
        oferta: lang === 'pt' ? 'OFERTA' : 'OFFER',
        servico: lang === 'pt' ? 'SERVIÇO' : 'SERVICE',
        projeto: lang === 'pt' ? 'PROJETO' : 'PROJECT'
    };
    const typeLabel = typeLabels[typePill] || 'DEMANDA';

    const isLog = item.logistics === 'Sim';
    const logLabel = isLog
        ? (lang === 'pt' ? 'CIF Incluído' : 'CIF Included')
        : (lang === 'pt' ? 'Não Incluída' : 'Not Included');

    const labelVol = (catCode === 'logistics' || catCode === 'consulting') ? (lang === 'pt' ? 'Escopo' : 'Scope') : (lang === 'pt' ? 'Volume' : 'Volume');
    const labelCountryKey = catCode === 'logistics' ? (lang === 'pt' ? 'Destino' : 'Destination') : (lang === 'pt' ? 'País Destino' : 'Country');
    const labelTerms = catCode === 'logistics' ? (lang === 'pt' ? 'Regime' : 'Regime') : (lang === 'pt' ? 'Logística' : 'Logistics');
    const labelDate = lang === 'pt' ? 'Data' : 'Date';
    const labelStatus = lang === 'pt' ? 'Estado' : 'Status';
    const btnInterestText = lang === 'pt' ? 'Tenho Interesse / Iniciar Negociação' : 'I am Interested / Start Negotiation';
    const btnCloseText = lang === 'pt' ? 'Fechar' : 'Close';

    const container = document.getElementById('opp-modal-split-container');
    if (!container) return;

    container.innerHTML = `
        <!-- Left Hero Column (PC) -->
        <div class="opp-modal-hero cat-theme-${catCode}">
            <img src="${imgUrl}" alt="${titleText}" class="opp-modal-hero-img">
            <div class="opp-modal-hero-overlay"></div>

            <div class="opp-modal-hero-badges">
                <span class="cat-badge" style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:999px;font-size:11px;font-weight:800;letter-spacing:0.06em;backdrop-filter:blur(8px);">
                    <span class="material-symbols-outlined" style="font-size:14px;">${catIcon}</span>
                    ${catLabel}
                </span>
                <span class="card-type-pill ${typePill}">${typeLabel}</span>
            </div>

            <div class="opp-modal-hero-footer">
                <div style="background: rgba(2, 56, 64, 0.88); backdrop-filter: blur(8px); padding: 14px 16px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.15); display: flex; align-items: center; gap: 10px;">
                    <span class="material-symbols-outlined" style="color: #0d9488; font-size: 24px;">verified_user</span>
                    <div>
                        <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #99f6e4; display: block;">Intermediação Exclusiva GV-CPS</span>
                        <span style="font-size: 10px; color: #cbd5e1; font-weight: 500;">Sigilo Comercial & Proteção de Dados Garantidos</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right Content Column (PC) -->
        <div class="opp-modal-content cat-theme-${catCode}">
            <div>
                <span class="card-subcategory-label">${catSublabel}</span>
                <h2 style="font-size: 20px; font-weight: 800; color: #0f172a; margin: 0 0 16px; line-height: 1.3;">${titleText}</h2>

                <!-- Specs Grid -->
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 14px 16px; display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
                    <div class="card-detail-row">
                        <span class="card-detail-label">
                            <span class="material-symbols-outlined">inventory_2</span>
                            ${labelVol}:
                        </span>
                        <span class="card-detail-value">${qtyText}</span>
                    </div>
                    <div class="card-detail-row">
                        <span class="card-detail-label">
                            <span class="material-symbols-outlined">public</span>
                            ${labelCountryKey}:
                        </span>
                        <span class="card-detail-value" style="display:flex;align-items:center;gap:4px;">
                            ${countryText} <span style="font-size:14px;line-height:1;">${flag}</span>
                        </span>
                    </div>
                    <div class="card-detail-row">
                        <span class="card-detail-label">
                            <span class="material-symbols-outlined">${isLog ? 'local_shipping' : 'remove_circle_outline'}</span>
                            ${labelTerms}:
                        </span>
                        <span class="card-detail-value tag">${isLog ? '&#10003; ' : ''}${logLabel}</span>
                    </div>
                    <div class="card-detail-row">
                        <span class="card-detail-label">
                            <span class="material-symbols-outlined">calendar_today</span>
                            ${labelDate}:
                        </span>
                        <span class="card-detail-value" style="color:#64748b;font-weight:500;">${formatDate(item.date)}</span>
                    </div>
                    <div class="card-detail-row" style="border:none;padding-bottom:0;">
                        <span class="card-detail-label">
                            <span class="material-symbols-outlined">verified</span>
                            ${labelStatus}:
                        </span>
                        <span class="card-detail-value tag">${formatStatus(item.status || 'pendente')}</span>
                    </div>
                </div>

                <!-- Description -->
                <div>
                    <h4 style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; margin: 0 0 6px;">
                        ${lang === 'pt' ? 'Descrição & Especificações' : 'Description & Specifications'}
                    </h4>
                    <p style="font-size: 13px; color: #334155; line-height: 1.6; margin: 0; background: #ffffff; padding: 12px 14px; border-radius: 10px; border: 1px solid #f1f5f9;">
                        ${descText}
                    </p>
                </div>
            </div>

            <!-- Footer Action Bar -->
            <div style="display: flex; gap: 12px; align-items: center; padding-top: 16px; border-top: 1px solid #f1f5f9;">
                <button onclick="closeOpportunityDetailModal()" style="padding: 12px 20px; border-radius: 12px; border: 1px solid #cbd5e1; background: #ffffff; color: #475569; font-weight: 700; font-size: 12px; cursor: pointer; transition: all 0.2s;">
                    ${btnCloseText}
                </button>
                <button onclick="startGuidedNegotiation('${item.id}', '${item.type}')" style="flex: 1; padding: 13px 20px; border-radius: 12px; border: none; background: var(--cat-color); color: #ffffff; font-weight: 800; font-size: 12px; letter-spacing: 0.04em; text-transform: uppercase; cursor: pointer; box-shadow: 0 4px 12px -2px rgba(0,0,0,0.2); transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px;" onmouseover="this.style.backgroundColor='var(--cat-hover)'" onmouseout="this.style.backgroundColor='var(--cat-color)'">
                    <span>${btnInterestText}</span>
                    <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span>
                </button>
            </div>
        </div>
    `;

    const modal = document.getElementById('opportunityDetailModal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeOpportunityDetailModal() {
    const modal = document.getElementById('opportunityDetailModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

window.startGuidedNegotiation = startGuidedNegotiation;
window.openOpportunityDetailModal = openOpportunityDetailModal;
window.closeOpportunityDetailModal = closeOpportunityDetailModal;

function selectWizardSector(sectorCode) {
    wizardState.selectedSector = sectorCode;
    
    // Highlight card
    document.querySelectorAll('.sector-card').forEach(c => c.classList.remove('selected'));
    const selectedCard = document.getElementById(`sector-${sectorCode}-card`);
    if (selectedCard) selectedCard.classList.add('selected');
    
    // Render Step 2 Categories and navigate
    renderCategoryChips();
    wizardState.currentStep = 2;
    updateWizardUI();
}

function renderCategoryChips() {
    const container = document.getElementById('wizard-category-chips');
    if (!container) return;
    container.innerHTML = '';
    
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const activeCatalog = getCatalog();
    const sector = activeCatalog[wizardState.selectedSector];
    if (!sector) {
        // Handle "other" or empty sectors
        const label = lang === 'pt' ? 'Escreva a Categoria Desejada:' : 'Write the Desired Category:';
        const placeholder = lang === 'pt' ? 'Ex: Construção Civil, Serviços Financeiros...' : 'e.g., Civil Construction, Financial Services...';
        container.innerHTML = `
            <div class="wizard-input-group" style="width: 100%;">
                <label class="wizard-input-label">${label}</label>
                <input type="text" id="wizard-custom-category" class="wizard-input" placeholder="${placeholder}" oninput="wizardState.selectedCategory = this.value">
            </div>
        `;
        return;
    }
    
    Object.keys(sector.categories).forEach(catKey => {
        const cat = sector.categories[catKey];
        const chip = document.createElement('button');
        chip.className = 'suggestion-chip';
        chip.style.cssText = 'padding: 12px 24px; border-radius: 12px; font-weight: bold;';
        chip.textContent = cat.label;
        chip.onclick = () => {
            wizardState.selectedCategory = catKey;
            renderProductAndQtyChips();
            wizardState.currentStep = 3;
            updateWizardUI();
        };
        container.appendChild(chip);
    });
    
    // Always add an "Outro" custom option
    const otherChip = document.createElement('button');
    otherChip.className = 'suggestion-chip';
    otherChip.style.cssText = 'padding: 12px 24px; border-radius: 12px; font-weight: bold; border-style: dashed; border-color: var(--secondary);';
    otherChip.textContent = lang === 'pt' ? 'Outro (Não listado)' : 'Other (Not listed)';
    otherChip.onclick = () => {
        wizardState.selectedCategory = 'outro';
        renderProductAndQtyChips();
        wizardState.currentStep = 3;
        updateWizardUI();
    };
    container.appendChild(otherChip);
}

function renderProductAndQtyChips() {
    const prodContainer = document.getElementById('wizard-product-chips');
    const qtyContainer = document.getElementById('wizard-qty-chips');
    const unitBadge = document.getElementById('wizard-unit-badge');
    
    if (!prodContainer || !qtyContainer) return;
    
    prodContainer.innerHTML = '';
    qtyContainer.innerHTML = '';
    
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const activeCatalog = getCatalog();
    const sector = activeCatalog[wizardState.selectedSector];
    const cat = sector ? sector.categories[wizardState.selectedCategory] : null;
    
    if (cat) {
        if (unitBadge) unitBadge.textContent = cat.unit;
        
        // Render products
        cat.products.forEach(p => {
            const chip = document.createElement('button');
            chip.className = 'suggestion-chip';
            chip.textContent = p;
            chip.onclick = () => {
                document.getElementById('wizard-product-input').value = p;
                wizardState.selectedProduct = p;
                // Highlight product chips
                prodContainer.querySelectorAll('.suggestion-chip').forEach(c => c.classList.remove('selected'));
                chip.classList.add('selected');
            };
            prodContainer.appendChild(chip);
        });
        
        // Render quantities & configure dynamic slider limits
        const qtySlider = document.getElementById('wizard-qty-slider');
        const numericQtys = cat.quantities.map(q => parseFloat(q)).filter(n => !isNaN(n));
        
        if (qtySlider && numericQtys.length > 0) {
            const minVal = Math.min(...numericQtys);
            const maxVal = Math.max(...numericQtys) * 1.5;
            
            qtySlider.min = minVal >= 1 ? minVal : 1;
            qtySlider.max = Math.ceil(maxVal);
            qtySlider.step = minVal >= 100 ? 50 : (minVal >= 10 ? 5 : 1);
            
            const minLabel = document.getElementById('wizard-slider-min');
            const maxLabel = document.getElementById('wizard-slider-max');
            if (minLabel) minLabel.textContent = qtySlider.min;
            if (maxLabel) maxLabel.textContent = qtySlider.max;
            
            // Set initial values
            qtySlider.value = minVal;
            document.getElementById('wizard-qty-input').value = minVal;
            wizardState.selectedQty = minVal.toString();
        }

        cat.quantities.forEach(q => {
            const chip = document.createElement('button');
            chip.className = 'suggestion-chip';
            chip.textContent = q;
            chip.onclick = () => {
                const num = parseFloat(q) || 1;
                document.getElementById('wizard-qty-input').value = num;
                if (qtySlider) {
                    if (num > parseFloat(qtySlider.max)) {
                        qtySlider.max = num;
                        const maxLabel = document.getElementById('wizard-slider-max');
                        if (maxLabel) maxLabel.textContent = Math.round(num);
                    }
                    qtySlider.value = num;
                }
                wizardState.selectedQty = num.toString();
                // Highlight qty chips
                qtyContainer.querySelectorAll('.suggestion-chip').forEach(c => c.classList.remove('selected'));
                chip.classList.add('selected');
            };
            qtyContainer.appendChild(chip);
        });
    } else {
        if (unitBadge) unitBadge.textContent = lang === 'pt' ? 'unidades' : 'units';
        
        // Custom or "outro" inputs
        const msgSpec = lang === 'pt' ? 'Escreva as especificações do produto abaixo.' : 'Specify product specifications below.';
        const msgQty = lang === 'pt' ? 'Escreva a quantidade pretendida abaixo.' : 'Specify the desired quantity below.';
        prodContainer.innerHTML = `<span class="text-xs text-on-surface-variant">${msgSpec}</span>`;
        qtyContainer.innerHTML = `<span class="text-xs text-on-surface-variant">${msgQty}</span>`;
        
        const qtySlider = document.getElementById('wizard-qty-slider');
        if (qtySlider) {
            qtySlider.min = 1;
            qtySlider.max = 5000;
            qtySlider.step = 10;
            const minLabel = document.getElementById('wizard-slider-min');
            const maxLabel = document.getElementById('wizard-slider-max');
            if (minLabel) minLabel.textContent = '1';
            if (maxLabel) maxLabel.textContent = '5000';
            qtySlider.value = 100;
            document.getElementById('wizard-qty-input').value = 100;
            wizardState.selectedQty = '100';
        }
    }
}

async function wizardNextStep() {
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    
    if (wizardState.currentStep === 1) {
        if (!wizardState.selectedSector) {
            alert(lang === 'pt' ? 'Por favor, selecione um setor para avançar.' : 'Please select a sector to proceed.');
            return;
        }
    } else if (wizardState.currentStep === 2) {
        if (wizardState.selectedSector === 'other') {
            const customCat = document.getElementById('wizard-custom-category');
            if (customCat && !customCat.value.trim()) {
                alert(lang === 'pt' ? 'Por favor, especifique o setor/categoria desejado.' : 'Please specify the desired sector/category.');
                return;
            }
            wizardState.selectedCategory = customCat ? customCat.value.trim() : 'Outro';
        } else if (!wizardState.selectedCategory) {
            alert(lang === 'pt' ? 'Por favor, selecione uma categoria para avançar.' : 'Please select a category to proceed.');
            return;
        }
    } else if (wizardState.currentStep === 3) {
        const prodVal = document.getElementById('wizard-product-input').value.trim();
        const qtyVal = document.getElementById('wizard-qty-input').value.trim();
        
        if (!prodVal) {
            alert(lang === 'pt' ? 'Por favor, especifique o produto ou serviço pretendido.' : 'Please specify the desired product or service.');
            return;
        }
        if (!qtyVal) {
            alert(lang === 'pt' ? 'Por favor, introduza a quantidade/volume.' : 'Please enter the quantity/volume.');
            return;
        }
        
        wizardState.selectedProduct = prodVal;
        wizardState.selectedQty = qtyVal;
        wizardState.urgency = document.querySelector('input[name="wizard-urgency"]:checked').value;
        
        // Auto navigate to step 4
        wizardState.currentStep = 4;
        updateWizardUI();
        return;
    } else if (wizardState.currentStep === 4) {
        // Validate Contacts and submit!
        const whatsapp = document.getElementById('wizard-contact-whatsapp').value.trim();
        const email = document.getElementById('wizard-contact-email').value.trim();
        const country = document.getElementById('wizard-contact-country').value;
        const logistics = document.querySelector('input[name="wizard-logistics"]:checked').value;
        const desc = document.getElementById('wizard-contact-desc').value.trim();
        const port = document.getElementById('wizard-contact-port') ? document.getElementById('wizard-contact-port').value.trim() : '';
        
        if (!whatsapp || whatsapp.length < 5) {
            alert(lang === 'pt' ? 'Por favor, insira um contacto WhatsApp válido.' : 'Please enter a valid WhatsApp contact.');
            return;
        }
        if (!email || !email.includes('@')) {
            alert(lang === 'pt' ? 'Por favor, insira um endereço de e-mail corporativo válido.' : 'Please enter a valid corporate email address.');
            return;
        }
        
        wizardState.whatsapp = whatsapp;
        wizardState.email = email;
        wizardState.country = country;
        wizardState.logistics = logistics;
        wizardState.port = port || (lang === 'pt' ? 'Não especificado' : 'Not specified');
        wizardState.description = desc;
        
        // Process new B2B requirement push
        const activeCatalog = getCatalog();
        const sectorLabel = activeCatalog[wizardState.selectedSector] ? activeCatalog[wizardState.selectedSector].label : (lang === 'pt' ? 'Serviços' : 'Services');
        const categoryLabel = (wizardState.selectedCategory === 'outro') ? (lang === 'pt' ? 'Outro' : 'Other') : wizardState.selectedCategory;
        
        const finalTitlePt = `Aquisição de ${wizardState.selectedProduct}`;
        const finalTitleEn = `Acquisition of ${wizardState.selectedProduct}`;
        const finalCategoryPt = `Consultoria para ${sectorLabel} (${categoryLabel})`;
        const finalCategoryEn = `${sectorLabel} Consulting (${categoryLabel})`;
        
        const finalDescPt = `${desc ? desc + ' | ' : ''}Prazo: ${wizardState.urgency} | Porto de Receção: ${wizardState.port}`;
        const finalDescEn = `${desc ? desc + ' | ' : ''}Term: ${wizardState.urgency} | Receiving Port: ${wizardState.port}`;
        
        const pushLocalWizard = () => {
            const newId = `req_${appState.requirements.length + 1}`;
            appState.requirements.push({
                id: newId,
                title: finalTitlePt,
                titleEn: finalTitleEn,
                category: finalCategoryPt,
                categoryEn: finalCategoryEn,
                description: finalDescPt,
                descriptionEn: finalDescEn,
                quantity: wizardState.selectedQty,
                country: wizardState.country,
                logistics: wizardState.logistics,
                date: new Date().toISOString().split('T')[0],
                status: 'pendente',
                owner: appState.currentUser ? appState.currentUser.id : 'buyer_1',
                assignedConsultant: null,
                contactWhatsapp: wizardState.whatsapp,
                contactEmail: wizardState.email
            });
            saveState();
        };

        // Check if logged in with real Supabase user
        if (appState.currentUser && appState.currentUser.id && appState.currentUser.id.includes('-')) {
            try {
                await window.gvApi.postRequirement({
                    buyer_id: appState.currentUser.id,
                    title: finalTitlePt,
                    category: finalCategoryPt,
                    description: finalDescPt,
                    quantity: parseFloat(wizardState.selectedQty) || 1,
                    country: wizardState.country,
                    logistics_included: wizardState.logistics === 'Sim'
                }, {
                    email: wizardState.email,
                    whatsapp: wizardState.whatsapp
                });
                
                await syncMuralFromSupabase();
            } catch (err) {
                console.error("Erro ao gravar wizard no Supabase. Gravando local:", err);
                pushLocalWizard();
            }
        } else {
            pushLocalWizard();
        }
        
        // Exibição proeminente do aviso de contacto via modal estilizado
        showVisualSuccessModal(
            lang === 'pt' ? 'Solicitação B2B Registada' : 'B2B Request Registered',
            lang === 'pt' 
                ? 'O seu pedido foi encaminhado com sucesso. As suas informações foram salvas em ambiente encriptado e seguro, visíveis exclusivamente para o Administrador geral.'
                : 'Your request has been successfully submitted. Your information has been saved in an encrypted and secure environment, visible exclusively to the General Administrator.',
            lang === 'pt' 
                ? 'Entraremos em contacto pelo WhatsApp ou pelo E-mail'
                : 'We will contact you via WhatsApp or E-mail'
        );
        
        closeRequestWizard();
        renderOpportunityWall(); // Refresh lists
        
        // Redirect to wall to see the card
        window.location.hash = 'wall';
        return;
    }
    
    wizardState.currentStep += 1;
    updateWizardUI();
}

function wizardPrevStep() {
    if (wizardState.currentStep > 1) {
        wizardState.currentStep -= 1;
        updateWizardUI();
    }
}

function updateWizardUI() {
    // Show/hide step panels
    for (let i = 1; i <= 4; i++) {
        const panel = document.getElementById(`wstep-panel-${i}`);
        const dot = document.getElementById(`wstep-dot-${i}`);
        
        if (panel) {
            if (i === wizardState.currentStep) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        }
        
        if (dot) {
            dot.classList.remove('active', 'completed');
            if (i === wizardState.currentStep) {
                dot.classList.add('active');
            } else if (i < wizardState.currentStep) {
                dot.classList.add('completed');
            }
        }
    }
    
    // Update footer buttons
    const btnPrev = document.getElementById('wizard-btn-prev');
    const btnNext = document.getElementById('wizard-btn-next');
    
    if (btnPrev) {
        btnPrev.disabled = (wizardState.currentStep === 1);
    }
    
    if (btnNext) {
        if (wizardState.currentStep === 4) {
            btnNext.textContent = 'Submeter Requisito';
            btnNext.style.backgroundColor = 'var(--secondary)';
        } else {
            btnNext.textContent = 'Avançar';
            btnNext.style.backgroundColor = '';
        }
    }
}

// Expose Wizard API globally
window.openRequestWizard = openRequestWizard;
window.closeRequestWizard = closeRequestWizard;
window.selectWizardSector = selectWizardSector;
window.wizardNextStep = wizardNextStep;
window.wizardPrevStep = wizardPrevStep;

function toggleLatestDemands() {
    const marketSection = document.getElementById('cms-wrap-market');
    if (!marketSection) return;
    
    const isHidden = marketSection.style.display === 'none';
    if (isHidden) {
        marketSection.style.display = 'block';
        setTimeout(() => {
            marketSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    } else {
        marketSection.style.display = 'none';
    }
}
window.toggleLatestDemands = toggleLatestDemands;

// SUPABASE CLIENT SYNC HELPERS
async function syncMuralFromSupabase() {
    if (!window.gvApi) {
        console.warn("API de conexão do Supabase (gvApi) não está disponível.");
        return;
    }
    try {
        const items = await window.gvApi.getMural();
        if (items && items.length > 0) {
            // Mapping requirements
            appState.requirements = items.filter(x => x.type === 'need').map(x => ({
                id: x.id,
                title: x.title,
                category: x.category,
                description: x.description,
                quantity: x.quantity + (typeof x.quantity === 'number' || !isNaN(x.quantity) ? ' Toneladas' : ''),
                country: x.country,
                logistics: x.logisticsIncluded ? 'Sim' : 'Não',
                date: new Date(x.createdAt).toISOString().split('T')[0],
                status: x.status || 'pendente',
                owner: x.ownerId
            }));

            // Mapping offers
            appState.offers = items.filter(x => x.type === 'offer').map(x => ({
                id: x.id,
                title: x.title,
                category: x.category,
                description: x.description,
                quantity: x.quantity + (typeof x.quantity === 'number' || !isNaN(x.quantity) ? ' Toneladas' : ''),
                country: x.country,
                logistics: x.logisticsIncluded ? 'Sim' : 'Não',
                date: new Date(x.createdAt).toISOString().split('T')[0],
                status: x.status || 'pendente',
                owner: x.ownerId
            }));
            
            saveState();
            
            // Re-render wall if we are on it
            const currentView = window.location.hash ? window.location.hash.substring(1) : 'home';
            if (currentView.startsWith('wall')) {
                renderOpportunityWall();
            }
        }
    } catch (e) {
        console.error("Erro na sincronização de dados com Supabase:", e);
    }
}
window.syncMuralFromSupabase = syncMuralFromSupabase;

let activeChatSubscription = null;
async function setupSupabaseChat(matchId, channelType, containerId) {
    if (!appState.currentUser || !appState.currentUser.id || !appState.currentUser.id.includes('-')) return;
    try {
        const rooms = await window.gvApi.getChatRooms(appState.currentUser.id);
        const activeRoom = rooms.find(r => r.negotiation_id === matchId);
        if (!activeRoom) return;

        // Load existing messages
        const dbMsgs = await window.gvApi.getChatMessages(activeRoom.id);
        
        // Filter out and update local messages
        appState.messages = appState.messages.filter(m => m.matchId !== matchId || m.channel !== channelType);
        dbMsgs.forEach(m => {
            appState.messages.push({
                id: m.id,
                matchId: matchId,
                senderId: m.sender_id,
                senderRole: appState.currentUser.id === m.sender_id ? appState.currentUser.role : (appState.currentUser.role === 'consultant' ? 'user' : 'consultant'),
                text: m.message_text,
                timestamp: m.created_at,
                channel: channelType
            });
        });
        saveState();

        // Refresh UI once loaded
        const area = document.getElementById(`${containerId}-messages-area`);
        if (area) {
            // Re-render message list inline without full page redraw
            area.innerHTML = '';
            appState.messages.filter(m => m.matchId === matchId && m.channel === channelType).forEach(m => {
                const isMe = appState.currentUser.id === m.senderId;
                const bubble = document.createElement('div');
                bubble.className = `chat-bubble ${isMe ? 'sent' : 'received'}`;
                bubble.innerHTML = `<p>${m.text}</p>`;
                area.appendChild(bubble);
            });
            area.scrollTop = area.scrollHeight;
        }

        // Subscribe to real-time changes
        if (activeChatSubscription) {
            await window.gvApi.unsubscribe(activeChatSubscription);
        }
        activeChatSubscription = window.gvApi.subscribeToMessages(activeRoom.id, (newMsg) => {
            // Add if not present
            if (!appState.messages.some(m => m.id === newMsg.id)) {
                appState.messages.push({
                    id: newMsg.id,
                    matchId: matchId,
                    senderId: newMsg.sender_id,
                    senderRole: appState.currentUser.id === newMsg.sender_id ? appState.currentUser.role : (appState.currentUser.role === 'consultant' ? 'user' : 'consultant'),
                    text: newMsg.message_text,
                    timestamp: newMsg.created_at,
                    channel: channelType
                });
                saveState();
                
                // Redraw chat area
                const refreshArea = document.getElementById(`${containerId}-messages-area`);
                if (refreshArea) {
                    const bubble = document.createElement('div');
                    const isMe = appState.currentUser.id === newMsg.sender_id;
                    bubble.className = `chat-bubble ${isMe ? 'sent' : 'received'}`;
                    bubble.innerHTML = `<p>${newMsg.message_text}</p>`;
                    refreshArea.appendChild(bubble);
                    refreshArea.scrollTop = refreshArea.scrollHeight;
                }
            }
        });
    } catch (e) {
        console.error("Erro no setup do chat Supabase:", e);
    }
}
window.setupSupabaseChat = setupSupabaseChat;

// Modal de sucesso visual com aviso de contacto destacado
function showVisualSuccessModal(title, text, highlightText) {
    const modalId = 'dynamic-success-modal';
    let modal = document.getElementById(modalId);
    if (!modal) {
        modal = document.createElement('div');
        modal.id = modalId;
        modal.className = 'fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm';
        modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 16px; background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(8px);';
        document.body.appendChild(modal);
    }
    
    modal.innerHTML = `
        <div class="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl scale-in-animation border border-slate-100" style="background: white; border-radius: 24px; padding: 32px; max-width: 400px; width: 100%; text-align: center; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); animation: popScale 0.3s ease-out;">
            <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl" style="width: 64px; height: 64px; background: #ecfdf5; color: #059669; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; font-size: 32px;">
                <span class="material-symbols-outlined" style="font-size: 40px; color: #059669;">check_circle</span>
            </div>
            <h3 class="font-outfit font-bold text-xl text-slate-800 mb-2" style="font-size: 20px; color: #1e293b; margin-bottom: 8px;">${title}</h3>
            
            <p class="text-xs font-semibold text-emerald-700 bg-emerald-50 py-3 px-4 rounded-xl mb-4 border border-emerald-100" style="font-size: 13px; font-weight: 600; color: #047857; background: #f0fdf4; padding: 12px 16px; border-radius: 12px; margin-bottom: 16px; border: 1px solid #d1fae5; line-height: 1.4;">
                ${highlightText}
            </p>
            
            <p class="text-xs text-slate-500 mb-6" style="font-size: 12px; color: #64748b; margin-bottom: 24px; line-height: 1.5;">${text}</p>
            
            <button onclick="document.getElementById('${modalId}').style.display='none'" class="w-full py-3 bg-secondary text-white font-bold text-xs rounded-xl hover:opacity-90 transition active:scale-95 cursor-pointer" style="width: 100%; padding: 12px; background: #00374a; color: white; border: none; border-radius: 12px; font-weight: bold; font-size: 13px; cursor: pointer;">
                Entendido
            </button>
        </div>
    `;
    
    if (!document.getElementById('success-modal-style')) {
        const style = document.createElement('style');
        style.id = 'success-modal-style';
        style.textContent = `
            @keyframes popScale {
                0% { transform: scale(0.9); opacity: 0; }
                100% { transform: scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    modal.style.display = 'flex';
}
window.showVisualSuccessModal = showVisualSuccessModal;
