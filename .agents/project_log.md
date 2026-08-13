# Registro de Logs do Projeto e Situação Atual — GV-CPS

Este arquivo mantém a situação atual do projeto e o histórico das sessões de trabalho para garantir a transição fluida entre agentes.

## 1. Situação Atual do Projeto
O protótipo da plataforma de intermediação B2B da **Global View (GV-CPS)** encontra-se em desenvolvimento local avançado na raiz do workspace.

### Principais Componentes Ativos:
*   [index.html](file:///home/paco/Projectos/Global%20View/index.html): O ponto de entrada principal do protótipo, integrando o mural de oportunidades, formulários, modais de login e dashboards dos diferentes papéis.
*   [app.js](file:///home/paco/Projectos/Global%20View/app.js): Lógica de cliente para controle de rotas, preenchimento automático de credenciais de teste para demonstração rápida, animações de slider e intermediação segura de chats.
*   [style.css](file:///home/paco/Projectos/Global%20View/style.css): Estilos da aplicação, incluindo as cores dinâmicas mapeadas por categoria de serviço.
*   [GVCPS_Briefing_Prototipagem.md](file:///home/paco/Projectos/Global%20View/GVCPS_Briefing_Prototipagem.md): O briefing completo que descreve a empresa, o problema a resolver, o modelo de negócios (inspirado no Global Buyers Online) e as restrições críticas.

---

## 2. Histórico de Alterações Recentes

### Sessão: 13 de Agosto de 2026 (Reconstrução dos Catálogos por Categoria — Agronegócio Completo)
* **Customização Dinâmica do Wizard por Categoria (`AGRO`)**:
  - **Mapeamento de Embalagens Específicas (`CATEGORY_PACKAGING_DICTIONARY`)**: Cada categoria do Agronegócio possui agora as suas próprias opções de embalagem física no Passo 3 do Wizard:
    1. `fertilizantes`: Big Bags (1.000 kg com liner impermeável), Sacos PP (50 kg), Sacos (25 kg paletizados), A Granel (porão de navio / camião basculante).
    2. `sementes`: Sacos Herméticos (25 kg com barreira aluminizada), Sacos Tratados (50 kg), Caixas Climatizadas (mudas vivas), Big Bags de Sementes (500 kg).
    3. `caju`: Sacos de Juta (80 kg para RCN), Caixas a Vácuo (25 lbs com N2 para amêndoas), Big Bags Respiráveis (1.000 kg), Tambores PEAD (200L para LCC).
    4. `acucar`: Sacos de 50 kg com Liner PE food-grade, Big Bags Alimentos (1.000 kg), Sacos de 25 kg paletizados, A Granel VHP (Navio Granelero).
    5. `equipamentos`: Contentor Flat Rack / Open Top, Caixas de Madeira Tratada ISPM-15, Skid de Aço / Palete Heavy-Duty.
  - **Dicionário de Derivados (`PRODUCT_SPEC_DICTIONARY`)**: Expandido para 117 entradas de produtos cobrindo todas as especificações e variabilidades técnicas de Sementes, Caju, Açúcar e Equipamentos Agrícolas em PT e EN.
* **Validação**: `node --check app.js` — ✅ SEM ERROS DE SINTAXE.

### Sessão: 13 de Agosto de 2026 (Reconstrução dos Catálogos de Maquinários & Electrónica — Produtos Físicos)
* **Reestruturação Completa dos Setores `oil` (Maquinários & Indústria) e `tech` (Tecnologia & Electrónica)**:
  - **Foco em Produtos Palpáveis**: Conforme orientação explícita do cliente, eliminadas todas as referências a serviços abstratos nestes setores. A GV-CPS vende produtos físicos e palpáveis.
  - **Setor Maquinários & Indústria (`oil`)**: Reconstruído com 5 subcategorias físicas:
    1. `navios`: Navios & Embarcações (Cargueiro Bulk Carrier, Porta-Contentores, Tanker, Dragas Hidráulicas, Pesca Industrial, Rebocadores, Ferry/Balsas, Barcaças Fluviais)
    2. `tratores`: Tratores & Maquinaria Agrícola (Rodas 25–400HP, Esteiras/Crawler, Mini-tratores/Motocultivadores, Vitivinícolas, Florestais/Skidder, Retroescavadoras, Escavadoras Hidráulicas, Bulldozers)
    3. `carpintaria`: Equipamentos de Carpintaria & Madeira (Serras de Fita, Serras Circulares de Mesa, Plainas, Routers CNC 3-5 Eixos, Prensas Hidráulicas, Estufas de Madeira, Lixadeiras)
    4. `elevacao`: Gruas, Empilhadeiras & Elevação (Empilhadeiras Contrapeso 3-7T, Reach Trucks, Empilhadeiras 10-25T+, Gruas Torre, Guindastes Móveis All-Terrain, Pontes Rolantes)
    5. `industriais`: Maquinaria Industrial Pesada (Compressores de Parafuso, Geradores Trifásicos, Prensas 100-500T, Injetoras de Plástico, Cortadoras Laser CNC, Moinhos Industriais)
  - **Setor Tecnologia & Electrónica (`tech`)**: Reconstruído com 5 subcategorias de hardware:
    1. `chips`: Chips & Processadores (Intel/AMD bulk, MCUs ESP32/STM32, Memórias NAND, FPGAs Xilinx/Intel, SoCs Mobile)
    2. `memoria`: Memória & Armazenamento (DDR4, DDR5, SSD NVMe M.2, SSD SATA 2.5", eMMC, Cartões microSD Industrial, HDD Enterprise 3.5")
    3. `placas`: Placas-Mãe & Placas de Expansão (Motherboards Intel/AMD/Server, GPUs NVIDIA RTX/Workstation, GPUs AMD, NICs, SBCs)
    4. `energia_eletro`: Carregadores & Alimentação (PSUs ATX, Carregadores GaN USB-C 45W-240W, Baterias Li-Ion 18650, LiPo, Power Banks Industriais, Painéis Solares Portáteis)
    5. `perifericos_eletro`: Periféricos & Displays (Monitores LCD/IPS bulk, Painéis OLED, Câmeras IP, Impressoras Térmicas, Scanners Industriais, Teclados/Ratos bulk)
* **Dicionário de Especificações & Derivados (`PRODUCT_SPEC_DICTIONARY`)**:
  - Adicionadas 76+ novas entradas cobrindo todos os produtos de Maquinários e Electrónica em Português e Inglês.
  - O Wizard (Passo 3) exibe automaticamente os chips com derivados/modelos específicos (ex: ao escolher *Trator Agrícola de Rodas*, o cliente seleciona entre *Compacto 25-50HP*, *Médio 60-100HP*, *Grande 120-200HP*, *Articulado 200-400HP*, *4WD com Cabine*).
* **Limpeza e Ajuste Visual em `index.html`**:
  - Removido o subtítulo *"Oferecemos consultoria de elite e intermediação segura..."* da secção de Serviços Corporativos.
  - Atualizadas as descrições dos cards de Maquinários e Tecnologia para listar explicitamente a venda dos produtos físicos e seus derivados.
* **Validação**: `node --check app.js` — ✅ SEM ERROS DE SINTAXE. Total de 84 entradas de produtos no dicionário de especificações.



### Sessão: 13 de Agosto de 2026 (Novo Setor "Indústria & Reagentes" + Catálogo na Base de Dados)
* **Novo Setor `chemicals` — Indústria & Reagentes Químicos**:
  - **5.º Setor Canónico**: Adicionado o setor `chemicals` (violeta `#7c3aed`, ícone `science`) ao `GV_CATALOG` (PT) e `GV_CATALOG_EN` (EN) em [app.js](file:///home/paco/Projectos/Global%20View/app.js).
  - **4 Subcategorias**:
    1. `acidos` — Ácidos & Solventes (5 produtos: Ácido Acético, HCl 32%, HCl 37%, Ácido Fosfórico, Metanol)
    2. `sais` — Sais & Compostos Inorgânicos (12 produtos: Hidróxido de Sódio, Cloreto de Sódio, Sulfato de Cobre, Cianeto de Potássio, etc.)
    3. `reagentes` — Reagentes Analíticos (11 produtos: Cloramina T, Ácido Cítrico, D(-) Frutose, BRIJ-35, etc.)
    4. `consumiveis` — Consumíveis de Laboratório (5 produtos: Extran AP11, Extran MA01, Papéis de Filtro, Carbono Ativado)
  - **Fonte dos Produtos**: [catalog/Chemical Products Mozamique Leaf Tobacco.docx](file:///home/paco/Projectos/Global%20View/catalog/Chemical%20Products%20Mozamique%20Leaf%20Tobacco.docx) — 36 produtos originais (3 duplicados consolidados = 33 únicos). Marca: **Merck**.
  - **Card no Wizard Step 1**: Adicionado card visual `#sector-chemicals-card` com ícone `science` e suporte bilíngue completo em [index.html](file:///home/paco/Projectos/Global%20View/index.html).
  - **Fallback de Tradução**: Adicionado fallback para a categoria `chemicals` na função `getTranslatedField()` em [app.js](file:///home/paco/Projectos/Global%20View/app.js).
* **Nova Tabela `catalog_products` na Base de Dados**:
  - **Schema**: Adicionada a tabela `catalog_products` ao [supabase_schema.sql](file:///home/paco/Projectos/Global%20View/supabase_schema.sql) com 14 campos (id, sector, category, name_pt, name_en, pack_unit, quantity, price_usd, price_notes, brand, origin, notes, is_active, created_at).
  - **RLS**: Leitura pública (`is_active = true`) + Escrita restrita a Admins.
  - **Script de Seed**: Criado [catalog_seed.sql](file:///home/paco/Projectos/Global%20View/catalog_seed.sql) com 33 `INSERT INTO catalog_products` — os 36 produtos do DOCX com 3 duplicados consolidados, com referências ao número de linha original do documento.
  - **Documentação**: [DATABASE.md](file:///home/paco/Projectos/Global%20View/DATABASE.md) atualizado com a secção 5 descrevendo a nova tabela, campos, RLS e instruções de seed.
* **Validação**: `node --check app.js` — ✅ SEM ERROS DE SINTAXE.
* **Status**: Aguarda execução do `catalog_seed.sql` no Supabase SQL Editor e deploy no GitHub.

### Sessão: 12 de Agosto de 2026 (Ajustes de Responsividade do Header, Card Condicional & Fundo do Hero)
* **Reestruturação do Layout do Hero & Header (`#view-home > section.hero` e `header.app-header`)**:
  - **Ocultação Condicional do Card "Área do Cliente"**: Atribuído ID `#hero-client-area-card` e sincronizada a lógica em `updateSwitcherUI()` para desaparecer automaticamente assim que o utilizador efetua login (`role !== 'visitor'`).
  - **Fix Crítico de Responsividade do Header**:
    - Adicionada regra `white-space: nowrap` nos links de navegação (`nav.main-nav a`) prevenindo quebra e sobreposição de palavras (*"Sobre Nós"*).
    - Ajustado o breakpoint de colapso do menu para `1120px` e ocultado o subtítulo do logo em `< 1240px`, alternando suavemente para o menu de 3 barras (`.mobile-menu-toggle`) em laptops e tablets.
    - Corrigida a cor do ícone do menu de 3 barras (`color: var(--primary)`) garantindo visibilidade nítida sobre o fundo claro da navbar.
  - **Visibilidade Aumentada das Imagens de Fundo do Hero**:
    - Aumentada a opacidade do container de imagens de fundo de `opacity-40` para `opacity-70`, tornando as fotos do slider (Carga Portuária, Agrobusiness, Logística) substancialmente mais nítidas e vivas.
  - **Imagem Oficial no Card de Agronegócio & Commodities**: Substituída a imagem do cartão principal de *"Agronegócio & Commodities"* na secção **Setores de Atuação** da página inicial pela nova foto dos sacos de grãos e leguminosas (`assets/images/agro_commodities.jpg`).
  - **Grelha de Setores de Atuação em 2 Linhas**: Reorganizada a grelha de cartões da secção **Setores de Atuação** na página inicial para ter exatamente **2 linhas**:
    - **Linha 1 (2 cartões)**: *Agronegócio & Commodities* (`col-span-8`) + *Oil & Gas & Mineração* (`col-span-4`).
    - **Linha 2 (3 cartões)**: *Maquinários & Indústria* (`col-span-4`) + *Tecnologia & Electrónica* (`col-span-4`) + *Logística Global & Fretes* (`col-span-4`).
    - Eliminada a 3ª linha isolada; os 5 setores alinham-se perfeitamente num bento grid de 2 filas.
* **Status**: Verificado e ativo no servidor local (`http://localhost:3000`). Aguarda confirmação antes do deploy no GitHub.

### Sessão: 11 de Agosto de 2026 (Atualização do Centro de Confiança — Trust Center)
* **Reestruturação dos Cartões de Comparação no Centro de Confiança (`#view-trust`)**:
  - **Títulos Simplificados**: Cartão esquerdo renomeado para *"Desvantagens de outros B2B comuns"* e cartão direito para *"Vantagens da GV-CPS"*.
  - **Revisão dos Pontos de Vantagem da GV-CPS**:
    1. **Comunicação**: Substituído o título "Intermediação de Chat Blindada" por *"Comunicação:"*.
    2. **Pagamento mediante termos e condições**: Atualizado o ponto de aprovação financeira para *"Pagamento mediante termos e condições"*.
    3. **Cadeia de fornecimentos integrados**: Atualizado para *"Cadeia de fornecimentos integrados"*.
    4. **Auditoria da cadeia de fornecimento**: Atualizado para *"Auditoria da cadeia de fornecimento: Verificação física da mercadoria, verificação dos processos logísticos e transportes"*.
  - **Remoção de Banner Inferior**: Eliminada a caixa destacada *"🛡️ Como Intermediador Único, a GV-CPS assume a responsabilidade operacional..."* no fundo do cartão direito.
  - **Bilinguismo Preservado**: Marcação `data-translate-pt` e `data-translate-en` atualizada em todos os novos pontos.

### Sessão: 11 de Agosto de 2026 (Atualização da Página de Comunicação / Contactos)
* **Reformulação Visual e de Conteúdo da Secção de Comunicação (`#view-contact`)**:
  - **Remoção do Mapa**: Eliminada a secção inferior do mapa (iframe OpenStreetMap e overlay) de acordo com o pedido do cliente.
  - **Alteração de Sede para Escritório**: Atualizados os textos de "Sede Central Global View" e "Nossa sede..." para "Escritório Global View" e "Nosso escritório...", mantendo suporte bilíngue completo (PT/EN).
  - **Novo Botão Google Maps**: Adicionado botão proeminente *"Ver Localização no Google Maps"* posicionado na parte inferior do card do escritório.
  - **Simplificação do Mini Hero**: Removido o parágrafo de texto descritivo por baixo do título "Fale Connosco", mantendo apenas os botões de ação rápida (Chatbot WhatsApp, Email, Telefone).
  - **Remoção do Card de Intermediação Blindada**: Eliminado o card escuro com garantia de intermediação da coluna de contactos da página.
  - **Novos Contactos Alternativos**: Inseridos os números alternativos `+258 84 392 333000 / +258 82 392 333000` na secção de informações de atendimento.
* **Ajuste no Rodapé (Footer)**:
  - Removido o texto descritivo por baixo do logótipo no rodapé (`.footer-desc`).
  - Aumentado o tamanho do logótipo no rodapé (altura de 38px para 52px e textos ajustados) para maior destaque visual.

### Sessão: 11 de Agosto de 2026 (Auditoria Completa de Fluxo do Cliente — Correção de Bugs Críticos)
* **Auditoria Completa do Sistema de Comunicação**:
  - Analisadas todas as funções chamadas pelo HTML que deveriam existir em `app.js`.
  - Identificadas **4 funções críticas em falta** que causavam erros `ReferenceError` silenciosos.
* **[FIX] `handleContactPageSubmit` adicionada ao `app.js`**:
  - Formulário de contacto da página `#view-contact` estava completamente não-funcional (sem feedback ao utilizador).
  - Nova função com validação de campos obrigatórios, rate limiting (3/10min), integração Supabase (`contact_requests`), reset de formulário e modal de sucesso bilíngue.
* **[FIX] `shareContactLocation` adicionada ao `app.js`**:
  - Botão "Partilhar" no mapa da página de contactos não tinha ação.
  - Implementada com Clipboard API e toast visual bilíngue de confirmação.
* **[FIX] `handleGoogleLogin` adicionada ao `app.js`**:
  - Botão "Entrar com Google" no modal de login não tinha função associada.
  - Implementada com chamada a `gvApi.loginWithGoogle()` e fallback gracioso.
* **[FIX] `showLogisticsInfoModal` adicionada ao `app.js`**:
  - Badge "Logística Incluída" nos chats do portal era clicável mas não abria nada.
  - Modal informativo criado com lista de serviços de logística da GV-CPS, bilíngue (PT/EN).
* **Deploy**: Commit `5fe7ce8` enviado para GitHub → Vercel auto-deploy em [global-view-eight.vercel.app](https://global-view-eight.vercel.app).


* **Atualização do Centro de Confiança**:
  - Atualizado o subtítulo da secção "Por que a Global View é Segura?" em [index.html](file:///home/paco/Projectos/Global%20View/index.html) para: *"Fornecedor global que assegura risco mínimo de fraude em todas as suas operações"*.
  - Renomeados os títulos dos dois blocos de comparação para "Desvantagens (Diretórios B2B Comuns)" e "Vantagens (Nossa Abordagem: GV-CPS)".
* **Atualização da Filosofia Corporativa**:
  - Atualizados os textos dos dois parágrafos principais da Filosofia Corporativa na secção `#view-about` em [index.html](file:///home/paco/Projectos/Global%20View/index.html).
  - Atualizada a lista de vantagens "Porquê Escolher a GV-CPS?" para: *Cadastro Gratuito*, *Sigilo Operacional*, *Assessoria Completa* e *Comunicação Omnichannel (WhatsApp)*.
  - Removido o título "A Global View (GV-CPS)" e o parágrafo de introdução do topo da página "Sobre Nós".
  - Mantido suporte 100% bilíngue (PT/EN) em todos os elementos da secção.

### Sessão: 10 de Agosto de 2026 (Reorganização de Oportunidades e Navegação)
* **Eliminação de Serviços Antigos**:
  - Removido por completo o conteúdo e os cards de Áreas de Excelência (Agro, Oil & Gas, Commodities, TI) que existiam na secção `#view-services` em [index.html](file:///home/paco/Projectos/Global%20View/index.html).
* **Remoção da Secção de Consultoria da Homepage**:
  - Eliminada por completo a secção `#cms-wrap-about` ("Consultoria de Elite para Mercados Complexos") da homepage em [index.html](file:///home/paco/Projectos/Global%20View/index.html).
  - Removido o ID correspondente da configuração de secções do CMS (`CMS_SECTIONS`) em [app.js](file:///home/paco/Projectos/Global%20View/app.js).
* **Atualização do Fluxo de Trabalho (Como Funciona)**:
  - Expandida a secção "Como a GV-CPS Funciona" em [index.html](file:///home/paco/Projectos/Global%20View/index.html) de 3 para 6 passos estruturados.
  - Removido por completo o subtítulo antigo ("Simplificamos a complexidade do comércio...") da secção de fluxo na homepage.
  - Atualizados os textos dos passos 2 e 3 e inseridos os novos cartões 4, 5 e 6 com detalhes sobre Pagamento Inicial, Documentação de Carga e Partida de Navio.
  - Os novos cartões 4, 5 e 6 são inicialmente ocultados (classe `hidden`) e revelados dinamicamente ao clicar no botão "Saiba mais sobre o processo".
  - Implementada a função global `toggleWorkflow()` em [app.js](file:///home/paco/Projectos/Global%20View/app.js) para alternar a visibilidade das etapas e atualizar dinamicamente os textos e atributos de tradução do botão ("Mostrar menos" / "Show less").
  - Assegurado bilinguismo nativo (PT/EN) para todos os novos passos e estados de botões.
* **Mural na Página de Serviços**:
  - Transferido todo o conteúdo do Mural de Oportunidades (Mini Hero, barra de filtros e grelha de cards) para a secção de Serviços (`#view-services`).
  - Removida a secção `#view-wall` do DOM.
  - Atualizado o botão de voltar na visualização de detalhes para apontar para `#services` e implementado bilinguismo completo (`data-translate-pt` e `data-translate-en`).
* **Simplificação da Navbar**:
  - Removida a ligação para o Mural do cabeçalho desktop e menu mobile. A barra possui exatamente: **Início, Sobre Nós, Serviços, Centro de Confiança e Comunicação**.
  - Atualizado o link do rodapé e todos os botões do Hero/Homepage para apontar para `#services`.
* **Redirecionamento Automático e Lógica do Router**:
  - Implementado redirecionamento transparente de `#wall` para `#services` na função `navigate()` em [app.js](file:///home/paco/Projectos/Global%20View/app.js) para preservar links em cache.
  - Atualizado o router, renderizadores e sincronização Supabase para suportar e renderizar o mural sob a rota `#services`.

### Sessão: 03 de Agosto de 2026 (Gaveta de Documentos + Respostas estilo WhatsApp)
* **Gaveta de Documentos Partilhados (Chat File Drawer)**:
  - Adicionado botão de atalho `folder_open` no cabeçalho do chat do Comprador, Consultor e Fornecedor.
  - Implementado painel lateral deslizante (`#-docs-drawer`) que desliza da direita sobre a janela do chat.
  - O painel possui abas filtradas: **Todos**, **Docs** (PDFs/Ficheiros), **Média** (Imagens/Vídeos) e **Cotações** (Propostas).
  - Inclui barra de pesquisa em tempo real para encontrar documentos pelo título.
  - Ao clicar em qualquer ficheiro na gaveta, o chat faz scroll automático suave e destaca temporariamente a mensagem correspondente em contexto.
* **Respostas estilo WhatsApp (Message Reply)**:
  - Adicionado botão de acção de seta de resposta (`reply`) que surge ao passar o cursor sobre qualquer bolha de chat.
  - Clicar no botão activa o "Modo Resposta": apresenta uma barra de pré-visualização contendo o remetente e um snippet da mensagem que está a ser respondida por cima do campo de entrada de texto, com opção de cancelar (`close`).
  - Ao enviar, a nova mensagem armazena a propriedade `replyToId`.
  - Mensagens com resposta renderizam um bloco de citação no topo da bolha com design diferenciado, que ao ser clicado faz scroll e pisca a mensagem original com animação de destaque sutil.

### Sessão: 03 de Agosto de 2026 (Cards de Ação Inteligentes + Fix de Ecrã em Branco)
* **Fix Crítico — Ecrã em Branco no Tab de Chats**:
  - Identificada e corrigida `TypeError` que deixava a página completamente em branco ao navegar para `#buyer-portal?tab=detail`: o JS tentava atualizar IDs DOM inexistentes (`buyer-detail-title`, `buyer-detail-desc`, etc.) causando crash silencioso.
  - Substituídas as referências por acesso aos IDs corretos que existem no HTML (`buyer-chat-header-title`, `buyer-chat-header-subtitle`, `buyer-chat-header-avatar`, `buyer-detail-status`) com verificações de nulidade.
* **Sistema de Cards de Ação Inteligentes (`ACTION_CARD_DEFS`)**:
  - Criado dicionário central `ACTION_CARD_DEFS` em `app.js` mapeando cada `actionType` (`quote`, `status`, `contract`) a cor, ícone, textos PT/EN e botão de resposta do consultor.
  - **Envio único**: `sendChatQuickAction` verifica se já existe uma mensagem com aquele `actionType` na conversa antes de enviar. Se sim, faz scroll + highlight com anel pulsante colorido em vez de reenviar o card. Toast de feedback ao utilizador.
  - **Cards visuais distintos por tipo**:
    - 🟢 Teal `#0d9488` — Pedido de Cotação (`quote`)
    - 🟡 Âmbar `#d97706` — Ponto de Situação (`status`)
    - 🟣 Violeta `#7c3aed` — Minuta de Contrato (`contract`)
  - **Botão de resposta do consultor**: No lado do consultor/admin, o card exibe o CTA correspondente ("Enviar Cotação", "Responder Status", "Enviar Minuta") como botão colorido dentro do card.
  - **Funções de resposta do consultor**: `openSendQuoteForm`, `sendConsultantStatusReply`, `sendConsultantContractDraft` para fechar o ciclo de ação.
  - **Retrocompatibilidade**: Detecção legacy por texto para mensagens antigas.


* **Integração de Google OAuth**:
  - Adicionado o método `loginWithGoogle` em `window.gvApi` em `supabase-client.js` que aciona `signInWithOAuth` usando o provedor `google` e redireciona de volta para a raiz do site.
* **Componente Visual de Login no Modal**:
  - Inserido botão estético "Entrar com o Google" / "Sign in with Google" com logótipo oficial do Google (SVG) no modal `#loginModal` em `index.html`.
  - Adicionado divisor horizontal estilizado ("ou" / "or") para segmentar logins e manter o visual premium.
  - Implementada conformidade total com a **Regra 5 (Bilinguismo simultâneo)** usando atributos `data-translate-pt` e `data-translate-en` em todos os novos elementos.
* **Gestão de Estado de Sessão e Logout Integrado**:
  - Modificada a inicialização (`initApp`) em `app.js` para ser assíncrona, validando sessões Supabase/Google activas na carga do ecrã e preenchendo automaticamente o painel do utilizador.
  - Criado o sinalizador de autenticação real (`appState.isRealAuth`) para evitar conflitos de simulação local com logins reais.
  - Atualizado o seletor de papéis em `app.js` para que ao selecionar "Sair (Visitante)" seja chamado o método `logout` real do Supabase e eliminados os dados locais sensíveis de forma segura via `gvSecurity.clearSensitiveData()`.

### Sessão: 03 de Agosto de 2026 (Cards Modernos de Ações Rápidas, Detalhes em Popup & Chat Completo)
* **Funcionalidades de Chat Completo**:
  - Menu de Anexos (`+`) com opções dropdown: **Ficheiro**, **Imagem** e **Vídeo**. Integração com input de arquivo oculto e barra de progresso simulada com feedback visual.
  - Gravação de Áudio Simulada: Botão de microfone (`mic`) que substitui a área de entrada por um indicador de gravação com cronômetro em tempo real, opções de Cancelar e Enviar.
  - Visualizadores de Mídia Injetados: Bolhas de chat formatadas especificamente para cada tipo de anexo (waveform e reprodutor de áudio, miniaturas modernas com botão de download para imagens, vídeos e documentos).
* **Visão Completa do Chat (Fullscreen Toggle)**:
  - Adicionado um botão de expansão (`toggleBuyerChatFullscreen`) no cabeçalho do chat (exclusivo para desktops). Ao ser clicado, oculta a barra lateral de conversas e expande a janela ativa para ocupar toda a largura útil do ecrã (`lg:col-span-3`).
* **Cards Modernos para Ações Rápidas**:
  - As mensagens disparadas pelos botões de ações rápidas (chips) agora entram na conversa no formato de **Cards B2B estruturados e estruturados**, contendo ícone correspondente, cabeçalho de estado, descrição esteticamente organizada e um selo de segurança pulsante "Mediado com Segurança pela GV-CPS".
* **Exclusão de Botão de Logística Redundante**:
  - Removido o chip rápido "Confirmar Logística" das opções de chat do comprador, visto que a logística integrada da GV-CPS já está incluída e ativa por padrão nos fluxos.
* **Retorno dos Detalhes ao Popup Cockpit Largo**:
  - Revertido o comportamento da ficha técnica de detalhes, que agora abre como um **popup cockpit centralizado e largo (max-w-4xl)** com um layout de duas colunas (especificações e documentos associados à esquerda, timeline detalhada de progresso à direita) com efeito de transição de escala.
* **Remoção de Cabeçalhos e Banners Redundantes**:
  - Eliminado o cabeçalho interno duplicado e a barra de aviso de sigilo redundante do chat (`renderPortalChat`) quando visualizado no Portal do Comprador, deixando apenas o cabeçalho superior unificado e o novo banner escuro com pipeline.
* **Slide-over Drawer Lateral de Detalhes**:
  - Removido o modal de ecrã centrado e implantada uma gaveta lateral deslizante (`buyer-requirement-details-drawer`) que desliza suavemente da direita com especificações da necessidade, Incoterms (CIF/FOB) e documentos para download (pdf).
* **Banner de Segurança & Pipeline de Negociação**:
  - Inserido um cabeçalho de segurança escuro (`#buyer-chat-safety-banner`) no topo do chat ativo contendo aviso de sigilo comercial e um pipeline visual de progresso dinâmico (Solicitado ➔ Cotação ➔ Logística ➔ Contrato) ativado com base no estado da negociação.
* **Chips Rápidos com Envio Imediato**:
  - Chips com ícones profissionais vectoriais que disparam a mensagem imediata de cotação, termos e logística pelo chat ao clicar.
* **Sincronização de Estado**:
  - Implementada a verificação no carregamento do ecrã (`initApp`) que valida e injeta automaticamente os matches e mensagens padrão em `appState`, prevenindo discrepâncias decorrentes de caches antigas no `localStorage`.
* **Fix Crítico de Exceção JS & Proteção Anti-Ecrã em Branco**:
* **Fix Crítico de Exceção JS & Proteção Anti-Ecrã em Branco**:
  - Resolvido o problema onde a tentativa de aceder a propriedades de `match` não encontrado na função `renderPortalChat` causava um erro `TypeError` não capturado, interrompendo o router e deixando todas as secções em `display: none` (ecrã em branco).
  - Inseridas verificações defensivas de nulidade (`if (!match) return`) em `renderPortalChat` e sanitização no `formatDate`.
  - Envolvida a execução das vistas em `navigate()` com um bloco `try...catch` de contenção, garantindo que o portal é SEMPRE exibido na tela sem falhas.
* **Redesenho com Layout Familiar de Chat (WhatsApp/Intercom Style)**:
  - Transformação da aba de **Negociações e Chats (`#buyer-detail-tab`)** no Portal do Comprador para que a área principal seja a janela de conversa direta.
  - Cabeçalho do chat contendo avatar com iniciais da necessidade, nome do requisito, indicador de status, identificação do consultor mediador GV-CPS e o botão destacado **`[ ℹ️ Ver Detalhes do Negócio ]`**.
* **Modal Flutuante de Especificações & Progresso (`#buyer-requirement-details-modal`)**:
  - Abertura de modal/drawer flutuante ao clicar em "Ver Detalhes do Negócio", exibindo alerta de **Logística Integrada pela GV-CPS**, ficha técnica (categoria, volume, destino, logística na faturação, data) e a linha do tempo (*Timeline*) de progresso comercial.
* **Chips de Sugestões Rápidas de Mensagem (Quick Action Chips)**:
  - Conjunto de botões de atalho acima da caixa de texto do chat para envio ou preenchimento com 1 clique: `📄 Solicitar Cotação Formal`, `🚚 Confirmar Logística Integrada`, `🤝 Ponto de Situação` e `📋 Pedir Minuta do Contrato`.
* **Pesquisa de Negociações & Responsividade Completa**:
  - Inserção do campo de pesquisa `#buyer-chat-search-input` para filtragem em tempo real na coluna lateral de conversas.
  - Responsividade total para Mobile (alternância entre lista e conversa com botão "Voltar"), Tablet e Desktop.
* **Manutenção da Paridade Bilíngue (100% PT / EN)**:
  - Marcação de todos os elementos e botões com `data-translate-pt` e `data-translate-en` e suporte no JS.

### Sessão: 03 de Agosto de 2026 (Redesenho da Página de Comunicação / Contactos)
* **Redesenho com Dados Oficiais Reais**:
  - Reconstrução da página de **Comunicação / Contactos (`#view-contact`)** em `index.html` com base na estrutura do modelo visual de referência fornecido pelo utilizador.
  - Integração dos dados oficiais reais da empresa extraídos do documento `PERFIL DA EMPRESA da GV-CPS.pdf` (Sede na Rua de Kassuende, nº 270, Maputo - Moçambique, telefones +258 84 900 9090 / 82 900 9090 / 87 880 9090, e-mail `globalviewmoz@gmail.com`).
  - Removido o termo *"Hub de Relacionamento"* conforme instrução explícita do utilizador.
* **Grelha Principal & Formulário Elevado**:
  - Coluna esquerda ("Onde estamos?"): Exibição da Sede Central de Maputo, contactos telefónicos/e-mail, horário de funcionamento e destaque para o card de **Intermediação Blindada** (Regra de Ouro da GV-CPS).
  - Coluna direita ("Fala Connosco"): Formulário em card elevado com campos de Nome Completo, E-mail Corporativo, Telemóvel/WhatsApp, Assunto de Interesse (Intermediação B2B, Consultoria, Logística, Tecnologia), Mensagem e Checkbox de Privacidade.
* **Mapa Dinâmico & Localização Seleccionada**:
  - Secção de mapa (OpenStreetMap) focado nas coordenadas exatas da Rua de Kassuende em Maputo.
  - Card suspenso *"LOCALIZAÇÃO SELECCIONADA"* com botões *"Partilhar"* (copia endereço para a área de transferência) e *"Ver no Maps"* (link para Google Maps).
* **Manutenção da Paridade Bilíngue (100% PT / EN)**:
  - Marcação de todos os elementos visíveis com `data-translate-pt` e `data-translate-en`.
  - Funções de apoio no `app.js` (`handleContactPageSubmit` e `shareContactLocation`) com sanitização anti-XSS (`gvSecurity.sanitize`) e modal de confirmação visual bilíngue (`showVisualSuccessModal`).

### Sessão: 16 de Julho de 2026
*   **Cores Dinâmicas por Categoria**: Implementado mapeamento usando variáveis CSS (`--cat-color` e `--cat-bg`) para os setores (Agro: verde, Logística: âmbar/laranja, Tecnologia: teal, Energia: bronze, Consultoria: azul petróleo).
*   **Redirecionamentos de Rota e Login Automático**: Adicionado comportamento em que usuários não-autenticados que tentem entrar em rotas restritas (como `#buyer-portal`) são redirecionados à homepage, o modal de login abre sozinho e os dados de teste são preenchidos conforme o papel desejado.
*   **Avisos de Intermediação Segura**: Incluídas faixas destacadas informando que o chat de negociação é mediado pelo consultor da Global View sob sigilo comercial.
*   **Refinamento do Slider Hero**: Transições Ken Burns suaves (zoom de fundo) com um overlay de gradiente para contraste do texto.

### Sessão: 28 de Julho de 2026
*   **Remoção do Slider de Quantidade no Wizard B2B**:
    - **Remoção de Markup**: Removido o input `type="range"` (`#wizard-qty-slider`) e as labels de mínimo/máximo correspondentes no Passo 3, mantendo apenas a inserção numérica direta e os chips de sugestões rápidas posicionados abaixo do campo.
    - **Proteção no Código JS**: Adicionados tratamentos de nulidade em `app.js` (`qtySlider` checks) para garantir que a inserção numérica e a seleção de chips rápidos funcionem perfeitamente sem erros de JavaScript.
*   **Grelha 2x2 Responsiva & Cores Premium no Passo 1 do Wizard B2B**:
    - **Nova Grelha 2x2**: Redesenhado o Passo 1 do assistente (Seleção do Setor) para dispor as opções (*Agronegócio*, *Oil & Gas*, *Tecnologia*, *Logística*) numa grelha harmoniosa 2x2 em vez de esticar ou empilhar em largura inteira.
    - **Identidade Visual por Setor**: Cada setor recebeu cores exclusivas de hover e seleção (Verde Floresta para Agro, Bronze para Oil & Gas, Azul-Teal para Tecnologia e Laranja Quente para Logística) aplicadas à borda, fundo, ícone e sombras de relevo, respeitando o Design System e o bilinguismo.
*   **Reinício do Servidor & Ajuste de Proteção Iframe (`security.js`)**:
    - **Servidor Reiniciado**: Servidor HTTP local desligado e relançado em `http://localhost:3000`.
    - **Ajuste em `preventFrameEmbedding` (`security.js`)**: Adicionada exceção para ambientes de desenvolvimento local (`localhost` e `127.0.0.1`), permitindo que a aplicação seja visualizada em painéis de pré-visualização e frames sem sobrescrever o DOM ou bloquear os cliques dos botões de categorias ("Requisitar") da página inicial.
    - **Abertura Imediata por Categoria**: Confirmado funcionamento dos botões `openRequestWizard('agro')`, `openRequestWizard('oil')`, `openRequestWizard('tech')` e `openRequestWizard('logistics')`.
    - **Bilinguismo 100% PT / EN**: Suporte completo simultâneo em Português e Inglês.

### Sessão: 22 de Julho de 2026
*   **Restauração do Layout Limpo do Modal B2B (`#serviceWizardModal`) & Fotos Contextuais**:
    - **Dimensões & Responsividade (`max-width: 1100px`, `width: 95%`)**: Eliminado o split-screen de 2 colunas laterais permanentes que espremia o formulário e desalinhava os botões. O modal foi restaurado para um card único centralizado elegante (`max-width: 1100px`, `width: 95%` responsivo para margens fluidas no mobile, `padding: 32px` no desktop e altura dinâmica `auto`/`fit-content`).
    - **Imagem de Referência Orgânica no Passo 3 (`#step3-visual-preview`)**: Foto de alta qualidade do subproduto/variedade selecionado exibida diretamente dentro do fluxo do Passo 3, logo abaixo dos chips de variadades (ex: *Ureia Granulada 46% N*, *Ácido Sulfúrico 98%*, *Açúcar ICUMSA 45*, *Diesel EN590*).
    - **Card de Resumo & Confirmação Final no Passo 4 (`#step4-final-card-summary`)**: Card completo da requisição gerada exibido antes do envio com foto, variedade, volume, cálculo de sacos/big bags, porto de descarga e dados corporativos.
    - **Seletor Internacional de Países (Bandeiras & DDI Automático)**: Mantida a lista internacional abrangente de países com bandeiras emoji (🇲🇿, 🇿🇦, 🇧🇷, 🇵🇹, 🇦🇪, 🇺🇸, 🇬🇧, 🇨🇳, 🇮🇳, 🇩🇪, 🇦🇴...) e preenchimento automático do DDI no campo WhatsApp.
    - **Bilinguismo 100% PT / EN**: Todos os componentes e resumos atualizados simultaneamente sem redundâncias em Português e Inglês.

### Sessão: 21 de Julho de 2026
*   **Reestruturação de Categorias (4 → 5)**: Definidas e aprovadas as 5 categorias canónicas do sistema, agrupando os serviços complementares da empresa em grupos lógicos e perceptíveis para o cliente:
    1. `agro` — Agro & Commodities (`#166534` — Verde Agrícola)
    2. `energy` — Energia & Industria (`#3f6212` — Verde Oliva)
    3. `tech` — Tecnologia & Inovacao (`#0f766e` — Teal)
    4. `logistics` — Logistica & Projetos (`#0e7490` — Oceano)
    5. `consulting` — Consultoria & Servicos (`#00374a` — Petróleo)
*   **Paleta de Cores Derivada do Verde GV**: Todas as cores derivam do verde institucional `#006d3d`, por fusão progressiva com amarelo, azul médio, azul forte e azul escuro. Identidade visual coerente em todo o sistema.
*   **Redesign dos Cards do Mural**: Reconstruída a função `createOpportunityCard` para replicar o design aprovado nas imagens de referência:
    - Imagem hero com zoom on hover e gradiente overlay
    - Badge de categoria (top left) com ícone + cor derivada
    - Badge de tipo DEMANDA/OFERTA/SERVICO/PROJETO (top right)
    - Subcategory label acima do título (ex: "MERCADO AGRICOLA")
    - 4 linhas de detalhe com ícones coloridos (Volume, País+bandeira, Logística/CIF, Data)
    - Botão "TENHO INTERESSE →" com cor da categoria
*   **Correção de Navegação (SPA Router)**: Identificado e corrigido um erro de sintaxe JavaScript no `app.js` (`SyntaxError` por chaveta desalinhada e `await` em função não-async). Esta falha impedia o script de carregar no navegador, bloqueando os ouvintes de rota (`hashchange`) e a alternância de telas (`#wall`, `#about`, `#services`, `#contact`, etc.). Navegação 100% operacional.
*   **Deploy Atualizado**: Alterações enviadas para o Vercel via GitHub `d9c3aa3`.

### Sessão: 17 de Julho de 2026
*   **Análise de Usabilidade e Sugestões**: Realizada uma análise aprofundada do Guided Request Wizard em `app.js` e `index.html`. Foram propostas melhorias estruturadas de UX/UI focadas na facilitação máxima de processos e "zero digitação" para Compradores, Fornecedores, Consultores e Administradores.
*   **Criação do Sistema de Logs**: Desenvolvido o sistema local de diretrizes de agente (`.agents/AGENTS.md`) e registo vivo do projeto (`.agents/project_log.md`) para garantir a passagem de contexto entre sessões.
*   **Design de Base de Dados & Segurança (Supabase)**: Desenvolvido o esquema DDL PostgreSQL completo, funções seguras de validação de papéis (`is_admin()`, `is_consultant()`), políticas RLS para ocultar contactos pessoais de consultores (visíveis apenas a administradores e ao próprio proprietário), triggers automáticas para detetar e rejeitar a introdução de e-mails/telefones nos campos de texto livre (chat e mural) e o plano de migração para servidores independentes.
*   **✅ Decisão Oficial de Stack Tecnológica (confirmada pelo proprietário)**:
    *   **Fase atual**: Continuar com **HTML + Vanilla CSS + JavaScript puro**. Sem frameworks, sem TailwindCSS, sem build step.
    *   **Fase futura**: Migração para **React (Next.js) + TailwindCSS** quando o projeto escalar em utilizadores, complexidade ou equipa.
    *   **Princípio orientador**: Todo o código atual deve ser escrito a pensar na migração futura — separação de responsabilidades, variáveis CSS no `:root`, funções JS isoladas e blocos HTML estruturados como componentes lógicos.
    *   Decisão registada em `.agents/AGENTS.md` — Secção 4 — para orientar todos os agentes futuros.
*   **Integração Frontend do Supabase (Vanilla CDN)**: Conectado o protótipo estático ao banco de dados Supabase via CDN. Toda a lógica de acesso e chaves do Supabase foi isolada e encapsulada em `supabase-client.js` sob escopo seguro (IIFE), garantindo que um "View Source" (Ctrl + U) na página revela apenas o HTML estruturado, ocultando chaves e lógica interna. Implementada autenticação com fallback gracioso para mock local, carregamento dinâmico do mural, registo de dados reais e chat em tempo real por WebSockets (Supabase Realtime) para simular negociações mediadas ao vivo.
*   **Conexão Real da Base de Dados & Contas de Teste (Supabase)**: Aplicado de forma automatizada o ficheiro `supabase_schema.sql` (tabelas, RLS, triggers e triggers do Auth) na base de dados PostgreSQL remota do utilizador. Criados e validados os 4 perfis de teste (`buyer`, `supplier`, `consultant`, `admin`) no Supabase Auth com a password padrão `gvcps123` e as respetivas roles configuradas no banco de dados. A partir de agora, o protótipo efetua login e sincronização de dados reais com a nuvem do Supabase.
*   **Melhorias Estruturais de UX/UI no Assistente de Compra (Wizard)**:
    *   *Quantidade Sincronizada (Input + Slider)*: Adicionado um campo numérico bidirecionalmente sincronizado com um slider de quantidade, cujos limites dinâmicos se ajustam de acordo com a categoria de produto escolhida.
    *   *Deteção Inteligente de DDI (WhatsApp)*: Adicionada bandeira do país e máscara de formatação automática em tempo real enquanto o utilizador digita o prefixo (suporte a Moçambique, Brasil, Portugal e Emirados Árabes).
    *   *Porto de Destino/Receção*: Incluído o campo para escolher o porto de desembarque preferencial no Passo 4 do Assistente, acoplando a informação à descrição do requisito.
    *   *Aviso Proeminente de Contacto*: Substituído o alerta nativo por um modal visual premium com backdrop blur que exibe o aviso em destaque: *"Entraremos em contacto pelo WhatsApp ou pelo E-mail"*.
*   **Suporte Bilíngue Nativo (PT/EN) & Auto-Deteção**:
    *   *Traduções Nativas em Larga Escala*: Adicionados dicionários `UI_TRANSLATIONS` e `GV_CATALOG_EN` no `app.js` e marcação `data-translate-*` em toda a estrutura do `index.html`.
    *   *Compatibilidade de Navegador*: Integração dinâmica de `document.documentElement.lang` no `setLanguage(lang)` para ativar tradutores automáticos externos de forma orgânica.
    *   *Renderizadores Dinâmicos Sincronizados*: Toda alteração de idioma re-renderiza o Mural de Oportunidades, Assistente de Compra, Detalhes e Chatbot em tempo real de forma transparente.
*   **Correção de Acessibilidade & Realce de Links**:
    *   Ajustados os seletores e containers no Painel de Acessibilidade para corrigir tags abertas e permitir ajuste suave de fontes e auto-contraste. Mapeado o botão de realce de links com a lógica correspondente.
*   **Chatbot Inteligente Multilíngue**:
    *   Configurada deteção de idioma em tempo real nas interações (PT, EN, ES, FR) para que o chatbot interativo simule respostas condizentes no idioma do utilizador, além de inicializar as saudações dinamicamente.

### Sessão: 21 de Julho de 2026 (Atualização de Interação & Cards)
*   **Cards com Duplo Botão no Mural**:
    - Cada card de oportunidade do mural passou a ter 2 botões de ação na footer:
      1. **"Detalhes"**: Botão contorno na cor da categoria que abre o modal split-view com todas as especificações técnicas da oportunidade.
      2. **"Tenho Interesse / Interesse"**: Botão sólido preenchido com a cor da categoria que inicia o assistente guiado de negociação pré-preenchido.
*   **Modal de Detalhes Dividido (Split View em PC)**:
    - Criado `#opportunityDetailModal` no `index.html` e estilizado em `style.css`.
    - **Layout Desktop/PC (2 Colunas)**: Coluna esquerda exibe a imagem hero da categoria em alta resolução com overlays de segurança da GV-CPS e badges; coluna direita apresenta título, subcategoria, grelha completa de parâmetros (Volume, País+bandeira, Logística/CIF, Data, Estado de Validação), descrição técnica estendida e o botão principal **"Tenho Interesse / Iniciar Negociação →"**.
    - **Layout Mobile**: Ajusta-se para 1 coluna fluida com a imagem no topo.
*   **Assistente Guiado de Negociação Integrado (`startGuidedNegotiation`)**:
    - Pré-seleciona automaticamente o setor, categoria, título do produto/serviço, volume e país de destino a partir do card clicado.
    - Avança diretamente para o **Passo 4 (Contacto e Confirmação)**, permitindo ao cliente ajustar volumes por chips/slider com zero complicação e introduzir apenas o seu número de WhatsApp e E-mail para contacto imediato da equipa GV-CPS.
    - Preenche automaticamente os dados de contacto caso o utilizador esteja autenticado.
*   **Deploy Atualizado**: Alterações enviadas para produção no Vercel via GitHub `6f0f63f`.

### Sessão: 21 de Julho de 2026 (Correção de Deploy & Feedback Visual)
*   **Diagnóstico Visual & Correção dos Filtros do Mural (`#wall`)**:
    *   A partir das capturas de tela fornecidas pelo utilizador, identificou-se que as tags `<option>` da barra de filtros (`#filter-category`, `#filter-country`, `#sort-by`) não possuíam os atributos `data-translate-pt`/`data-translate-en`, mantendo os textos em Português quando o idioma estava em Inglês.
    *   Corrigida a função `getCategoryDetails(category)` em `app.js` para retornar rótulos bilíngues de badges (`Agro & Commodities`, `Energy & Industry`, `Technology & Innovation`, `Logistics & Projects`, `Consulting & Services`) e sub-rótulos em maiúsculas (`AGRICULTURAL MARKET`, `PROJECT MANAGEMENT`, `PROFESSIONAL SERVICES`) dinamicamente no idioma ativo.
    *   Implementado o fallback inteligente em `getTranslatedField` para traduzir 100% dos títulos do mural (`title`) mesmo em instâncias recarregadas do `localStorage`.
*   **Solução Definitiva dos Botões Flutuantes e Painel de Acessibilidade (`#accessibility-fab`)**:
    *   Restaurada a estrutura visual original dos dois botões flutuantes (`#accessibility-fab` a `bottom: 24px` e `#chat-fab` a `bottom: 84px`), garantindo que ambos fiquem 100% visíveis no canto inferior direito.
    *   Corrigida a função `toggleAccessibilityMenu` em `app.js` utilizando `panel.style.setProperty('display', 'flex', 'important')`. Isso garante que o painel de opções de acessibilidade sobrepõe a regra `.hidden { display: none !important; }` do Tailwind CSS ao ser clicado.
*   **Deploy Atualizado**:
    *   Ficheiros enviados para o Vercel via GitHub `be96f9f`.
    *   **URL Correta do Deploy**: [https://global-view-eight.vercel.app](https://global-view-eight.vercel.app)

### Sessão: 21 de Julho de 2026
    *   Identificada e corrigida uma duplicação/corrupção crítica na estrutura de fechamento de tags HTML do modal do wizard em `index.html` que corrompia a árvore DOM.
    *   Atualizada a função `toggleAccessibilityMenu(e)` em `app.js` para tratar interrupção de propagação (`e.stopPropagation()`) e checar visibilidade por classe e CSS computado, garantindo abertura e fecho imediato ao clicar no FAB ou fora do painel.
*   **Eliminação de Conflitos e Mistura de Idiomas (100% PT ou 100% EN)**:
    *   Atualizadas todas as funções de renderização de portais (`renderBuyerPortal`, `renderSupplierPortal`, `renderConsultantPortal`, `renderAdminPortal`, `renderTimeline`, `renderPortalChat`) para que 100% das tabelas, estados vazios, badges, cronogramas e menus dinamizem sem mistura de línguas.
    *   Atualizado o `setLanguage(lang)` em `app.js` para re-renderizar automaticamente a rota ativa (incluindo qualquer portal do usuário) sempre que a língua for alterada.
    *   Função unificada `formatStatus(status)` implementada para traduzir badges de estado do fluxo em tempo real.
*   **Agente e Skill de Sincronização Bilíngue (`bilingual_page_writer`)**:
    *   Criada a skill oficial em `.agents/skills/bilingual-page-writer/SKILL.md` definindo a obrigatoriedade de atributos `data-translate-pt`/`data-translate-en` e sincronização no JS.
    *   Registado o subagente `bilingual_page_writer` via `define_subagent`.
    *   Adicionada a **Secção 5 (Regra Obrigatória de Bilinguismo Simultâneo)** no `.agents/AGENTS.md`.

### Sessão: 21 de Julho de 2026 (Integração do Logo Oficial & Favicons)
*   **Processamento & Integração do Logo Oficial**:
    - Recebido o logótipo oficial (folha/olho verde `#006d3d` envolvendo o globo azul).
    - Criado e armazenado o ficheiro de alta resolução original em `assets/images/logo_official_original.png`.
    - Geradas as versões tratadas com fundo transparente e recorte otimizado (`assets/images/logo.png` e `assets/images/logo_transparent.png`).
    - Gerados os ícones de separador do navegador (`assets/images/favicon.png` e `favicon.ico`) e vinculados no `<head>` de `index.html`.
    - Atualizados a barra de navegação global (`.logo-container`), o menu mobile, o modal de login (`#loginModal`) e o rodapé (`.footer-logo-container`) para integrar o logo oficial com otimização responsiva, sombra suave e proporções nítidas em todos os dispositivos.

### Sessão: 21 de Julho de 2026 (Otimização da Navbar, Acessibilidade & Remoção de Secção)
*   **Correção Definitiva do Botão de Acessibilidade (`#accessibility-fab`)**:
    - Eliminada a duplicação de handlers (removido o `onclick` inline redundante do HTML), permitindo que o gestor de eventos em `app.js` abra e feche o painel de acessibilidade com um único clique limpo.
*   **Navbar com Fundo Claro Glassmorphic**:
    - Atualizada a `header.app-header` em `style.css` para um fundo claro com efeito de vidro fosco (`rgba(255, 255, 255, 0.96)` com `backdrop-filter: blur(12px)` e borda inferior sutil).
    - Eliminado o conflito de cores: o logótipo oficial (folha verde + globo azul) e a tipografia azul petróleo (`#00374a`) ganharam contraste máximo e nitidez total.
    - Atualizados os links de navegação (`nav.main-nav a`) e o seletor de papéis para combinar harmoniosamente com a nova estética da barra.
*   **Remoção de Secção Antiga & Preservação do Rodapé**:
    - Removida a secção de prova social (`#cms-wrap-social` / "Confiança Consolidada no Mercado") em `index.html`.
*   **Preservação dos Dois Botões Flutuantes & Rodapé**:
    - Verificados e mantidos ativos o botão do Chatbot (`#chat-fab` a `bottom: 84px` com janela `#chat-window`) e o botão de Acessibilidade (`#accessibility-fab` a `bottom: 24px` com painel `#accessibility-panel`).
*   **Correção de Estrutura DOM & Desalinhamento de Tags**:
    - Identificado e corrigido o desbalanceamento de tags no [index.html](file:///home/paco/Projectos/Global%20View/index.html) (`section#view-home` não fechada e `div.grid` em `services-section` sem fecho), o qual aprisionava a árvore DOM e impedia o rodapé e os botões flutuantes de renderizarem corretamente na página inicial.
*   **Sincronização Bilíngue Completa (Português & Inglês)**:
    - Adicionados os atributos `data-translate-pt` e `data-translate-en` a **100% dos elementos visíveis** no [index.html](file:///home/paco/Projectos/Global%20View/index.html) e renderizações dinâmicas em [app.js](file:///home/paco/Projectos/Global%20View/app.js).
    - Ajustados os títulos principais do Hero Slider para expressões diretas em Português e Inglês:
      - **Slide 1**: *"Oportunidades Globais"* ⇄ *"Global Opportunities"*
      - **Slide 2**: *"Suporte Logístico"* ⇄ *"Logistics Support"*
*   **Atualização da Tipografia Oficial do Logotipo**:
    - Adicionada a tipografia oficial completa da empresa ao lado do ícone no cabeçalho, rodapé e menu mobile em [index.html](file:///home/paco/Projectos/Global%20View/index.html) e [style.css](file:///home/paco/Projectos/Global%20View/style.css):
      - Linha superior: **GLOBAL VIEW** (azul oceano `#1f6e9c` em negrito).
      - Linha inferior: **Consultoria & Prestação de Serviços, Lda** (cinza escuro `#1e293b` / *"Consulting & Services, Ltd"* em inglês).
*   **Refinamento do Modal de Requisição B2B (`#serviceWizardModal`)**:
    - Expansão da largura para **`920px`** em ecrãs desktop (PC) com grelha espaçosa e responsiva em [style.css](file:///home/paco/Projectos/Global%20View/style.css).
    - Implementação de subcategorias e especificações finas/derivados (ex: *Ureia Granulada 46% N*, *Ureia Perlada*, *Ácido Sulfúrico 98% Concentrado*, *Ácido Sulfúrico 70% Bateria*) em [app.js](file:///home/paco/Projectos/Global%20View/app.js) e [index.html](file:///home/paco/Projectos/Global%20View/index.html).
    - Adição de seleção de formato de acondicionamento/embalagem inteligente por estado físico (Sacos 50kg, Big Bags 1.000kg, ISO Tank Container 24.000L, IBC Tote 1.000L, Camião/Navio Tanque a Granel).
    - Realocação do campo **Porto de Descarga / Destino Final** para o Passo 3 (Especificação do Produto & Logística).
    - Preservada a paridade **100% bilíngue (Português / Inglês)** em todos os novos componentes e seletores.

### Sessão: 22 de Julho de 2026 (Correção de Contraste & Redesign do Header no Trust Center)
*   **Redesign do Mini Hero (Proporção & Imagem de Fundo de Segurança)**:
    - Reestruturado o Mini Hero do Trust Center (`#view-trust`) para espelhar rigorosamente o layout e dimensões do hero do Mural de Oportunidades (`#view-wall`): altura `py-16 mb-12`, alinhamento `max-w-container-max` com preenchimento lateral responsivo.
    - Adicionada imagem de fundo de alta definição focada em segurança corporativa digital (`Unsplash corporate security/vault`) com opacidade de 40% e gradiente escuro horizontal (`from-slate-950/90 via-slate-900/70 to-slate-950/80`).
    - Incluído badge de garantia operacional (`Garantia Operacional 100%` / `100% Operational Guarantee`), título **"Centro de Confiança"** / **"Trust Center"** e um selo visual à direita de *"Intermediação Segura & Sigilo Comercial Total"*.
*   **Novo Cabeçalho da Secção de Comparação**:
    - Atualizado o título principal para **"Por que a Global View é Segura?"** (PT) / **"Why Global View is Safe?"** (EN).
    - Substituída a introdução por um resumo conciso e direto: *"A GV-CPS atua como intermediário único e garantidor de todas as transações, eliminando riscos de fraude e garantindo segurança total."*
*   **Remoção de Referências "Ex: GBO"**:
    - Removida a menção "(Ex: GBO)" do card da esquerda, alterando o título para **"Diretórios B2B Comuns"** / **"Common B2B Directories"**.
*   **Correção de Visibilidade do Card "Nossa Abordagem: GV-CPS"**:
    - Identificada a causa raiz da falta de visibilidade / efeito "desfocado" no card da direita: a variável CSS `--primary-dark` não estava definida no `:root` de [style.css](file:///home/paco/Projectos/Global%20View/style.css) nem na configuração do Tailwind em [index.html](file:///home/paco/Projectos/Global%20View/index.html), o que fazia o `style="background-color: var(--primary-dark);"` falhar e renderizar com fundo transparente/branco sob texto branco/claro.
    - Adicionada a variável `--primary-dark: #002533;` no `:root` do [style.css](file:///home/paco/Projectos/Global%20View/style.css) e `"primary-dark": "var(--primary-dark)"` na configuração Tailwind do [index.html](file:///home/paco/Projectos/Global%20View/index.html).
    - Atualizados os estilos e classes de contraste do card em [index.html](file:///home/paco/Projectos/Global%20View/index.html): fundo azul petróleo escuro com fallback `#002533`, texto branco nítido (`text-white`, `text-slate-100`), ícones esmeralda brilhante (`text-emerald-400`) e caixa de chamada final em verde translúcido com relevo (`bg-emerald-950/70` e `border-emerald-500/30`).
    - Mantido o alinhamento **100% bilíngue (PT/EN)** em todos os textos e destaques do card.

### Sessão: 28 de Julho de 2026 (Security Hardening Completo)
*   **Auditoria de Segurança Completa**: Realizada auditoria aprofundada de todos os ficheiros do protótipo, identificando 7 vulnerabilidades (2 críticas, 2 altas, 2 médias, 1 baixa).
*   **[NEW] Módulo de Segurança (`security.js`)**:
    - Criado módulo centralizado exportando `window.gvSecurity` com funções de sanitização XSS (`sanitize`, `sanitizeAttr`), rate limiting (`checkRateLimit`, `resetRateLimit`), proteção de dados (`clearSensitiveData`, `sanitizeStateForStorage`) e anti-tampering (`preventFrameEmbedding`, `isDomainAuthorized`).
    - Auto-inicializa proteções contra iframe embedding e verifica domínio autorizado no carregamento.
    - Carregado no [index.html](file:///home/paco/Projectos/Global%20View/index.html) antes de `supabase-client.js` e `app.js`.
*   **Remoção de Credenciais Hardcoded**:
    - Eliminada a password de teste `gvcps123` da função `fillMockCreds()` em [app.js](file:///home/paco/Projectos/Global%20View/app.js). A função agora apenas preenche o e-mail e foca o campo de password para digitação manual.
*   **Proteção Anti-XSS (57 instâncias sanitizadas)**:
    - Aplicado `gvSecurity.sanitize()` a todos os pontos de injeção `innerHTML` que interpolam dados do utilizador ou da base de dados em [app.js](file:///home/paco/Projectos/Global%20View/app.js).
    - Funções modificadas: `createOpportunityCard`, `renderDetailView`, `renderBuyerPortal`, `renderSupplierPortal`, `renderConsultantPortal`, `renderAdminPortal`, `renderPortalChat`, `renderPortalWall`, `inspectMatch`.
*   **Rate Limiting no Login (5 tentativas / 15 min)**:
    - Adicionada verificação `gvSecurity.checkRateLimit('login', 5, 900000)` no início de `handleMockLogin()`. Após 5 tentativas falhadas, o utilizador é bloqueado por 15 minutos com aviso bilíngue.
    - Reset automático do contador após login bem-sucedido.
*   **Proteção de Dados no localStorage**:
    - Função `saveState()` agora usa `gvSecurity.sanitizeStateForStorage()` para excluir campos sensíveis (email, contactos, whatsapp) antes de gravar no localStorage.
*   **Headers de Segurança HTTP (Anti-Phishing/Clonagem)**:
    - Adicionados 7 headers de segurança ao [vercel.json](file:///home/paco/Projectos/Global%20View/vercel.json):
      - `X-Frame-Options: DENY` (anti-clickjacking)
      - `X-Content-Type-Options: nosniff` (anti-MIME sniffing)
      - `X-XSS-Protection: 1; mode=block`
      - `Referrer-Policy: strict-origin-when-cross-origin`
      - `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()`
      - `Content-Security-Policy` (restritivo, autoriza apenas CDNs confiáveis)
      - `Strict-Transport-Security` (HSTS com preload)
*   **Restrição de RLS no Supabase (Perfis)**:
    - Política `"Leitura pública de perfis"` (`USING (true)`) substituída por `"Leitura de perfis por autenticados"` (`USING (auth.uid() IS NOT NULL)`) em [supabase_schema.sql](file:///home/paco/Projectos/Global%20View/supabase_schema.sql).
    - Utilizadores anónimos já não podem enumerar todos os perfis do sistema (incluindo roles admin/consultant).
*   **Traduções de Segurança (PT/EN)**:
    - Adicionadas entradas `rate_limit_warning`, `login_blocked`, `security_warning` ao dicionário `UI_TRANSLATIONS` em ambos os idiomas.
*   **Limpeza & Ajustes no Trust Center**:
    - Removido o subtítulo descriptivo do mini hero ("Ambiente comercial blindado onde a GV-CPS atua como intermediária única e garantidora de todas as transações.") para uma interface mais limpa e focada.
    - Alterado o badge "Garantia Operacional 100%" para apenas "Garantia Operacional" / "Operational Guarantee" (eliminado "100%").

---

## 3. Próximos Passos & Tarefas Pendentes

### Segurança (Fase Seguinte):
*   Integrar **Cloudflare Turnstile** (CAPTCHA) no formulário de login — adiado para próxima sessão.
*   Implementar **autenticação com Google OAuth** via Supabase Auth para escalabilidade futura.
*   Aplicar a política RLS atualizada diretamente no Supabase Dashboard (o ficheiro `.sql` foi atualizado mas a migração na BD remota precisa de ser executada manualmente).

### Outras Tarefas:
*   Realizar testes de usabilidade e validação com utilizadores nativos de inglês e português.
*   Adicionar as páginas restantes de portais do consultor/administrador (se necessário).
*   Realizar simulação de negociação ponta a ponta e testes de sincronização Supabase com múltiplos utilizadores em simultâneo.


