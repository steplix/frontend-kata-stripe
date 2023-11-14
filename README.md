# TypeScript Base

Node version: 16.15.1

Uncomment **.gitlab-ci.yml** file and modify depending of your needs.

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Dependencies:

- [`react`]
- [`react-dom`]
- [`next`]
- [`husky`]
- [`axios`]
- [`prop-types`]
- [`axios`]
- [`lodash`]
- [`bluebird`]
- [`tailwindcss`]
- [`postcss`]
- [`autoprefixer`]

Development dependencies:

- [`eslint`]
- [`eslint-config-next`]
- [`eslint-plugin-react`]
- [`eslint-plugin-react-hooks`]
- [`eslint-config-prettier`]
- [`eslint-config-standard`]
- [`eslint-plugin-import`]
- [`eslint-plugin-node`]
- [`eslint-plugin-prettier`]
- [`eslint-plugin-promise`]
- [`prettier`]

Run the development server:

```bash
npm run dev
```

Open [http://localhost:65098](http://localhost:65098) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Folder structure

This project uses a folder structure which was advocated by Vadorequest in the [dev.to](https://dev.to) forum. You can read more about the post [here](https://dev.to/vadorequest/a-2021-guide-about-structuring-your-next-js-project-in-a-flexible-and-efficient-way-472).

The current project folder structure can be summarized in the following terms:

- cloudformation: **Cloudformation** directory for Amazon Web Services related stuffs.

- docs: Directory for documents.

- public: Assets will be placed in the public directory.

- src/modules: Files that are related to the same feature and can be grouped together will be placed within the **modules** folder.

- src/common: The common directory should be used for everything that isn't a module. This is where you will find the **components**, **utils**, **hooks** directory.

- src/layouts: This is where the components that are used across the application such as **navbar**, **footer** will be placed.

- src/pages: **Next.js** directory to place the route files.
