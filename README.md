# Portfolio - Desenvolvedor Python & Data Science

Um lindo website de portfólio moderno e responsivo para demonstrar projetos e habilidades de um desenvolvedor especializado em Python e Data Science.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com SSR
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **shadcn/ui** - Componentes reutilizáveis
- **Lucide React** - Ícones modernos

## 📋 Funcionalidades

- ✨ Design moderno com gradientes e efeitos visuais
- 📱 Totalmente responsivo (mobile, tablet, desktop)
- 🎨 Tema dark mode por padrão
- ⚡ Performance otimizada
- 🔗 Navegação suave entre páginas
- 📊 Seção de projetos com cards interativos
- 👤 Página sobre com experiência e educação
- 📧 Seção de contato

## 🏠 Páginas

### Home
- Hero section com apresentação
- Estatísticas principais
- Seção de tecnologias e skills com barras de progresso

### Projetos
- Grid de 6 projetos em destaque
- Cards com descrição, tags e links
- Botões para GitHub e Demo

### Sobre
- Biografia detalhada
- Experiência profissional
- Educação e certificações
- Links de contato (Email, LinkedIn, GitHub)

## 🛠️ Instalação

### Pré-requisitos
- Node.js 18+ 
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
- **Home**: Edite `app/page.tsx`
- **Projetos**: Edite `app/projects/page.tsx` (array `projects`)
- **Sobre**: Edite `app/about/page.tsx`
- **Navegação**: Edite `components/Navigation.tsx`

### Links
Atualize os links de contato em:
- `app/about/page.tsx` - Email, LinkedIn, GitHub
- `app/projects/page.tsx` - Links dos projetos

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

Desenvolvido com ❤️ para demonstrar habilidades em web development.
