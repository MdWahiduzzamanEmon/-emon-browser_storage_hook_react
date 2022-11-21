# Browser Storage Hook React

This is a React hook that allows you to use the browser storage API in a simple way.

## Installation

Use the package manager [npm/yarn](https://www.npmjs.com/) to install the package.((please read the documentation first))

```bash
npm i browser_storage_hook_react
```
```bash
yarn add browser_storage_hook_react
```

https://user-images.githubusercontent.com/83487057/203020447-75919272-9e3d-4abd-afc9-cd3908d39a50.mov


## Importing

```
import { useLocalStorage,useSessionStorage } from 'browser_storage_hook_react';

```
## How to use it

```
const [value, setValue] = useLocalStorage('key', 'defaultValue');
const [value, setValue] = useSessionStorage('key', 'defaultValue');

```

```
Here value is the value stored in the browser storage ,
and setValue is the function to set the value in the browser storage.

```
