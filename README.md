# React Boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

We eject it and add some webpack configs with eslint rules.

This project has been writed with typescript.

## Packages

This project has `axios`, `classnames`, `redux`, `redux-saga`, `eslint`, `stylelint`, `jest`, `react-router`, `node-sass`(for scss), `standard-version`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eslint`

We use this script for linting the `ts` and `tsx` files. We use `airbnb` and `typescript/recommended` rules for linting.

### `yarn stylelint`

We use this script for linting the `scss` and `css` files. We use `stylelint-config-recommended` rules for style linting.

### `yarn lint`

This script will run `yarn eslint` and `yarn styleling` together.

### `yarn release`

This command will run `standard-version` for setting semantic versioning. We have to use `conventional commits` for commit messages to use on `standard-version` CHANGELOG.

## Comments

We have husky before our commits. We need to follow the `conventional commits` rules. husky will preserve that and it will run the linters just before our commits.

Check this link too. It's usefull for typescripts rules:

https://github.com/piotrwitek/react-redux-typescript-guide

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
