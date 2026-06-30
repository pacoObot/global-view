# Briefing do Projecto — Plataforma GV-CPS

## Contexto para quem vai ler isto

Este documento é uma contextualização completa de um projecto de sistema/site para que possas continuar o trabalho de prototipagem de páginas sem precisar de mais perguntas de fundo. Tudo o que precisas para entender o negócio, os utilizadores e as regras do sistema está aqui. O objectivo desta conversa é **prototipar as páginas** (web e/ou mobile) com base neste contexto.

---

## 1. A Empresa

**Global View – Consultoria & Prestação de Serviços (GV-CPS)** é uma empresa moçambicana legalmente registada, sediada em Maputo. Oferece serviços de consultoria e intermediação em várias áreas: avaliação e monitoria de projectos, consultoria económico-jurídica para Petróleo e Gás, consultoria para commodities trading, gestão financeira e finanças públicas, apoio a PMEs, agropecuária e agronegócios, tecnologias de informação, consultoria sociocultural e ambiental, formação profissional, e tradução de documentos (Português, Inglês, Francês, línguas nacionais).

O público-alvo são entidades públicas e privadas, nacionais e estrangeiras, organizações e indivíduos. A empresa pretende actuar **além fronteiras**, servindo clientes em qualquer parte do mundo.

---

## 2. O Problema a Resolver

O dono da empresa quer **um canal único que faça a gestão de tudo**: desde os funcionários internos até aos clientes externos (nacionais e internacionais). A ideia central é que pessoas de outros países possam descobrir os produtos/serviços da empresa, demonstrar interesse, e a GV-CPS trata de toda a logística e ligação entre as partes.

---

## 3. O Modelo de Referência — Global Buyers Online

O projecto inspira-se directamente no site **globalbuyersonline.com**, uma plataforma B2B internacional que liga importadores, exportadores, fornecedores e fabricantes através de "Buy Requirements" (pedidos de compra) publicados num mural público. O padrão de navegação desse site é o que queremos replicar pela sua simplicidade:

- Navegação por **Categoria**, por **País**, ou por **Mais Recentes** — três caminhos para o mesmo conteúdo.
- Cada item do mural mostra um resumo (título, descrição, quantidade, país, data) com um botão de acção único.
- Existem dois caminhos de entrada simétricos: **"Post your Buy Requirement"** (para compradores) e o registo como fornecedor/membro (para quem quer vender).
- Existe uma secção de **Trust & Safety** que explica verificação de utilizadores, prevenção de fraude e resolução de disputas — isto gera confiança em ambos os lados do mercado.

**A diferença crítica entre o modelo de referência e a GV-CPS:** no Global Buyers Online, depois do contacto inicial (botão "Contact this Buyer"), comprador e fornecedor **negoceiam directamente entre si**, fora da plataforma. **Na GV-CPS isto NÃO pode acontecer.**

---

## 4. A Regra de Negócio Mais Importante do Sistema

> **A GV-CPS é o único intermediário autorizado entre comprador e fornecedor. As duas partes nunca trocam contacto directo nem negoceiam fora da plataforma. Toda a comunicação, negociação e fecho de negócio passa exclusivamente pela GV-CPS.**

Isto não é apenas uma política — tem de ser **garantido tecnicamente** pelo sistema, porque é a base do modelo de negócio (se as partes se contactarem directamente, a empresa perde o papel de intermediário e o valor do serviço).

Implicações práticas para o design das páginas:

- O mural público **nunca mostra** nome de contacto, e-mail, telefone, nome da empresa ou qualquer link externo de quem publica uma necessidade ou oferta.
- O botão de acção no mural não é "Contactar" — é algo como **"Tenho Interesse"** ou **"Quero Isto"**, que abre um formulário interno dirigido à GV-CPS, nunca à outra parte.
- Qualquer campo de texto livre (descrição de necessidade, descrição de oferta, mensagens) deve ser tratado como um lugar onde alguém pode tentar inserir contacto — o sistema deve sinalizar/bloquear padrões de e-mail, telefone ou links (isto é um requisito não-funcional de segurança, relevante para quem desenhar os formulários).
- Depois de aprovado o interesse mútuo, a comunicação acontece num **chat interno mediado pela GV-CPS** — nunca por troca directa de WhatsApp/e-mail entre as partes.
- Excepcionalmente, pode existir um papel de **"Intermediário Parceiro"** registado e aprovado formalmente — mas por defeito esse papel não existe; só a GV-CPS ocupa esse lugar.

