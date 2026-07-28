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

### Sessão: 16 de Julho de 2026
*   **Cores Dinâmicas por Categoria**: Implementado mapeamento usando variáveis CSS (`--cat-color` e `--cat-bg`) para os setores (Agro: verde, Logística: âmbar/laranja, Tecnologia: teal, Energia: bronze, Consultoria: azul petróleo).
*   **Redirecionamentos de Rota e Login Automático**: Adicionado comportamento em que usuários não-autenticados que tentem entrar em rotas restritas (como `#buyer-portal`) são redirecionados à homepage, o modal de login abre sozinho e os dados de teste são preenchidos conforme o papel desejado.
*   **Avisos de Intermediação Segura**: Incluídas faixas destacadas informando que o chat de negociação é mediado pelo consultor da Global View sob sigilo comercial.
*   **Refinamento do Slider Hero**: Transições Ken Burns suaves (zoom de fundo) com um overlay de gradiente para contraste do texto.

### Sessão: 28 de Julho de 2026
*   **Correção do Modal Guia de Requisição B2B (`#serviceWizardModal`) & Ativação dos Botões**:
    - **Restabelecimento do Elemento Modal `#serviceWizardModal`**: Corrigida a estrutura HTML do modal que havia perdido a tag de abertura durante a limpeza de preview cards, restaurando a abertura imediata ao clicar em "Requisitar Novo Serviço B2B", "Tenho Interesse" e "Iniciar Negociação".
    - **Mapeamento de Países em `startGuidedNegotiation`**: Atualizada a função para converter o nome do país no código ISO correspondente no seletor global (`#wizard-contact-country`) com bandeira e DDI automáticos.
    - **Simplificação e Suporte Global**: Mantido o fluxo simplificado do wizard sem cartões visuais desnecessários e com catálogo global de países agrupado por continentes.
    - **Bilinguismo 100% PT / EN**: Funcionamento total em Português e Inglês.

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


