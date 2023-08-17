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
