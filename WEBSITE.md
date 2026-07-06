
### 2. Páginas (5 páginas):
- **Home (Página Inicial)** - Hero section impactante, diferenciais, produtos em destaque e CTA
- **Sobre Nós** - História, missão, visão, valores e selos de qualidade
- **Produtos** - Catálogo completo com grid de cards, filtros (individuais/coletivas) e detalhes
- **Aplicações** - Para quais missões/operações cada produto é indicado (Forças Armadas, Emergências, Resgates, etc.)
- **Contactos** - Formulário de contato com validação, mapa embutido, telefones e email

### 3. Roteamento:
- Utilize **React Router DOM v6** para navegação entre páginas
- Menu de navegação com links ativos (NavLink)
- Rota 404 para páginas não encontradas

### 4. Design e Estilo:
- Paleta de cores: verde militar (#2d4a22 ou similar), preto (#1a1a1a), branco (#ffffff), cinza (#f5f5f5) e laranja (#e67e22) para CTAs
- Utilize **CSS Modules** ou **Styled Components** para estilização componentizada
- Design responsivo (mobile-first) com media queries
- Animações suaves com **Framer Motion** ou CSS transitions
- Ícones: **React Icons** (FontAwesome ou Material Icons)

### 5. Funcionalidades:
- Menu hambúrguer para dispositivos móveis
- Scroll suave entre seções (na home)
- Formulário de contato com validação em tempo real (useState para erros)
- Filtro de produtos por categoria (Individual / Coletiva)
- Modal ou página de detalhes do produto ao clicar em "Ver mais"
- Botões de CTA: "Solicitar Orçamento" (abre WhatsApp com número pré-definido) e "Ver Produtos"

### 6. Dados e Estado:
- Crie um arquivo `data/produtos.js` com array de objetos contendo: id, nome, categoria, descricao, especificacoes, imagem (placeholder), icone
- Utilize Context API ou estado local para gerenciar o filtro de produtos
- Informações de contato centralizadas em um arquivo de constantes

### 7. Performance e SEO:
- Lazy Loading das páginas com `React.lazy()` e `Suspense`
- Meta tags dinâmicas com **React Helmet** (título e descrição por página)
- Imagens com placeholder e atributo `loading="lazy"`

### 8. Conteúdo:
- Use os textos dos flyers fornecidos para compor o conteúdo institucional
- Tom de voz: confiável, robusto, patriótico, focado em segurança e performance
- Slogan no rodapé: "ERCA - Alimentando quem protege a nação"

### 9. Entregáveis (código completo):
- Forneça todos os arquivos do projeto com código limpo, comentado e organizado
- Inclua o `package.json` com todas as dependências necessárias
- Instruções claras de instalação e execução (npm install, npm start)

### 10. Dependências sugeridas:
- react-router-dom
- react-icons
- framer-motion (ou react-spring)
- react-helmet
- tailwindcss v4

### 11. Extras (opcionais, mas bem-vindos):
- Modo escuro/claro (toggle)
- Botão flutuante do WhatsApp
- Animações de entrada dos componentes ao scroll (Intersection Observer)

---

Por favor, inicie fornecendo a estrutura completa do projeto, o package.json, e em seguida desenvolva todos os componentes e páginas, começando pela página Home. Entregue o código completo e funcional.