# i-dont-know-react18

* React is a library not a framework.
* React can be added in a project even if the project is using a different UI lib or framework.
* An UI in react is made of different components.
  * React components can be created using functions or classes.
  * We need to use capitalized component names like `FooBar`.
    * This is to make diff with the built-in components like `div`.
  * Some teams/projects uses `PascalCase` or `kebap-case` for file names. (I'll use `PascalCase`)
  * We can only use a function as a React component in (J|T)SX, if it is a function that returns something that can be rendered by React (react-dom).
  * `createRoot()` creates a new entry point to inject the generated UI into the actual HTML in the DOM element that is inside of the HTML and using specific `id` to serve as a pointer to make things happen (`<div id="root">`).
  * [`root.render`](https://github.com/martelinho-de-ouro/i-dont-know-react18/blob/main/learning/src/index.tsx#L17) interprets and executes (J|T)SX.
  * `<div>`, `<h1>`, and other tags like that, are not HTML they are built-in React components. They are provided by `react-dom`.
  * Custom components are stored in `/src/components` by convention.
  * This weird thing bellow:

```html
<> <--------------------------
  <h1>foo</h1>
  <h1>bar</h1>
</> <-------------------------
```

Is used to wrap (J|T)SX elements with an array behind the scenes. And this is a built-in component.

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
* `React Hooks` are related to react states -- `useState()` is a `Hook`.

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
