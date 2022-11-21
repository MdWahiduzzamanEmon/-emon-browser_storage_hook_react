# Browser Storage Hook React

This is a React hook that allows you to use the browser storage API in a simple way.

## Installation

Use the package manager [npm/yarn](https://www.npmjs.com/) to install the package.((please read the documentation first))

```bash
```
```bash
npm i browser_storage_hook_react
```
```bash
yarn add browser_storage_hook_react
```

https://user-images.githubusercontent.com/83487057/201487770-3e2cdb5d-5d3a-4288-89a4-3c39d0f1724d.mov

<img width="1385" alt="Screenshot 2022-11-12 at 11 36 13 PM" src="https://user-images.githubusercontent.com/83487057/201488206-8c79113e-248e-4f37-949e-b47b3cbc838d.png">

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