---

## 5. Os 5 Actores do Sistema

| Actor | Tem conta? | Paga acesso? | Função principal |
|---|---|---|---|
| **Visitante** | Não | — | Navega no mural público, pode registar-se |
| **Comprador / Cliente** | Sim | Não | Publica necessidades/requisições de compra |
| **Fornecedor** | Sim | **Não** (gratuito — diferencial face à concorrência) | Publica ofertas de produtos/serviços disponíveis |
| **Consultor / Funcionário** | Sim (interno) | — | Recebe requisições/ofertas atribuídas, faz a correspondência entre as partes, negoceia, actualiza estados |
| **Administrador** | Sim (interno) | — | Gere utilizadores, catálogo, atribuições, relatórios; vê tudo |

Nota importante: no Global Buyers Online, fornecedores normalmente pagam subscrição para poder contactar compradores ("Become a Member", "Upgrade your Membership"). **Na GV-CPS, o registo e uso são gratuitos para fornecedores numa primeira fase** — o valor da empresa está no serviço de intermediação, não numa taxa de acesso à plataforma.

---

## 6. O Fluxo Principal do Negócio

```
COMPRADOR                                          FORNECEDOR
"Preciso de X"                                "Tenho X disponível"
   │                                                  │
   ▼                                                  ▼
Publica Necessidade                         Publica Oferta (grátis)
(formulário curto, poucos campos)           (formulário curto, poucos campos)
   │                                                  │
   └──────────────────► GV-CPS ◄────────────────────┘
                  (consultor analisa ambos
                   os lados do mercado)
                            │
              Identifica correspondência
              Comprador X ↔ Fornecedor Y
                            │
              Abre negociação mediada
              (chat interno, sem contacto
               directo revelado)
                            │
              Resolve termos, incluindo
              logística (ver secção 7)
                            │
              Actualiza estado em AMBOS
                 os painéis simultaneamente
                            │
                  Fecha negócio — GV-CPS
                  emite documentos como
                  intermediário formal
```

---

## 7. A Questão da Logística — Regra de Transparência

Alguns clientes/fornecedores querem que a logística (transporte, entrega) esteja incluída na facturação final feita pela GV-CPS; outros preferem tratar disso separadamente. Isto **tem de ficar claro desde o primeiro formulário**, com uma escolha simples e visível:

```
A logística está incluída no negócio?
○ Sim — quero que a GV-CPS inclua transporte/logística na factura final
○ Não — trato da logística separadamente
```

Esta escolha é feita com um único clique, tanto por quem publica uma necessidade como por quem publica uma oferta, e fica visível para o consultor responsável pela correspondência — evitando ambiguidade e disputas mais tarde.

---

## 8. Princípio de Design: Simplicidade e Poucos Cliques

Requisito explícito do dono do negócio: o sistema deve ser **"friendly", simples, sem complicar os utilizadores, com poucos cliques**. Isto aplica-se especialmente aos formulários de publicação. Um formulário de publicação (necessidade ou oferta) deve ter no máximo estes campos:

1. Título curto (o que precisa / o que tem)
2. Categoria (lista pré-definida, selecção rápida)
3. Descrição detalhada (campo de texto livre, com filtro anti-contacto)
4. Quantidade ou âmbito
5. País
6. Logística incluída? (Sim/Não — um clique, ver secção 7)
7. Contacto (nome, e-mail, telefone — **visível apenas internamente para a GV-CPS, nunca publicado**)

Mesma estrutura, espelhada, para Comprador e Fornecedor.

---

## 9. Como o Mural Público Deve Aparecer (exemplo de card)

```
┌─────────────────────────────────────────────┐
│ PROCURA-SE  │ Soja Refinada                  │
│             │ Categoria: Agronegócio          │
│             │ Quantidade: 500 toneladas       │
│             │ País: Moçambique                │
│             │ Logística: Incluída na proposta │
│             │ Publicado: 17-Jun-2026           │
│             │                                  │
│             │  [ Tenho Interesse → ]           │
└─────────────────────────────────────────────┘
```

