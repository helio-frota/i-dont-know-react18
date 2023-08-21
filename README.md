# i-dont-know-react18

* React is a library not a framework.
* React can be added in a project even if the project is using a different UI lib or framework.
* An UI in react is made of different components.
* React uses a virtual DOM to solve performance issues related to make changes on DOM directly. Instead, it uses an in-memory representation of DOM, then, before react make the real changes on DOM it produces a new virtual DOM and compares with old virtual DOM, and then apply the diff only to the real DOM.
  * `current-vdom diff new-vdom ---> real-dom`
  * I found this related to [virtualDOM](https://indepth.dev/posts/1501/exploring-how-virtual-dom-is-implemented-in-react)
* JSX is a thing that mix JS with tags and it will be transpiled to JS ([source](https://facebook.github.io/jsx/))
  * JSX needs to be transpiled into JavaScript using a tool such as babel.
  * Since I'll keep the focus on TS/TSX and [Webpack](https://github.com/martelinho-de-ouro/i-dont-know-webpack5),then [ts-loader](https://github.com/TypeStrong/ts-loader) will transpile that instead of babel, as I don't care about any specifics polyfills or performance or custom stuff.
* `state` contains information about current component's situation.
  * When a change happen in the component it causes a refresh also know as re-rendering.
  * This is defined with the function `useState` from `React`.
  * `useState` returns a tuple with the current value and a function to update the state.


## Setup

```console
npm install react react-dom
```

```console
npm install typescript @types/node @types/react @types/react-dom webpack webpack-cli webpack-dev-server ts-loader html-webpack-plugin @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-node eslint-plugin-prettier prettier ts-node -D
```

Copy the lint, tsconfig, webpack and others configuration files from [learning](./learning) directory.

## Build and Run

```console
npm run build
npm start
```
