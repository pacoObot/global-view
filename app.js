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
        rate_limit_warning: "Demasiadas tentativas. Aguarde antes de tentar novamente.",
        login_blocked: "Acesso temporariamente bloqueado por segurança.",
        security_warning: "Aviso de Segurança",
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
        rate_limit_warning: "Too many attempts. Please wait before trying again.",
        login_blocked: "Access temporarily blocked for security.",
        security_warning: "Security Warning",
    }
};

// EN TRANSLATION CATALOG FOR THE WIZARD
const GV_CATALOG_EN = {
    agro: {
        label: 'Commodities',
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
            outras_commodities: { 
                label: 'Other Commodities & Grains', 
                unit: 'Tons', 
                products: ['Refined Soybean Oil', 'Pigeon Peas / Beans', 'Yellow / White Corn', 'Raw Cotton Lint'], 
                quantities: ['50 Tons', '100 Tons', '500 Tons', '1000 Tons'] 
            }
        }
    },
    energy: {
        label: 'Energy & Minerals',
        icon: 'bolt',
        color: '#b45309',
        categories: {
            solar: {
                label: 'Solar Energy Derivatives',
                unit: 'Units / Batch',
                products: ['Monocrystalline Solar Panels (550W+)', 'Three-Phase Solar Inverters (10kW–100kW)', 'Industrial LiFePO4 Lithium Batteries', 'Solar Mounting Systems & Trackers', 'MPPT Charge Controllers', 'Solar Photovoltaic Cables (bulk)'],
                quantities: ['10 units', '50 units', '100 units', 'Commercial Batch', 'Turnkey Solar Project']
            },
            oil_gas: {
                label: 'Oil & Gas',
                unit: 'Tons / Liters / Barrels',
                products: ['Diesel Fuel EN590 10ppm', 'Liquefied Natural Gas (LNG)', 'Industrial & Marine Lubricating Oils', 'High-Pressure Offshore Hoses & Pipes', 'Drilling Equipment & API Valves', 'Industrial Gasoline'],
                quantities: ['50,000 Liters', '100 Tons', '500 Tons', 'Monthly Recurring Contract']
            },
            minerais: {
                label: 'Minerals',
                unit: 'Metric Tons (MT)',
                products: ['Iron Ore (62% Fe)', 'Thermal Coal', 'Heavy Mineral Sands (Ilmenite/Rutile/Zircon)', 'Copper Concentrate', 'High Purity Flake Graphite', 'Industrial Gold & Raw Ores'],
                quantities: ['1,000 MT', '5,000 MT', '10,000 MT', '50,000 MT/Month']
            }
        }
    },
    chemicals: {
        label: 'Chemical Products',
        icon: 'science',
        color: '#7c3aed',
        categories: {
            acidos: {
                label: 'Acids & Solvents',
                unit: 'Units',
                products: ['Glacial Acetic Acid (2.5L)', 'Hydrochloric Acid 32% (2.5L)', 'Hydrochloric Acid 37% (2.5L)', 'Phosphoric Acid (250ml)', 'Methanol (2.5L)'],
                quantities: ['1 unit', '2 units', '5 units', '10 units']
            },
            sais: {
                label: 'Salts & Inorganic Compounds',
                unit: 'Units',
                products: ['Ammonium Sulfate (100g)', 'Calcium Chloride Hexahydrate (250g)', 'Sodium Chloride (250g)', 'Sodium Hydroxide (500g)', 'Sodium Hypochlorite (2.5L)', 'Sodium Nitrate (250g)', 'Potassium Nitrate (50g)', 'Potassium Cyanide (250g)', 'Di-Sodium Hydrogenophosphate (500g)', 'Sodium hydrogenPhosphate dibasic dihydrate (500g)', 'Copper II sulfate pentahydrate (250g)', 'Sodium Tetraborate Decahydrate (500g)'],
                quantities: ['1 unit', '2 units', '4 units', '6 units']
            },
            reagentes: {
                label: 'Analytical Reagents',
                unit: 'Units',
                products: ['4-Hydroxybenzoic Acid Hydrazine (25g)', 'BRIJ-35 (100ml)', 'Chloramine T Trihydrate (250g)', 'Citric Acid Monohydrate (500g)', 'D(-) Fructose (250g)', 'D(+) Glucose Anhydrous (250g)', 'Sodium Nitroprusside Dihydrate (100g)', 'Sodium Salicylate (500g)', 'Sulfanilic Acid (250g)', 'Hydrazine Sulfate (100g)', 'Sulfanilamide (100g)', 'GLS Control Chemical Sample (100g)', 'N-(1-naphtyl)ethylenediamine dihydrochloride (250g)'],
                quantities: ['1 unit', '2 units', '4 units', '6 units']
            },
            consumiveis: {
                label: 'Laboratory Consumables',
                unit: 'Units',
                products: ['Extran AP 11 — Alkaline Detergent (2Kg)', 'Extran MA 01 — Neutral Detergent (1L)', 'Qualitative Filter Papers No.40 125mm (100 units)', 'Qualitative Filter Papers No.11 80mm (100 units)', 'Activated Carbon (500g)'],
                quantities: ['1 unit', '2 units', '10 units', '50 units']
            }
        }
    },
    machinery: {
        label: 'Equipment & Machinery',
        icon: 'precision_manufacturing',
        color: '#0d9488',
        categories: {
            pecas: {
                label: 'Spare Parts & Components',
                unit: 'Units / Kits',
                products: ['Industrial Oil & Air Filters', 'Transmission Belts & Chains', 'Heavy-Duty Bearings & Bushings', 'Hydraulic Valves & Cylinders', 'Three-Phase Electric Motors', 'Tractor & Crane Spare Parts', 'Preventive Maintenance Kits', 'Brake Pads & Friction Discs'],
                quantities: ['1 kit / unit', '5 units', '10 units', 'Batch Replacements (50+)']
            },
            tratores: {
                label: 'Tractors & Agricultural Machinery',
                unit: 'Units',
                products: ['Agricultural Wheeled Tractor', 'Crawler / Track Tractor', 'Compact Mini-Tractor', 'Orchard / Vineyard Tractor', 'Forestry Tractor', 'Backhoe Loader', 'Hydraulic Excavator', 'Bulldozer / Dozer'],
                quantities: ['1 unit', '2 units', '5 units', '10 units', '20 units']
            },
            navios: {
                label: 'Vessels & Ships',
                unit: 'Units / Vessel',
                products: ['Bulk Carrier (Dry Cargo Ship)', 'Container Ship', 'Oil Tanker', 'Hydraulic Dredge', 'Industrial Fishing Vessel', 'Tugboat / Tug', 'Ferry & Passenger Vessel', 'River Barge'],
                quantities: ['1 vessel', '2 vessels', '3 vessels', 'Fleet (5+)']
            },
            carpintaria: {
                label: 'Carpentry & Woodworking Equipment',
                unit: 'Units',
                products: ['Industrial Band Saw', 'Circular Table Saw', 'Surface Planer / Thicknesser', 'CNC Router / Spindle Moulder', 'Hydraulic Wood Press', 'Timber Kiln / Dryer', 'Industrial Belt Sander', 'Combined Multi-Operation Machine'],
                quantities: ['1 unit', '2 units', '5 units', '10 units']
            },
            elevacao: {
                label: 'Cranes, Forklifts & Lifting',
                unit: 'Units',
                products: ['Counterbalance Forklift (3–7T)', 'Reach Truck (Electric)', 'Heavy Duty Forklift (10–25T+)', 'Tower Crane', 'All-Terrain Mobile Crane', 'Industrial Overhead Bridge Crane', 'Aerial Work Platform (Manlift)', 'Electric Stacker'],
                quantities: ['1 unit', '2 units', '5 units', '10 units']
            },
            industriais: {
                label: 'Heavy Industrial Machinery',
                unit: 'Units',
                products: ['Industrial Screw Compressor', 'Three-Phase Generator Set', 'Hydraulic Press (100–500T)', 'Plastic Injection Moulding Machine', 'CNC Laser Cutting Machine', 'Industrial Ball Mill', 'Industrial Shredder / Grinder', 'Industrial Extruder'],
                quantities: ['1 unit', '2 units', '5 units', '10 units']
            }
        }
    },
    tech: {
        label: 'Technology',
        icon: 'memory',
        color: '#2563eb',
        categories: {
            chips: {
                label: 'Chips & Processors',
                unit: 'Units (bulk)',
                products: ['Intel Processors (bulk)', 'AMD Processors (bulk)', 'Microcontrollers & MCUs (ESP32/STM32)', 'NAND Flash Memory Chips', 'FPGAs (Xilinx / Intel Altera)', 'Mobile SoC Processors (Qualcomm / MediaTek)'],
                quantities: ['10 units', '50 units', '100 units', '500 units', '1000 units']
            },
            memoria: {
                label: 'Memory & Storage',
                unit: 'Units (bulk)',
                products: ['DDR4 RAM Modules', 'DDR5 RAM Modules', 'NVMe M.2 SSD', 'SATA 2.5" SSD', 'eMMC Flash (embedded)', 'Industrial microSD Cards', 'Enterprise 3.5" HDD'],
                quantities: ['10 units', '50 units', '100 units', '500 units', '1000 units']
            },
            placas: {
                label: 'Motherboards & Expansion Cards',
                unit: 'Units (bulk)',
                products: ['Intel Desktop Motherboard', 'AMD Desktop Motherboard', 'Server / Workstation Motherboard', 'NVIDIA GPU Card (bulk)', 'AMD GPU Card (bulk)', 'Network Interface Card (NIC)', 'Single-Board Computer (SBC)'],
                quantities: ['5 units', '10 units', '50 units', '100 units']
            },
            energia_eletro: {
                label: 'Chargers & Power Supply',
                unit: 'Units (bulk)',
                products: ['ATX Power Supply Unit (PSU)', 'USB-C GaN Charger', 'Li-Ion 18650 Batteries (bulk)', 'LiPo Batteries (drones/devices)', 'Industrial Power Bank', 'Portable Solar Panels'],
                quantities: ['10 units', '50 units', '100 units', '500 units', '1000 units']
            },
            perifericos_eletro: {
                label: 'Peripherals & Displays',
                unit: 'Units (bulk)',
                products: ['LCD/IPS Monitor (bulk)', 'OLED Mobile Display Panels', 'IP Security Camera', 'Thermal Label Printer', 'Industrial Barcode Scanner', 'Keyboard & Mouse Set (bulk)'],
                quantities: ['10 units', '50 units', '100 units', '500 units']
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
            } else if (cat.includes('químico') || cat.includes('reagente') || cat.includes('indústria') || cat.includes('laborat')) {
                return 'Industry & Chemical Reagents';
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
            title: 'UREA 46% (UREA56)',
            titleEn: 'UREA 46% (UREA56)',
            category: 'Commodities',
            description: 'Demanda B2B para importação de 50.000 MT de UREA 46% (UREA56) destinada ao mercado do Malawi com suporte logístico e intermediação segura da GV-CPS.',
            descriptionEn: 'B2B requirement for importation of 50,000 MT of UREA 46% (UREA56) destined for Malawi with GV-CPS logistics support and secure intermediation.',
            quantity: '50.000 MT',
            quantityEn: '50,000 MT',
            country: 'Malawi',
            countryEn: 'Malawi',
            logistics: 'Sim',
            date: '2026-08-20',
            status: 'atendimento',
            owner: 'buyer_1',
            assignedConsultant: 'consultant_1',
            contactWhatsapp: '+265 99 123 4567',
            contactEmail: 'demands.mw@gvcps-b2b.com'
        },
        {
            id: 'req_2',
            title: 'Ácido Sulfúrico',
            titleEn: 'Sulfuric Acid',
            category: 'Produtos químicos',
            description: 'Demanda de grande porte para fornecimento de 50.000 MT de Ácido Sulfúrico com destino à Zâmbia.',
            descriptionEn: 'Large-scale requirement for the supply of 50,000 MT of Sulfuric Acid to Zambia.',
            quantity: '50.000 MT',
            quantityEn: '50,000 MT',
            country: 'Zâmbia',
            countryEn: 'Zambia',
            logistics: 'Sim',
            date: '2026-08-19',
            status: 'analise',
            owner: 'buyer_1',
            assignedConsultant: 'consultant_1',
            contactWhatsapp: '+260 97 123 4567',
            contactEmail: 'demands.zm@gvcps-b2b.com'
        },
        {
            id: 'req_3',
            title: 'UREA Granulada',
            titleEn: 'Granulated UREA',
            category: 'Commodities',
            description: 'Necessidade de compra e fornecimento de 30.000 MT de UREA Granulada para o setor agrícola na Zâmbia.',
            descriptionEn: 'Purchase requirement and supply of 30,000 MT of Granulated UREA for the agricultural sector in Zambia.',
            quantity: '30.000 MT',
            quantityEn: '30,000 MT',
            country: 'Zâmbia',
            countryEn: 'Zambia',
            logistics: 'Sim',
            date: '2026-08-18',
            status: 'pendente',
            owner: 'buyer_1',
            assignedConsultant: null,
            contactWhatsapp: '+260 96 987 6543',
            contactEmail: 'agri.zm@gvcps-b2b.com'
        },
        {
            id: 'req_4',
            title: 'Milho Amarelo',
            titleEn: 'Yellow Corn',
            category: 'Commodities',
            description: 'Suprimento recorrente de 300.000 MT de Milho Amarelo no total (remessas mensais de 25.000 MT/Mês) para a Guiné-Conacri.',
            descriptionEn: 'Recurring supply of 300,000 MT of Yellow Corn total (monthly shipments of 25,000 MT/Month) for Guinea-Conakry.',
            quantity: '300.000 MT (25.000 MT/Mês)',
            quantityEn: '300,000 MT (25,000 MT/Month)',
            country: 'Guiné-Conacri',
            countryEn: 'Guinea-Conakry',
            logistics: 'Sim',
            date: '2026-08-17',
            status: 'atendimento',
            owner: 'buyer_1',
            assignedConsultant: 'consultant_1',
            contactWhatsapp: '+224 62 123 4567',
            contactEmail: 'grain.gn@gvcps-b2b.com'
        },
        {
            id: 'req_5',
            title: 'Importação de Óleo de Soja Refinado',
            titleEn: 'Refined Soybean Oil Importation',
            category: 'Commodities',
            description: 'Buscamos fornecedor qualificado para suprir demanda recorrente de óleo de soja refinado de qualidade premium em Moçambique.',
            descriptionEn: 'We are looking for a qualified supplier to meet the recurring demand for premium quality refined soybean oil in Mozambique.',
            quantity: '500 Toneladas',
            quantityEn: '500 Tons',
            country: 'Moçambique',
            countryEn: 'Mozambique',
            logistics: 'Sim',
            date: '2026-06-17',
            status: 'atendimento',
            owner: 'buyer_1',
            assignedConsultant: 'consultant_1',
            contactWhatsapp: '+258 84 999 1111',
            contactEmail: 'compras@sojaco.mz'
        },
        {
            id: 'req_6',
            title: 'Aquisição de Peças de Reposição & Filtros para Subestação',
            titleEn: 'Acquisition of Spare Parts & Filters for Electrical Substation',
            category: 'Equipamentos e Máquinas',
            description: 'Componentes técnicos e peças de reposição para manutenção preventiva de equipamentos elétricos e motores industriais.',
            descriptionEn: 'Technical components and spare parts for preventive maintenance of electrical equipment and industrial motors.',
            quantity: 'Lote de Reposição',
            quantityEn: 'Replacement Lot',
            country: 'Moçambique',
            countryEn: 'Mozambique',
            logistics: 'Não',
            date: '2026-06-16',
            status: 'analise',
            owner: 'buyer_1',
            assignedConsultant: 'consultant_1',
            contactWhatsapp: '+258 82 444 5555',
            contactEmail: 'infra@engenharia.co.mz'
        },
        {
            id: 'req_7',
            title: 'Fornecimento de Reagentes Analíticos & Ácido Acético Glacial',
            titleEn: 'Supply of Analytical Reagents & Glacial Acetic Acid',
            category: 'Produtos químicos',
            description: 'Aquisição em grande escala de reagentes analíticos e solventes químicos de alta pureza para laboratório industrial.',
            descriptionEn: 'Bulk acquisition of analytical reagents and high-purity chemical solvents for industrial laboratory.',
            quantity: '50 Unidades',
            quantityEn: '50 Units',
            country: 'Portugal',
            countryEn: 'Portugal',
            logistics: 'Sim',
            date: '2026-06-14',
            status: 'pendente',
            owner: 'buyer_1',
            assignedConsultant: null,
            contactWhatsapp: '+351 912 345 678',
            contactEmail: 'lab@gascorp.pt'
        },
        {
            id: 'req_8',
            title: 'Aquisição de Minério de Ferro 62%',
            titleEn: 'Acquisition of Iron Ore 62%',
            category: 'Energia e minerais',
            description: 'Procuramos fornecedor confiável para entrega regular de minério de ferro de teor mínimo 62% Fe.',
            descriptionEn: 'We are looking for a reliable supplier for regular delivery of iron ore with a minimum grade of 62% Fe.',
            quantity: '50,000 MT/Mês',
            quantityEn: '50,000 MT/Month',
            country: 'Emirados Árabes',
            countryEn: 'United Arab Emirates',
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
            category: 'Commodities',
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
            title: 'Painéis Fotovoltaicos Monocristalinos & Inversores Solares',
            titleEn: 'Monocrystalline Solar Panels & Solar Inverters',
            category: 'Energia e minerais',
            description: 'Fornecimento em larga escala de derivados de energia solar, painéis solares monocristalinos 550W+ e inversores trifásicos.',
            descriptionEn: 'Large-scale supply of solar energy derivatives, 550W+ monocrystalline solar panels, and three-phase inverters.',
            quantity: 'Lote Comercial',
            country: 'China',
            logistics: 'Sim',
            date: '2026-06-10',
            status: 'analise',
            owner: 'supplier_1',
            assignedConsultant: 'consultant_1'
        },
        {
            id: 'off_3',
            title: 'Castanha de Caju Bruta (Raw Cashew Nuts)',
            titleEn: 'Raw Cashew Nuts (RCN)',
            category: 'Commodities',
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
            internalNotes: 'Comprador precisa de Soja refinada, mas Fornecedor oferece Açúcar. Iniciando contacto alternativo de commodities para ver aceitação de outras mercadorias.'
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
        { id: 'not_3', userId: 'consultant_1', text: 'Nova proposta de Produtos Químicos cadastrada sem consultor atribuído.', date: '2026-06-14', read: true }
    ],
    categories: [
        'Commodities',
        'Energia e minerais',
        'Produtos químicos',
        'Equipamentos e Maquinas',
        'Tecnologia'
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
    const safeState = window.gvSecurity ? window.gvSecurity.sanitizeStateForStorage(appState) : appState;
    localStorage.setItem(STATE_KEY, JSON.stringify(safeState));
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
    let [viewName, paramString] = viewPath.split('?');
    
    // Redirect old wall route to services
    if (viewName === 'wall') {
        window.location.hash = paramString ? `services?${paramString}` : 'services';
        return;
    }

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
        case 'demands':
            renderMarketExplorer();
            break;
        case 'services':
            // Services view now displays the 5 corporate sector cards section
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
        const clientAreaCard = document.getElementById('hero-client-area-card');
        if (clientAreaCard) clientAreaCard.style.display = 'none';
    } else {
        memberNavs.forEach(nav => {
            nav.style.display = 'none';
        });
        if (btnLogin) btnLogin.style.display = 'flex';
        if (userMenu) userMenu.style.display = 'none';
        const clientAreaCard = document.getElementById('hero-client-area-card');
        if (clientAreaCard) clientAreaCard.style.display = 'flex';
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
    document.getElementById('login-password').value = '';
    document.getElementById('login-password').focus();
}

async function handleMockLogin(event) {
    event.preventDefault();
    // Security: Rate limiting — máximo 5 tentativas por 15 minutos
    const rateCheck = window.gvSecurity ? window.gvSecurity.checkRateLimit('login', 5, 15 * 60 * 1000) : { allowed: true };
    if (!rateCheck.allowed) {
        const lang = localStorage.getItem('gvcps_lang') || 'pt';
        const msg = lang === 'en'
            ? `Too many login attempts. Please wait ${rateCheck.resetInSeconds} seconds before trying again.`
            : `Demasiadas tentativas de login. Aguarde ${rateCheck.resetInSeconds} segundos antes de tentar novamente.`;
        alert(msg);
        return;
    }
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
        // Security: Reset rate limiter após login bem-sucedido
        if (window.gvSecurity) window.gvSecurity.resetRateLimit('login');
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
    } else if (currentView === 'wall' || currentView === 'services') {
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
    
    // Display all market requirements and offers in list
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const latestItems = items;
    latestItems.forEach(item => {
        const { code: catCode, label: catLabel, icon: catIcon } = getCategoryDetails(item.category);
        let flag = '🌎';
        const translatedCountry = getTranslatedField(item, 'country');
        const c = translatedCountry.toLowerCase();
        if (c.includes('moçambique') || c.includes('mozambique')) flag = '🇲🇿';
        else if (c.includes('malawi') || c.includes('maláui')) flag = '🇲🇼';
        else if (c.includes('zâmbia') || c.includes('zambia')) flag = '🇿🇲';
        else if (c.includes('guiné') || c.includes('guinea') || c.includes('huine') || c.includes('conacry') || c.includes('conakry')) flag = '🇬🇳';
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
                        <span class="block truncate font-bold text-sm text-slate-800" title="${gvSecurity.sanitize(titleText)}">${gvSecurity.sanitize(titleText)}</span>
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
                ${gvSecurity.sanitize(qtyText)}
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
            { name: 'Malawi', flag: '🇲🇼' },
            { name: 'Zâmbia', flag: '🇿🇲' },
            { name: 'Guiné-Conacri', flag: '🇬🇳' },
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
                window.location.hash = `services?country=${encodeURIComponent(tc.name)}`;
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
                window.location.hash = `services?cat=${encodeURIComponent(data.search)}`;
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
    } else if (lowerCat === 'energy' || lowerCat.includes('energia') || lowerCat.includes('petróleo') || lowerCat.includes('gás') || lowerCat.includes('minerais') || lowerCat.includes('solar')) {
        filterCat = 'energy';
    } else if (lowerCat === 'chemicals' || lowerCat.includes('químic') || lowerCat.includes('reagente') || lowerCat.includes('ácido') || lowerCat.includes('solvente')) {
        filterCat = 'chemicals';
    } else if (lowerCat === 'machinery' || lowerCat.includes('máquin') || lowerCat.includes('maquin') || lowerCat.includes('equipamento') || lowerCat.includes('peça') || lowerCat.includes('trator') || lowerCat.includes('navio')) {
        filterCat = 'machinery';
    } else if (lowerCat === 'tech' || lowerCat.includes('tecnologia') || lowerCat.includes('tech') || lowerCat.includes('informática') || lowerCat.includes('chip') || lowerCat.includes('hardware')) {
        filterCat = 'tech';
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
                return cat.includes('agro') || cat.includes('commodities') || cat.includes('açúcar') || cat.includes('caju') || cat.includes('soja') || cat.includes('sementes') || cat.includes('fertiliz');
            } else if (filterCat === 'energy') {
                return cat.includes('energia') || cat.includes('energy') || cat.includes('solar') || cat.includes('petróleo') || cat.includes('gás') || cat.includes('gas') || cat.includes('oil') || cat.includes('minerais') || cat.includes('minério');
            } else if (filterCat === 'chemicals') {
                return cat.includes('químic') || cat.includes('chemic') || cat.includes('reagente') || cat.includes('ácido') || cat.includes('solvente') || cat.includes('laborat');
            } else if (filterCat === 'machinery') {
                return cat.includes('máquin') || cat.includes('maquin') || cat.includes('equipamento') || cat.includes('peça') || cat.includes('peca') || cat.includes('trator') || cat.includes('navio') || cat.includes('carpintaria');
            } else if (filterCat === 'tech') {
                return cat.includes('tecnologia') || cat.includes('tech') || cat.includes('informática') || cat.includes('chip') || cat.includes('memória') || cat.includes('hardware');
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

// Central category details — 5 canonical categories
function getCategoryDetails(category) {
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const cat = (category || '').toLowerCase();
    
    // Default: Commodities
    let code     = 'agro';
    let label    = lang === 'en' ? 'Commodities' : 'Commodities';
    let icon     = 'agriculture';
    let sublabel = lang === 'en' ? 'AGRICULTURAL MARKET' : 'MERCADO AGRÍCOLA';

    if (
        cat.includes('químic') || cat.includes('chemic') || cat.includes('reagente') ||
        cat.includes('ácido') || cat.includes('solvente') || cat.includes('laborat') ||
        cat.includes('indústria & reagentes') || cat.includes('produtos químicos')
    ) {
        code     = 'chemicals';
        label    = lang === 'en' ? 'Chemical Products' : 'Produtos químicos';
        icon     = 'science';
        sublabel = lang === 'en' ? 'CHEMICAL INDUSTRY' : 'INDÚSTRIA QUÍMICA';
    } else if (
        cat.includes('maquin') || cat.includes('máquin') || cat.includes('equipamento') ||
        cat.includes('peça') || cat.includes('peca') || cat.includes('trator') ||
        cat.includes('navio') || cat.includes('embarcaç') || cat.includes('carpintaria') ||
        cat.includes('elevação') || cat.includes('grua') || cat.includes('empilhadeira')
    ) {
        code     = 'machinery';
        label    = lang === 'en' ? 'Equipment & Machinery' : 'Equipamentos e Máquinas';
        icon     = 'precision_manufacturing';
        sublabel = lang === 'en' ? 'MACHINERY & PARTS' : 'MAQUINARIA & PEÇAS';
    } else if (
        cat.includes('energia') || cat.includes('energy') || cat.includes('solar') ||
        cat.includes('petróleo') || cat.includes('gás') || cat.includes('gas') ||
        cat.includes('oil') || cat.includes('minera') || cat.includes('minério') ||
        cat.includes('carvão') || cat.includes('subestação') || cat.includes('fotovolt')
    ) {
        code     = 'energy';
        label    = lang === 'en' ? 'Energy & Minerals' : 'Energia e minerais';
        icon     = 'bolt';
        sublabel = lang === 'en' ? 'ENERGY & MINING' : 'ENERGIA & MINERAÇÃO';
    } else if (
        cat.includes('tecnologia') || cat.includes('tech') || cat.includes('informática') ||
        cat.includes('inovação') || cat.includes('chip') || cat.includes('processador') ||
        cat.includes('memória') || cat.includes('placa') || cat.includes('carregador') ||
        cat.includes('software') || cat.includes('ti') || cat.includes('redes')
    ) {
        code     = 'tech';
        label    = lang === 'en' ? 'Technology' : 'Tecnologia';
        icon     = 'memory';
        sublabel = lang === 'en' ? 'HARDWARE & TECH' : 'TECNOLOGIA & HARDWARE';
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
            'assets/images/agro_commodities.jpg',
            'assets/images/agro_commodities.jpg'
        ],
        energy: [
            'assets/images/oil_gas.jpg',
            'assets/images/oil_gas.jpg'
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
    else if (c.includes('malawi') || c.includes('maláui')) flag = '🇲🇼';
    else if (c.includes('zâmbia') || c.includes('zambia')) flag = '🇿🇲';
    else if (c.includes('guiné') || c.includes('guinea') || c.includes('huine') || c.includes('conacry') || c.includes('conakry')) flag = '🇬🇳';
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
                alt="${gvSecurity.sanitize(titleText)}"
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
                <span class="card-subcategory-label">${gvSecurity.sanitize(catSublabel)}</span>
                <h3 style="margin:0;font-size:14px;font-weight:800;line-height:1.35;color:#0f172a;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;" title="${gvSecurity.sanitize(titleText)}">${gvSecurity.sanitize(titleText)}</h3>
            </div>

            <!-- Detail rows -->
            <div style="flex:1;margin-top:4px;">
                <div class="card-detail-row">
                    <span class="card-detail-label">
                        <span class="material-symbols-outlined">inventory_2</span>
                        ${labelVol}:
                    </span>
                    <span class="card-detail-value">${gvSecurity.sanitize(qtyText)}</span>
                </div>
                <div class="card-detail-row">
                    <span class="card-detail-label">
                        <span class="material-symbols-outlined">public</span>
                        ${labelCountryKey}:
                    </span>
                    <span class="card-detail-value" style="display:flex;align-items:center;gap:4px;">
                        ${gvSecurity.sanitize(countryText)} <span style="font-size:14px;line-height:1;">${flag}</span>
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
        window.location.hash = 'services';
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
            document.getElementById('detail-spec-whatsapp').innerHTML = `WhatsApp: <strong>${gvSecurity.sanitize(whatsappVal)}</strong>`;
            document.getElementById('detail-spec-email').innerHTML = `Email: <strong>${gvSecurity.sanitize(emailVal)}</strong>`;
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
                <td class="py-4 px-6"><a href="#buyer-portal?tab=detail&id=${r.id}" class="text-gvTeal font-bold hover:underline">${gvSecurity.sanitize(r.title)}</a></td>
                <td class="py-4 px-6"><span class="px-2 py-1 bg-slate-100 rounded text-[11px] font-medium text-slate-600">${gvSecurity.sanitize(r.quantity)}</span></td>
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
                                <h4 class="font-bold text-xs text-slate-800 truncate">${gvSecurity.sanitize(r.title)}</h4>
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
        
        // Render Detail Panel HTML — use only IDs that actually exist in the HTML
        const headerTitleEl = document.getElementById('buyer-chat-header-title');
        const headerSubtitleEl = document.getElementById('buyer-chat-header-subtitle');
        const headerAvatarEl = document.getElementById('buyer-chat-header-avatar');
        const headerStatusEl = document.getElementById('buyer-detail-status');
        const countBadgeEl = document.getElementById('buyer-chat-count-badge');

        if (headerTitleEl) headerTitleEl.textContent = req.title;
        if (headerStatusEl) {
            headerStatusEl.className = `status-badge ${req.status}`;
            headerStatusEl.textContent = formatStatusPT(req.status);
        }

        const matchForHeader = appState.matches.find(m => m.requirementId === req.id);
        if (headerSubtitleEl) {
            if (matchForHeader) {
                const cons = appState.users[matchForHeader.consultantId];
                headerSubtitleEl.textContent = `Consultor: ${cons ? cons.name : 'GV-CPS'} (Intermediação GV-CPS)`;
            } else {
                headerSubtitleEl.textContent = 'Aguardando consultor GV-CPS...';
            }
        }

        // Avatar initials
        if (headerAvatarEl) {
            const words = req.title.replace('Importação de ', '').replace('Aquisição de ', '').split(' ');
            const initials = ((words[0] ? words[0][0] : '') + (words[1] ? words[1][0] : '')).toUpperCase() || 'GV';
            headerAvatarEl.textContent = initials;
        }

        // Update count badge
        if (countBadgeEl) countBadgeEl.textContent = reqs.length;
        
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
                <td><a href="#supplier-portal?tab=detail&id=${o.id}" class="text-primary font-bold hover:underline">${gvSecurity.sanitize(o.title)}</a></td>
                <td><span class="label-sm">${gvSecurity.sanitize(o.quantity)}</span></td>
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
                alert(`Intermediação Solicitada!\n\nA Global View (GV-CPS) registou o seu interesse na proposta "${gvSecurity.sanitize(item.title)}".\nO nosso consultor técnico iniciará a validação do match nas próximas horas e contactará via Chat ou WhatsApp.`);
                
                // Add simulated notification
                const newId = `not_${appState.notifications.length + 1}`;
                appState.notifications.push({
                    id: newId,
                    userId: appState.currentUser.id,
                    text: `Você solicitou intermediação para a proposta: ${gvSecurity.sanitize(item.title)}`,
                    date: new Date().toISOString().split('T')[0],
                    read: false
                });
                saveState();
                
                simulateWhatsAppNotification(appState.currentUser.id, `Recebemos o seu interesse em "${gvSecurity.sanitize(item.title)}". O consultor Carlos já foi notificado.`);
            };
        }
        
        card.onclick = () => {
            alert(`Detalhes Confidenciais da Proposta:\n\nTítulo: ${gvSecurity.sanitize(item.title)}\nCategoria: ${gvSecurity.sanitize(item.category)}\nQuantidade: ${gvSecurity.sanitize(item.quantity)}\nOrigem/Destino: ${gvSecurity.sanitize(item.country)}\nLogística: ${item.logistics === 'Sim' ? 'Sim (Incluída na facturação)' : 'Não'}\n\nDescrição do Lote:\n${gvSecurity.sanitize(item.description)}\n\n(Lembre-se: Para segurança jurídica das contrapartes, toda a negociação é mediada e fiscalizada pela GV-CPS)`);
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
                        <td>${gvSecurity.sanitize(r.title)}</td>
                        <td>${gvSecurity.sanitize(buyerObj.name)}</td>
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
                        <td><span class="body-sm font-bold">${gvSecurity.sanitize(req.title)}</span> <br><span class="label-sm opacity-50">vs ${gvSecurity.sanitize(off.title)}</span></td>
                        <td>${gvSecurity.sanitize(buyerObj.name)}</td>
                        <td>${gvSecurity.sanitize(suppObj.name)}</td>
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
                <h3 class="headline-sm text-primary mb-2">${gvSecurity.sanitize(req.title)}</h3>
                <p class="body-sm text-on-surface-variant mb-4">${gvSecurity.sanitize(req.description)}</p>
                <div class="grid grid-cols-2 gap-2 text-xs">
                    <div>Volume: <strong>${gvSecurity.sanitize(req.quantity)}</strong></div>
                    <div>País: <strong>${gvSecurity.sanitize(req.country)}</strong></div>
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
                    <span class="match-select-card-title">${gvSecurity.sanitize(o.title)}</span>
                    <span class="status-badge ${o.status}" style="font-size: 9px; padding: 2px 6px;">${formatStatusPT(o.status)}</span>
                </div>
                <p class="body-sm text-on-surface-variant line-clamp-2 mb-2" style="font-size: 12px;">${gvSecurity.sanitize(o.description)}</p>
                <div class="match-select-card-meta">
                    <span>Vol: <strong>${gvSecurity.sanitize(o.quantity)}</strong></span>
                    <span>País: <strong>${gvSecurity.sanitize(o.country)}</strong></span>
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
                    Deseja iniciar negociação mediada ligando a necessidade <strong>#${req.id.split('_')[1]}</strong> (${gvSecurity.sanitize(req.title)}) 
                    à oferta do fornecedor <strong>#${o.id.split('_')[1]}</strong> (${gvSecurity.sanitize(o.title)})?
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
                text: `Olá ${appState.users[req.owner].name}. Identificamos uma oferta de fornecedor compatível para a sua necessidade "${gvSecurity.sanitize(req.title)}". Sou o seu consultor dedicado para esta intermediação comercial.`,
                timestamp: new Date().toISOString(),
                channel: 'buyer'
            });
            
            appState.messages.push({
                id: `msg_${appState.messages.length + 1}`,
                matchId: newMatchId,
                senderId: consultantId,
                senderRole: 'consultant',
                text: `Olá ${appState.users[off.owner].name}. Identificamos uma demanda de comprador ativa na nossa plataforma correspondente à sua oferta "${gvSecurity.sanitize(off.title)}". Vou guiar a intermediação dos termos comerciais e de logística.`,
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
            Negociação #${match.id.split('_')[1]}: <span style="color: var(--primary-light);">${gvSecurity.sanitize(req.title)}</span> 
            <span style="font-weight: normal; color: var(--on-surface-variant); font-size: 16px;">vs</span> 
            <span style="color: var(--secondary);">${gvSecurity.sanitize(off.title)}</span>
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
                    <h4 class="font-bold text-primary mb-1">${gvSecurity.sanitize(r.title)}</h4>
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
                            <div class="font-bold text-slate-900">${gvSecurity.sanitize(req.title)}</div>
                            <div class="text-[10px] text-slate-450 mt-0.5">vs ${gvSecurity.sanitize(off.title)}</div>
                        </td>
                        <td class="py-4 px-6 font-semibold text-slate-700">${gvSecurity.sanitize(consultantObj.name)}</td>
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
                            <div class="font-bold text-slate-900">${gvSecurity.sanitize(req.title)}</div>
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
            text: `Sua requisição "${gvSecurity.sanitize(req.title)}" foi atribuída a um consultor e está em análise.`,
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

// === ACTION CARD DEFINITIONS ===
// Each actionType maps to a color, icon, labels, and consultant CTA.
const ACTION_CARD_DEFS = {
    quote: {
        icon: 'request_quote',
        bg: 'rgba(13,148,136,0.07)',
        border: 'rgba(13,148,136,0.25)',
        accent: '#0d9488',
        headerBg: 'rgba(13,148,136,0.12)',
        pt: { title: 'PEDIDO DE COTAÇÃO', label: 'A Processar', desc: 'Solicito a cotação formal e detalhada para esta necessidade, com a logística integrada pela GV-CPS, valores CIF e prazo de entrega.' },
        en: { title: 'QUOTE REQUESTED', label: 'Processing', desc: 'I request the formal detailed quotation for this requirement, including GV-CPS integrated logistics, CIF value and delivery timeline.' },
        consultantBtnPt: 'Enviar Cotação',
        consultantBtnEn: 'Send Quotation',
        consultantBtnIcon: 'send',
        consultantBtnAction: 'openSendQuoteForm'
    },
    status: {
        icon: 'query_stats',
        bg: 'rgba(217,119,6,0.07)',
        border: 'rgba(217,119,6,0.25)',
        accent: '#d97706',
        headerBg: 'rgba(217,119,6,0.12)',
        pt: { title: 'PONTO DE SITUAÇÃO', label: 'Em Análise', desc: 'Solicito uma atualização do estado das negociações com os fornecedores qualificados para esta necessidade.' },
        en: { title: 'STATUS UPDATE', label: 'Under Review', desc: 'Please provide a status update on the progress with qualified suppliers for this requirement.' },
        consultantBtnPt: 'Responder Status',
        consultantBtnEn: 'Reply Status',
        consultantBtnIcon: 'forum',
        consultantBtnAction: 'sendConsultantStatusReply'
    },
    contract: {
        icon: 'description',
        bg: 'rgba(109,40,217,0.07)',
        border: 'rgba(109,40,217,0.25)',
        accent: '#7c3aed',
        headerBg: 'rgba(109,40,217,0.10)',
        pt: { title: 'MINUTA DE CONTRATO', label: 'Sob Análise Jurídica', desc: 'Solicito o envio da minuta do contrato comercial sob intermediação oficial da GV-CPS, para análise antes da assinatura.' },
        en: { title: 'DRAFT CONTRACT', label: 'Legal Review', desc: 'Please share the draft commercial contract under GV-CPS official mediation for our review before signing.' },
        consultantBtnPt: 'Enviar Minuta',
        consultantBtnEn: 'Send Draft',
        consultantBtnIcon: 'upload_file',
        consultantBtnAction: 'sendConsultantContractDraft'
    }
};

function getQuickActionCardInfo(text, lang) {
    // Detect actionType from message metadata marker or legacy text
    const markerMatch = text && text.match(/\[ACTION:(quote|status|contract)\]/);
    if (markerMatch) {
        const def = ACTION_CARD_DEFS[markerMatch[1]];
        if (!def) return null;
        const t = lang === 'en' ? def.en : def.pt;
        return { actionType: markerMatch[1], icon: def.icon, color: def.bg, textColor: def.accent, borderColor: def.border, headerBg: def.headerBg, title: t.title, desc: t.desc, actionLabel: t.label };
    }
    // Legacy text detection (backward compat)
    if (text && (text.includes('cotação formal') || text.includes('formal detailed quotation'))) {
        const def = ACTION_CARD_DEFS.quote; const t = lang === 'en' ? def.en : def.pt;
        return { actionType: 'quote', icon: def.icon, color: def.bg, textColor: def.accent, borderColor: def.border, headerBg: def.headerBg, title: t.title, desc: t.desc, actionLabel: t.label };
    }
    if (text && (text.includes('ponto de situação') || text.includes('status update on the progress'))) {
        const def = ACTION_CARD_DEFS.status; const t = lang === 'en' ? def.en : def.pt;
        return { actionType: 'status', icon: def.icon, color: def.bg, textColor: def.accent, borderColor: def.border, headerBg: def.headerBg, title: t.title, desc: t.desc, actionLabel: t.label };
    }
    if (text && (text.includes('minuta do contrato') || text.includes('draft commercial contract'))) {
        const def = ACTION_CARD_DEFS.contract; const t = lang === 'en' ? def.en : def.pt;
        return { actionType: 'contract', icon: def.icon, color: def.bg, textColor: def.accent, borderColor: def.border, headerBg: def.headerBg, title: t.title, desc: t.desc, actionLabel: t.label };
    }
    return null;
}

// Smart Quick Action: sends once, scrolls+highlights if already sent
window.sendChatQuickAction = function(matchId, channelType, containerId, actionType) {
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const def = ACTION_CARD_DEFS[actionType];
    if (!def) return;

    // Check if this actionType was already sent in this conversation
    const alreadySent = appState.messages.find(m =>
        m.matchId === matchId &&
        m.channel === channelType &&
        m.actionType === actionType
    );

    if (alreadySent) {
        // Scroll to + flash highlight the existing card
        const messagesArea = document.getElementById(`${containerId}-messages-area`);
        const existingCard = messagesArea ? messagesArea.querySelector(`[data-action-id="${alreadySent.id}"]`) : null;
        if (existingCard) {
            existingCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            existingCard.style.transition = 'box-shadow 0.2s, transform 0.2s';
            existingCard.style.boxShadow = `0 0 0 3px ${def.accent}55`;
            existingCard.style.transform = 'scale(1.015)';
            setTimeout(() => {
                existingCard.style.boxShadow = '';
                existingCard.style.transform = '';
            }, 1600);
        }
        // Show toast
        showActionCardToast(lang === 'en' ? `Already sent — card highlighted above.` : `Pedido já enviado — card destacado acima.`, def.accent);
        return;
    }

    // Build message text with marker
    const t = lang === 'en' ? def.en : def.pt;
    const msgText = `[ACTION:${actionType}] ${t.desc}`;

    const senderId = appState.currentUser.id;
    const senderRole = appState.currentUser.role;
    const newMsgId = `msg_${Date.now()}`;

    const newMsg = {
        id: newMsgId,
        matchId,
        senderId,
        senderRole,
        text: msgText,
        actionType,
        timestamp: new Date().toISOString(),
        channel: channelType
    };
    appState.messages.push(newMsg);
    saveState();

    // Re-render
    if (senderRole === 'buyer') renderBuyerPortal('detail');
    else if (senderRole === 'supplier') renderSupplierPortal('detail');
    else if (senderRole === 'consultant') renderConsultantPortal('negotiation', matchId);
};

function showActionCardToast(msg, color) {
    const existing = document.getElementById('gv-action-toast');
    if (existing) existing.remove();
    const t = document.createElement('div');
    t.id = 'gv-action-toast';
    t.style.cssText = `position:fixed;bottom:88px;right:24px;z-index:9999;padding:10px 18px;background:white;border-left:4px solid ${color};border-radius:10px;box-shadow:0 4px 20px rgba(0,0,0,0.15);font-size:12px;font-weight:700;color:#1e293b;max-width:280px;transition:opacity 0.4s;`;
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 400); }, 2800);
}

// Consultant quick replies
window.openSendQuoteForm = function(matchId, channelType) {
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const price = prompt(lang === 'en' ? 'Quote value (e.g. USD 45,000):' : 'Valor da Cotação (ex: USD 45.000):');
    if (!price) return;
    const details = prompt(lang === 'en' ? 'Delivery time and conditions:' : 'Prazo e condições de entrega:');
    const senderId = appState.currentUser.id;
    appState.messages.push({
        id: `msg_${Date.now()}`,
        matchId, senderId,
        senderRole: appState.currentUser.role,
        text: `[ACTION:quote_reply]`,
        actionType: 'quote_reply',
        proposalData: { price, details: details || '', logisticsIncluded: true, logisticsCost: '', status: 'pendente' },
        timestamp: new Date().toISOString(),
        channel: channelType
    });
    saveState();
    renderConsultantPortal('negotiation', matchId);
};

window.sendConsultantStatusReply = function(matchId, channelType) {
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const status = prompt(lang === 'en' ? 'Current status to share with buyer:' : 'Estado atual para partilhar com o comprador:');
    if (!status) return;
    const senderId = appState.currentUser.id;
    appState.messages.push({
        id: `msg_${Date.now()}`,
        matchId, senderId,
        senderRole: appState.currentUser.role,
        text: status,
        timestamp: new Date().toISOString(),
        channel: channelType
    });
    saveState();
    renderConsultantPortal('negotiation', matchId);
};

window.sendConsultantContractDraft = function(matchId, channelType) {
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const senderId = appState.currentUser.id;
    const fileName = lang === 'en' ? 'Contract_Draft_GV-CPS.pdf' : 'Minuta_Contrato_GV-CPS.pdf';
    appState.messages.push({
        id: `msg_${Date.now()}`,
        matchId, senderId,
        senderRole: appState.currentUser.role,
        text: fileName,
        attachmentType: 'file',
        attachmentSize: '320 KB',
        timestamp: new Date().toISOString(),
        channel: channelType
    });
    saveState();
    renderConsultantPortal('negotiation', matchId);
};

function renderPortalChat(containerId, matchId, channelType) {
    const el = document.getElementById(containerId);
    if (!el) return;
    
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const match = appState.matches.find(m => m.id === matchId);
    if (!match) {
        el.innerHTML = `<div class="text-center py-8 text-xs text-slate-400 font-medium">${lang === 'en' ? 'No active negotiation match found.' : 'Nenhuma intermediação ativa encontrada.'}</div>`;
        return;
    }
    const msgs = appState.messages.filter(m => m.matchId === matchId && m.channel === channelType);
    
    const consultantObj = match.consultantId ? appState.users[match.consultantId] : null;
    const headerTitle = lang === 'en' ? 'Shielded Intermediation (GV-CPS)' : 'Intermediação Segura (GV-CPS)';
    const consultantLabel = lang === 'en' ? 'Assigned Consultant' : 'Consultor Responsável';
    const statusLabel = match.status === 'fechado' 
        ? (lang === 'en' ? 'DEAL CLOSED' : 'NEGÓCIO FECHADO') 
        : (lang === 'en' ? 'IN PROGRESS' : 'EM CURSO');
    const warningText = lang === 'en'
        ? 'Shielded Negotiation: Direct contact between buyer and supplier is protected under commercial confidentiality.'
        : 'Negociação Segura: O contacto direto entre comprador e fornecedor é protegido sob sigilo comercial.';
    const placeholderText = lang === 'en' ? 'Write a secure message...' : 'Escreva uma mensagem segura...';
    
    const hideHeader = containerId === 'buyer-chat-box';
    
    el.innerHTML = `
        <div class="portal-chat-card relative overflow-hidden" style="border: none; box-shadow: none; background: transparent; height: 100%;">
            ${hideHeader ? '' : `
            <div class="portal-chat-header" style="padding: 16px 20px; border-bottom: 1px solid var(--outline-variant); display: flex; justify-content: space-between; align-items: center;">
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
                <div class="flex items-center gap-2">
                    <button type="button" onclick="toggleChatDocumentDrawer('${containerId}')" class="inline-flex items-center justify-center w-8 h-8 bg-slate-100 hover:bg-slate-200 text-slate-650 rounded-xl transition cursor-pointer border border-slate-200 shadow-xs" title="${lang === 'en' ? 'Shared Documents' : 'Documentos Partilhados'}">
                        <span class="material-symbols-outlined text-[16px] font-semibold">folder_open</span>
                    </button>
                    <span class="portal-chat-badge" style="background-color: ${match.status === 'fechado' ? 'rgba(0, 109, 61, 0.1)' : 'rgba(217, 119, 6, 0.1)'}; color: ${match.status === 'fechado' ? '#006d3d' : '#d97706'}; font-weight: bold; font-size: 10px; padding: 4px 8px; border-radius: var(--radius-sm);">${statusLabel}</span>
                </div>
            </div>
            
            <div class="bg-primary/5 text-primary text-xs font-semibold px-4 py-2 border-b border-outline-variant/30 text-center flex items-center justify-center gap-1.5" style="font-size: 10px; background-color: rgba(0, 55, 74, 0.05); color: var(--primary); border-bottom: 1px solid rgba(0, 0, 0, 0.05); font-weight: 600;">
                <span class="material-symbols-outlined" style="font-size: 13px; color: var(--primary);">lock</span>
                ${warningText}
            </div>
            `}
            
            <div class="portal-chat-messages shadow-inner" id="${containerId}-messages-area" style="padding: 16px; overflow-y: auto; flex: 1;">
                <!-- Messages will be injected -->
            </div>
            
            <div class="portal-chat-input-area" style="padding: 12px 16px; border-top: 1px solid var(--outline-variant); background-color: white;">
                ${channelType === 'buyer' && match.status !== 'fechado' ? `
                    <div class="quick-chips-container flex gap-2 overflow-x-auto pb-2 mb-2 no-scrollbar text-xs">
                        <button type="button" onclick="sendChatQuickAction('${match.id}', '${channelType}', '${containerId}', 'quote')" data-chip-action="quote"
                            class="px-3 py-1.5 bg-teal-50 hover:bg-teal-100 text-teal-700 rounded-full shrink-0 font-bold transition cursor-pointer border border-teal-200 text-[11px] flex items-center gap-1.5 shadow-xs">
                            <span class="material-symbols-outlined text-[13px]">request_quote</span>
                            <span>${lang === 'en' ? 'Request Quote' : 'Solicitar Cotação'}</span>
                        </button>
                        <button type="button" onclick="sendChatQuickAction('${match.id}', '${channelType}', '${containerId}', 'status')" data-chip-action="status"
                            class="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-full shrink-0 font-bold transition cursor-pointer border border-amber-200 text-[11px] flex items-center gap-1.5 shadow-xs">
                            <span class="material-symbols-outlined text-[13px]">query_stats</span>
                            <span>${lang === 'en' ? 'Status Update' : 'Ponto de Situação'}</span>
                        </button>
                        <button type="button" onclick="sendChatQuickAction('${match.id}', '${channelType}', '${containerId}', 'contract')" data-chip-action="contract"
                            class="px-3 py-1.5 bg-violet-50 hover:bg-violet-100 text-violet-700 rounded-full shrink-0 font-bold transition cursor-pointer border border-violet-200 text-[11px] flex items-center gap-1.5 shadow-xs">
                            <span class="material-symbols-outlined text-[13px]">description</span>
                            <span>${lang === 'en' ? 'Draft Contract' : 'Minuta do Contrato'}</span>
                        </button>
                    </div>
                ` : ''}
                
                <!-- Whatsapp-style Reply Preview Bar -->
                <div id="${containerId}-reply-preview" class="hidden bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 mb-2 items-center justify-between text-xs gap-2 border-l-4 border-l-gvTeal animate-fade-in">
                    <!-- Injected dynamically via startReplyToMessage -->
                </div>
                
                <form class="portal-chat-form flex items-center gap-2 relative" id="${containerId}-form" onsubmit="event.preventDefault(); sendChatMessage('${match.id}', '${channelType}', '${containerId}-input-field')">
                    
                    <!-- Hidden file input selector -->
                    <input type="file" id="${containerId}-file-input" class="hidden" onchange="handleChatFileUpload('${match.id}', '${channelType}', '${containerId}', this)">
                    
                    <!-- Plus attachment menu -->
                    <div class="relative shrink-0 flex items-center">
                        <button type="button" onclick="toggleAttachmentMenu('${containerId}-attachment-menu')" class="w-8.5 h-8.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-650 flex items-center justify-center border border-slate-200 transition focus:outline-none cursor-pointer" ${match.status === 'fechado' ? 'disabled' : ''}>
                            <span class="material-symbols-outlined text-lg">add</span>
                        </button>
                        <!-- Dropdown Attachment list -->
                        <div id="${containerId}-attachment-menu" class="hidden absolute bottom-11 left-0 bg-white border border-slate-200 rounded-xl shadow-lg p-1.5 w-40 z-20 flex-col gap-0.5">
                            <button type="button" onclick="triggerFileInput('${containerId}-file-input', 'file')" class="flex items-center gap-2.5 px-3 py-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-left text-xs transition cursor-pointer border-none bg-none w-full">
                                <span class="material-symbols-outlined text-base text-slate-500">description</span>
                                <span data-translate-pt="Ficheiro" data-translate-en="File">Ficheiro</span>
                            </button>
                            <button type="button" onclick="triggerFileInput('${containerId}-file-input', 'image')" class="flex items-center gap-2.5 px-3 py-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-left text-xs transition cursor-pointer border-none bg-none w-full">
                                <span class="material-symbols-outlined text-base text-emerald-500">image</span>
                                <span data-translate-pt="Imagem" data-translate-en="Image">Imagem</span>
                            </button>
                            <button type="button" onclick="triggerFileInput('${containerId}-file-input', 'video')" class="flex items-center gap-2.5 px-3 py-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-left text-xs transition cursor-pointer border-none bg-none w-full">
                                <span class="material-symbols-outlined text-base text-amber-500">movie</span>
                                <span data-translate-pt="Vídeo" data-translate-en="Video">Vídeo</span>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Chat Input field wrapper -->
                    <div class="flex-1 relative min-w-0" id="${containerId}-input-wrapper">
                        <input type="text" class="portal-chat-input w-full" id="${containerId}-input-field" placeholder="${placeholderText}" ${match.status === 'fechado' ? 'disabled' : ''} style="padding-right: 12px;">
                    </div>
                    
                    <!-- Microphone Record button -->
                    <button type="button" id="${containerId}-mic-btn" onclick="startAudioRecording('${match.id}', '${channelType}', '${containerId}')" class="w-8.5 h-8.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-650 flex items-center justify-center border border-slate-200 transition focus:outline-none cursor-pointer shrink-0" ${match.status === 'fechado' ? 'disabled' : ''}>
                        <span class="material-symbols-outlined text-lg">mic</span>
                    </button>
                    
                    <!-- Submit message button -->
                    <button type="submit" id="${containerId}-send-btn" class="portal-chat-send-btn shrink-0" ${match.status === 'fechado' ? 'disabled' : ''}>
                        <span class="material-symbols-outlined">send</span>
                    </button>
                </form>
            </div>
            
            <!-- Sliding Documents Drawer inside Chat -->
            <div id="${containerId}-docs-drawer" class="absolute top-0 right-0 h-full w-72 bg-white border-l border-slate-200 shadow-2xl z-30 transform translate-x-full transition-transform duration-300 flex flex-col overflow-hidden">
                <!-- Drawer Header -->
                <div class="p-3.5 border-b border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
                    <div class="flex items-center gap-2 font-bold text-xs text-slate-800">
                        <span class="material-symbols-outlined text-gvTeal text-base">folder_open</span>
                        <span data-translate-pt="Ficheiros da Conversa" data-translate-en="Shared Files">Ficheiros da Conversa</span>
                    </div>
                    <button type="button" onclick="toggleChatDocumentDrawer('${containerId}')" class="w-6 h-6 rounded-md hover:bg-slate-200 text-slate-500 flex items-center justify-center transition border-none cursor-pointer">
                        <span class="material-symbols-outlined text-base">close</span>
                    </button>
                </div>
                <!-- Tabs -->
                <div class="flex border-b border-slate-100 bg-white text-[10px] font-extrabold shrink-0">
                    <button type="button" onclick="filterDocsDrawer('${containerId}', 'all', this)" class="flex-1 py-2 text-center text-gvTeal border-b-2 border-gvTeal cursor-pointer bg-transparent border-none">Todos</button>
                    <button type="button" onclick="filterDocsDrawer('${containerId}', 'doc', this)" class="flex-1 py-2 text-center text-slate-500 border-b-2 border-transparent cursor-pointer bg-transparent border-none">Docs</button>
                    <button type="button" onclick="filterDocsDrawer('${containerId}', 'media', this)" class="flex-1 py-2 text-center text-slate-500 border-b-2 border-transparent cursor-pointer bg-transparent border-none">Média</button>
                    <button type="button" onclick="filterDocsDrawer('${containerId}', 'quote', this)" class="flex-1 py-2 text-center text-slate-500 border-b-2 border-transparent cursor-pointer bg-transparent border-none">Cotações</button>
                </div>
                <!-- Search -->
                <div class="p-2 border-b border-slate-100 bg-slate-50/50 shrink-0">
                    <div class="relative">
                        <span class="material-symbols-outlined absolute left-2.5 top-2 text-slate-400 text-xs">search</span>
                        <input type="text" id="${containerId}-docs-search" onkeyup="searchDocsDrawer('${containerId}')" placeholder="Pesquisar ficheiro..." data-translate-pt-placeholder="Pesquisar..." data-translate-en-placeholder="Search..." class="w-full pl-7 pr-2 py-1 bg-white border border-slate-200 rounded-lg text-[10px] text-slate-800 focus:outline-none focus:border-gvTeal">
                    </div>
                </div>
                <!-- Content List -->
                <div class="flex-1 overflow-y-auto p-3 space-y-2 bg-slate-50/30" id="${containerId}-docs-list">
                    <!-- Injected dynamically via renderDocsDrawerList -->
                </div>
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
        area.innerHTML = `<div class="text-center py-6 opacity-60 font-italic text-xs">${lang === 'en' ? 'No messages. Write something to start intermediation.' : 'Sem mensagens. Escreva algo para iniciar a intermediação.'}</div>`;
    } else {
        msgs.forEach(m => {
            const senderObj = appState.users[m.senderId] || { name: 'Sistema', role: 'system' };
            const isMe = appState.currentUser.id === m.senderId;
            
            const bubble = document.createElement('div');
            bubble.className = `chat-bubble group relative ${isMe ? 'sent' : 'received'}`;
            bubble.setAttribute('data-msg-id', m.id);
            
            const cardInfo = getQuickActionCardInfo(m.text, lang);
            let messageContentHTML = '';
            
            if (cardInfo) {
                const isConsultant = appState.currentUser.role === 'consultant' || appState.currentUser.role === 'admin';
                const def = ACTION_CARD_DEFS[cardInfo.actionType];
                const consultantBtn = (isConsultant && def) ? `
                    <button type="button"
                        onclick="${def.consultantBtnAction}('${m.matchId}', '${m.channel}')"
                        class="mt-1 w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-white text-[11px] font-bold transition cursor-pointer border-none shadow-sm"
                        style="background-color: ${cardInfo.textColor};">
                        <span class="material-symbols-outlined text-sm">${def.consultantBtnIcon}</span>
                        <span>${lang === 'en' ? def.consultantBtnEn : def.consultantBtnPt}</span>
                    </button>
                ` : `
                    <div class="flex items-center gap-1.5 text-[10px] font-bold" style="color: #006d3d;">
                        <span class="w-1.5 h-1.5 rounded-full animate-pulse" style="background:#006d3d"></span>
                        <span>${lang === 'en' ? 'Safely Mediated by GV-CPS' : 'Mediado com Segurança pela GV-CPS'}</span>
                    </div>
                `;
                // Clean desc (remove marker prefix)
                const cleanDesc = gvSecurity.sanitize(cardInfo.desc.replace(/^\[ACTION:\w+\]\s*/, ''));
                messageContentHTML = `
                    <div data-action-id="${m.id}" class="bg-white border-2 rounded-2xl overflow-hidden shadow-sm my-2 max-w-[300px] transition-all duration-300" style="border-color: ${cardInfo.borderColor};">
                        <div class="flex items-center gap-2 px-3 py-2.5" style="background-color: ${cardInfo.headerBg || cardInfo.color};">
                            <span class="material-symbols-outlined text-base shrink-0" style="color: ${cardInfo.textColor};">${cardInfo.icon}</span>
                            <span class="text-[10px] font-extrabold uppercase tracking-widest flex-1" style="color: ${cardInfo.textColor};">${cardInfo.title}</span>
                            <span class="px-2 py-0.5 rounded-full text-[9px] font-black text-white" style="background-color: ${cardInfo.textColor}; opacity: 0.9;">${cardInfo.actionLabel}</span>
                        </div>
                        <div class="px-3 py-2.5 flex flex-col gap-2.5">
                            <p class="text-[11px] text-slate-600 leading-relaxed font-medium m-0">${cleanDesc}</p>
                            ${consultantBtn}
                        </div>
                    </div>
                `;
            } else if (m.attachmentType === 'image') {
                messageContentHTML = `
                    <div class="bg-white border border-slate-200 rounded-xl p-2 shadow-sm max-w-sm flex flex-col gap-2 my-1">
                        <div class="relative rounded-lg overflow-hidden border border-slate-100 bg-slate-50 flex items-center justify-center" style="width: 200px; height: 120px;">
                            <span class="material-symbols-outlined text-[40px] text-slate-300">image</span>
                        </div>
                        <div class="flex justify-between items-center gap-1 px-1">
                            <span class="text-[10px] text-slate-700 font-bold truncate max-w-[130px] text-left">${gvSecurity.sanitize(m.text)}</span>
                            <button onclick="alert('Download da imagem')" class="text-gvTeal shrink-0 p-0 border-none bg-none cursor-pointer flex items-center"><span class="material-symbols-outlined text-base">download</span></button>
                        </div>
                    </div>
                `;
            } else if (m.attachmentType === 'video') {
                messageContentHTML = `
                    <div class="bg-white border border-slate-200 rounded-xl p-2 shadow-sm max-w-sm flex flex-col gap-2 my-1">
                        <div class="relative rounded-lg overflow-hidden border border-slate-150 bg-slate-900 flex items-center justify-center" style="width: 200px; height: 120px;">
                            <span class="material-symbols-outlined text-[40px] text-white/60">play_circle</span>
                        </div>
                        <div class="flex justify-between items-center gap-1 px-1">
                            <span class="text-[10px] text-slate-700 font-bold truncate max-w-[130px] text-left">${gvSecurity.sanitize(m.text)}</span>
                            <button onclick="alert('Download do vídeo')" class="text-gvTeal shrink-0 p-0 border-none bg-none cursor-pointer flex items-center"><span class="material-symbols-outlined text-base">download</span></button>
                        </div>
                    </div>
                `;
            } else if (m.attachmentType === 'file') {
                messageContentHTML = `
                    <div class="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition max-w-[260px] my-1.5 shadow-xs">
                        <div class="flex items-center gap-2 min-w-0">
                            <span class="material-symbols-outlined text-rose-600 text-lg shrink-0">picture_as_pdf</span>
                            <div class="truncate text-left">
                                <span class="font-bold text-slate-800 block truncate text-[10px]">${gvSecurity.sanitize(m.text)}</span>
                                <span class="text-[8px] text-slate-450 block font-semibold">${m.attachmentSize || '1.5 MB'}</span>
                            </div>
                        </div>
                        <button onclick="alert('Download do ficheiro')" class="text-gvTeal hover:text-gvTeal-light p-1 rounded-lg transition shrink-0 cursor-pointer border-none bg-none flex items-center">
                            <span class="material-symbols-outlined text-base">download</span>
                        </button>
                    </div>
                `;
            } else if (m.attachmentType === 'audio') {
                messageContentHTML = `
                    <div class="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-2.5 max-w-[260px] shadow-sm my-1">
                        <button type="button" onclick="alert('Reproduzindo áudio simulado')" class="w-8 h-8 rounded-full bg-[#006d3d] hover:bg-[#005a32] text-white flex items-center justify-center transition focus:outline-none shrink-0 border-none cursor-pointer shadow-xs">
                            <span class="material-symbols-outlined text-lg">play_arrow</span>
                        </button>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-end gap-[2.5px] h-4 mb-1 opacity-70">
                                <span class="w-1 h-3 bg-slate-400 rounded-sm"></span>
                                <span class="w-1 h-4 bg-[#006d3d] rounded-sm"></span>
                                <span class="w-1 h-2 bg-slate-450 rounded-sm"></span>
                                <span class="w-1 h-4 bg-slate-400 rounded-sm"></span>
                                <span class="w-1 h-3 bg-[#006d3d] rounded-sm"></span>
                                <span class="w-1 h-2 bg-slate-400 rounded-sm"></span>
                                <span class="w-1 h-4 bg-slate-400 rounded-sm"></span>
                            </div>
                            <span class="text-[9px] text-slate-500 font-bold block text-left">0:00 / ${m.audioDuration || '0:05'}</span>
                        </div>
                    </div>
                `;
            } else if (m.proposalData) {
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
            } else {
                messageContentHTML = `<p>${gvSecurity.sanitize(m.text)}</p>`;
            }
            
            // Reply-To message preview block quote
            let replyQuoteHTML = '';
            if (m.replyToId) {
                const repliedMsg = appState.messages.find(msg => msg.id === m.replyToId);
                if (repliedMsg) {
                    const repliedSender = appState.users[repliedMsg.senderId] || { name: 'Sistema' };
                    let repliedPreviewText = '';
                    if (repliedMsg.attachmentType === 'image') repliedPreviewText = lang === 'en' ? '📷 Image' : '📷 Imagem';
                    else if (repliedMsg.attachmentType === 'video') repliedPreviewText = lang === 'en' ? '🎥 Video' : '🎥 Vídeo';
                    else if (repliedMsg.attachmentType === 'file') repliedPreviewText = lang === 'en' ? '📄 File' : '📄 Ficheiro';
                    else if (repliedMsg.attachmentType === 'audio') repliedPreviewText = lang === 'en' ? '🎙️ Audio' : '🎙️ Áudio';
                    else repliedPreviewText = repliedMsg.text.replace(/^\[ACTION:\w+\]\s*/, '');
                    
                    if (repliedPreviewText.length > 50) {
                        repliedPreviewText = repliedPreviewText.substring(0, 47) + '...';
                    }
                    replyQuoteHTML = `
                        <div onclick="scrollToMessage('${m.replyToId}')" class="chat-reply-quote">
                            <div class="font-bold text-[9px] text-gvTeal">${repliedSender.name}</div>
                            <div class="text-[9.5px] opacity-80 truncate">${gvSecurity.sanitize(repliedPreviewText)}</div>
                        </div>
                    `;
                }
            }

            bubble.innerHTML = `
                <span class="chat-bubble-sender">${senderObj.name} (${senderObj.role.toUpperCase()})</span>
                ${replyQuoteHTML}
                ${messageContentHTML}
                <span class="chat-bubble-time">${formatTime(m.timestamp)}</span>
                <button type="button" onclick="startReplyToMessage('${m.id}', '${containerId}')" class="opacity-0 group-hover:opacity-100 transition absolute top-2 right-2 w-6 h-6 rounded-md bg-white hover:bg-slate-100 text-slate-500 border border-slate-200 shadow-xs flex items-center justify-center cursor-pointer z-10" title="Responder">
                    <span class="material-symbols-outlined text-[14px]">reply</span>
                </button>
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
    
    const containerId = inputFieldId.replace('-input-field', '');
    const replyToId = (appState.activeReplies && appState.activeReplies[containerId]) || null;
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
            replyToId: replyToId, // attach reply message ID
            timestamp: new Date().toISOString(),
            channel: channelType
        });
        saveState();
    }
    
    input.value = '';
    
    // Reset reply mode if any
    if (replyToId && window.cancelReplyToMessage) {
        window.cancelReplyToMessage(containerId);
    }
    
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
            window.location.hash = 'services';
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
            window.location.hash = 'services';
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
            
            window.location.hash = `services?cat=${encodeURIComponent(cat)}&country=${encodeURIComponent(country)}&type=${encodeURIComponent(type)}&sort=${encodeURIComponent(sort)}`;
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

// Buyer details modal controls (Centered popup card)
window.openBuyerRequirementDetailsModal = function() {
    const modal = document.getElementById('buyer-requirement-details-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        // Allow transition animation to run
        setTimeout(() => {
            const card = document.getElementById('buyer-requirement-details-drawer');
            if (card) {
                card.classList.remove('scale-95', 'opacity-0');
                card.classList.add('scale-100', 'opacity-100');
            }
        }, 15);
    }
};

window.closeBuyerRequirementDetailsModal = function() {
    const modal = document.getElementById('buyer-requirement-details-modal');
    if (modal) {
        const card = document.getElementById('buyer-requirement-details-drawer');
        if (card) {
            card.classList.remove('scale-100', 'opacity-100');
            card.classList.add('scale-95', 'opacity-0');
        }
        
        // Hide container after transitions finish
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }, 300);
    }
};

