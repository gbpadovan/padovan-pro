# PADOVAN.PRO - Portfolio Profissional

Um website de portfólio moderno, responsivo e interativo para Gustavo Padovan, desenvolvedor especializado em Python, Data Science e desenvolvimento full-stack.

## 🚀 Tecnologias Utilizadas

- **Next.js 16.2.3** - Framework React com SSR e Turbopack
- **React 19.2.0** - Biblioteca de UI
- **TypeScript 6.0.0** - Tipagem estática
- **Tailwind CSS 3.4.0** - Estilização utilitária
- **shadcn/ui** - Componentes reutilizáveis
- **Lucide React 0.408.0** - Ícones modernos
- **Class Variance Authority** - Gerenciamento de variantes CSS
- **Tailwind Merge** - Merge inteligente de classes Tailwind

## 📋 Funcionalidades

- ✨ Design moderno com gradientes e efeitos visuais
- 📱 Totalmente responsivo (mobile, tablet, desktop)
- 🎨 Tema dark mode por padrão
- ⚡ Performance otimizada com Turbopack
- 🔗 Navegação suave entre páginas
- 📊 Seção de projetos com 13+ projetos reais
- 🔍 Sistema de filtros (Projetos Python / Outros Projetos)
- 👤 Página sobre com experiência, educação e credenciais
- � Integração LinkedIn para contato direto

## 🏠 Páginas

### Home
- Hero section com apresentação profissional
- Estatísticas: 10+ Projetos, FEA-USP, Ironhack
- Seção de tecnologias e skills (Python, Django, PostgreSQL, Docker, AWS, Git)
- Call-to-action para explorar projetos

### Projetos
- 13+ projetos reais organizados por ano (2019-2026)
- Sistema de filtros interativos (Todos, Projetos Python, Outros Projetos)
- Cards com descrição, tags de tecnologia e links
- Projetos incluem: Data Science, Web Scraping, Smart Contracts, MatchGenius e mais
- Botões para GitHub (quando público) e Demo

### Sobre
- Apresentação: Gustavo Padovan
- Formação: Administração (FEA-USP, 2010) e Data Analytics (Ironhack, 2019)
- Experiência: Projetos pessoais como demonstração de habilidades
- Busca por posição Junior em Python e Data Science
- Links diretos para LinkedIn e GitHub

## 🛠️ Instalação

### Pré-requisitos
- Node.js 18+ (recomendado 20+)
- npm ou yarn

### Passos

1. **Instale as dependências:**
```bash
npm install
```

2. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

3. **Abra no navegador:**
```
http://localhost:3000
```

## 📦 Build para Produção

```bash
npm run build
npm start
```

## 🎨 Personalização

### Cores e Tema
Edite as variáveis CSS em `app/globals.css`:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.6% 11.2%;
  /* ... mais variáveis */
}
```

### Conteúdo
- **Home**: Edite `app/page.tsx` para alterar apresentação e estatísticas
- **Projetos**: Edite `app/projects/page.tsx` para adicionar/remover projetos
  - Adicione projetos ao objeto `projectsByYear`
  - Defina `category: 'python'` ou `category: 'outros'` para filtros
- **Sobre**: Edite `app/about/page.tsx` para atualizar biografia e experiência
- **Navegação**: Edite `components/Navigation.tsx` para alterar branding

### Links e Contato
Atualize em `app/about/page.tsx`:
- LinkedIn: `https://www.linkedin.com/in/gbpadovan`
- GitHub: `https://github.com/gbpadovan`

Atualize em `app/projects/page.tsx`:
- Links dos repositórios dos projetos
- Links de demo/website dos projetos

## 📁 Estrutura do Projeto

```
padovan-pro/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Home
│   ├── globals.css         # Estilos globais
│   ├── projects/
│   │   └── page.tsx        # Página de projetos
│   └── about/
│       └── page.tsx        # Página sobre
├── components/
│   ├── Navigation.tsx      # Barra de navegação
│   └── ui/
│       └── button.tsx      # Componente Button
├── lib/
│   └── utils.ts           # Funções utilitárias
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Conecte seu repositório Git
2. Configure build: `npm run build`
3. Diretório de saída: `.next`

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 Licença

MIT

## 👨‍💻 Autor

**Gustavo Padovan**
- 📧 LinkedIn: [gbpadovan](https://www.linkedin.com/in/gbpadovan)
- 🐙 GitHub: [@gbpadovan](https://github.com/gbpadovan)
- 🎓 Formação: Administração (FEA-USP) + Data Analytics (Ironhack)
- 💼 Buscando: Posição Junior em Python & Data Science

Desenvolvido com ❤️ para demonstrar habilidades em web development, Python e Data Science.
