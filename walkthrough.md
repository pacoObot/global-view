# Walkthrough: Polimento das Roles, Rotas e Cores por Categoria

Apresentamos as melhorias e correções efetuadas no protótipo da plataforma GV-CPS para a apresentação ao proprietário.

## Principais Atualizações Concluídas

1. **Cores Dinâmicas por Categoria**:
   * Implementámos um sistema de variáveis CSS (`--cat-color` e `--cat-bg`) para mapear as cores de cada setor:
     * *Commodities/Agro*: Verde Floresta (`#006d3d`)
     * *Logística*: Âmbar/Laranja Quente (`#d97706`)
     * *Tecnologia*: Azul-Teal Digital (`#0d9488`)
     * *Energia (Petróleo e Gás)*: Bronze/Ouro Escuro (`#b45309`)
     * *Consultoria*: Azul Petróleo Principal (`#00374a`)
   * Estas cores aplicam-se automaticamente a bordas de cards, etiquetas, ícones de volume/origem e botões de chamada à ação ("Tenho Interesse"), quer na homepage, quer nos murais público e privado.

2. **Polimento de Acesso e Redirecionamento de Rotas**:
   * Ao tentar aceder a um portal restrito (ex: `#buyer-portal`) sem estar autenticado, o utilizador é redirecionado instantaneamente para a homepage, o **Modal de Login é aberto de forma automática** e as **credenciais de teste correspondentes são auto-preenchidas** no formulário. Isto facilita imenso a demonstração rápida de cada papel.

3. **Exibição Clara de Intermediação Segura**:
   * Nos chats de negociação dos portais privados de Compradores e Fornecedores, adicionámos cabeçalhos que realçam que toda a comunicação é mediada, exibindo o nome do Consultor responsável.
   * Adicionámos uma faixa destacada de segurança: *"Negociação Segura: O contacto direto entre comprador e fornecedor é protegido sob sigilo comercial."* Isso sublinha a proposta de valor de que a Global View é o único canal.

4. **Refinamento do Hero Slider e Contraste**:
   * Implementámos transições suaves Ken Burns de 7.5s (zoom lento de background) com sobreposição de gradiente escuro translúcido para manter as fotos bem nítidas no lado direito e legibilidade total dos textos à esquerda.

---

## Como Demonstrar as Funcionalidades ao Proprietário:
1. Abra o site no Vercel.
2. Aceda ao menu **Mural** e veja os cards decorados com as cores dinâmicas da sua respetiva categoria (verde para Agro, laranja para Logística, etc.).
3. Tente clicar diretamente em um link restrito ou simplesmente clique em **Entrar** no cabeçalho.
4. Escolha um perfil rápido para demonstração (ex: Comprador ou Fornecedor). O formulário preenche-se sozinho! Clique em **Aceder com Segurança**.
5. No portal, aceda ao painel da sua proposta e veja o chat de intermediação com o aviso de conformidade jurídica da Global View.
