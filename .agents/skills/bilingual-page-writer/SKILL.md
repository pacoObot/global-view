---
name: bilingual-page-writer
description: Agente e protocolo especializado para sincronização bilíngue (Português/Inglês) em paralelo durante a criação e atualização de páginas, modais e componentes na plataforma Global View (GV-CPS).
---

# Protocolo do Escritor Bilíngue (Bilingual Page Writer)

## Objetivo
Garantir que **qualquer nova página, componente, modal ou visualização** desenvolvida na plataforma GV-CPS seja criada com suporte bilíngue nativo e simultâneo em **Português (PT)** e **Inglês (EN)**, sem textos hardcoded em apenas uma língua ou conflitos de tradução.

## Regras de Ouro de Execução

### 1. Estrutura HTML (`index.html`)
- Todo o elemento de texto (títulos `<h1>`-`<h6>`, parágrafos `<p>`, botões `<button>`, links `<a>`, labels `<label>`, spans e placeholders) DEVE possuir obrigatoriamente os atributos `data-translate-pt` e `data-translate-en`.
- Exemplo Padrão:
  ```html
  <h2 data-translate-pt="Mural de Oportunidades" data-translate-en="Opportunity Wall">
      Mural de Oportunidades
  </h2>
  ```

### 2. Renderização Dinâmica em JavaScript (`app.js`)
- Qualquer string gerada dinamicamente via JS (cards, tabelas, notificações, badges de estado, botões de ação e mensagens de chat) deve consultar a variável de idioma ativo:
  ```javascript
  const lang = localStorage.getItem('gvcps_lang') || 'pt';
  ```
- Usar dicionários centralizados `UI_TRANSLATIONS` ou estruturas condicionais `lang === 'en' ? 'English' : 'Português'`.
- Status e estados do sistema devem utilizar a função unificada `formatStatus(status)`.

### 3. Sincronização do Navegador e Tradutores Externos
- A função `setLanguage(lang)` atualiza a tag `<html lang="...">` dinamicamente (`document.documentElement.lang = lang`) para permitir tradução automática em outros idiomas via Google Tradutor ou browser, sem quebrar o suporte nativo PT/EN.

### 4. Checklist Obrigatório de Validação de Página
Antes de dar uma nova página como concluída, execute o seguinte teste de paridade:
- [ ] Trocar idioma para **EN** na barra de acessibilidade: Verificar se 100% dos textos visíveis (títulos, botões, modais, placeholders e mensagens vazias) estão em Inglês.
- [ ] Trocar idioma para **PT** na barra de acessibilidade: Verificar se 100% dos textos retornam ao Português correto.
- [ ] Verificar se os formulários e avisos de segurança mantêm as mensagens no idioma selecionado.
