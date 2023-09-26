# Dự án mẫu Next JS 13+, Tailwind CSS 3.3 và TypeScript

### Features

- 🚀 [Next.js](https://nextjs.org) 13+ with [React 18](https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html) support
- 🎨 [Tailwind CSS](https://tailwindcss.com) 3.3 with [JIT mode](https://tailwindcss.com/docs/just-in-time-mode)
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- 🗺️ Sitemap.xml and robots.txt with next-sitemap
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Requirements

- Node.js 16+ and npm

### Getting started

Run the following command on your local environment used npm or yarn:

```shell
npm install
```

Then, you can run locally in development mode with live reload:

```shell
# npm
npm install # install dependencies
npm run dev # run project

# yarn
yarn # install dependencies
yarn dev # run project

# Then open http://localhost:3000 with your browser to see your project.
```

### Project structure

```shell
.
├── README.md                       # README file
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
|   └── components                  # Components (buttons, cards, ...)
|   └── assets                      # Assets (images, icons, ...)
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```