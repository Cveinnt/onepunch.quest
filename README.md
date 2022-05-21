# One Punch Quest - [_**onepunch.quest**_](https://onepunch.quest)

**I am become One Punch Man, 趣味でヒーローにやってものだ!**

## Features

- _Hyperminimalist_ design optimized for efficiency, functionality, and ease of use
- Available on **any OS**: PC, macOS, Linux, and installable as a PWA on mobile devices.
- Adjustable level of diffuculty
- Chinese & English localization

## Tech stack

- [Svelte](https://svelte.dev): front-end compiler
- [Rollup.js](https://rollupjs.org): javascript module bundler
- [Cypress](https://cypress.io): e2e testing
- [Vercel](https://vercel.com): PaaS
- [GitHub Actions](https://github.com/features/actions): CI/CD
- [Figma](https://figma.com): prototyping, UI & logo design

# Development

To start developing the app you would need `Node.js`, `npm` and `git`. Then, clone the repository:

```
git clone https://github.com/Cveinnt/onepunch.quest.git
```

Next, move into the directory and install all dependencies:

```
cd onepunch.quest && npm install
```

To run the development server you just need to use

```
npm run dev
```

This should start the server at http://localhost:8080.

## Testing

[Cypress](https://cypress.io) is used for end to end testing. The test scripts are located in `cypress/integration/test.js`. To run the tests you just need to 1. start dev environment:

```
npm run dev
```

Then, in a seperate terminal, use:

```
npm run test
```

Cypress client will open and let you play with the tests. Note that the `test.js` file is written to **test the developement version of the app**. `prod.js` only tests the data pipeline utility of the production version.

## Credit

Based on [pushu.ps](https://github.com/z-x/pushu.ps).
