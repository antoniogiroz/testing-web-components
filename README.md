# testing-web-components

This project demonstrates the problems encountered when testing web components with vue-test-utils and the testing library. And how it works with e2e tests with Playwright.

Only one unit test tests the BaseDropdown component, which is a wrapper for a web component of the Shoelace library.

It tries to access the menu items through their attribute role, but it is not found because the shadow DOM content is not rendered.

Unlike the unit tests, the e2e tests performed with Playwright work correctly, allowing access to the dropdown button and the menu through the `getByRole` function.


## Project Setup

```sh
pnpm install
```

## Run unit tests

```sh
pnpm test:unit
```

## Run e2e tests

> You need to install the Playwright browsers to run the e2e tests.

```sh
npx playwright install
```

```sh
pnpm test:e2e:ci
```