// Buyer chat search filter
window.filterBuyerChatList = function() {
    const query = (document.getElementById('buyer-chat-search-input')?.value || '').toLowerCase().trim();
    const items = document.querySelectorAll('#buyer-chat-list-container > div');
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
};

// Fullscreen toggle for chat (Desktop Only)
window.toggleBuyerChatFullscreen = function() {
    const listColumn = document.getElementById('buyer-chat-list-column');
    const contentColumn = document.getElementById('buyer-chat-content-column');
    const btnIcon = document.getElementById('buyer-chat-fullscreen-icon');
    const btn = document.getElementById('buyer-chat-fullscreen-btn');
    
    if (!listColumn || !contentColumn) return;
    
    const isExpanded = listColumn.classList.contains('lg:hidden');
    
    if (isExpanded) {
        listColumn.classList.remove('lg:hidden');
        contentColumn.classList.remove('lg:col-span-3');
        contentColumn.classList.add('lg:col-span-2');
        if (btnIcon) btnIcon.textContent = 'open_in_full';
        if (btn) btn.title = 'Visão Completa';
    } else {
        listColumn.classList.add('lg:hidden');
        contentColumn.classList.remove('lg:col-span-2');
        contentColumn.classList.add('lg:col-span-3');
        if (btnIcon) btnIcon.textContent = 'close_fullscreen';
        if (btn) btn.title = 'Restaurar Painel';
    }
};

