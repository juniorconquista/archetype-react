# ⚛️ Archetype React ![archetype react badge](https://github.com/juniorconquista/archetype-react/actions/workflows/main.yml/badge.svg) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> This template aims to accelerate the start of a react project using Create React App, it already provides basic quality settings and project standardizations.

## 💻 Tech stack

- [React](https://reactjs.org/) declarative component-centric UI
- [React router dom](https://reacttraining.com/react-router/web/guides/quick-start) for manager routing
- [Testing library](https://testing-library.com/docs/) for testing web pages by querying and interacting with DOM nodes
- [Jest](https://jestjs.io/docs/getting-started) for matchers and mocks in unit tests

## 🚀 Start developing locally

- **Setting environment variables**

  Create `.env` file with all settings the application will need to run. <br/>There is a `.env.example` file in the root of project's directory which you can use as a model for that.
  <br/>

- **Install dependencies**

  Get all dependencies installed by running

  ```shell
  $ npm install
  # or
  $ yarn
  ```

- **Setting up the project**

  ```shell
  $ yarn prepare-husky
  ```

- **Start developing**

  ```shell
  $ yarn start
  ```

  Project should be running at http://localhost:3000
  <br/>

- **Start production mode**

  ```shell
  $ yarn build
  $ global add serve
  $ serve -s build
  ```

  Project should be running at http://localhost:3000
  <br/>

## 🐳 Start developing Docker

- **Setting environment variables**

  Create `.env` file with all settings the application will need to run. <br/>There is a `.env.example` file in the root of project's directory which you can use as a model for that.
  <br/>

- **Start developing and building**

  ```shell
  $ docker-compose -f docker-compose.dev.yml up -d --build
  ```

  Project should be running at http://localhost:3000
  <br/>

- **Start production mode (locally)**

  ```shell
  $ docker-compose up -d --build
  ```

  Project should be running at http://localhost:3001
  <br/>

## 📚 General informations

- This project was created using [Create React App](https://create-react-app.dev/).
- **Naming standards**

  ```shell
  # branch
  feat/description

  # commit
  feat: description
  ```

  To standardize our commits we use [Conventional Commits](https://www.conventionalcommits.org/) a specification for adding human and machine readable meaning to commit messages.

- **Linter**

  ```shell
  # find problems
  $ yarn lint

  # find and fix problems automatically
  $ yarn lint:fix

  ```

- **Unit tests**

  ```shell
   # run all unit tests
   $ yarn test

   # run all the tests and watch for changes in related files
   $ yarn test:watch

   # run tests only on changed files
   $ yarn test:staged

   # run all unit tests generates the coverage report in the coverage folder
   # in the project root
   $ yarn test:coverage

   # run all unit tests generates the coverage report in the coverage folder
   # in the project root and watch changes in related files
   $ yarn test:watch:coverage
  ```

- **Hooks**

  This project has these hooks:

  - `pre-commit`: perform static code analysis with eslint
  - `commit-msg`: validates the commit message according to the convention adopted by the project
  - `pre-push`: perform unit testing of project components and integration tests

## 📁 Folder and file structures

- For best practices to structure files please read this [document](https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-with-single-file-logic)

- To learn a little more about how we write the types of our entities, see the documentation for our [type package](https://github.com/TiendaNube/partners-portal/blob/stable/src/types/README.md)

- To create a component or utility, it must first be determined its type, in order to select a directory in which to create the corresponding files:

  - It would be created within the **app** in case they are app's own features
  - It would be created inside **commons** in case of multi-domain general-purpose utilities.
  - It would be created inside **components** in case the component is used in multiple domains.
  - It would be created within **domains** if it centralizes the logical and visual representation according to the domain
    - Each domain would have thair own route file that specifies the route where it belongs
    - In case of a necessity of creating a subdomain directory, a new directory would be created called **pages** and it would group all pages of a domain.
  - It would be created inside the subdirectories of **domains/components** in case the component will only be used in the views of a specific domain.
    - If a page needs to use a component, this component would be created inside **domains/MyDomain/components** as well.
    - If a page needs to be divided to decrease its complexity, this division would be created in **domains/MyDomain/pages/MyPage/widgets** directory.
  - It would be created within the **domains/hooks** subdirectories if the hook was only used within a specific domain
  - It would be created inside **hooks** in case the hook is used in multiple domains.

  ```
   ├─ 📁 app
   ├─ 📁 commons
   ├─ 📁 components
   └─ 📁 domains
      └─ 📁 Auth
         ├─ 📁 components
         ├─ 📁 pages
         |  └─ 📁 Login
         |     └─ 📁 widgets
         └─ 📁 hooks
  ```

- The directory should have the same name as the component. The component file should have the name of the component in Pascal Case format and the extension `.tsx`.

  ```
  ├─ 📁 Login
  │  └─ 📄 Login.tsx
  ```

- Every directory should contain a 📄 **index.ts** which serves as an entry point for the module, component, utils and/or hooks.

  ```
  ├─ 📁 Login
  │  ├─ 📄 index.ts
  │  └─ 📄 Login.tsx
  ```

- Every component, utils and/or hooks should come with a test. The test must have the same name as the file being tested and the extension must be `.spec.tsx`

  ```
  ├─ 📁 Login
  │  ├─ 📄 index.ts
  │  ├─ 📄 Login.tsx
  │  └─ 📄 login.spec.tsx
  ```

- The types for the component will be written in `.ts` file using the same component name in camel case format and the `types` prefix.

  ```
  ├─ 📁 Login
  │  ├─ 📄 index.ts
  │  ├─ 📄 Login.tsx
  │  ├─ 📄 login.spec.tsx
  │  ├─ 📄 login.styled.scss
  │  └─ 📄 login.types.ts
  ```

- The Definitions for the component as `constants` will be written to a `.ts` file using the same component name in camel case format and the prefix `definitions`.

  ```
  ├─ 📁 Login
  │  ├─ 📄 index.ts
  │  ├─ 📄 Login.tsx
  │  ├─ 📄 login.definitions.ts
  │  ├─ 📄 login.spec.tsx
  │  ├─ 📄 login.styled.scss
  │  └─ 📄 login.types.ts
  ```

- If a subcomponents contains subcomponents (widgets), they should have their own module subdirectory inside the same components directory.

  ```
  ├─ 📁 Login
  │  ├─ 📁 widgets
  │  │  ├─ 📁 Form
  │  │  │  ├─ 📄 index.ts
  │  │  │  ├─ 📄 form.styled.scss
  │  │  │  ├─ 📄 Form.tsx
  │  │  │  └─ 📄 form.spec.tsx
  |  |  |─ 📁 FormsSubcomponent
  │  │  │  ├─ 📄 index.ts
  │  │  │  ├─ 📄 FormsSubcomponent.styled.scss
  │  │  │  ├─ 📄 FormsSubcomponent.tsx
  │  │  │  └─ 📄 FormsSubcomponent.spec.tsx
  │  │  └─ 📄 index.ts
  │  ├─ 📄 index.ts
  │  ├─ 📄 login.styled.scss
  │  ├─ 📄 Login.tsx
  │  └─ 📄 login.spec.tsx
  ```

  - In the case of hooks, their names should start by the prefix **use** and use Camel Case format and have the extension `.ts` or `.tsx`. They should be contained in a directory with the same name, along with an index file and its corresponding test `.spec.ts` or `.spec.tx`.

  ```
  ├─ 📁 Login
  │  ├─ 📁 hooks
  │  │  ├─ 📁 useCount
  │  │  │  ├─ 📄 index.ts
  │  │  │  ├─ 📄 useCount.ts
  │  │  │  └─ 📄 useCount.spec.ts
  │  │  └─ 📄 index.ts
  │  ├─ 📄 index.ts
  │  ├─ 📄 login.styled.scss
  │  ├─ 📄 Login.tsx
  │  └─ 📄 login.spec.tsx
  ```

## 🤖 Component coding

- The component should have the same name as the file using Pascal Case format. It should be declared in a Arrow Function, always typying the expected answer and making the default export at the end of the file.

  ```jsx
  // Login.tsx
  import React from 'react';

  const Login: React.FC = () => <div>...</div>;

  export default Login;
  ```

- If the component has props, they will be imported from the corresponding `.definitions.ts` file adding initial prefix corresponding to their type. Example interface ` ILogin`, type `TLogin`, enum `ELogin`.

  ```jsx
  // Login.tsx
  import React from 'react';
  import { ILogin } from './login.types';

  const Login: React.FC<ILogin> = ({ title, description }: ILogin) => (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );

  export default Login;
  ```

- The index file will be responsible for exporting everything needed form the module. Especially, the component's default.

  ```jsx
  // index.ts
  export { default } from './Login';
  ```

## 🧪 Testing

- For testing best practices, please read this [document](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library).
- To create a test is necessary to import from the testing library both the render and the screen.

  ```jsx
  import { render, screen } from '@testing-library/react';
  ```

- The component to be tested should also be imported.

  ```jsx
  import { render, screen } from '@testing-library/react';
  import Login from './Login';
  ```

- The heading of the tests must be written following the order Given-When-Then [Documentation](https://cucumber.io/docs/gherkin/reference/)

  - **Given** represents a precondition
  - **When** an action
  - **Then** a result or consequence of the action (user acceptance criteria).
  - **And** a result or consequence of other consequence (user acceptance criteria).
  - **But** a result which should not be possibly observable

  ```jsx
    import { render, screen } from "@testing-library/react";
    import ComponentExample from "./ComponentExample";

    describe("GIVEN a ComponentExample", () => {
      describe("WHEN rendered", () => {
        it("THEN should display the correct text", () => {
          ...
        });
      });
    });
  ```

- In this first instance, we will verify the right rendering of the component by checking the text in each of the elements.

  ```jsx
  import { render, screen } from '@testing-library/react';
  import Login from './Login';

  describe('GIVEN a Login', () => {
    describe('WHEN rendered', () => {
      it('THEN should display the correct text', () => {
        render(<Login title="title" description="description" />);
        expect(screen.getByText(/title/i)).toBeInTheDocument();
        expect(screen.getByText(/description/i)).toBeInTheDocument();
      });
    });
  });
  ```
