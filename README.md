# testing-web-components

This project showcases the issues faced while testing web components using `vue-test-utils` and the `vue-testing-library`, and how it works by using e2e tests with Playwright.

The `BaseDropdown` component, which acts as a wrapper for a web component from the Shoelace library, is only tested by one unit test. The test tries to access the menu items through their attribute role, but it fails as the shadow DOM content is not rendered.

However, the e2e tests conducted with Playwright work efficiently, enabling easy access to the dropdown button and the menu through the `getByRole` function.


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