// Attachment Dropdown Menus toggles
window.toggleAttachmentMenu = function(menuId) {
    const menu = document.getElementById(menuId);
    if (menu) {
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
    }
};

window.triggerFileInput = function(inputId, type) {
    const input = document.getElementById(inputId);
    if (input) {
        input.dataset.uploadType = type;
        input.click();
    }
    // Auto-hide the dropdown menu
    const menu = input.closest('form').querySelector('[id$="-attachment-menu"]');
    if (menu) {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
    }
};

// File select handler with beautiful simulator progress bar
window.handleChatFileUpload = function(matchId, channelType, containerId, input) {
    if (!input.files || input.files.length === 0) return;
    const file = input.files[0];
    const type = input.dataset.uploadType || 'file';
    
    const inputWrapper = document.getElementById(`${containerId}-input-wrapper`);
    if (!inputWrapper) return;
    const originalInputHTML = inputWrapper.innerHTML;
    
    inputWrapper.innerHTML = `
        <div class="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-[10px] font-semibold text-slate-700 w-full">
            <span class="w-1.5 h-1.5 rounded-full bg-gvTeal animate-ping shrink-0"></span>
            <span class="truncate">A enviar ${type}: ${file.name} (${Math.round(file.size / 1024)} KB)...</span>
        </div>
    `;
    
    setTimeout(() => {
        // Restore input UI
        inputWrapper.innerHTML = originalInputHTML;
        
        // Push attachment message
        appState.messages.push({
            id: `msg_${appState.messages.length + 1}`,
            matchId: matchId,
            senderId: appState.currentUser.id,
            senderRole: appState.currentUser.role,
            text: file.name,
            timestamp: new Date().toISOString(),
            channel: channelType,
            attachmentType: type,
            attachmentName: file.name,
            attachmentSize: `${Math.round(file.size / 1024)} KB`,
            attachmentUrl: '#'
        });
        
        saveState();
        input.value = ''; // Reset uploader
        
        // Re-render Portal UI
        if (channelType === 'buyer') {
            renderBuyerPortal('detail', matchId);
        } else if (channelType === 'supplier') {
            renderSupplierPortal('detail', matchId);
        }
    }, 1200);
};

// Simulated voice note recording controls
let recordingInterval = null;
let recordingSeconds = 0;

window.startAudioRecording = function(matchId, channelType, containerId) {
    const wrapper = document.getElementById(`${containerId}-input-wrapper`);
    const micBtn = document.getElementById(`${containerId}-mic-btn`);
    const sendBtn = document.getElementById(`${containerId}-send-btn`);
    
    if (!wrapper || !micBtn || !sendBtn) return;
    
    micBtn.style.display = 'none';
    sendBtn.style.display = 'none';
    recordingSeconds = 0;
    
    wrapper.innerHTML = `
        <div id="${containerId}-recording-indicator" class="flex items-center justify-between bg-rose-50 border border-rose-200 rounded-xl px-3 py-1.5 text-rose-700 text-xs w-full">
            <div class="flex items-center gap-2 min-w-0">
                <span class="w-2 h-2 rounded-full bg-rose-600 animate-ping shrink-0"></span>
                <span class="font-bold text-[9px] uppercase tracking-wider shrink-0" data-translate-pt="GRAVAR ÁUDIO..." data-translate-en="RECORDING AUDIO...">GRAVAR ÁUDIO...</span>
                <span id="${containerId}-recording-timer" class="font-semibold font-mono text-[10px]">0:00</span>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
                <button type="button" onclick="cancelAudioRecording('${matchId}', '${channelType}', '${containerId}')" class="text-slate-500 hover:text-slate-700 text-[10px] font-bold px-2 py-1 rounded transition border-none bg-none cursor-pointer">CANCELAR</button>
                <button type="button" onclick="stopAndSendAudioRecording('${matchId}', '${channelType}', '${containerId}')" class="bg-rose-600 hover:bg-rose-700 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg transition border-none cursor-pointer">ENVIAR</button>
            </div>
        </div>
    `;
    
    recordingInterval = setInterval(() => {
        recordingSeconds++;
        const mins = Math.floor(recordingSeconds / 60);
        const secs = recordingSeconds % 60;
        const timerEl = document.getElementById(`${containerId}-recording-timer`);
        if (timerEl) {
            timerEl.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        }
    }, 1000);
};

window.cancelAudioRecording = function(matchId, channelType, containerId) {
    clearInterval(recordingInterval);
    if (channelType === 'buyer') {
        renderBuyerPortal('detail', matchId);
    } else {
        renderSupplierPortal('detail', matchId);
    }
};

window.stopAndSendAudioRecording = function(matchId, channelType, containerId) {
    clearInterval(recordingInterval);
    const mins = Math.floor(recordingSeconds / 60);
    const secs = recordingSeconds % 60;
    const durationStr = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    
    appState.messages.push({
        id: `msg_${appState.messages.length + 1}`,
        matchId: matchId,
        senderId: appState.currentUser.id,
        senderRole: appState.currentUser.role,
        text: `Audio Note (${durationStr})`,
        timestamp: new Date().toISOString(),
        channel: channelType,
        attachmentType: 'audio',
        audioDuration: durationStr
    });
    
    saveState();
    
    if (channelType === 'buyer') {
        renderBuyerPortal('detail', matchId);
    } else {
        renderSupplierPortal('detail', matchId);
    }
};

