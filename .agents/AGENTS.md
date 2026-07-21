# Diretrizes Gerais do Projeto — Global View (GV-CPS)

Bem-vindo ao workspace da plataforma **Global View B2B Marketplace (GV-CPS)**.
Qualquer agente que iniciar uma sessão neste workspace deve seguir rigorosamente as regras descritas neste documento.

## 1. Regra de Ouro do Negócio (CRÍTICO)
> **A GV-CPS é o único intermediário autorizado entre comprador e fornecedor. As duas partes NUNCA trocam contacto directo nem negoceiam fora da plataforma. Toda a comunicação, negociação e fecho de negócio passa exclusivamente pela GV-CPS.**

*   **Mural Público**: NUNCA exponha nomes de empresas, e-mails, telefones ou links externos dos utilizadores.
*   **Chamada de Ação**: O botão principal do mural público deve ser **"Tenho Interesse"** ou **"Quero Isto"**, o qual direciona o utilizador para um formulário interno com a GV-CPS (nunca direto ao outro lado).
*   **Chats Privados**: Devem ser claramente identificados como **negociações mediadas** pela GV-CPS e ter um aviso explícito de segurança/sigilo comercial.

## 2. Requisitos de Interface e Design
*   **Cores por Categoria**: O sistema de cores dinâmicas da plataforma mapeia setores específicos:
    *   *Commodities/Agro*: Verde Floresta (`#006d3d` / `--cat-color` e `--cat-bg`)
    *   *Logística*: Âmbar/Laranja Quente (`#d97706`)
    *   *Tecnologia*: Azul-Teal Digital (`#0d9488`)
    *   *Energia (Petróleo & Gás)*: Bronze/Ouro Escuro (`#b45309`)
    *   *Consultoria (Principal)*: Azul Petróleo (`#00374a`)
*   **Simplicidade**: Mantenha os fluxos com poucos cliques. Formulários curtos e limpos.
*   **Opção de Logística**: Todos os formulários de publicação de necessidade/oferta devem conter a pergunta explícita sobre a inclusão da logística no negócio (Sim/Não).

## 3. Protocolo de Sessão e Atualização de Logs
Para garantir a continuidade e alinhamento de múltiplos agentes trabalhando neste projeto:
1.  **Início da Sessão**: Antes de propor alterações ou executar tarefas, você deve ler o arquivo de status atual e histórico em [.agents/project_log.md](file:///home/paco/Projectos/Global%20View/.agents/project_log.md) para entender em que ponto o desenvolvimento está.
2.  **Durante a Sessão**: Conduza suas modificações conforme planejado.
3.  **Fim da Sessão**: Ao concluir ou pausar o trabalho, você deve atualizar o arquivo [.agents/project_log.md](file:///home/paco/Projectos/Global%20View/.agents/project_log.md) registando o progresso da sua sessão (Changelog), o status atual e os próximos passos.

---

## 4. Decisão de Stack Tecnológica (OFICIAL — Não Alterar Sem Autorização)

> **Esta decisão foi confirmada pelo proprietário do projeto em 17 de Julho de 2026 e é vinculativa para todos os agentes.**

### Fase Atual — Protótipo (Em curso)
*   **HTML + Vanilla CSS + JavaScript puro** — sem frameworks, sem build step, sem dependências externas.
*   **NÃO introduzir TailwindCSS, React, Vue, ou qualquer framework JS/CSS** nesta fase.
*   Deploy direto via Vercel sem pipeline de build.

### Fase Futura — Produção Escalável (Quando exigido)
*   Migração para **React (Next.js)** + **TailwindCSS**.
*   Esta migração só ocorre quando o volume de utilizadores, a complexidade de componentes ou a equipa de desenvolvimento o justificarem.
*   A decisão de migrar cabe exclusivamente ao proprietário do projeto.

### Princípio de Código Orientado ao Futuro (OBRIGATÓRIO)
Todo o código escrito na fase atual deve respeitar os seguintes princípios para facilitar a futura migração:

1.  **Separação de responsabilidades**: HTML para estrutura, CSS para estilo, JS para lógica — nunca misturar.
2.  **Componentes lógicos**: Estruturar o HTML em blocos semanticamente independentes (ex: `<section id="hero">`, `<section id="mural">`), como se fossem componentes React futuros.
3.  **Variáveis CSS centralizadas**: Toda a paleta de cores, espaçamentos e tipografia devem estar definidos como variáveis CSS no `:root` do `style.css`, nunca como valores hardcoded dispersos.
4.  **Funções JS reutilizáveis**: Cada funcionalidade em `app.js` deve ser uma função nomeada e isolada, nunca código inline ou acoplado ao DOM de forma rígida.
5.  **Comentários de migração**: Quando relevante, adicionar comentários como `/* TODO: React component — <NomeDoComponente> */` para marcar blocos que se tornarão componentes independentes.
6.  **Evitar jQuery e libs legadas**: Usar apenas JavaScript moderno (ES6+), APIs nativas do browser e fetch API.

---

## 5. Regra Obrigatória de Bilinguismo Simultâneo (PT / EN)
> **Qualquer criação ou modificação de página, modal, componente ou visualização DEVE ser realizada com suporte 100% bilíngue (Português e Inglês simultâneos). NUNCA deixar textos hardcoded em apenas uma língua ou misturar idiomas.**

*   **No HTML (`index.html`)**: Todos os elementos de texto devem possuir `data-translate-pt` e `data-translate-en`.
*   **No JavaScript (`app.js`)**: Renderizações dinâmicas devem verificar o idioma ativo (`localStorage.getItem('gvcps_lang')`) e consultar `UI_TRANSLATIONS` ou estruturas condicionais `lang === 'en'`.
*   **Agente de Sincronização**: Ao criar novas páginas ou alterar a UI, o agente `bilingual_page_writer` e a skill `bilingual-page-writer` devem atuar em paralelo para garantir paridade total entre Português e Inglês.

