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

## Setup

```console
npm install react react-dom
```

```console
npm install typescript @types/node @types/react @types/react-dom webpack webpack-cli webpack-dev-server ts-loader html-webpack-plugin @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-node eslint-plugin-prettier prettier ts-node -D
```

```console
touch .eslintignore
```

```txt
dist
```

```console
touch .eslintrc
```

This eslint configuration bellow is the same as [this](https://github.com/obs-nebula/check-traces/blob/main/.eslintrc), and which is based on [OTEL-JS](https://github.com/open-telemetry/opentelemetry-js/blob/main/eslint.base.js)

```js
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": [
    "@typescript-eslint",
    "node",
    "prettier"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "quotes": ["error", "single", { "avoidEscape": true }],
    "eqeqeq": [
      "error",
      "smart"
    ],
    "prefer-rest-params": "off",
    "no-console": "error",
    "no-shadow": "off",
    "node/no-deprecated-api": ["warn"]
  },
  "overrides": [
    {
      "files": ["*.ts"],
      "rules": {
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-this-alias": "off",
        "@typescript-eslint/naming-convention": [
          "error",
          {
            "selector": "memberLike",
            "modifiers": ["private", "protected"],
            "format": ["camelCase"],
            "leadingUnderscore": "require"
          }
        ],
        "@typescript-eslint/no-unused-vars": ["error", {"argsIgnorePattern": "^_", "args": "after-used"}],
        "@typescript-eslint/no-inferrable-types": ["error", { "ignoreProperties": true }],
        "@typescript-eslint/no-empty-function": ["off"],
        "@typescript-eslint/ban-types": ["warn", {
          "types": {
            "Function": null
          }
        }],
        "@typescript-eslint/no-shadow": ["warn"]
      }
    }
  ],
  "env": {
    "commonjs": true
  }
}
```

```console
touch .gitignore
```

```txt
node_modules
dist
```

```console
touch .prettierrc
```

This prettier configuration bellow is based on [OTEL-JS](https://github.com/open-telemetry/opentelemetry-js/blob/main/prettier.config.js)

```js
{
  "arrowParens": "avoid",
  "printWidth": 80,
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

```console
touch tsconfig.json
```

```json
{
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,  /* `allowSyntheticDefaultImports` and `esModuleInterop` to true allows React to be imported as a default import */
    "esModuleInterop": true,
    "jsx": "react",
    "forceConsistentCasingInFileNames": true,
    "strict": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

```console
touch webpack.config.ts
```

```ts
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration as WebpackConfig } from 'webpack';
import { Configuration as WebpackDevServerConfig } from 'webpack-dev-server';

type Configuration = WebpackConfig & { devServer?: WebpackDevServerConfig; }

const config: Configuration = {
  mode: 'development',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, 
  },
  entry: './src/index.tsx',
  module: {
    rules: [ 
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
  ],
  devtool: 'inline-source-map',
};

export default config;
```

## Build and Run

```console
npm run build
npm start
```