// Global click listener to close dropdowns
window.addEventListener('click', (e) => {
    document.querySelectorAll('[id$="-attachment-menu"]').forEach(menu => {
        if (!menu.classList.contains('hidden') && !menu.parentNode.contains(e.target)) {
            menu.classList.add('hidden');
            menu.classList.remove('flex');
        }
    });
});

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
        <span class="font-bold text-gvTeal">${gvSecurity.sanitize(req.title)}</span> 
        <span class="text-slate-400 font-normal">vs</span> 
        <span class="font-bold text-emerald-700">${gvSecurity.sanitize(off.title)}</span>
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
                <p>${gvSecurity.sanitize(m.text)}</p>
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
                <p>${gvSecurity.sanitize(m.text)}</p>
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
                    text: `NEGÓCIO CONCLUÍDO: Pagamento para "${gvSecurity.sanitize(req.title)}" aprovado pela administração.`,
                    date: new Date().toISOString().split('T')[0],
                    read: false
                });
            }
            
            if (off) {
                appState.notifications.push({
                    id: `not_${appState.notifications.length + 1}`,
                    userId: off.owner,
                    text: `NEGÓCIO CONCLUÍDO: Faturamento para "${gvSecurity.sanitize(off.title)}" aprovado pela administração.`,
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
        label: 'Commodities',
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
            outras_commodities: { 
                label: 'Outras Commodities & Grãos', 
                unit: 'Toneladas', 
                products: ['Óleo de Soja Refinado', 'Feijão Boer / Nhemba', 'Milho Amarelo / Branco', 'Algodão em Pluma'], 
                quantities: ['50 Toneladas', '100 Toneladas', '500 Toneladas', '1000 Toneladas'] 
            }
        }
    },
    energy: {
        label: 'Energia e minerais',
        icon: 'bolt',
        color: '#b45309',
        categories: {
            solar: {
                label: 'Derivados de Energia Solar',
                unit: 'Unidades / Lote',
                products: ['Painéis Fotovoltaicos Monocristalinos (550W+)', 'Inversores Solares Trifásicos (10kW–100kW)', 'Baterias de Lítio LiFePO4 Industriais', 'Estruturas de Fixação & Seguidores Solares (Trackers)', 'Reguladores de Carga MPPT', 'Cabos Solares Fotovoltaicos (bulk)'],
                quantities: ['10 unidades', '50 unidades', '100 unidades', 'Lote Comercial', 'Projeto Solar Turnkey']
            },
            oil_gas: {
                label: 'Oil & Gas',
                unit: 'Toneladas / Litros / Barris',
                products: ['Combustível Diesel EN590 10ppm', 'Gás Natural Liquefeito (GNL / LNG)', 'Óleos Lubrificantes Industriais & Marítimos', 'Tubos & Mangueiras Offshore de Alta Pressão', 'Equipamentos de Perfuração & Válvulas API', 'Gasolina Industrial'],
                quantities: ['50,000 Litros', '100 Toneladas', '500 Toneladas', 'Contrato Mensal Recorrente']
            },
            minerais: {
                label: 'Minerais',
                unit: 'Toneladas Métricas (MT)',
                products: ['Minério de Ferro (62% Fe)', 'Carvão Mineral Energético', 'Areias Pesadas (Ilmenite/Rutilo/Zircão)', 'Concentrado de Cobre', 'Grafite Flutuada de Alta Pureza', 'Ouro Industrial & Minérios Brutos'],
                quantities: ['1,000 MT', '5,000 MT', '10,000 MT', '50,000 MT/Mês']
            }
        }
    },
    chemicals: {
        label: 'Produtos químicos',
        icon: 'science',
        color: '#7c3aed',
        categories: {
            acidos: {
                label: 'Ácidos & Solventes',
                unit: 'Unidades',
                products: ['Ácido Acético Glacial (2,5L)', 'Ácido Clorídrico 32% (2,5L)', 'Ácido Clorídrico 37% (2,5L)', 'Ácido Fosfórico (250ml)', 'Metanol (2,5L)'],
                quantities: ['1 unidade', '2 unidades', '5 unidades', '10 unidades']
            },
            sais: {
                label: 'Sais & Compostos Inorgânicos',
                unit: 'Unidades',
                products: ['Sulfato de Amónia (100g)', 'Cloreto de Cálcio Hexahidratado (250g)', 'Cloreto de Sódio (250g)', 'Hidróxido de Sódio (500g)', 'Hipoclorito de Sódio (2,5L)', 'Nitrato de Sódio (250g)', 'Nitrato de Potássio (50g)', 'Cianeto de Potássio (250g)', 'Di-Fosfato de Sódio Monohidratado (500g)', 'Fosfato de Sódio Dibásico Dihidratado (500g)', 'Sulfato de Cobre II Pentahidratado (250g)', 'Tetraborato de Sódio Decahidratado (500g)'],
                quantities: ['1 unidade', '2 unidades', '4 unidades', '6 unidades']
            },
            reagentes: {
                label: 'Reagentes Analíticos',
                unit: 'Unidades',
                products: ['4-Hidroxibenzoico Acid Hidrazina (25g)', 'BRIJ-35 (100ml)', 'Cloramina T Tri-hidratada (250g)', 'Ácido Cítrico Monohidratado (500g)', 'D(-) Frutose (250g)', 'D(+) Glucose Anidra (250g)', 'Nitroprussiato de Sódio Dihidratado (100g)', 'Salicilato de Sódio (500g)', 'Ácido Sulfanílico (250g)', 'Sulfato de Hidrazina (100g)', 'Sulfanilamida (100g)', 'Amostra de Controlo Químico GLS (100g)', 'N-(1-naftil)etilenodiamina Dicloridrato (250g)'],
                quantities: ['1 unidade', '2 unidades', '4 unidades', '6 unidades']
            },
            consumiveis: {
                label: 'Consumíveis de Laboratório',
                unit: 'Unidades',
                products: ['Extran AP 11 — Detergente Alcalino (2Kg)', 'Extran MA 01 — Detergente Neutro (1L)', 'Papéis de Filtro Qualitativos No.40 125mm (100 un.)', 'Papéis de Filtro Qualitativos No.11 80mm (100 un.)', 'Carbono Ativado (500g)'],
                quantities: ['1 unidade', '2 unidades', '10 unidades', '50 unidades']
            }
        }
    },
    machinery: {
        label: 'Equipamentos e Maquinas',
        icon: 'precision_manufacturing',
        color: '#0d9488',
        categories: {
            pecas: {
                label: 'Peças de Reposição & Componentes',
                unit: 'Unidades / Kits',
                products: ['Filtros Industriais de Óleo & Ar', 'Correias & Correntes de Transmissão', 'Rolamentos Heavy-Duty & Buchas', 'Válvulas & Cilindros Hidráulicos', 'Motores Elétricos Trifásicos', 'Peças de Reposição para Tratores & Gruas', 'Kits de Manutenção Preventiva', 'Discos de Tração e Pastilhas de Travão'],
                quantities: ['1 kit / unidade', '5 unidades', '10 unidades', 'Lote de Reposição (50+)']
            },
            tratores: {
                label: 'Tratores & Maquinaria Agrícola',
                unit: 'Unidades',
                products: ['Trator Agrícola de Rodas', 'Trator de Esteiras (Crawler)', 'Mini-Trator Compacto', 'Trator Vitivinícola / Pomar', 'Trator Florestal', 'Retroescavadora', 'Escavadora Hidráulica', 'Bulldozer / Topadora'],
                quantities: ['1 unidade', '2 unidades', '5 unidades', '10 unidades', '20 unidades']
            },
            navios: {
                label: 'Navios & Embarcações',
                unit: 'Unidades / Embarcação',
                products: ['Navio Cargueiro a Granel (Bulk Carrier)', 'Navio Porta-Contentores', 'Navio Tanque (Tanker)', 'Draga Hidráulica', 'Navio de Pesca Industrial', 'Rebocador / Tugboat', 'Ferry & Balsa de Passageiros', 'Barcaça Fluvial'],
                quantities: ['1 embarcação', '2 embarcações', '3 embarcações', 'Frota (5+)']
            },
            carpintaria: {
                label: 'Equipamentos de Carpintaria & Madeira',
                unit: 'Unidades',
                products: ['Serra de Fita Industrial', 'Serra Circular de Mesa', 'Plaina de Mesa / Desengrossadeira', 'Router / Tupia CNC', 'Prensa Hidráulica para Madeira', 'Secador / Estufa de Madeira', 'Lixadeira Industrial', 'Máquina Multi-Operações Combinada'],
                quantities: ['1 unidade', '2 unidades', '5 unidades', '10 unidades']
            },
            elevacao: {
                label: 'Gruas, Empilhadeiras & Elevação',
                unit: 'Unidades',
                products: ['Empilhadeira Contrapeso (3–7T)', 'Reach Truck (Elétrica)', 'Empilhadeira de Grande Porte (10–25T+)', 'Grua Torre', 'Guindaste Móvel (All-Terrain)', 'Ponte Rolante Industrial', 'Plataforma Aérea (Manlift)', 'Stacker Elétrico'],
                quantities: ['1 unidade', '2 unidades', '5 unidades', '10 unidades']
            },
            industriais: {
                label: 'Maquinaria Industrial Pesada',
                unit: 'Unidades',
                products: ['Compressor Industrial de Parafuso', 'Gerador Trifásico', 'Prensa Hidráulica (100–500T)', 'Injetora de Plástico', 'Cortadora Laser CNC', 'Moinho Industrial', 'Trituradora / Fragmentadora', 'Extrusora Industrial'],
                quantities: ['1 unidade', '2 unidades', '5 unidades', '10 unidades']
            }
        }
    },
    tech: {
        label: 'Tecnologia',
        icon: 'memory',
        color: '#2563eb',
        categories: {
            chips: {
                label: 'Chips & Processadores',
                unit: 'Unidades (bulk)',
                products: ['Processadores Intel (bulk)', 'Processadores AMD (bulk)', 'Microcontroladores & MCUs (ESP32/STM32)', 'Chips de Memória NAND Flash', 'FPGAs (Xilinx / Intel Altera)', 'Processadores Mobile SoC (Qualcomm / MediaTek)'],
                quantities: ['10 unidades', '50 unidades', '100 unidades', '500 unidades', '1000 unidades']
            },
            memoria: {
                label: 'Memória & Armazenamento',
                unit: 'Unidades (bulk)',
                products: ['Módulos RAM DDR4', 'Módulos RAM DDR5', 'SSD NVMe M.2', 'SSD SATA 2.5"', 'eMMC Flash (embarcado)', 'Cartões microSD Industrial', 'HDD Enterprise 3.5"'],
                quantities: ['10 unidades', '50 unidades', '100 unidades', '500 unidades', '1000 unidades']
            },
            placas: {
                label: 'Placas-Mãe & Placas de Expansão',
                unit: 'Unidades (bulk)',
                products: ['Placa-Mãe Desktop Intel', 'Placa-Mãe Desktop AMD', 'Placa-Mãe Servidor / Workstation', 'Placa Gráfica NVIDIA (GPU, bulk)', 'Placa Gráfica AMD (GPU, bulk)', 'Placa de Rede (NIC)', 'Computador de Placa Única (SBC)'],
                quantities: ['5 unidades', '10 unidades', '50 unidades', '100 unidades']
            },
            energia_eletro: {
                label: 'Carregadores & Alimentação',
                unit: 'Unidades (bulk)',
                products: ['Fonte de Alimentação ATX (PSU)', 'Carregador USB-C GaN', 'Baterias Li-Ion 18650 (bulk)', 'Baterias LiPo (drones/dispositivos)', 'Power Bank Industrial', 'Painéis Solares Portáteis'],
                quantities: ['10 unidades', '50 unidades', '100 unidades', '500 unidades', '1000 unidades']
            },
            perifericos_eletro: {
                label: 'Periféricos & Displays',
                unit: 'Unidades (bulk)',
                products: ['Monitor LCD/IPS (bulk)', 'Painéis OLED (dispositivos móveis)', 'Câmera de Segurança IP', 'Impressora Térmica de Etiquetas', 'Scanner Industrial de Código de Barras', 'Teclado & Rato (Bulk Corporativo)'],
                quantities: ['10 unidades', '50 unidades', '100 unidades', '500 unidades']
            }
        }
    }
};