Note-se: sem nome de empresa, sem contacto, sem link externo — apenas o suficiente para gerar interesse e confiança.

---

## 10. As Categorias de Serviços (base do catálogo/mural)

Derivadas directamente do perfil oficial da empresa:

- Avaliação, Elaboração e Monitoria de Projectos
- Consultoria Económico-Jurídica para Petróleo e Gás
- Consultoria Económico-Jurídica para Conteúdo Local
- Consultoria para Commodities Trading
- Consultoria para Gestão Financeira
- Consultoria para Gestão de Finanças Públicas
- Consultoria para PMEs
- Consultoria para Agropecuária e Agronegócios
- Consultoria para Tecnologias de Informação
- Consultoria Sociocultural e Ambiental
- Formação e Treinamento Profissional
- Tradução de Documentos (Português, Inglês, Francês, línguas nacionais)

---

## 11. Páginas/Telas a Prototipar

### Site público (visitante, sem login)
- Página inicial (apresentação da empresa, destaques, chamada para acção)
- Mural público — vista por categoria, por país, mais recentes
- Página de detalhe de um item do mural (card expandido, sem contacto)
- Página "Publicar Necessidade" (formulário do comprador)
- Página "Publicar Oferta" (formulário do fornecedor)
- Sobre Nós (missão, visão, valores, equipa)
- Contactos
- Login / Registo

### Painel do Comprador (após login)
- Dashboard pessoal — lista das suas requisições e estado de cada uma
- Detalhe de uma requisição (estado, histórico, chat interno mediado quando aplicável)
- Notificações

### Painel do Fornecedor (após login)
- Dashboard pessoal — lista das suas ofertas e estado de cada uma
- Detalhe de uma oferta (estado, histórico, chat interno mediado quando aplicável)
- Notificações

### Painel do Consultor (interno)
- Lista de requisições e ofertas atribuídas
- Tela de correspondência/negociação (ligar requisição a oferta, gerir termos incluindo logística)
- Chat interno mediado (consultor fala com ambas as partes em conversas separadas)
- Registo de notas internas

### Painel do Administrador (interno)
- Dashboard geral (métricas: novas, em curso, concluídas)
- Gestão de utilizadores (compradores, fornecedores, consultores)
- Gestão do catálogo/categorias
- Atribuição de requisições/ofertas a consultores
- Relatórios de actividade

---

## 12. Identidade Visual

A empresa usa o nome **Global View** com um logótipo que combina um globo estilizado em verde com a tipografia "GLOBAL VIEW" em azul escuro. Paleta sugerida: tons de azul (confiança, profissionalismo, alinhado ao sector de consultoria internacional) e verde (sustentabilidade, crescimento, ligado ao logótipo existente). A app/site deve transmitir seriedade institucional (é uma consultora B2B) mas com a simplicidade de navegação de um marketplace.

---

## 13. O Que NÃO Fazer (erros a evitar no protótipo)

- Não desenhar nenhum botão ou ecrã que revele contacto directo entre comprador e fornecedor.
- Não criar um fluxo de "checkout"/pagamento directo entre as partes — o pagamento/facturação é sempre intermediado pela GV-CPS.
- Não tornar os formulários de publicação longos ou burocráticos — o requisito é simplicidade e poucos cliques.
- Não esquecer a opção de logística (Sim/Não) em qualquer formulário de publicação.
- Não criar fricção de pagamento para o fornecedor — o registo e uso devem ser gratuitos para fornecedores nesta fase.

---

## 14. Stack Técnica de Referência (caso seja relevante para o protótipo)

Web: Next.js · Mobile: Flutter · Backend: NestJS + Prisma · Base de dados: Supabase (PostgreSQL) · Autenticação: Supabase Auth · Ficheiros: Supabase Storage · Tempo real: Supabase Realtime.

---

*Fim do briefing. Este documento contém todo o contexto de negócio necessário para iniciar a prototipagem visual das páginas do sistema GV-CPS.*
