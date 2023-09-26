# Starter for Next JS 13+, Tailwind CSS 3.3 and TypeScript

### Features

- ⚡ [Next.js](https://nextjs.org) with App Router and Page Router support
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 18
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- 🗺️ Sitemap.xml and robots.txt with next-sitemap
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🌈 Include a FREE minimalist theme
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Requirements

- Node.js 16+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/ixartz/Next-js-Boilerplate.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

### Project structure

```shell
.
├── README.md                       # README file
├── __mocks__                       # Mocks for testing
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── layouts                     # Layouts components
│   ├── app                         # Next JS Pages (app router)
│   ├── pages                       # Next JS Pages (page router)
│   ├── styles                      # Styles folder
│   ├── templates                   # Default template
│   └── utils                       # Utility functions
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate by making a search in the whole project with `FIXME:` for making quick customization. Here is some of the most important files to customize:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/global.css`: your CSS file using Tailwind CSS
- `src/utils/AppConfig.ts`: configuration file
- `src/templates/Main.tsx`: default theme
- `next-sitemap.config.js`: sitemap configuration

You have access to the whole code source if you need further customization. The provided code is only example for you to start your project. The sky is the limit 🚀.