let wizardState = {
    currentStep: 1,
    selectedSector: '',
    selectedCategory: '',
    selectedProduct: '',
    selectedGrade: '',
    packagingType: '',
    selectedQty: '',
    selectedUnit: 'Toneladas (TN)',
    urgency: 'Urgente',
    whatsapp: '',
    email: '',
    country: 'Moçambique',
    company: '',
    logistics: 'Sim',
    port: '',
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
        selectedGrade: '',
        packagingType: '',
        selectedQty: '',
        selectedUnit: 'Toneladas (TN)',
        urgency: 'Urgente',
        whatsapp: '',
        email: '',
        country: 'Moçambique',
        company: '',
        logistics: 'Sim',
        port: '',
        description: ''
    };
    
    // Clear inputs in form
    if (document.getElementById('wizard-product-input')) document.getElementById('wizard-product-input').value = '';
    if (document.getElementById('wizard-qty-input')) document.getElementById('wizard-qty-input').value = '';
    if (document.getElementById('wizard-contact-whatsapp')) document.getElementById('wizard-contact-whatsapp').value = '';
    if (document.getElementById('wizard-contact-email')) document.getElementById('wizard-contact-email').value = '';
    if (document.getElementById('wizard-contact-desc')) document.getElementById('wizard-contact-desc').value = '';
    if (document.getElementById('wizard-contact-company')) document.getElementById('wizard-contact-company').value = '';
    if (document.getElementById('wizard-contact-port')) document.getElementById('wizard-contact-port').value = '';
    if (document.getElementById('wizard-packaging-custom')) document.getElementById('wizard-packaging-custom').value = '';
    
    const derivativeContainer = document.getElementById('wizard-derivative-container');
    if (derivativeContainer) derivativeContainer.style.display = 'none';
    
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
        let codeFound = 'MZ';
        const cLower = countryText.toLowerCase();
        for (const [code, info] of Object.entries(GLOBAL_COUNTRIES)) {
            if (info.namePt.toLowerCase().includes(cLower) || info.nameEn.toLowerCase().includes(cLower) || cLower.includes(info.namePt.toLowerCase())) {
                codeFound = code;
                break;
            }
        }
        countrySelect.value = codeFound;
        onWizardCountryChange(codeFound);
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
            'assets/images/agro_commodities.jpg',
            'assets/images/agro_commodities.jpg'
        ],
        energy: [
            'assets/images/oil_gas.jpg',
            'assets/images/oil_gas.jpg'
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
    else if (c.includes('malawi') || c.includes('maláui')) flag = '🇲🇼';
    else if (c.includes('zâmbia') || c.includes('zambia')) flag = '🇿🇲';
    else if (c.includes('guiné') || c.includes('guinea') || c.includes('huine') || c.includes('conacry') || c.includes('conakry')) flag = '🇬🇳';
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
            <img src="${imgUrl}" alt="${gvSecurity.sanitize(titleText)}" class="opp-modal-hero-img">
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
                <span class="card-subcategory-label">${gvSecurity.sanitize(catSublabel)}</span>
                <h2 style="font-size: 20px; font-weight: 800; color: #0f172a; margin: 0 0 16px; line-height: 1.3;">${gvSecurity.sanitize(titleText)}</h2>

                <!-- Specs Grid -->
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 14px; padding: 14px 16px; display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
                    <div class="card-detail-row">
                        <span class="card-detail-label">
                            <span class="material-symbols-outlined">inventory_2</span>
                            ${labelVol}:
                        </span>
                        <span class="card-detail-value">${gvSecurity.sanitize(qtyText)}</span>
                    </div>
                    <div class="card-detail-row">
                        <span class="card-detail-label">
                            <span class="material-symbols-outlined">public</span>
                            ${labelCountryKey}:
                        </span>
                        <span class="card-detail-value" style="display:flex;align-items:center;gap:4px;">
                            ${gvSecurity.sanitize(countryText)} <span style="font-size:14px;line-height:1;">${flag}</span>
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

const GLOBAL_COUNTRIES = {
    // África / Africa
    'MZ': { namePt: 'Moçambique', nameEn: 'Mozambique', flag: '🇲🇿', ddi: '+258', port: 'Porto de Maputo' },
    'ZA': { namePt: 'África do Sul', nameEn: 'South Africa', flag: '🇿🇦', ddi: '+27', port: 'Port of Durban' },
    'AO': { namePt: 'Angola', nameEn: 'Angola', flag: '🇦🇴', ddi: '+244', port: 'Porto de Luanda' },
    'CV': { namePt: 'Cabo Verde', nameEn: 'Cape Verde', flag: '🇨🇻', ddi: '+238', port: 'Porto da Praia' },
    'GW': { namePt: 'Guiné-Bissau', nameEn: 'Guinea-Bissau', flag: '🇬🇼', ddi: '+245', port: 'Porto de Bissau' },
    'ST': { namePt: 'São Tomé e Príncipe', nameEn: 'Sao Tome & Principe', flag: '🇸🇹', ddi: '+239', port: 'Porto de Ana Chaves' },
    'NG': { namePt: 'Nigéria', nameEn: 'Nigeria', flag: '🇳🇬', ddi: '+234', port: 'Port of Lagos' },
    'GH': { namePt: 'Gana', nameEn: 'Ghana', flag: '🇬🇭', ddi: '+233', port: 'Port of Tema' },
    'CI': { namePt: 'Costa do Marfim', nameEn: 'Ivory Coast', flag: '🇨🇮', ddi: '+225', port: 'Port d\'Abidjan' },
    'SN': { namePt: 'Senegal', nameEn: 'Senegal', flag: '🇸🇳', ddi: '+221', port: 'Port de Dakar' },
    'KE': { namePt: 'Quénia', nameEn: 'Kenya', flag: '🇰🇪', ddi: '+254', port: 'Port of Mombasa' },
    'TZ': { namePt: 'Tanzânia', nameEn: 'Tanzania', flag: '🇹🇿', ddi: '+255', port: 'Port of Dar es Salaam' },
    'UG': { namePt: 'Uganda', nameEn: 'Uganda', flag: '🇺🇬', ddi: '+256', port: 'Port of Mombasa (Transito)' },
    'RW': { namePt: 'Ruanda', nameEn: 'Rwanda', flag: '🇷🇼', ddi: '+250', port: 'Kigali Dry Port' },
    'ZM': { namePt: 'Zâmbia', nameEn: 'Zambia', flag: '🇿🇲', ddi: '+260', port: 'Lusaka Dry Port' },
    'ZW': { namePt: 'Zimbábue', nameEn: 'Zimbabwe', flag: '🇿🇼', ddi: '+263', port: 'Harare Dry Port' },
    'BW': { namePt: 'Botsuana', nameEn: 'Botswana', flag: '🇧🇼', ddi: '+267', port: 'Gaborone Dry Port' },
    'NA': { namePt: 'Namíbia', nameEn: 'Namibia', flag: '🇳🇦', ddi: '+264', port: 'Port of Walvis Bay' },
    'MG': { namePt: 'Madagáscar', nameEn: 'Madagascar', flag: '🇲🇬', ddi: '+261', port: 'Port of Toamasina' },
    'MW': { namePt: 'Malaui', nameEn: 'Malawi', flag: '🇲🇼', ddi: '+265', port: 'Blantyre Inland Container Depot' },
    'SZ': { namePt: 'Essuatíni', nameEn: 'Eswatini', flag: '🇸🇿', ddi: '+268', port: 'Matsapha Inland Depot' },
    'LS': { namePt: 'Lesoto', nameEn: 'Lesotho', flag: '🇱🇸', ddi: '+266', port: 'Maseru Depot' },
    'CD': { namePt: 'Rep. Dem. do Congo', nameEn: 'DR Congo', flag: '🇨🇩', ddi: '+243', port: 'Port de Matadi' },
    'CG': { namePt: 'Rep. do Congo', nameEn: 'Rep. of Congo', flag: '🇨🇬', ddi: '+242', port: 'Port de Pointe-Noire' },
    'CM': { namePt: 'Camarões', nameEn: 'Cameroon', flag: '🇨🇲', ddi: '+237', port: 'Port de Douala' },
    'ET': { namePt: 'Etiópia', nameEn: 'Ethiopia', flag: '🇪🇹', ddi: '+251', port: 'Port of Djibouti (Transit)' },
    'EG': { namePt: 'Egito', nameEn: 'Egypt', flag: '🇪🇬', ddi: '+20', port: 'Port Said' },
    'MA': { namePt: 'Marrocos', nameEn: 'Morocco', flag: '🇲🇦', ddi: '+212', port: 'Tanger Med Port' },
    'DZ': { namePt: 'Argélia', nameEn: 'Algeria', flag: '🇩🇿', ddi: '+213', port: 'Port d\'Alger' },
    'TN': { namePt: 'Tunísia', nameEn: 'Tunisia', flag: '🇹🇳', ddi: '+216', port: 'Port de Rades' },

    // Américas / Americas
    'BR': { namePt: 'Brasil', nameEn: 'Brazil', flag: '🇧🇷', ddi: '+55', port: 'Porto de Santos' },
    'US': { namePt: 'Estados Unidos', nameEn: 'United States', flag: '🇺🇸', ddi: '+1', port: 'Port of Houston' },
    'CA': { namePt: 'Canadá', nameEn: 'Canada', flag: '🇨🇦', ddi: '+1', port: 'Port of Vancouver' },
    'MX': { namePt: 'México', nameEn: 'Mexico', flag: '🇲🇽', ddi: '+52', port: 'Puerto de Veracruz' },
    'AR': { namePt: 'Argentina', nameEn: 'Argentina', flag: '🇦🇷', ddi: '+54', port: 'Puerto de Buenos Aires' },
    'CL': { namePt: 'Chile', nameEn: 'Chile', flag: '🇨🇱', ddi: '+56', port: 'Puerto de Valparaíso' },
    'CO': { namePt: 'Colômbia', nameEn: 'Colombia', flag: '🇨🇴', ddi: '+57', port: 'Puerto de Cartagena' },
    'PE': { namePt: 'Peru', nameEn: 'Peru', flag: '🇵🇪', ddi: '+51', port: 'Puerto del Callao' },
    'UY': { namePt: 'Uruguai', nameEn: 'Uruguay', flag: '🇺🇾', ddi: '+598', port: 'Puerto de Montevideo' },
    'PY': { namePt: 'Paraguai', nameEn: 'Paraguay', flag: '🇵🇾', ddi: '+595', port: 'Puerto de Asunción' },
    'BO': { namePt: 'Bolívia', nameEn: 'Bolivia', flag: '🇧🇴', ddi: '+591', port: 'Puerto Arica (Transit)' },
    'EC': { namePt: 'Equador', nameEn: 'Ecuador', flag: '🇪🇨', ddi: '+593', port: 'Puerto de Guayaquil' },
    'VE': { namePt: 'Venezuela', nameEn: 'Venezuela', flag: '🇻🇪', ddi: '+58', port: 'Puerto Cabello' },

    // Europa / Europe
    'PT': { namePt: 'Portugal', nameEn: 'Portugal', flag: '🇵🇹', ddi: '+351', port: 'Porto de Sines' },
    'GB': { namePt: 'Reino Unido', nameEn: 'United Kingdom', flag: '🇬🇧', ddi: '+44', port: 'Port of Felixstowe' },
    'DE': { namePt: 'Alemanha', nameEn: 'Germany', flag: '🇩🇪', ddi: '+49', port: 'Port of Hamburg' },
    'FR': { namePt: 'França', nameEn: 'France', flag: '🇫🇷', ddi: '+33', port: 'Port de Le Havre' },
    'IT': { namePt: 'Itália', nameEn: 'Italy', flag: '🇮🇹', ddi: '+39', port: 'Porto di Genova' },
    'ES': { namePt: 'Espanha', nameEn: 'Spain', flag: '🇪🇸', ddi: '+34', port: 'Puerto de Valencia' },
    'NL': { namePt: 'Países Baixos', nameEn: 'Netherlands', flag: '🇳🇱', ddi: '+31', port: 'Port of Rotterdam' },
    'BE': { namePt: 'Bélgica', nameEn: 'Belgium', flag: '🇧🇪', ddi: '+32', port: 'Port of Antwerp' },
    'CH': { namePt: 'Suíça', nameEn: 'Switzerland', flag: '🇨🇭', ddi: '+41', port: 'Port of Basel' },
    'SE': { namePt: 'Suécia', nameEn: 'Sweden', flag: '🇸🇪', ddi: '+46', port: 'Port of Gothenburg' },
    'NO': { namePt: 'Noruega', nameEn: 'Norway', flag: '🇳🇴', ddi: '+47', port: 'Port of Oslo' },
    'DK': { namePt: 'Dinamarca', nameEn: 'Denmark', flag: '🇩🇰', ddi: '+45', port: 'Port of Copenhagen' },
    'PL': { namePt: 'Polónia', nameEn: 'Poland', flag: '🇵🇱', ddi: '+48', port: 'Port of Gdansk' },
    'AT': { namePt: 'Áustria', nameEn: 'Austria', flag: '🇦🇹', ddi: '+43', port: 'Vienna Cargo Terminal' },
    'TR': { namePt: 'Turquia', nameEn: 'Turkey', flag: '🇹🇷', ddi: '+90', port: 'Port of Ambarli' },
    'RU': { namePt: 'Rússia', nameEn: 'Russia', flag: '🇷🇺', ddi: '+7', port: 'Port of St. Petersburg' },

    // Ásia & Médio Oriente / Asia & Middle East
    'AE': { namePt: 'Emirados Árabes', nameEn: 'United Arab Emirates', flag: '🇦🇪', ddi: '+971', port: 'Jebel Ali Port' },
    'CN': { namePt: 'China', nameEn: 'China', flag: '🇨🇳', ddi: '+86', port: 'Port of Shanghai' },
    'IN': { namePt: 'Índia', nameEn: 'India', flag: '🇮🇳', ddi: '+91', port: 'Mundra Port' },
    'SA': { namePt: 'Arábia Saudita', nameEn: 'Saudi Arabia', flag: '🇸🇦', ddi: '+966', port: 'Jeddah Islamic Port' },
    'QA': { namePt: 'Catar', nameEn: 'Qatar', flag: '🇶🇦', ddi: '+974', port: 'Hamad Port' },
    'KW': { namePt: 'Kuwait', nameEn: 'Kuwait', flag: '🇰🇼', ddi: '+965', port: 'Shuwaikh Port' },
    'OM': { namePt: 'Omã', nameEn: 'Oman', flag: '🇴🇲', ddi: '+968', port: 'Sohar Port' },
    'BH': { namePt: 'Barém', nameEn: 'Bahrain', flag: '🇧🇭', ddi: '+973', port: 'Khalifa Bin Salman Port' },
    'IL': { namePt: 'Israel', nameEn: 'Israel', flag: '🇮🇱', ddi: '+972', port: 'Port of Haifa' },
    'JP': { namePt: 'Japão', nameEn: 'Japan', flag: '🇯🇵', ddi: '+81', port: 'Port of Tokyo' },
    'KR': { namePt: 'Coreia do Sul', nameEn: 'South Korea', flag: '🇰🇷', ddi: '+82', port: 'Port of Busan' },
    'SG': { namePt: 'Singapura', nameEn: 'Singapore', flag: '🇸🇬', ddi: '+65', port: 'Port of Singapore' },
    'MY': { namePt: 'Malásia', nameEn: 'Malaysia', flag: '🇲🇾', ddi: '+60', port: 'Port Klang' },
    'TH': { namePt: 'Tailândia', nameEn: 'Thailand', flag: '🇹🇭', ddi: '+66', port: 'Laem Chabang Port' },
    'ID': { namePt: 'Indonésia', nameEn: 'Indonesia', flag: '🇮🇩', ddi: '+62', port: 'Tanjung Priok Port' },
    'VN': { namePt: 'Vietnã', nameEn: 'Vietnam', flag: '🇻🇳', ddi: '+84', port: 'Cat Lai Port' },
    'TL': { namePt: 'Timor-Leste', nameEn: 'East Timor', flag: '🇹🇱', ddi: '+670', port: 'Porto de Dili' },
    'MO': { namePt: 'Macau', nameEn: 'Macau', flag: '🇲🇴', ddi: '+853', port: 'Porto de Macau' },

    // Oceania
    'AU': { namePt: 'Austrália', nameEn: 'Australia', flag: '🇦🇺', ddi: '+61', port: 'Port of Melbourne' },
    'NZ': { namePt: 'Nova Zelândia', nameEn: 'New Zealand', flag: '🇳🇿', ddi: '+64', port: 'Port of Auckland' },

    'OTHER': { namePt: 'Outro País', nameEn: 'Other Country', flag: '🌐', ddi: '+', port: 'Porto Internacional' }
};

const PRODUCT_SPEC_DICTIONARY = {
    'NPK 12-24-12': {
        state: 'solid',
        derivatives: {
            pt: ['NPK 12-24-12 Granulado Standard', 'NPK 15-15-15 (Fórmula Equilibrada)', 'NPK 10-20-10 (Rico em Fósforo)', 'NPK 20-10-10 (Rico em Nitrogénio)', 'NPK Mistura Personalizada (Blend)'],
            en: ['NPK 12-24-12 Standard Granular', 'NPK 15-15-15 (Balanced Formula)', 'NPK 10-20-10 (High Phosphorus)', 'NPK 20-10-10 (High Nitrogen)', 'NPK Custom Blend']
        }
    },
    'Ureia Prilada 46%': {
        state: 'solid',
        derivatives: {
            pt: ['Ureia Granulada 46% N', 'Ureia Perlada (Prilled 46%)', 'Ureia Grau Técnico (Industrial)', 'Ureia Automotiva ARLA 32 / AdBlue'],
            en: ['Granular Urea 46% N', 'Prilled Urea 46%', 'Technical Grade Urea (Industrial)', 'Automotive Urea ARLA 32 / AdBlue']
        }
    },
    'Prilled Urea 46%': {
        state: 'solid',
        derivatives: {
            pt: ['Ureia Granulada 46% N', 'Ureia Perlada (Prilled 46%)', 'Ureia Grau Técnico (Industrial)', 'Ureia Automotiva ARLA 32 / AdBlue'],
            en: ['Granular Urea 46% N', 'Prilled Urea 46%', 'Technical Grade Urea (Industrial)', 'Automotive Urea ARLA 32 / AdBlue']
        }
    },
    'DAP (Fosfato Diamónico)': {
        state: 'solid',
        derivatives: {
            pt: ['DAP 18-46-0 Granulado', 'MAP 11-52-0 (Fosfato Monoamónico)', 'TSP (Superfosfato Triplo 46%)', 'Fosfato Natural Reactivo 30%'],
            en: ['Granular DAP 18-46-0', 'MAP 11-52-0 (Monoammonium Phosphate)', 'TSP (Triple Superphosphate 46%)', 'Reactive Rock Phosphate 30%']
        }
    },
    'DAP (Diammonium Phosphate)': {
        state: 'solid',
        derivatives: {
            pt: ['DAP 18-46-0 Granulado', 'MAP 11-52-0 (Fosfato Monoamónico)', 'TSP (Superfosfato Triplo 46%)', 'Fosfato Natural Reactivo 30%'],
            en: ['Granular DAP 18-46-0', 'MAP 11-52-0 (Monoammonium Phosphate)', 'TSP (Triple Superphosphate 46%)', 'Reactive Rock Phosphate 30%']
        }
    },
    'Adubo Orgânico Compostado': {
        state: 'solid',
        derivatives: {
            pt: ['Húmus de Minhoca Enriquecido', 'Composto Orgânico Vegetal/Bovino', 'Torta de Mamona em Pellets', 'Biofertilizante Líquido Concentrado'],
            en: ['Enriched Vermicompost / Worm Humus', 'Vegetable/Cattle Organic Compost', 'Castor Cake Pellets', 'Concentrated Liquid Biofertilizer']
        }
    },
    'Composted Organic Fertilizer': {
        state: 'solid',
        derivatives: {
            pt: ['Húmus de Minhoca Enriquecido', 'Composto Orgânico Vegetal/Bovino', 'Torta de Mamona em Pellets', 'Biofertilizante Líquido Concentrado'],
            en: ['Enriched Vermicompost / Worm Humus', 'Vegetable/Cattle Organic Compost', 'Castor Cake Pellets', 'Concentrated Liquid Biofertilizer']
        }
    },

    // 🌾 AGRONEGÓCIO - Sementes & Mudas
    'Semente de Soja Certificada': {
        state: 'solid',
        derivatives: {
            pt: ['Soja Convencional C1 (Não-GMO)', 'Soja Intacta RR2 PRO / Bt', 'Soja Precoce (Ciclo 105 dias)', 'Soja Tardia (Ciclo 125+ dias)'],
            en: ['Non-GMO Certified Soy C1', 'Intacta RR2 PRO / Bt Soy', 'Early Cycle Soy (105 days)', 'Late Cycle Soy (125+ days)']
        }
    },
    'Certified Soybean Seed': {
        state: 'solid',
        derivatives: {
            pt: ['Soja Convencional C1 (Não-GMO)', 'Soja Intacta RR2 PRO / Bt', 'Soja Precoce (Ciclo 105 dias)', 'Soja Tardia (Ciclo 125+ dias)'],
            en: ['Non-GMO Certified Soy C1', 'Intacta RR2 PRO / Bt Soy', 'Early Cycle Soy (105 days)', 'Late Cycle Soy (125+ days)']
        }
    },
    'Semente de Milho Híbrido': {
        state: 'solid',
        derivatives: {
            pt: ['Milho Híbrido Simples (Alto Rendimento)', 'Milho Híbrido Duplo (Resistente à Seca)', 'Milho Branco Pipoca / Especial', 'Milho Amarelo Grão (Ração)'],
            en: ['Single Cross Hybrid Maize (High Yield)', 'Double Cross Hybrid Maize (Drought Tolerant)', 'Special White Popcorn Maize', 'Yellow Grain Feed Maize']
        }
    },
    'Hybrid Maize Seed': {
        state: 'solid',
        derivatives: {
            pt: ['Milho Híbrido Simples (Alto Rendimento)', 'Milho Híbrido Duplo (Resistente à Seca)', 'Milho Branco Pipoca / Especial', 'Milho Amarelo Grão (Ração)'],
            en: ['Single Cross Hybrid Maize (High Yield)', 'Double Cross Hybrid Maize (Drought Tolerant)', 'Special White Popcorn Maize', 'Yellow Grain Feed Maize']
        }
    },
    'Semente de Gergelim Selecionada': {
        state: 'solid',
        derivatives: {
            pt: ['Gergelim Branco Selecionado (Grau A)', 'Gergelim Preto Natural', 'Gergelim Castanho / Vermelho', 'Gergelim Despeliculado (Hulled)'],
            en: ['Selected White Sesame (Grade A)', 'Natural Black Sesame', 'Brown / Red Sesame', 'Hulled Sesame Seeds']
        }
    },
    'Selected Sesame Seed': {
        state: 'solid',
        derivatives: {
            pt: ['Gergelim Branco Selecionado (Grau A)', 'Gergelim Preto Natural', 'Gergelim Castanho / Vermelho', 'Gergelim Despeliculado (Hulled)'],
            en: ['Selected White Sesame (Grade A)', 'Natural Black Sesame', 'Brown / Red Sesame', 'Hulled Sesame Seeds']
        }
    },
    'Mudas de Cajueiro Enxertado': {
        state: 'solid',
        derivatives: {
            pt: ['Cajueiro Anão Precoce CCP-76', 'Cajueiro Anão Precoce BRS 226', 'Mudas de Cajueiro Gigante Tradicional', 'Mudas em Tubetes Biodegradáveis'],
            en: ['Precocious Dwarf Cashew CCP-76', 'Precocious Dwarf Cashew BRS 226', 'Traditional Giant Cashew Seedlings', 'Biodegradable Plug Seedlings']
        }
    },
    'Grafted Cashew Seedlings': {
        state: 'solid',
        derivatives: {
            pt: ['Cajueiro Anão Precoce CCP-76', 'Cajueiro Anão Precoce BRS 226', 'Mudas de Cajueiro Gigante Tradicional', 'Mudas em Tubetes Biodegradáveis'],
            en: ['Precocious Dwarf Cashew CCP-76', 'Precocious Dwarf Cashew BRS 226', 'Traditional Giant Cashew Seedlings', 'Biodegradable Plug Seedlings']
        }
    },

    // 🌾 AGRONEGÓCIO - Caju & Castanha
    'Castanha de Caju Bruta (Raw Cashew)': {
        state: 'solid',
        derivatives: {
            pt: ['Castanha Bruta Moçambique (KOR 48-52 lbs)', 'Castanha Bruta RCN Premium (KOR 53+ lbs)', 'Castanha Bruta Tamanho Médio (Count 180-200/kg)', 'Castanha Bruta Alta Humidade (<10%)'],
            en: ['Raw Cashew Nut Mozambique (KOR 48-52 lbs)', 'Raw Cashew Nut Premium (KOR 53+ lbs)', 'Medium Raw Cashew (Count 180-200/kg)', 'Low Moisture Raw Cashew (<10%)']
        }
    },
    'Raw Cashew Nut (RCN)': {
        state: 'solid',
        derivatives: {
            pt: ['Castanha Bruta Moçambique (KOR 48-52 lbs)', 'Castanha Bruta RCN Premium (KOR 53+ lbs)', 'Castanha Bruta Tamanho Médio (Count 180-200/kg)', 'Castanha Bruta Alta Humidade (<10%)'],
            en: ['Raw Cashew Nut Mozambique (KOR 48-52 lbs)', 'Raw Cashew Nut Premium (KOR 53+ lbs)', 'Medium Raw Cashew (Count 180-200/kg)', 'Low Moisture Raw Cashew (<10%)']
        }
    },
    'Amêndoa de Caju Processada W180': {
        state: 'solid',
        derivatives: {
            pt: ['W180 Jumbo Whole (170-180 grãos/lb)', 'W210 King Whole', 'Amêndoa Torrada e Salgada W180', 'Amêndoa Orgânica W180'],
            en: ['W180 Jumbo Whole (170-180 kernels/lb)', 'W210 King Whole', 'Roasted & Salted W180 Kernel', 'Organic W180 Kernel']
        }
    },
    'Processed Cashew Kernel W180': {
        state: 'solid',
        derivatives: {
            pt: ['W180 Jumbo Whole (170-180 grãos/lb)', 'W210 King Whole', 'Amêndoa Torrada e Salgada W180', 'Amêndoa Orgânica W180'],
            en: ['W180 Jumbo Whole (170-180 kernels/lb)', 'W210 King Whole', 'Roasted & Salted W180 Kernel', 'Organic W180 Kernel']
        }
    },
    'Amêndoa de Caju W240': {
        state: 'solid',
        derivatives: {
            pt: ['W240 Standard Whole (220-240 grãos/lb)', 'W320 Popular Whole (300-320 grãos/lb)', 'Pedaços / LWP (Large White Pieces)', 'Metades / SWP (Splits)'],
            en: ['W240 Standard Whole (220-240 kernels/lb)', 'W320 Popular Whole (300-320 kernels/lb)', 'Large White Pieces (LWP)', 'Splits (SWP)']
        }
    },
    'Cashew Kernel W240': {
        state: 'solid',
        derivatives: {
            pt: ['W240 Standard Whole (220-240 grãos/lb)', 'W320 Popular Whole (300-320 grãos/lb)', 'Pedaços / LWP (Large White Pieces)', 'Metades / SWP (Splits)'],
            en: ['W240 Standard Whole (220-240 kernels/lb)', 'W320 Popular Whole (300-320 kernels/lb)', 'Large White Pieces (LWP)', 'Splits (SWP)']
        }
    },
    'Casca de Caju para LCC': {
        state: 'liquid',
        derivatives: {
            pt: ['LCC Bruto (Cashew Nut Shell Liquid)', 'Casca Seca de Caju para Combustível Biomassa', 'Resíduo de Casca Moído', 'LCC Refinado Industrial'],
            en: ['Raw CNSL (Cashew Nut Shell Liquid)', 'Dry Cashew Shell for Biomass Fuel', 'Crushed Shell Residue', 'Refined Technical CNSL']
        }
    },
    'Cashew Shell Liquid (CNSL)': {
        state: 'liquid',
        derivatives: {
            pt: ['LCC Bruto (Cashew Nut Shell Liquid)', 'Casca Seca de Caju para Combustível Biomassa', 'Resíduo de Casca Moído', 'LCC Refinado Industrial'],
            en: ['Raw CNSL (Cashew Nut Shell Liquid)', 'Dry Cashew Shell for Biomass Fuel', 'Crushed Shell Residue', 'Refined Technical CNSL']
        }
    },

    // 🌾 AGRONEGÓCIO - Açúcar
    'Açúcar VHP de Cana': {
        state: 'solid',
        derivatives: {
            pt: ['Açúcar VHP (Very High Polarization - ICUMSA 600-1200)', 'Açúcar VVHP (Very Very High Polarization)', 'Açúcar Bruto para Refino', 'Melaço de Cana Concentrado'],
            en: ['VHP Sugar (ICUMSA 600-1200)', 'VVHP Sugar (Very Very High Polarization)', 'Raw Sugar for Refining', 'Concentrated Cane Molasses']
        }
    },
    'Raw VHP Cane Sugar': {
        state: 'solid',
        derivatives: {
            pt: ['Açúcar VHP (Very High Polarization - ICUMSA 600-1200)', 'Açúcar VVHP (Very Very High Polarization)', 'Açúcar Bruto para Refino', 'Melaço de Cana Concentrado'],
            en: ['VHP Sugar (ICUMSA 600-1200)', 'VVHP Sugar (Very Very High Polarization)', 'Raw Sugar for Refining', 'Concentrated Cane Molasses']
        }
    },
    'Açúcar Mascavado Orgânico': {
        state: 'solid',
        derivatives: {
            pt: ['Açúcar Mascavado Orgânico Certificado', 'Açúcar Demerara Natural', 'Açúcar de Coco Orgânico', 'Açúcar de Cana Não Refinado (Rapadura/Panela)'],
            en: ['Certified Organic Brown Sugar', 'Natural Demerara Sugar', 'Organic Coconut Sugar', 'Unrefined Whole Cane Sugar (Panela)']
        }
    },
    'Organic Brown Sugar': {
        state: 'solid',
        derivatives: {
            pt: ['Açúcar Mascavado Orgânico Certificado', 'Açúcar Demerara Natural', 'Açúcar de Coco Orgânico', 'Açúcar de Cana Não Refinado (Rapadura/Panela)'],
            en: ['Certified Organic Brown Sugar', 'Natural Demerara Sugar', 'Organic Coconut Sugar', 'Unrefined Whole Cane Sugar (Panela)']
        }
    },

    // 🌾 AGRONEGÓCIO - Equipamentos Agrícolas
    'Trator Agrícola 75HP 4x4': {
        state: 'solid',
        derivatives: {
            pt: ['Trator 75HP 4x4 com Cabine A/C', 'Trator 75HP 4x4 Plataformado (Sem Cabine)', 'Trator 75HP com Carregador Frontal', 'Trator 75HP com Tomada de Força Dupla'],
            en: ['75HP 4WD Tractor with A/C Cab', '75HP 4WD Open Platform Tractor', '75HP Tractor with Front Loader', '75HP Tractor with Dual PTO']
        }
    },
    'Agricultural Tractor 75HP 4WD': {
        state: 'solid',
        derivatives: {
            pt: ['Trator 75HP 4x4 com Cabine A/C', 'Trator 75HP 4x4 Plataformado (Sem Cabine)', 'Trator 75HP com Carregador Frontal', 'Trator 75HP com Tomada de Força Dupla'],
            en: ['75HP 4WD Tractor with A/C Cab', '75HP 4WD Open Platform Tractor', '75HP Tractor with Front Loader', '75HP Tractor with Dual PTO']
        }
    },
    'Charrua Aiveca 3 Discos': {
        state: 'solid',
        derivatives: {
            pt: ['Charrua de Discos Reversível 3 Discos', 'Charrua Aiveca Fixa 3 Discos', 'Charrua para Solos Pesados (Discos 28")', 'Grade de Discos 16 Discos'],
            en: ['Reversible 3-Disc Plough', 'Fixed 3-Bottom Mouldboard Plough', 'Heavy Duty Plough (28" Discs)', '16-Disc Offset Disc Harrow']
        }
    },
    '3-Disc Plough': {
        state: 'solid',
        derivatives: {
            pt: ['Charrua de Discos Reversível 3 Discos', 'Charrua Aiveca Fixa 3 Discos', 'Charrua para Solos Pesados (Discos 28")', 'Grade de Discos 16 Discos'],
            en: ['Reversible 3-Disc Plough', 'Fixed 3-Bottom Mouldboard Plough', 'Heavy Duty Plough (28" Discs)', '16-Disc Offset Disc Harrow']
        }
    },
    'Semeadora Linha Dupla': {
        state: 'solid',
        derivatives: {
            pt: ['Semeadora Adubadora de Precisão 2 Linhas', 'Semeadora Pneumática 4 Linhas', 'Semeadora de Plantio Direto', 'Semeadora Manual com Distribuidor'],
            en: ['2-Row Precision Seeder & Fertilizer', '4-Row Pneumatic Seeder', 'No-Till Seed Drill', 'Manual Push Seeder']
        }
    },
    'Double-Row Seeder': {
        state: 'solid',
        derivatives: {
            pt: ['Semeadora Adubadora de Precisão 2 Linhas', 'Semeadora Pneumática 4 Linhas', 'Semeadora de Plantio Direto', 'Semeadora Manual com Distribuidor'],
            en: ['2-Row Precision Seeder & Fertilizer', '4-Row Pneumatic Seeder', 'No-Till Seed Drill', 'Manual Push Seeder']
        }
    },
    'Sistema de Irrigação por Gotejamento': {
        state: 'solid',
        derivatives: {
            pt: ['Kit Irrigação por Gotejamento 1 Hectare', 'Sistema com Fita Gotejadora Auto-Compensante', 'Sistema Pivot Central 5 Hectares', 'Motobomba a Diesel com Filtros de Disco'],
            en: ['1 Hectare Drip Irrigation Kit', 'Pressure-Compensating Drip Line System', '5 Hectare Center Pivot System', 'Diesel Pump Set with Disc Filters']
        }
    },
    'Drip Irrigation System': {
        state: 'solid',
        derivatives: {
            pt: ['Kit Irrigação por Gotejamento 1 Hectare', 'Sistema com Fita Gotejadora Auto-Compensante', 'Sistema Pivot Central 5 Hectares', 'Motobomba a Diesel com Filtros de Disco'],
            en: ['1 Hectare Drip Irrigation Kit', 'Pressure-Compensating Drip Line System', '5 Hectare Center Pivot System', 'Diesel Pump Set with Disc Filters']
        }
    },
    'Ácido Sulfúrico 98% Concentrado': {
        state: 'liquid',
        derivatives: {
            pt: ['Ácido Sulfúrico 98% Concentrado (Industrial)', 'Ácido Sulfúrico 70% (Bateria/Eletrolítico)', 'Ácido Sulfúrico 93% Grau Técnico', 'Oleum (Ácido Fumegante 20% SO3)'],
            en: ['Sulphuric Acid 98% Concentrated (Industrial)', 'Sulphuric Acid 70% (Battery/Electrolyte Grade)', 'Sulphuric Acid 93% Technical Grade', 'Oleum (Fuming Acid 20% SO3)']
        }
    },
    'Sulphuric Acid 98% Concentrated': {
        state: 'liquid',
        derivatives: {
            pt: ['Ácido Sulfúrico 98% Concentrado (Industrial)', 'Ácido Sulfúrico 70% (Bateria/Eletrolítico)', 'Ácido Sulfúrico 93% Grau Técnico', 'Oleum (Ácido Fumegante 20% SO3)'],
            en: ['Sulphuric Acid 98% Concentrated (Industrial)', 'Sulphuric Acid 70% (Battery/Electrolyte Grade)', 'Sulphuric Acid 93% Technical Grade', 'Oleum (Fuming Acid 20% SO3)']
        }
    },
    'Açúcar Refinado ICUMSA 45': {
        state: 'solid',
        derivatives: {
            pt: ['Açúcar Refinado Branco ICUMSA 45', 'Açúcar VHP (Very High Polarization)', 'Açúcar Mascavado Orgânico'],
            en: ['Refined White Sugar ICUMSA 45', 'VHP Sugar (Very High Polarization)', 'Organic Brown Sugar']
        }
    },
    'Refined Cane Sugar ICUMSA 45': {
        state: 'solid',
        derivatives: {
            pt: ['Açúcar Refinado Branco ICUMSA 45', 'Açúcar VHP (Very High Polarization)', 'Açúcar Mascavado Orgânico'],
            en: ['Refined White Sugar ICUMSA 45', 'VHP Sugar (Very High Polarization)', 'Organic Brown Sugar']
        }
    },
    'Óleo Hidráulico ISO 68 Premium': {
        state: 'liquid',
        derivatives: {
            pt: ['Óleo Hidráulico ISO VG 68', 'Óleo Hidráulico ISO VG 46', 'Óleo para Engrenagens ISO 220', 'Solvente Mineral/White Spirit'],
            en: ['Hydraulic Oil ISO VG 68', 'Hydraulic Oil ISO VG 46', 'Industrial Gear Oil ISO 220', 'Mineral Solvent/White Spirit']
        }
    },
    'Premium Hydraulic Oil ISO 68': {
        state: 'liquid',
        derivatives: {
            pt: ['Óleo Hidráulico ISO VG 68', 'Óleo Hidráulico ISO VG 46', 'Óleo para Engrenagens ISO 220', 'Solvente Mineral/White Spirit'],
            en: ['Hydraulic Oil ISO VG 68', 'Hydraulic Oil ISO VG 46', 'Industrial Gear Oil ISO 220', 'Mineral Solvent/White Spirit']
        }
    },
    // MAQUINÁRIOS & INDÚSTRIA - Navios & Embarcações
    'Navio Cargueiro a Granel (Bulk Carrier)': { state: 'solid', derivatives: { pt: ['Handysize (15k–35k DWT)', 'Handymax / Supramax (40k–60k DWT)', 'Panamax (65k–80k DWT)', 'Capesize (100k–200k DWT)', 'VLOC (200k+ DWT)'], en: ['Handysize (15k–35k DWT)', 'Handymax / Supramax (40k–60k DWT)', 'Panamax (65k–80k DWT)', 'Capesize (100k–200k DWT)', 'VLOC (200k+ DWT)'] } },
    'Bulk Carrier (Dry Cargo Ship)': { state: 'solid', derivatives: { pt: ['Handysize (15k–35k DWT)', 'Handymax / Supramax (40k–60k DWT)', 'Panamax (65k–80k DWT)', 'Capesize (100k–200k DWT)', 'VLOC (200k+ DWT)'], en: ['Handysize (15k–35k DWT)', 'Handymax / Supramax (40k–60k DWT)', 'Panamax (65k–80k DWT)', 'Capesize (100k–200k DWT)', 'VLOC (200k+ DWT)'] } },
    'Navio Porta-Contentores': { state: 'solid', derivatives: { pt: ['Feeder (500–2.000 TEU)', 'Sub-Panamax (3.000–5.000 TEU)', 'Panamax (5.000–8.000 TEU)', 'Post-Panamax (8.000–14.000 TEU)', 'Ultra Large (14.000+ TEU)'], en: ['Feeder (500–2,000 TEU)', 'Sub-Panamax (3,000–5,000 TEU)', 'Panamax (5,000–8,000 TEU)', 'Post-Panamax (8,000–14,000 TEU)', 'Ultra Large (14,000+ TEU)'] } },
    'Container Ship': { state: 'solid', derivatives: { pt: ['Feeder (500–2.000 TEU)', 'Sub-Panamax (3.000–5.000 TEU)', 'Panamax (5.000–8.000 TEU)', 'Post-Panamax (8.000–14.000 TEU)', 'Ultra Large (14.000+ TEU)'], en: ['Feeder (500–2,000 TEU)', 'Sub-Panamax (3,000–5,000 TEU)', 'Panamax (5,000–8,000 TEU)', 'Post-Panamax (8.000–14.000 TEU)', 'Ultra Large (14,000+ TEU)'] } },
    'Navio Tanque (Tanker)': { state: 'liquid', derivatives: { pt: ['Petroleiro Bruto VLCC/Suezmax', 'Tanque de Produto Refinado (MR/LR2)', 'Tanque Químico (IMO Tipo II)', 'Transportador de GLP / LPG', 'Transportador de GNL / LNG'], en: ['Crude Oil Tanker VLCC/Suezmax', 'Product Tanker (MR/LR2)', 'Chemical Tanker (IMO Type II)', 'LPG Carrier', 'LNG Carrier'] } },
    'Oil Tanker': { state: 'liquid', derivatives: { pt: ['Petroleiro Bruto VLCC/Suezmax', 'Tanque de Produto Refinado (MR/LR2)', 'Tanque Químico (IMO Tipo II)', 'Transportador de GLP / LPG', 'Transportador de GNL / LNG'], en: ['Crude Oil Tanker VLCC/Suezmax', 'Product Tanker (MR/LR2)', 'Chemical Tanker (IMO Type II)', 'LPG Carrier', 'LNG Carrier'] } },
    'Draga Hidráulica': { state: 'solid', derivatives: { pt: ['Draga de Sucção por Arrasto (TSHD)', 'Draga de Corte (Cutter Suction Dredge)', 'Draga de Baldes / Rosário', 'Draga Backhoe (Braço Mecânico)', 'Draga Multipropósito'], en: ['Trailing Suction Hopper Dredger (TSHD)', 'Cutter Suction Dredge (CSD)', 'Bucket Chain Dredger', 'Backhoe Dredge', 'Multipurpose Dredge'] } },
    'Hydraulic Dredge': { state: 'solid', derivatives: { pt: ['Draga de Sucção por Arrasto (TSHD)', 'Draga de Corte (Cutter Suction Dredge)', 'Draga de Baldes / Rosário', 'Draga Backhoe (Braço Mecânico)', 'Draga Multipropósito'], en: ['Trailing Suction Hopper Dredger (TSHD)', 'Cutter Suction Dredge (CSD)', 'Bucket Chain Dredger', 'Backhoe Dredge', 'Multipurpose Dredge'] } },
    'Navio de Pesca Industrial': { state: 'solid', derivatives: { pt: ['Traineira Pelágica (Trawler)', 'Atuneiro de Vara e Isca', 'Navio Frigorífico de Pesca', 'Cercador (Purse Seiner)', 'Pesca Longline'], en: ['Pelagic Trawler', 'Pole & Line Tuna Vessel', 'Refrigerated Fish Carrier', 'Purse Seiner', 'Longline Fishing Vessel'] } },
    'Industrial Fishing Vessel': { state: 'solid', derivatives: { pt: ['Traineira Pelágica (Trawler)', 'Atuneiro de Vara e Isca', 'Navio Frigorífico de Pesca', 'Cercador (Purse Seiner)', 'Pesca Longline'], en: ['Pelagic Trawler', 'Pole & Line Tuna Vessel', 'Refrigerated Fish Carrier', 'Purse Seiner', 'Longline Fishing Vessel'] } },
    'Rebocador / Tugboat': { state: 'solid', derivatives: { pt: ['Rebocador Portuário (Harbor Tug)', 'Rebocador Costeiro', 'Rebocador de Alto Mar (Ocean-Going)', 'Anchor Handling Tug (AHT)', 'Empurradora Fluvial'], en: ['Harbor Tug', 'Coastal Tug', 'Ocean-Going Tug', 'Anchor Handling Tug (AHT)', 'River Pusher Tug'] } },
    'Tugboat / Tug': { state: 'solid', derivatives: { pt: ['Rebocador Portuário (Harbor Tug)', 'Rebocador Costeiro', 'Rebocador de Alto Mar (Ocean-Going)', 'Anchor Handling Tug (AHT)', 'Empurradora Fluvial'], en: ['Harbor Tug', 'Coastal Tug', 'Ocean-Going Tug', 'Anchor Handling Tug (AHT)', 'River Pusher Tug'] } },
    'Ferry & Balsa de Passageiros': { state: 'solid', derivatives: { pt: ['Ferry Rápido (Catamarã Alta Velocidade)', 'Balsa RoRo (Roll-on/Roll-off)', 'Ferry Convencional Misto', 'Embarcação Fluvial de Passageiros', 'Lancha de Transferência Offshore'], en: ['High-Speed Catamaran Ferry', 'RoRo Ferry (Roll-on/Roll-off)', 'Conventional Mixed Ferry', 'River Passenger Vessel', 'Offshore Transfer Vessel'] } },
    'Ferry & Passenger Vessel': { state: 'solid', derivatives: { pt: ['Ferry Rápido (Catamarã Alta Velocidade)', 'Balsa RoRo (Roll-on/Roll-off)', 'Ferry Convencional Misto', 'Embarcação Fluvial de Passageiros', 'Lancha de Transferência Offshore'], en: ['High-Speed Catamaran Ferry', 'RoRo Ferry (Roll-on/Roll-off)', 'Conventional Mixed Ferry', 'River Passenger Vessel', 'Offshore Transfer Vessel'] } },
    'Barcaça Fluvial': { state: 'solid', derivatives: { pt: ['Barcaça de Carga Seca (Open Hopper)', 'Barcaça Coberta (Box Barge)', 'Barcaça Tanque (Líquidos)', 'Barcaça de Trabalho / Plataforma', 'Empurradora Fluvial'], en: ['Open Hopper Barge', 'Covered Box Barge', 'Liquid Tank Barge', 'Work / Platform Barge', 'River Pusher Boat'] } },
    'River Barge': { state: 'solid', derivatives: { pt: ['Barcaça de Carga Seca (Open Hopper)', 'Barcaça Coberta (Box Barge)', 'Barcaça Tanque (Líquidos)', 'Barcaça de Trabalho / Plataforma', 'Empurradora Fluvial'], en: ['Open Hopper Barge', 'Covered Box Barge', 'Liquid Tank Barge', 'Work / Platform Barge', 'River Pusher Boat'] } },

    // Tratores & Maquinaria Agrícola
    'Trator Agrícola de Rodas': { state: 'solid', derivatives: { pt: ['Compacto 25–50 HP (4x4)', 'Médio 60–100 HP (4x4)', 'Grande 120–200 HP', 'Articulado 200–400 HP', '4WD com Cabine e A/C'], en: ['Compact 25–50 HP (4WD)', 'Mid-range 60–100 HP (4WD)', 'Large 120–200 HP', 'Articulated 200–400 HP', '4WD with Cab & A/C'] } },
    'Agricultural Wheeled Tractor': { state: 'solid', derivatives: { pt: ['Compacto 25–50 HP (4x4)', 'Médio 60–100 HP (4x4)', 'Grande 120–200 HP', 'Articulado 200–400 HP', '4WD com Cabine e A/C'], en: ['Compact 25–50 HP (4WD)', 'Mid-range 60–100 HP (4WD)', 'Large 120–200 HP', 'Articulated 200–400 HP', '4WD with Cab & A/C'] } },
    'Trator de Esteiras (Crawler)': { state: 'solid', derivatives: { pt: ['Esteiras de Borracha (Solo Suave)', 'Esteiras de Aço (Terreno Duro)', 'Crawler com Pá Frontal', 'Crawler com Engate de 3 Pontos'], en: ['Rubber Track (Soft Terrain)', 'Steel Track (Hard Terrain)', 'Crawler with Front Loader', 'Crawler with 3-Point Hitch'] } },
    'Crawler / Track Tractor': { state: 'solid', derivatives: { pt: ['Esteiras de Borracha (Solo Suave)', 'Esteiras de Aço (Terreno Duro)', 'Crawler com Pá Frontal', 'Crawler com Engate de 3 Pontos'], en: ['Rubber Track (Soft Terrain)', 'Steel Track (Hard Terrain)', 'Crawler with Front Loader', 'Crawler with 3-Point Hitch'] } },
    'Mini-Trator Compacto': { state: 'solid', derivatives: { pt: ['Motocultivador 2 Rodas (8–12 HP)', 'Mini-Trator 4x4 (15–25 HP)', 'Mini-Trator de Jardim / Gramado', 'Mini-Trator com Retroescavadora Traseira'], en: ['2-Wheel Cultivator (8–12 HP)', '4WD Mini-Tractor (15–25 HP)', 'Lawn / Garden Tractor', 'Mini-Tractor with Rear Backhoe'] } },
    'Compact Mini-Tractor': { state: 'solid', derivatives: { pt: ['Motocultivador 2 Rodas (8–12 HP)', 'Mini-Trator 4x4 (15–25 HP)', 'Mini-Trator de Jardim / Gramado', 'Mini-Trator com Retroescavadora Traseira'], en: ['2-Wheel Cultivator (8–12 HP)', '4WD Mini-Tractor (15–25 HP)', 'Lawn / Garden Tractor', 'Mini-Tractor with Rear Backhoe'] } },
    'Trator Vitivinícola / Pomar': { state: 'solid', derivatives: { pt: ['Estreito para Pomares (60–80 HP)', 'Cabalgante de Linha de Vinha', 'Compacto de Jardim Profissional', 'Trator Electrónico de Precisão (GPS)'], en: ['Narrow Orchard Tractor (60–80 HP)', 'Straddle Vineyard Tractor', 'Professional Garden Compact', 'GPS Precision Electronic Tractor'] } },
    'Orchard / Vineyard Tractor': { state: 'solid', derivatives: { pt: ['Estreito para Pomares (60–80 HP)', 'Cabalgante de Linha de Vinha', 'Compacto de Jardim Profissional', 'Trator Electrónico de Precisão (GPS)'], en: ['Narrow Orchard Tractor (60–80 HP)', 'Straddle Vineyard Tractor', 'Professional Garden Compact', 'GPS Precision Electronic Tractor'] } },
    'Trator Florestal': { state: 'solid', derivatives: { pt: ['Skidder de Arrasto (Cabo ou Pinça)', 'Forwarder (Transporte de Toros)', 'Harvester (Corte e Processamento)', 'Feller Buncher (Corte em Pé)'], en: ['Cable / Grapple Skidder', 'Forwarder (Log Transport)', 'Harvester (Cut & Process)', 'Feller Buncher (Standing Cut)'] } },
    'Forestry Tractor': { state: 'solid', derivatives: { pt: ['Skidder de Arrasto (Cabo ou Pinça)', 'Forwarder (Transporte de Toros)', 'Harvester (Corte e Processamento)', 'Feller Buncher (Corte em Pé)'], en: ['Cable / Grapple Skidder', 'Forwarder (Log Transport)', 'Harvester (Cut & Process)', 'Feller Buncher (Standing Cut)'] } },
    'Retroescavadora': { state: 'solid', derivatives: { pt: ['1CX Pequena', '3CX Standard (mais vendida)', '4CX Articulada', 'Mini-Retroescavadora Compacta'], en: ['1CX Small', '3CX Standard (best-seller)', '4CX Articulated', 'Compact Mini Backhoe'] } },
    'Backhoe Loader': { state: 'solid', derivatives: { pt: ['1CX Pequena', '3CX Standard (mais vendida)', '4CX Articulada', 'Mini-Retroescavadora Compacta'], en: ['1CX Small', '3CX Standard (best-seller)', '4CX Articulated', 'Compact Mini Backhoe'] } },
    'Escavadora Hidráulica': { state: 'solid', derivatives: { pt: ['Mini (0,8–6T)', 'Média (7–25T)', 'Grande (26–60T)', 'Extrapesada (60T+)', 'Longa Alcance (Long-Reach)'], en: ['Mini (0.8–6T)', 'Mid-size (7–25T)', 'Large (26–60T)', 'Heavy Duty (60T+)', 'Long-Reach Excavator'] } },
    'Hydraulic Excavator': { state: 'solid', derivatives: { pt: ['Mini (0,8–6T)', 'Média (7–25T)', 'Grande (26–60T)', 'Extrapesada (60T+)', 'Longa Alcance (Long-Reach)'], en: ['Mini (0.8–6T)', 'Mid-size (7–25T)', 'Large (26–60T)', 'Heavy Duty (60T+)', 'Long-Reach Excavator'] } },
    'Bulldozer / Topadora': { state: 'solid', derivatives: { pt: ['D3–D4 Pequeno (até 80 HP)', 'D5–D6 Médio (80–200 HP)', 'D7–D9 Grande (200–500 HP)', 'D10–D11 Extrapesado (500+ HP)'], en: ['D3–D4 Small (up to 80 HP)', 'D5–D6 Medium (80–200 HP)', 'D7–D9 Large (200–500 HP)', 'D10–D11 Extra Heavy (500+ HP)'] } },
    'Bulldozer / Dozer': { state: 'solid', derivatives: { pt: ['D3–D4 Pequeno (até 80 HP)', 'D5–D6 Médio (80–200 HP)', 'D7–D9 Grande (200–500 HP)', 'D10–D11 Extrapesado (500+ HP)'], en: ['D3–D4 Small (up to 80 HP)', 'D5–D6 Medium (80–200 HP)', 'D7–D9 Large (200–500 HP)', 'D10–D11 Extra Heavy (500+ HP)'] } },

    // Carpintaria & Madeira
    'Serra de Fita Industrial': { state: 'solid', derivatives: { pt: ['Horizontal (Corte de Toros)', 'Vertical (Reserrar Tábuas)', '2 Cortes Simultâneos', 'Portátil para Campo / Floresta'], en: ['Horizontal (Log Cutting)', 'Vertical (Resawing Planks)', 'Double-Cut Band Saw', 'Portable Field / Forest Band Saw'] } },
    'Industrial Band Saw': { state: 'solid', derivatives: { pt: ['Horizontal (Corte de Toros)', 'Vertical (Reserrar Tábuas)', '2 Cortes Simultâneos', 'Portátil para Campo / Floresta'], en: ['Horizontal (Log Cutting)', 'Vertical (Resawing Planks)', 'Double-Cut Band Saw', 'Portable Field / Forest Band Saw'] } },
    'Serra Circular de Mesa': { state: 'solid', derivatives: { pt: ['Manual (Ajuste por Manivela)', 'Semiautomática (Stop Ajustável)', 'CNC com Controlo Digital', 'Circular de Esquadria (Miter Saw)'], en: ['Manual (Hand-Wheel Adjustment)', 'Semi-Automatic (Adjustable Stop)', 'CNC Digital Control Table Saw', 'Compound Miter Saw'] } },
    'Circular Table Saw': { state: 'solid', derivatives: { pt: ['Manual (Ajuste por Manivela)', 'Semiautomática (Stop Ajustável)', 'CNC com Controlo Digital', 'Circular de Esquadria (Miter Saw)'], en: ['Manual (Hand-Wheel Adjustment)', 'Semi-Automatic (Adjustable Stop)', 'CNC Digital Control Table Saw', 'Compound Miter Saw'] } },
    'Router / Tupia CNC': { state: 'solid', derivatives: { pt: ['3 Eixos (Plana Standard)', '4 Eixos (com Rotativo)', '5 Eixos (Multi-direcional)', 'ATC (Troca Automática de Ferramentas)'], en: ['3-Axis (Flat Bed Standard)', '4-Axis (with Rotary)', '5-Axis (Multi-directional)', 'ATC (Auto Tool Change)'] } },
    'CNC Router / Spindle Moulder': { state: 'solid', derivatives: { pt: ['3 Eixos (Plana Standard)', '4 Eixos (com Rotativo)', '5 Eixos (Multi-direcional)', 'ATC (Troca Automática de Ferramentas)'], en: ['3-Axis (Flat Bed Standard)', '4-Axis (with Rotary)', '5-Axis (Multi-directional)', 'ATC (Auto Tool Change)'] } },

    // Elevação & Empilhadeiras
    'Empilhadeira Contrapeso (3–7T)': { state: 'solid', derivatives: { pt: ['Diesel 3T', 'GLP 3T', 'Elétrica 3T (bateria)', 'Diesel 5T', 'Diesel 7T'], en: ['Diesel 3T', 'LPG 3T', 'Electric 3T (battery)', 'Diesel 5T', 'Diesel 7T'] } },
    'Counterbalance Forklift (3–7T)': { state: 'solid', derivatives: { pt: ['Diesel 3T', 'GLP 3T', 'Elétrica 3T (bateria)', 'Diesel 5T', 'Diesel 7T'], en: ['Diesel 3T', 'LPG 3T', 'Electric 3T (battery)', 'Diesel 5T', 'Diesel 7T'] } },
    'Empilhadeira de Grande Porte (10–25T+)': { state: 'solid', derivatives: { pt: ['Diesel 10T', 'Diesel 15T', 'Diesel 25T', 'Telehandler / Manipulador Telescópico 30T+'], en: ['Diesel 10T', 'Diesel 15T', 'Diesel 25T', 'Telehandler 30T+'] } },
    'Heavy Duty Forklift (10–25T+)': { state: 'solid', derivatives: { pt: ['Diesel 10T', 'Diesel 15T', 'Diesel 25T', 'Telehandler / Manipulador Telescópico 30T+'], en: ['Diesel 10T', 'Diesel 15T', 'Diesel 25T', 'Telehandler 30T+'] } },
    'Grua Torre': { state: 'solid', derivatives: { pt: ['Automontante (Self-Erecting)', 'Top-Slewing (Jib Fixo)', 'Luffing Jib (Lança Inclinável)', 'Flat-Top (Sem Cabeça de Gato)'], en: ['Self-Erecting Tower Crane', 'Top-Slewing (Fixed Jib)', 'Luffing Jib Crane', 'Flat-Top Tower Crane'] } },
    'Tower Crane': { state: 'solid', derivatives: { pt: ['Automontante (Self-Erecting)', 'Top-Slewing (Jib Fixo)', 'Luffing Jib (Lança Inclinável)', 'Flat-Top (Sem Cabeça de Gato)'], en: ['Self-Erecting Tower Crane', 'Top-Slewing (Fixed Jib)', 'Luffing Jib Crane', 'Flat-Top Tower Crane'] } },
    'Guindaste Móvel (All-Terrain)': { state: 'solid', derivatives: { pt: ['All-Terrain 25T', 'All-Terrain 50T', 'All-Terrain 100T', 'All-Terrain 200T+', 'Guindaste sobre Lagarta (Crawler Crane)'], en: ['All-Terrain 25T', 'All-Terrain 50T', 'All-Terrain 100T', 'All-Terrain 200T+', 'Crawler Crane'] } },
    'All-Terrain Mobile Crane': { state: 'solid', derivatives: { pt: ['All-Terrain 25T', 'All-Terrain 50T', 'All-Terrain 100T', 'All-Terrain 200T+', 'Guindaste sobre Lagarta (Crawler Crane)'], en: ['All-Terrain 25T', 'All-Terrain 50T', 'All-Terrain 100T', 'All-Terrain 200T+', 'Crawler Crane'] } },

    // Maquinaria Industrial Pesada
    'Compressor Industrial de Parafuso': { state: 'solid', derivatives: { pt: ['Parafuso 10–30 kW (sem óleo)', 'Parafuso 37–75 kW', 'Parafuso 90–160 kW', 'Parafuso 200 kW+', 'Compressor de Pistão Industrial'], en: ['Screw 10–30 kW (oil-free)', 'Screw 37–75 kW', 'Screw 90–160 kW', 'Screw 200 kW+', 'Industrial Piston Compressor'] } },
    'Industrial Screw Compressor': { state: 'solid', derivatives: { pt: ['Parafuso 10–30 kW (sem óleo)', 'Parafuso 37–75 kW', 'Parafuso 90–160 kW', 'Parafuso 200 kW+', 'Compressor de Pistão Industrial'], en: ['Screw 10–30 kW (oil-free)', 'Screw 37–75 kW', 'Screw 90–160 kW', 'Screw 200 kW+', 'Industrial Piston Compressor'] } },
    'Gerador Trifásico': { state: 'solid', derivatives: { pt: ['15–50 kVA Silencioso', '50–200 kVA', '200–500 kVA', '500–1000 kVA', '1000 kVA+ (Centralita)'], en: ['15–50 kVA Silent', '50–200 kVA', '200–500 kVA', '500–1000 kVA', '1000 kVA+ (Power Station)'] } },
    'Three-Phase Generator Set': { state: 'solid', derivatives: { pt: ['15–50 kVA Silencioso', '50–200 kVA', '200–500 kVA', '500–1000 kVA', '1000 kVA+ (Centralita)'], en: ['15–50 kVA Silent', '50–200 kVA', '200–500 kVA', '500–1000 kVA', '1000 kVA+ (Power Station)'] } },
    'Prensa Hidráulica (100–500T)': { state: 'solid', derivatives: { pt: ['Prensa Hidráulica 100T', 'Prensa Hidráulica 200T', 'Prensa Hidráulica 315T', 'Prensa Hidráulica 500T', 'Prensa de Forjagem 1000T+'], en: ['Hydraulic Press 100T', 'Hydraulic Press 200T', 'Hydraulic Press 315T', 'Hydraulic Press 500T', 'Forging Press 1000T+'] } },
    'Hydraulic Press (100–500T)': { state: 'solid', derivatives: { pt: ['Prensa Hidráulica 100T', 'Prensa Hidráulica 200T', 'Prensa Hidráulica 315T', 'Prensa Hidráulica 500T', 'Prensa de Forjagem 1000T+'], en: ['Hydraulic Press 100T', 'Hydraulic Press 200T', 'Hydraulic Press 315T', 'Hydraulic Press 500T', 'Forging Press 1000T+'] } },
    'Cortadora Laser CNC': { state: 'solid', derivatives: { pt: ['Laser CO₂ 2–4 kW (não metálicos)', 'Laser Fibra 1–3 kW (chapa fina)', 'Laser Fibra 4–8 kW (chapa média)', 'Laser Fibra 10–20 kW (chapa grossa)', 'Laser 3D Tubos & Perfis'], en: ['CO₂ Laser 2–4 kW (non-metals)', 'Fibre Laser 1–3 kW (thin sheet)', 'Fibre Laser 4–8 kW (medium sheet)', 'Fibre Laser 10–20 kW (thick plate)', '3D Laser Tube & Profile Cutting'] } },
    'CNC Laser Cutting Machine': { state: 'solid', derivatives: { pt: ['Laser CO₂ 2–4 kW (não metálicos)', 'Laser Fibra 1–3 kW (chapa fina)', 'Laser Fibra 4–8 kW (chapa média)', 'Laser Fibra 10–20 kW (chapa grossa)', 'Laser 3D Tubos & Perfis'], en: ['CO₂ Laser 2–4 kW (non-metals)', 'Fibre Laser 1–3 kW (thin sheet)', 'Fibre Laser 4–8 kW (medium sheet)', 'Fibre Laser 10–20 kW (thick plate)', '3D Laser Tube & Profile Cutting'] } },
    'Injetora de Plástico': { state: 'solid', derivatives: { pt: ['Injetora 50–200T (peças pequenas)', 'Injetora 200–500T (peças médias)', 'Injetora 500T+ (peças grandes)', 'Injetora Elétrica de Alta Precisão', 'Injetora para Borracha / Silicone'], en: ['Injection Moulder 50–200T (small parts)', 'Injection Moulder 200–500T (medium parts)', 'Injection Moulder 500T+ (large parts)', 'Electric High-Precision Injection Moulder', 'Rubber / Silicone Injection Moulder'] } },
    'Plastic Injection Moulding Machine': { state: 'solid', derivatives: { pt: ['Injetora 50–200T (peças pequenas)', 'Injetora 200–500T (peças médias)', 'Injetora 500T+ (peças grandes)', 'Injetora Elétrica de Alta Precisão', 'Injetora para Borracha / Silicone'], en: ['Injection Moulder 50–200T (small parts)', 'Injection Moulder 200–500T (medium parts)', 'Injection Moulder 500T+ (large parts)', 'Electric High-Precision Injection Moulder', 'Rubber / Silicone Injection Moulder'] } },

    // ELECTRÓNICA & COMPONENTES - Chips
    'Processadores Intel (bulk)': { state: 'solid', derivatives: { pt: ['Core i3 (14ª/13ª Gen — bulk)', 'Core i5 (14ª/13ª Gen — bulk)', 'Core i7 (14ª/13ª Gen — bulk)', 'Core i9 Topo de Gama (bulk)', 'Xeon Scalable para Servidor'], en: ['Core i3 (14th/13th Gen — bulk)', 'Core i5 (14th/13th Gen — bulk)', 'Core i7 (14th/13th Gen — bulk)', 'Core i9 Flagship (bulk)', 'Xeon Scalable for Server'] } },
    'Intel Processors (bulk)': { state: 'solid', derivatives: { pt: ['Core i3 (14ª/13ª Gen — bulk)', 'Core i5 (14ª/13ª Gen — bulk)', 'Core i7 (14ª/13ª Gen — bulk)', 'Core i9 Topo de Gama (bulk)', 'Xeon Scalable para Servidor'], en: ['Core i3 (14th/13th Gen — bulk)', 'Core i5 (14th/13th Gen — bulk)', 'Core i7 (14th/13th Gen — bulk)', 'Core i9 Flagship (bulk)', 'Xeon Scalable for Server'] } },
    'Processadores AMD (bulk)': { state: 'solid', derivatives: { pt: ['Ryzen 5 (série 8000/7000 — bulk)', 'Ryzen 7 (série 8000/7000 — bulk)', 'Ryzen 9 (série 8000/7000 — bulk)', 'Threadripper PRO (Workstation)', 'EPYC para Servidor'], en: ['Ryzen 5 (8000/7000 series — bulk)', 'Ryzen 7 (8000/7000 series — bulk)', 'Ryzen 9 (8000/7000 series — bulk)', 'Threadripper PRO (Workstation)', 'EPYC for Server'] } },
    'AMD Processors (bulk)': { state: 'solid', derivatives: { pt: ['Ryzen 5 (série 8000/7000 — bulk)', 'Ryzen 7 (série 8000/7000 — bulk)', 'Ryzen 9 (série 8000/7000 — bulk)', 'Threadripper PRO (Workstation)', 'EPYC para Servidor'], en: ['Ryzen 5 (8000/7000 series — bulk)', 'Ryzen 7 (8000/7000 series — bulk)', 'Ryzen 9 (8000/7000 series — bulk)', 'Threadripper PRO (Workstation)', 'EPYC for Server'] } },
    'Microcontroladores & MCUs (ESP32/STM32)': { state: 'solid', derivatives: { pt: ['ESP32 / ESP32-S3 (Wi-Fi + BLE)', 'STM32 ARM Cortex-M (bulk)', 'Arduino ATmega328/2560 (bulk)', 'Raspberry Pi RP2040 (bulk)', 'PIC Microchip (bulk)', 'RISC-V MCUs (GD32/WCH)'], en: ['ESP32 / ESP32-S3 (Wi-Fi + BLE)', 'STM32 ARM Cortex-M (bulk)', 'Arduino ATmega328/2560 (bulk)', 'Raspberry Pi RP2040 (bulk)', 'PIC Microchip (bulk)', 'RISC-V MCUs (GD32/WCH)'] } },
    'Microcontrollers & MCUs (ESP32/STM32)': { state: 'solid', derivatives: { pt: ['ESP32 / ESP32-S3 (Wi-Fi + BLE)', 'STM32 ARM Cortex-M (bulk)', 'Arduino ATmega328/2560 (bulk)', 'Raspberry Pi RP2040 (bulk)', 'PIC Microchip (bulk)', 'RISC-V MCUs (GD32/WCH)'], en: ['ESP32 / ESP32-S3 (Wi-Fi + BLE)', 'STM32 ARM Cortex-M (bulk)', 'Arduino ATmega328/2560 (bulk)', 'Raspberry Pi RP2040 (bulk)', 'PIC Microchip (bulk)', 'RISC-V MCUs (GD32/WCH)'] } },

    // Memória & Armazenamento
    'Módulos RAM DDR4': { state: 'solid', derivatives: { pt: ['DDR4 8 GB (2133–3200 MHz)', 'DDR4 16 GB (2400–3600 MHz)', 'DDR4 32 GB (3200 MHz)', 'DDR4 ECC Registado (Servidor)', 'DDR4 SO-DIMM (Laptop — bulk)'], en: ['DDR4 8 GB (2133–3200 MHz)', 'DDR4 16 GB (2400–3600 MHz)', 'DDR4 32 GB (3200 MHz)', 'DDR4 ECC Registered (Server)', 'DDR4 SO-DIMM (Laptop — bulk)'] } },
    'DDR4 RAM Modules': { state: 'solid', derivatives: { pt: ['DDR4 8 GB (2133–3200 MHz)', 'DDR4 16 GB (2400–3600 MHz)', 'DDR4 32 GB (3200 MHz)', 'DDR4 ECC Registado (Servidor)', 'DDR4 SO-DIMM (Laptop — bulk)'], en: ['DDR4 8 GB (2133–3200 MHz)', 'DDR4 16 GB (2400–3600 MHz)', 'DDR4 32 GB (3200 MHz)', 'DDR4 ECC Registered (Server)', 'DDR4 SO-DIMM (Laptop — bulk)'] } },
    'Módulos RAM DDR5': { state: 'solid', derivatives: { pt: ['DDR5 16 GB (4800–6400 MHz)', 'DDR5 32 GB (5200–6800 MHz)', 'DDR5 64 GB (4800 MHz)', 'DDR5 ECC Registado (Servidor)', 'DDR5 SO-DIMM (Laptop — bulk)'], en: ['DDR5 16 GB (4800–6400 MHz)', 'DDR5 32 GB (5200–6800 MHz)', 'DDR5 64 GB (4800 MHz)', 'DDR5 ECC Registered (Server)', 'DDR5 SO-DIMM (Laptop — bulk)'] } },
    'DDR5 RAM Modules': { state: 'solid', derivatives: { pt: ['DDR5 16 GB (4800–6400 MHz)', 'DDR5 32 GB (5200–6800 MHz)', 'DDR5 64 GB (4800 MHz)', 'DDR5 ECC Registado (Servidor)', 'DDR5 SO-DIMM (Laptop — bulk)'], en: ['DDR5 16 GB (4800–6400 MHz)', 'DDR5 32 GB (5200–6800 MHz)', 'DDR5 64 GB (4800 MHz)', 'DDR5 ECC Registered (Server)', 'DDR5 SO-DIMM (Laptop — bulk)'] } },
    'SSD NVMe M.2': { state: 'solid', derivatives: { pt: ['256 GB PCIe 4.0 NVMe', '512 GB PCIe 4.0 NVMe', '1 TB PCIe 4.0 NVMe', '2 TB PCIe 4.0 NVMe', '4 TB PCIe 5.0 NVMe'], en: ['256 GB PCIe 4.0 NVMe', '512 GB PCIe 4.0 NVMe', '1 TB PCIe 4.0 NVMe', '2 TB PCIe 4.0 NVMe', '4 TB PCIe 5.0 NVMe'] } },
    'NVMe M.2 SSD': { state: 'solid', derivatives: { pt: ['256 GB PCIe 4.0 NVMe', '512 GB PCIe 4.0 NVMe', '1 TB PCIe 4.0 NVMe', '2 TB PCIe 4.0 NVMe', '4 TB PCIe 5.0 NVMe'], en: ['256 GB PCIe 4.0 NVMe', '512 GB PCIe 4.0 NVMe', '1 TB PCIe 4.0 NVMe', '2 TB PCIe 4.0 NVMe', '4 TB PCIe 5.0 NVMe'] } },

    // Placas & Expansão
    'Placa Gráfica NVIDIA (GPU, bulk)': { state: 'solid', derivatives: { pt: ['RTX 4060 / 4060 Ti (bulk)', 'RTX 4070 / 4070 Super (bulk)', 'RTX 4080 Super (bulk)', 'RTX 4090 Flagship (bulk)', 'NVIDIA A2000/A4000 Workstation', 'NVIDIA L40S (Inferência IA)'], en: ['RTX 4060 / 4060 Ti (bulk)', 'RTX 4070 / 4070 Super (bulk)', 'RTX 4080 Super (bulk)', 'RTX 4090 Flagship (bulk)', 'NVIDIA A2000/A4000 Workstation', 'NVIDIA L40S (AI Inference)'] } },
    'NVIDIA GPU Card (bulk)': { state: 'solid', derivatives: { pt: ['RTX 4060 / 4060 Ti (bulk)', 'RTX 4070 / 4070 Super (bulk)', 'RTX 4080 Super (bulk)', 'RTX 4090 Flagship (bulk)', 'NVIDIA A2000/A4000 Workstation', 'NVIDIA L40S (Inferência IA)'], en: ['RTX 4060 / 4060 Ti (bulk)', 'RTX 4070 / 4070 Super (bulk)', 'RTX 4080 Super (bulk)', 'RTX 4090 Flagship (bulk)', 'NVIDIA A2000/A4000 Workstation', 'NVIDIA L40S (AI Inference)'] } },

    // Carregadores & Alimentação
    'Carregador USB-C GaN': { state: 'solid', derivatives: { pt: ['GaN 45W (1 porta USB-C)', 'GaN 65W (2 portas)', 'GaN 100W (3 portas)', 'GaN 140W (laptops USB-C)', 'GaN 240W Industrial (4 portas)'], en: ['GaN 45W (1 USB-C port)', 'GaN 65W (2 ports)', 'GaN 100W (3 ports)', 'GaN 140W (USB-C laptops)', 'GaN 240W Industrial (4 ports)'] } },
    'USB-C GaN Charger': { state: 'solid', derivatives: { pt: ['GaN 45W (1 porta USB-C)', 'GaN 65W (2 portas)', 'GaN 100W (3 portas)', 'GaN 140W (laptops USB-C)', 'GaN 240W Industrial (4 portas)'], en: ['GaN 45W (1 USB-C port)', 'GaN 65W (2 ports)', 'GaN 100W (3 ports)', 'GaN 140W (USB-C laptops)', 'GaN 240W Industrial (4 ports)'] } },
    'Baterias Li-Ion 18650 (bulk)': { state: 'solid', derivatives: { pt: ['18650 2000 mAh (Samsung / bulk)', '18650 2500 mAh (LG / bulk)', '18650 3000 mAh (Molicel P30A)', '18650 3500 mAh (Panasonic NCR)', '18650 High-Drain 20A+ (drones/ferramentas)'], en: ['18650 2000 mAh (Samsung / bulk)', '18650 2500 mAh (LG / bulk)', '18650 3000 mAh (Molicel P30A)', '18650 3500 mAh (Panasonic NCR)', '18650 High-Drain 20A+ (drones/power tools)'] } },
    'Li-Ion 18650 Batteries (bulk)': { state: 'solid', derivatives: { pt: ['18650 2000 mAh (Samsung / bulk)', '18650 2500 mAh (LG / bulk)', '18650 3000 mAh (Molicel P30A)', '18650 3500 mAh (Panasonic NCR)', '18650 High-Drain 20A+ (drones/ferramentas)'], en: ['18650 2000 mAh (Samsung / bulk)', '18650 2500 mAh (LG / bulk)', '18650 3000 mAh (Molicel P30A)', '18650 3500 mAh (Panasonic NCR)', '18650 High-Drain 20A+ (drones/power tools)'] } },

    // Periféricos & Displays
    'Câmera de Segurança IP': { state: 'solid', derivatives: { pt: ['Dome IP 2MP Full HD', 'Dome IP 4MP Ultra HD', 'Bullet IP 8MP 4K', 'PTZ Motorizada 360°', 'Fisheye 360° (interior)', 'Industrial IP67/IP68'], en: ['2MP Full HD IP Dome', '4MP Ultra HD IP Dome', '8MP 4K IP Bullet', 'PTZ Motorized 360°', '360° Fisheye (indoor)', 'Industrial IP67/IP68'] } },
    'IP Security Camera': { state: 'solid', derivatives: { pt: ['Dome IP 2MP Full HD', 'Dome IP 4MP Ultra HD', 'Bullet IP 8MP 4K', 'PTZ Motorizada 360°', 'Fisheye 360° (interior)', 'Industrial IP67/IP68'], en: ['2MP Full HD IP Dome', '4MP Ultra HD IP Dome', '8MP 4K IP Bullet', 'PTZ Motorized 360°', '360° Fisheye (indoor)', 'Industrial IP67/IP68'] } }
};

function onWizardCountryChange(code) {
    const info = GLOBAL_COUNTRIES[code] || GLOBAL_COUNTRIES['OTHER'];
    const flagBadge = document.getElementById('whatsapp-flag-badge');
    const whatsappInput = document.getElementById('wizard-contact-whatsapp');
    const portInput = document.getElementById('wizard-contact-port');
    
    if (flagBadge) flagBadge.textContent = info.flag;
    if (whatsappInput && info.ddi !== '+') {
        if (!whatsappInput.value || whatsappInput.value.startsWith('+')) {
            whatsappInput.value = info.ddi + ' ';
        }
    }
    if (portInput && (!portInput.value || portInput.value.trim() === '')) {
        portInput.value = info.port;
    }
}

const CATEGORY_PACKAGING_DICTIONARY = {
    // 🌾 AGRONEGÓCIO
    'fertilizantes': {
        pt: [
            { id: 'big_bags_1tn', icon: 'inventory_2', title: 'Big Bags (1.000 kg)', sub: '1 Tonelada com Liner Impermeável' },
            { id: 'sacos_50kg', icon: 'backpack', title: 'Sacos PP (50 kg)', sub: 'Polipropileno Tecido com Revestimento' },
            { id: 'sacos_25kg', icon: 'shopping_bag', title: 'Sacos de 25 kg', sub: 'Embalagem Paletizada e Plastificada' },
            { id: 'granel_bulk', icon: 'directions_boat', title: 'A Granel (Bulk)', sub: 'Porão de Navio / Camião Basculante' }
        ],
        en: [
            { id: 'big_bags_1tn', icon: 'inventory_2', title: 'Big Bags (1,000 kg)', sub: '1 Ton with Waterproof Liner' },
            { id: 'sacos_50kg', icon: 'backpack', title: 'PP Bags (50 kg)', sub: 'Woven Polypropylene with Inner Coating' },
            { id: 'sacos_25kg', icon: 'shopping_bag', title: 'Bags of 25 kg', sub: 'Palletized & Wrapped Packaging' },
            { id: 'granel_bulk', icon: 'directions_boat', title: 'Bulk Cargo', sub: 'Bulk Vessel Hold / Tipper Truck' }
        ]
    },
    'sementes': {
        pt: [
            { id: 'sacos_25kg_hermetico', icon: 'shield', title: 'Sacos Herméticos (25 kg)', sub: 'Proteção Tripla contra Humidade e Pragas' },
            { id: 'sacos_50kg_tratado', icon: 'backpack', title: 'Sacos Tratados (50 kg)', sub: 'Polipropileno com Sementes Tratadas' },
            { id: 'caixas_climatizadas', icon: 'ac_unit', title: 'Caixas Climatizadas', sub: 'Ventiladas para Transporte de Mudas' },
            { id: 'big_bags_500kg', icon: 'inventory_2', title: 'Big Bags de Sementes (500 kg)', sub: 'Descarga Direta em Semeadoras' }
        ],
        en: [
            { id: 'sacos_25kg_hermetico', icon: 'shield', title: 'Hermetic Bags (25 kg)', sub: 'Triple Protection Moisture & Pest Barrier' },
            { id: 'sacos_50kg_tratado', icon: 'backpack', title: 'Treated Bags (50 kg)', sub: 'Woven PP for Treated Seeds' },
            { id: 'caixas_climatizadas', icon: 'ac_unit', title: 'Climate-Controlled Crates', sub: 'Ventilated Crates for Live Seedlings' },
            { id: 'big_bags_500kg', icon: 'inventory_2', title: 'Seed Big Bags (500 kg)', sub: 'Direct Discharge into Planters' }
        ]
    },
    'caju': {
        pt: [
            { id: 'sacos_juta_80kg', icon: 'inventory', title: 'Sacos de Juta (80 kg)', sub: 'Embalagem Tradicional Respirável para RCN' },
            { id: 'caixa_vacuo_25lbs', icon: 'grid_view', title: 'Caixa a Vácuo (25 lbs)', sub: 'Vácuo + Gás Inerte para Amêndoas' },
            { id: 'big_bags_caju', icon: 'inventory_2', title: 'Big Bags Respiráveis (1.000 kg)', sub: 'Para Castanha de Caju Bruta a Granel' },
            { id: 'tambor_lcc', icon: 'oil_barrel', title: 'Tambores PEAD (200 L)', sub: 'Para Líquido da Casca de Caju (LCC)' }
        ],
        en: [
            { id: 'sacos_juta_80kg', icon: 'inventory', title: 'Jute Bags (80 kg)', sub: 'Traditional Breathable Bags for RCN' },
            { id: 'caixa_vacuo_25lbs', icon: 'grid_view', title: 'Vacuum Box (25 lbs)', sub: 'Vacuum + Nitrogen Flush for Kernels' },
            { id: 'big_bags_caju', icon: 'inventory_2', title: 'Breathable Big Bags (1,000 kg)', sub: 'For Raw Cashew Nuts in Bulk' },
            { id: 'tambor_lcc', icon: 'oil_barrel', title: 'HDPE Drums (200 L)', sub: 'For Cashew Nut Shell Liquid (CNSL)' }
        ]
    },
    'acucar': {
        pt: [
            { id: 'sacos_50kg_liner', icon: 'backpack', title: 'Sacos de 50 kg com Liner', sub: 'Polipropileno com Liner de Polietileno (Food Grade)' },
            { id: 'big_bags_acucar', icon: 'inventory_2', title: 'Big Bags Alimentos (1.000 kg)', sub: '1 Tonelada de Grau Alimentício' },
            { id: 'sacos_25kg_acucar', icon: 'shopping_bag', title: 'Sacos de 25 kg Paletizados', sub: 'Embalagem Fracionada para Distribuição' },
            { id: 'granel_vhp', icon: 'directions_boat', title: 'A Granel VHP (Navio)', sub: 'Carregamento Direto no Porão' }
        ],
        en: [
            { id: 'sacos_50kg_liner', icon: 'backpack', title: '50 kg Bags with PE Liner', sub: 'Woven PP with Food-Grade Polyethylene Liner' },
            { id: 'big_bags_acucar', icon: 'inventory_2', title: 'Food-Grade Big Bags (1,000 kg)', sub: '1 Ton Food Certified Big Bag' },
            { id: 'sacos_25kg_acucar', icon: 'shopping_bag', title: '25 kg Palletized Bags', sub: 'Fractional Packaging for Retail Distribution' },
            { id: 'granel_vhp', icon: 'directions_boat', title: 'Bulk VHP Sugar (Vessel)', sub: 'Direct Bulk Vessel Loading for Refineries' }
        ]
    },
    'solar': {
        pt: [
            { id: 'caixa_revestida', icon: 'inventory_2', title: 'Caixas Revestidas Anti-Choque', sub: 'Embalagem Reforçada com Espuma e Proteção de Cantos' },
            { id: 'palete_solar', icon: 'grid_view', title: 'Paletes Protegidas para Exportação', sub: 'Paletização Vertical com Filme Termo-Retrátil' }
        ],
        en: [
            { id: 'caixa_revestida', icon: 'inventory_2', title: 'Shockproof Padded Crates', sub: 'Reinforced Packaging with Foam & Corner Guards' },
            { id: 'palete_solar', icon: 'grid_view', title: 'Protected Export Pallets', sub: 'Vertical Palletization with Shrink Wrap' }
        ]
    },
    'oil_gas': {
        pt: [
            { id: 'isotank_24k', icon: 'oil_barrel', title: 'ISO-Tank (24.000 L)', sub: 'Contentor Tanque Certificado IMO/ADR' },
            { id: 'tambor_200l', icon: 'inventory_2', title: 'Tambores Metálicos (200 L)', sub: 'Para Óleos Lubrificantes e Combustíveis' },
            { id: 'flexitank', icon: 'water_drop', title: 'Flexitank (24.000 L)', sub: 'Bolsa Flexível em Contentor de 20 pés' }
        ],
        en: [
            { id: 'isotank_24k', icon: 'oil_barrel', title: 'ISO-Tank Container (24,000 L)', sub: 'IMO/ADR Certified Tank Container' },
            { id: 'tambor_200l', icon: 'inventory_2', title: 'Steel Drums (200 L)', sub: 'For Lubricating Oils & Fuels' },
            { id: 'flexitank', icon: 'water_drop', title: 'Flexitank (24,000 L)', sub: 'Flexible Bladder in 20ft Container' }
        ]
    },
    'minerais': {
        pt: [
            { id: 'granel_navio', icon: 'directions_boat', title: 'A Granel em Navio (Bulk Carrier)', sub: 'Carregamento no Porão para Grandes Tonelagens' },
            { id: 'big_bags_minerio', icon: 'inventory_2', title: 'Big Bags de Minério (1.500 kg)', sub: 'Sacos Revestidos Heavy-Duty anti-rasgo' }
        ],
        en: [
            { id: 'granel_navio', icon: 'directions_boat', title: 'Bulk Vessel Shipment', sub: 'Hold Loading for Large Tonnages' },
            { id: 'big_bags_minerio', icon: 'inventory_2', title: 'Ore Big Bags (1,500 kg)', sub: 'Heavy-Duty Anti-Tear Lined Bags' }
        ]
    },
    'pecas': {
        pt: [
            { id: 'caixa_vci', icon: 'shield', title: 'Embalagem VCI Anti-Corrosão', sub: 'Caixa Selada com Filme Inibidor de Corrosão' },
            { id: 'skid_pecas', icon: 'inventory', title: 'Paletes / Skids de Aço Heavy-Duty', sub: 'Para Componentes Mecânicos e Motores Pesados' }
        ],
        en: [
            { id: 'caixa_vci', icon: 'shield', title: 'VCI Anti-Corrosion Packaging', sub: 'Sealed Crate with Corrosion Inhibitor Film' },
            { id: 'skid_pecas', icon: 'inventory', title: 'Steel Skids / Heavy-Duty Pallets', sub: 'For Mechanical Components & Heavy Motors' }
        ]
    }
};

function renderPackagingCards(stateType = 'solid') {
    const container = document.getElementById('wizard-packaging-cards');
    if (!container) return;
    container.innerHTML = '';
    
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const catKey = wizardState.selectedCategory;
    let options = [];

    if (catKey && CATEGORY_PACKAGING_DICTIONARY[catKey]) {
        options = CATEGORY_PACKAGING_DICTIONARY[catKey][lang] || CATEGORY_PACKAGING_DICTIONARY[catKey]['pt'];
    } else if (stateType === 'liquid') {
        options = [
            {
                id: 'iso_tank',
                icon: 'local_shipping',
                title: lang === 'pt' ? 'ISO Tank Container' : 'ISO Tank Container',
                sub: lang === 'pt' ? '20.000–26.000 L (Perigosos/Ácidos)' : '20,000–26,000 L (Hazmat/Acids)'
            },
            {
                id: 'ibc_container',
                icon: 'grid_view',
                title: lang === 'pt' ? 'IBC Container (1.000 L)' : 'IBC Tote (1,000 L)',
                sub: lang === 'pt' ? 'Tanque PEAD com Armação de Aço' : 'HDPE Tank with Steel Frame'
            },
            {
                id: 'tambor_200l',
                icon: 'oil_barrel',
                title: lang === 'pt' ? 'Tambores (200 L)' : 'Drums (200 L)',
                sub: lang === 'pt' ? 'Tambor PEAD / Aço Revestido' : 'HDPE / Steel Coated Drum'
            },
            {
                id: 'tanque_granel',
                icon: 'water_drop',
                title: lang === 'pt' ? 'Cisternas a Granel' : 'Bulk Liquid Tanker',
                sub: lang === 'pt' ? 'Camião / Navio Tanque Dedicado' : 'Dedicated Bulk Tanker Truck/Vessel'
            }
        ];
    } else {
        options = [
            {
                id: 'sacos_50kg',
                icon: 'backpack',
                title: lang === 'pt' ? 'Sacos de 50 kg' : 'Bags of 50 kg',
                sub: lang === 'pt' ? 'Sacos de Polipropileno Tecido' : 'Woven Polypropylene Bags'
            },
            {
                id: 'big_bags_1tn',
                icon: 'inventory_2',
                title: lang === 'pt' ? 'Big Bags (1.000 kg)' : 'Big Bags (1,000 kg)',
                sub: lang === 'pt' ? '1 Tonelada com Válvula de Carga' : '1 Ton with Discharge Spout'
            },
            {
                id: 'sacos_25kg',
                icon: 'shopping_bag',
                title: lang === 'pt' ? 'Sacos de 25 kg' : 'Bags of 25 kg',
                sub: lang === 'pt' ? 'Embalagem Paletizada' : 'Palletized Packaging'
            },
            {
                id: 'granel_bulk',
                icon: 'directions_boat',
                title: lang === 'pt' ? 'A Granel (Bulk)' : 'Bulk Cargo',
                sub: lang === 'pt' ? 'Camião ou Navio Granelero' : 'Bulk Truck or Vessel'
            }
        ];
    }
    
    options.forEach((opt, idx) => {
        const card = document.createElement('div');
        card.className = `packaging-card ${idx === 0 ? 'selected' : ''}`;
        card.innerHTML = `
            <div class="packaging-card-icon"><span class="material-symbols-outlined">${opt.icon}</span></div>
            <div class="packaging-card-info">
                <span class="packaging-card-title">${opt.title}</span>
                <span class="packaging-card-subtitle">${opt.sub}</span>
            </div>
        `;
        if (idx === 0) wizardState.packagingType = opt.title;
        
        card.onclick = () => {
            container.querySelectorAll('.packaging-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            wizardState.packagingType = opt.title;
        };
        container.appendChild(card);
    });
}

function selectWizardProduct(pName) {
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const prodInput = document.getElementById('wizard-product-input');
    if (prodInput) prodInput.value = pName;
    wizardState.selectedProduct = pName;
    
    const info = PRODUCT_SPEC_DICTIONARY[pName];
    const derivContainer = document.getElementById('wizard-derivative-container');
    const derivChips = document.getElementById('wizard-derivative-chips');
    
    if (info && info.derivatives) {
        const list = info.derivatives[lang] || info.derivatives['pt'];
        if (derivContainer && derivChips && list && list.length > 0) {
            derivChips.innerHTML = '';
            list.forEach((der, idx) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = `derivative-chip ${idx === 0 ? 'selected' : ''}`;
                btn.innerHTML = `<span class="material-symbols-outlined text-xs">check_circle</span> ${der}`;
                if (idx === 0) wizardState.selectedGrade = der;
                btn.onclick = () => {
                    derivChips.querySelectorAll('.derivative-chip').forEach(c => c.classList.remove('selected'));
                    btn.classList.add('selected');
                    wizardState.selectedGrade = der;
                };
                derivChips.appendChild(btn);
            });
            derivContainer.style.display = 'block';
        } else if (derivContainer) {
            derivContainer.style.display = 'none';
        }
        renderPackagingCards(info.state || 'solid');
    } else {
        if (derivContainer) derivContainer.style.display = 'none';
        wizardState.selectedGrade = '';
        const catKey = wizardState.selectedCategory;
        const isLiquidCat = (catKey === 'lubrificantes' || catKey === 'quimicos' || wizardState.selectedSector === 'oil');
        renderPackagingCards(isLiquidCat ? 'liquid' : 'solid');
    }
}

function renderProductAndQtyChips() {
    const prodContainer = document.getElementById('wizard-product-chips');
    const qtyContainer = document.getElementById('wizard-qty-chips');
    const unitSelect = document.getElementById('wizard-unit-select');
    
    if (!prodContainer || !qtyContainer) return;
    
    prodContainer.innerHTML = '';
    qtyContainer.innerHTML = '';
    
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const activeCatalog = getCatalog();
    const sector = activeCatalog[wizardState.selectedSector];
    const cat = sector ? sector.categories[wizardState.selectedCategory] : null;
    
    if (cat) {
        // Auto select unit if available
        if (unitSelect && cat.unit) {
            for (let i = 0; i < unitSelect.options.length; i++) {
                if (unitSelect.options[i].value.toLowerCase().includes(cat.unit.toLowerCase())) {
                    unitSelect.selectedIndex = i;
                    break;
                }
            }
        }
        
        // Render products
        cat.products.forEach((p, idx) => {
            const chip = document.createElement('button');
            chip.type = 'button';
            chip.className = `suggestion-chip ${idx === 0 ? 'selected' : ''}`;
            chip.textContent = p;
            chip.onclick = () => {
                prodContainer.querySelectorAll('.suggestion-chip').forEach(c => c.classList.remove('selected'));
                chip.classList.add('selected');
                selectWizardProduct(p);
            };
            prodContainer.appendChild(chip);
        });

        // Trigger first product selection by default
        if (cat.products.length > 0) {
            selectWizardProduct(cat.products[0]);
        }
        
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
            if (document.getElementById('wizard-qty-input')) document.getElementById('wizard-qty-input').value = minVal;
            wizardState.selectedQty = minVal.toString();
        }

        cat.quantities.forEach(q => {
            const chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'suggestion-chip';
            chip.textContent = q;
            chip.onclick = () => {
                const num = parseFloat(q) || 1;
                if (document.getElementById('wizard-qty-input')) document.getElementById('wizard-qty-input').value = num;
                if (qtySlider) {
                    if (num > parseFloat(qtySlider.max)) {
                        qtySlider.max = num;
                        const maxLabel = document.getElementById('wizard-slider-max');
                        if (maxLabel) maxLabel.textContent = Math.round(num);
                    }
                    qtySlider.value = num;
                }
                wizardState.selectedQty = num.toString();
                qtyContainer.querySelectorAll('.suggestion-chip').forEach(c => c.classList.remove('selected'));
                chip.classList.add('selected');
            };
            qtyContainer.appendChild(chip);
        });
    } else {
        // Custom or "outro" inputs
        const msgSpec = lang === 'pt' ? 'Escreva as especificações do produto abaixo.' : 'Specify product specifications below.';
        const msgQty = lang === 'pt' ? 'Escreva a quantidade pretendida abaixo.' : 'Specify the desired quantity below.';
        prodContainer.innerHTML = `<span class="text-xs text-on-surface-variant">${msgSpec}</span>`;
        qtyContainer.innerHTML = `<span class="text-xs text-on-surface-variant">${msgQty}</span>`;
        renderPackagingCards('solid');
        
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
            if (document.getElementById('wizard-qty-input')) document.getElementById('wizard-qty-input').value = 100;
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
        const unitVal = document.getElementById('wizard-unit-select') ? document.getElementById('wizard-unit-select').value : 'Toneladas (TN)';
        const customPack = document.getElementById('wizard-packaging-custom') ? document.getElementById('wizard-packaging-custom').value.trim() : '';
        const portVal = document.getElementById('wizard-contact-port') ? document.getElementById('wizard-contact-port').value.trim() : '';
        const logisticsVal = document.querySelector('input[name="wizard-logistics"]:checked') ? document.querySelector('input[name="wizard-logistics"]:checked').value : 'Sim';
        
        if (!prodVal) {
            alert(lang === 'pt' ? 'Por favor, especifique o produto ou serviço pretendido.' : 'Please specify the desired product or service.');
            return;
        }
        if (!qtyVal) {
            alert(lang === 'pt' ? 'Por favor, introduza a quantidade/volume.' : 'Please enter the quantity/volume.');
            return;
        }
        
        wizardState.selectedProduct = prodVal;
        wizardState.selectedQty = `${qtyVal} ${unitVal}`;
        if (customPack) wizardState.packagingType = customPack;
        wizardState.port = portVal || (lang === 'pt' ? 'Porto de Maputo (A combinar)' : 'Port of Maputo (TBD)');
        wizardState.logistics = logisticsVal;
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
        const company = document.getElementById('wizard-contact-company') ? document.getElementById('wizard-contact-company').value.trim() : '';
        const desc = document.getElementById('wizard-contact-desc').value.trim();
        
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
        wizardState.company = company;
        wizardState.description = desc;
        
        // Process new B2B requirement push
        const activeCatalog = getCatalog();
        const sectorLabel = activeCatalog[wizardState.selectedSector] ? activeCatalog[wizardState.selectedSector].label : (lang === 'pt' ? 'Serviços' : 'Services');
        const categoryLabel = (wizardState.selectedCategory === 'outro') ? (lang === 'pt' ? 'Outro' : 'Other') : wizardState.selectedCategory;
        
        const gradeSuffix = wizardState.selectedGrade ? ` (${wizardState.selectedGrade})` : '';
        const finalTitlePt = `Aquisição de ${wizardState.selectedProduct}${gradeSuffix}`;
        const finalTitleEn = `Acquisition of ${wizardState.selectedProduct}${gradeSuffix}`;
        const finalCategoryPt = `Consultoria para ${sectorLabel} (${categoryLabel})`;
        const finalCategoryEn = `${sectorLabel} Consulting (${categoryLabel})`;
        
        const packInfo = wizardState.packagingType ? ` | Embalagem: ${wizardState.packagingType}` : '';
        const packInfoEn = wizardState.packagingType ? ` | Packaging: ${wizardState.packagingType}` : '';
        const companyInfo = company ? ` | Empresa: ${company}` : '';
        const companyInfoEn = company ? ` | Company: ${company}` : '';
        
        const finalDescPt = `${desc ? desc + ' | ' : ''}Porto de Descarga: ${wizardState.port}${packInfo}${companyInfo} | Prazo: ${wizardState.urgency}`;
        const finalDescEn = `${desc ? desc + ' | ' : ''}Discharge Port: ${wizardState.port}${packInfoEn}${companyInfoEn} | Term: ${wizardState.urgency}`;
        
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
            lang === 'pt' ? 'Solicitação B2B Registada com Sucesso' : 'B2B Request Successfully Registered',
            lang === 'pt' 
                ? 'O seu pedido foi encaminhado com sucesso! O resumo completo da sua solicitação está guardado na sua conta e estará disponível para consulta assim que fizer login no sistema Global View.'
                : 'Your request has been successfully submitted! The full summary of your request is saved in your account and will be available for viewing as soon as you log in to the Global View system.',
            lang === 'pt' 
                ? 'Consulte a sua conta de utilizador ou aguarde o contacto do nosso consultor.'
                : 'Check your user account or wait for contact from our consultant.'
        );
        
        closeRequestWizard();
        renderOpportunityWall(); // Refresh lists
        
        // Redirect to wall to see the card
        window.location.hash = 'services';
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
    window.location.hash = 'demands';
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
            if (currentView.startsWith('wall') || currentView.startsWith('services')) {
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
                bubble.innerHTML = `<p>${gvSecurity.sanitize(m.text)}</p>`;
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

// === WHATSAPP-STYLE REPLY FUNCTIONS ===
if (typeof appState !== 'undefined' && appState) {
    appState.activeReplies = appState.activeReplies || {};
}

window.startReplyToMessage = function(msgId, containerId) {
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    appState.activeReplies[containerId] = msgId;
    const m = appState.messages.find(msg => msg.id === msgId);
    if (!m) return;

    const sender = appState.users[m.senderId] || { name: 'Sistema' };
    const previewEl = document.getElementById(`${containerId}-reply-preview`);
    if (previewEl) {
        let msgPreviewText = '';
        if (m.attachmentType === 'image') msgPreviewText = lang === 'en' ? '📷 Image' : '📷 Imagem';
        else if (m.attachmentType === 'video') msgPreviewText = lang === 'en' ? '🎥 Video' : '🎥 Vídeo';
        else if (m.attachmentType === 'file') msgPreviewText = lang === 'en' ? '📄 File' : '📄 Ficheiro';
        else if (m.attachmentType === 'audio') msgPreviewText = lang === 'en' ? '🎙️ Audio' : '🎙️ Áudio';
        else msgPreviewText = m.text.replace(/^\[ACTION:\w+\]\s*/, '');

        if (msgPreviewText.length > 55) msgPreviewText = msgPreviewText.substring(0, 52) + '...';

        previewEl.innerHTML = `
            <div class="flex-1 min-w-0 text-left">
                <div class="font-extrabold text-[10px] text-gvTeal uppercase tracking-wider">${sender.name}</div>
                <div class="text-[10px] text-slate-500 truncate mt-0.5">${gvSecurity.sanitize(msgPreviewText)}</div>
            </div>
            <button type="button" onclick="cancelReplyToMessage('${containerId}')" class="w-5 h-5 rounded-md hover:bg-slate-200 text-slate-400 flex items-center justify-center shrink-0 border-none bg-none cursor-pointer">
                <span class="material-symbols-outlined text-sm">close</span>
            </button>
        `;
        previewEl.classList.remove('hidden');
        previewEl.classList.add('flex');
    }
    const inputField = document.getElementById(`${containerId}-input-field`);
    if (inputField) inputField.focus();
};

window.cancelReplyToMessage = function(containerId) {
    if (appState.activeReplies) delete appState.activeReplies[containerId];
    const previewEl = document.getElementById(`${containerId}-reply-preview`);
    if (previewEl) {
        previewEl.classList.add('hidden');
        previewEl.classList.remove('flex');
    }
};

window.scrollToMessage = function(msgId) {
    const el = document.querySelector(`[data-msg-id="${msgId}"]`);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('highlight-reply-bubble');
        setTimeout(() => {
            el.classList.remove('highlight-reply-bubble');
        }, 1500);
    }
};

// === DOCUMENTS DRAWER FUNCTIONS ===
window.toggleChatDocumentDrawer = function(containerId) {
    const drawer = document.getElementById(`${containerId}-docs-drawer`);
    if (!drawer) return;
    const isHidden = drawer.classList.contains('translate-x-full');
    if (isHidden) {
        drawer.classList.remove('translate-x-full');
        // Initial render
        renderDocsDrawerList(containerId, 'all');
    } else {
        drawer.classList.add('translate-x-full');
    }
};

window.renderDocsDrawerList = function(containerId, filterType = 'all') {
    const listEl = document.getElementById(`${containerId}-docs-list`);
    if (!listEl) return;
    listEl.innerHTML = '';

    // Extract active matchId from the input form or DOM attributes
    const formEl = document.getElementById(`${containerId}-form`);
    if (!formEl) return;
    
    // Parse matchId from form onsubmit or direct binding
    const onsubmitStr = formEl.getAttribute('onsubmit') || '';
    const matchIdMatch = onsubmitStr.match(/sendChatMessage\('([^']+)'/);
    if (!matchIdMatch) return;
    const matchId = matchIdMatch[1];

    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const channelType = containerId === 'buyer-chat-box' ? 'buyer' : (containerId.includes('supplier') ? 'supplier' : 'buyer');

    const msgs = appState.messages.filter(m => m.matchId === matchId && m.channel === channelType);
    let attachments = [];

    msgs.forEach(m => {
        const dateStr = formatDate(m.timestamp);
        const sender = appState.users[m.senderId] || { name: 'Sistema' };
        
        // 1. Files / PDF
        if (m.attachmentType === 'file' && (filterType === 'all' || filterType === 'doc')) {
            attachments.push({
                id: m.id,
                title: m.text,
                type: 'doc',
                icon: 'picture_as_pdf',
                iconColor: 'text-rose-650',
                meta: m.attachmentSize || '1.2 MB',
                date: dateStr,
                senderName: sender.name
            });
        }
        // 2. Images & Videos
        else if ((m.attachmentType === 'image' || m.attachmentType === 'video') && (filterType === 'all' || filterType === 'media')) {
            attachments.push({
                id: m.id,
                title: m.text,
                type: 'media',
                icon: m.attachmentType === 'image' ? 'image' : 'movie',
                iconColor: m.attachmentType === 'image' ? 'text-emerald-500' : 'text-amber-500',
                meta: m.attachmentType === 'image' ? 'IMG' : 'VIDEO',
                date: dateStr,
                senderName: sender.name
            });
        }
        // 3. Quotes (proposals)
        else if (m.proposalData && (filterType === 'all' || filterType === 'quote')) {
            attachments.push({
                id: m.id,
                title: `${lang === 'en' ? 'Quote' : 'Cotação'} - ${m.proposalData.price}`,
                type: 'quote',
                icon: 'request_quote',
                iconColor: 'text-teal-650',
                meta: m.proposalData.status.toUpperCase(),
                date: dateStr,
                senderName: sender.name
            });
        }
    });

    if (attachments.length === 0) {
        listEl.innerHTML = `
            <div class="text-center py-10">
                <span class="material-symbols-outlined text-[36px] text-slate-300 mb-2">folder_zip</span>
                <p class="text-[10px] text-slate-500 font-bold leading-normal px-4">
                    ${lang === 'en' ? 'No shared files in this category yet.' : 'Nenhum ficheiro partilhado nesta categoria.'}
                </p>
            </div>
        `;
        return;
    }

    attachments.forEach(att => {
        const div = document.createElement('div');
        div.className = 'bg-white p-2.5 rounded-xl border border-slate-150 hover:border-gvTeal/30 shadow-xs cursor-pointer transition flex items-center justify-between gap-2.5';
        div.onclick = () => {
            scrollToMessage(att.id);
        };
        
        div.innerHTML = `
            <div class="flex items-center gap-2 min-w-0">
                <span class="material-symbols-outlined ${att.iconColor} text-base shrink-0">${att.icon}</span>
                <div class="truncate text-left">
                    <span class="font-extrabold text-slate-800 text-[10px] block truncate leading-tight">${gvSecurity.sanitize(att.title)}</span>
                    <span class="text-[8px] text-slate-400 font-semibold block mt-0.5">${att.senderName} • ${att.meta}</span>
                </div>
            </div>
            <span class="text-[8px] text-slate-400 font-bold shrink-0">${att.date}</span>
        `;
        listEl.appendChild(div);
    });
};

window.filterDocsDrawer = function(containerId, filterType, btn) {
    // Highlight active tab
    const tabs = btn.parentNode.querySelectorAll('button');
    tabs.forEach(t => {
        t.classList.remove('text-gvTeal', 'border-gvTeal');
        t.classList.add('text-slate-500', 'border-transparent');
    });
    btn.classList.add('text-gvTeal', 'border-gvTeal');
    btn.classList.remove('text-slate-500', 'border-transparent');

    renderDocsDrawerList(containerId, filterType);
};

window.searchDocsDrawer = function(containerId) {
    const query = document.getElementById(`${containerId}-docs-search`).value.toLowerCase().trim();
    const items = document.getElementById(`${containerId}-docs-list`).children;

    for (let item of items) {
        const textEl = item.querySelector('.font-extrabold');
        if (textEl) {
            const match = textEl.textContent.toLowerCase().includes(query);
            item.style.display = match ? 'flex' : 'none';
        }
    }
};




window.toggleWorkflow = function() {
    console.log('[GV] toggleWorkflow called');
    const extra = document.getElementById('workflow-steps-extra');
    const textEl = document.getElementById('toggle-workflow-text');
    const btn = document.getElementById('workflow-toggle-btn');
    const lang = localStorage.getItem('gvcps_lang') || 'pt';

    console.log('[GV] extra element:', extra);
    if (!extra) { console.warn('[GV] workflow-steps-extra NOT found!'); return; }

    const isHidden = extra.style.display === 'none';
    console.log('[GV] isHidden:', isHidden);

    extra.style.display = isHidden ? 'grid' : 'none';

    if (textEl) {
        const ptText = isHidden ? 'Mostrar menos' : 'Ver todas as etapas';
        const enText = isHidden ? 'Show less' : 'View all steps';
        textEl.setAttribute('data-translate-pt', ptText);
        textEl.setAttribute('data-translate-en', enText);
        textEl.textContent = lang === 'pt' ? ptText : enText;
    }
    if (btn) {
        const icon = btn.querySelector('.material-symbols-outlined');
        if (icon) icon.textContent = isHidden ? 'expand_less' : 'expand_more';
    }
};

// ============================================================
// FUNÇÕES DE COMUNICAÇÃO E CONTACTO
// ============================================================

/**
 * Processa o formulário de contacto da página de Comunicação (#view-contact).
 * Valida os campos, envia para o Supabase (se disponível) e exibe o modal de sucesso.
 */
window.handleContactPageSubmit = async function(event) {
    event.preventDefault();
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const sanitize = window.gvSecurity ? window.gvSecurity.sanitize : (s) => s;

    const name    = sanitize(document.getElementById('contact-form-name')?.value?.trim() || '');
    const email   = sanitize(document.getElementById('contact-form-email')?.value?.trim() || '');
    const phone   = sanitize(document.getElementById('contact-form-phone')?.value?.trim() || '');
    const subject = sanitize(document.getElementById('contact-form-subject')?.value || '');
    const message = sanitize(document.getElementById('contact-form-message')?.value?.trim() || '');
    const privacy = document.getElementById('contact-form-privacy')?.checked;

    // Validação básica
    if (!name || !email || !message) {
        const msg = lang === 'en'
            ? 'Please fill in all required fields (Name, Email, Message).'
            : 'Por favor, preencha todos os campos obrigatórios (Nome, E-mail, Mensagem).';
        alert(msg);
        return;
    }
    if (!privacy) {
        const msg = lang === 'en'
            ? 'You must accept the Privacy Policy to continue.'
            : 'Deve aceitar a Política de Privacidade para continuar.';
        alert(msg);
        return;
    }

    // Rate limiting
    const rateCheck = window.gvSecurity ? window.gvSecurity.checkRateLimit('contact_form', 3, 10 * 60 * 1000) : { allowed: true };
    if (!rateCheck.allowed) {
        const msg = lang === 'en'
            ? `Too many submissions. Please wait ${rateCheck.resetInSeconds}s before trying again.`
            : `Demasiadas submissões. Aguarde ${rateCheck.resetInSeconds}s antes de tentar novamente.`;
        alert(msg);
        return;
    }

    // Tenta enviar para Supabase (tabela contact_requests se existir)
    if (window.gvApi && window.gvApi.supabase) {
        try {
            await window.gvApi.supabase.from('contact_requests').insert([{
                name, email, phone, subject, message,
                created_at: new Date().toISOString()
            }]);
        } catch (err) {
            console.warn('[GV] contact_requests insert failed (table may not exist yet):', err.message);
        }
    }

    // Reset form
    document.getElementById('contact-page-form')?.reset();

    // Modal de sucesso
    showVisualSuccessModal(
        lang === 'pt' ? 'Mensagem Enviada com Sucesso!' : 'Message Sent Successfully!',
        lang === 'pt'
            ? `Obrigado, ${name}! A sua mensagem foi recebida pela equipa GV-CPS. Entraremos em contacto em breve via WhatsApp ou E-mail.`
            : `Thank you, ${name}! Your message has been received by the GV-CPS team. We will contact you shortly via WhatsApp or Email.`,
        lang === 'pt'
            ? 'Tempo de resposta habitual: 24 a 48 horas úteis.'
            : 'Typical response time: 24 to 48 business hours.'
    );
};

/**
 * Inicia login via Google OAuth usando Supabase Auth.
 * Redireciona o utilizador para o fluxo de autenticação Google.
 */
window.handleGoogleLogin = async function() {
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    if (!window.gvApi || !window.gvApi.loginWithGoogle) {
        const msg = lang === 'en'
            ? 'Google login is not available at this time. Please use your email and password.'
            : 'O login com Google não está disponível neste momento. Por favor, use o seu e-mail e palavra-passe.';
        alert(msg);
        return;
    }
    try {
        await window.gvApi.loginWithGoogle();
    } catch (err) {
        console.error('[GV] Google login error:', err);
        const msg = lang === 'en'
            ? 'An error occurred during Google login. Please try again.'
            : 'Ocorreu um erro durante o login com Google. Tente novamente.';
        alert(msg);
    }
};

/**
 * Exibe um modal informativo sobre o serviço de Logística Integrada da GV-CPS.
 * Ativado ao clicar no badge "Logística Incluída" nos chats do portal.
 */
window.showLogisticsInfoModal = function() {
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const title = lang === 'en' ? 'GV-CPS Integrated Logistics' : 'Logística Integrada GV-CPS';
    const body = lang === 'en'
        ? `<p style="margin-bottom:12px;">The GV-CPS manages all logistics end-to-end as part of your business deal:</p>
           <ul style="padding-left:20px; line-height:2;">
             <li>✅ Cargo documentation &amp; customs clearance</li>
             <li>✅ International freight (CIF/FOB terms)</li>
             <li>✅ Port coordination &amp; shipping schedules</li>
             <li>✅ Real-time cargo tracking</li>
             <li>✅ Insurance &amp; risk management</li>
           </ul>
           <p style="margin-top:12px; font-size:0.85em; color:#64748b;">Logistics costs are included in the final invoice billed by GV-CPS.</p>`
        : `<p style="margin-bottom:12px;">A GV-CPS gere toda a logística de ponta a ponta como parte do seu negócio:</p>
           <ul style="padding-left:20px; line-height:2;">
             <li>✅ Documentação de carga e desalfandegamento</li>
             <li>✅ Frete internacional (termos CIF/FOB)</li>
             <li>✅ Coordenação portuária e calendário de navios</li>
             <li>✅ Rastreamento de carga em tempo real</li>
             <li>✅ Seguros e gestão de riscos</li>
           </ul>
           <p style="margin-top:12px; font-size:0.85em; color:#64748b;">Os custos logísticos estão incluídos na faturação final emitida pela GV-CPS.</p>`;

    // Inject and show modal
    let modal = document.getElementById('gv-logistics-info-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'gv-logistics-info-modal';
        modal.style.cssText = 'position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.55);backdrop-filter:blur(4px);';
        modal.innerHTML = `
            <div style="background:#fff;border-radius:20px;max-width:520px;width:92%;padding:32px;box-shadow:0 20px 60px rgba(0,0,0,0.25);position:relative;">
                <button onclick="document.getElementById('gv-logistics-info-modal').remove()" style="position:absolute;top:12px;right:16px;background:none;border:none;font-size:22px;cursor:pointer;color:#64748b;" title="Fechar">✕</button>
                <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
                    <span style="background:#dcfce7;border-radius:12px;padding:8px;" class="material-symbols-outlined" style="color:#16a34a;font-size:28px;">local_shipping</span>
                    <h2 id="gv-logistics-modal-title" style="font-size:1.2rem;font-weight:700;color:#00374a;margin:0;">${title}</h2>
                </div>
                <div id="gv-logistics-modal-body" style="color:#374151;font-size:0.95rem;line-height:1.7;">${body}</div>
                <button onclick="document.getElementById('gv-logistics-info-modal').remove()" style="margin-top:24px;width:100%;padding:12px;background:#006d3d;color:#fff;border:none;border-radius:12px;font-weight:700;font-size:1rem;cursor:pointer;">
                    ${lang === 'en' ? 'Got it' : 'Entendido'}
                </button>
            </div>`;
        document.body.appendChild(modal);
    } else {
        modal.style.display = 'flex';
        document.getElementById('gv-logistics-modal-title').textContent = title;
        document.getElementById('gv-logistics-modal-body').innerHTML = body;
    }

    // Close on backdrop click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) modal.remove();
    });
};

/**
 * Partilha a localização da GV-CPS (copiando o endereço para a área de transferência).
 * Ativado pelo botão "Partilhar" no mapa da página de contactos.
 */
window.shareContactLocation = function() {
    const lang = localStorage.getItem('gvcps_lang') || 'pt';
    const address = 'Global View C.P.S. — Rua de Kassuende, nº 270, Maputo, Moçambique';
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(address).then(() => {
            const msg = lang === 'en' ? 'Address copied to clipboard!' : 'Endereço copiado para a área de transferência!';
            // Show a brief toast notification
            const toast = document.createElement('div');
            toast.textContent = msg;
            toast.style.cssText = 'position:fixed;bottom:100px;left:50%;transform:translateX(-50%);background:#006d3d;color:#fff;padding:10px 22px;border-radius:30px;font-weight:600;z-index:99999;box-shadow:0 4px 16px rgba(0,0,0,0.2);font-size:0.9rem;';
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 3000);
        }).catch(() => {
            alert(address);
        });
    } else {
        alert(address);
    }
};
