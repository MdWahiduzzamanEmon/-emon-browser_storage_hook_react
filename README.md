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
import { useLocalStorage, useSessionStorage, useCookie, setCookie, getCookie } from 'browser_storage_hook_react';

```

## How to use it

### Local Storage

```
const [value, setValue] = useLocalStorage('key', 'defaultValue');

```
### Session Storage

```
const [value, setValue] = useSessionStorage('key', 'defaultValue');

```

### Cookie

```
const [value, setValue] = useCookie('key', 'defaultValue', expiry);

```

### Manually set and get cookie

```
const value = getCookie('key');
setCookie('key', 'value', expiry);

```



```

## Local Storage and Session Storage

```
Here value is the value stored in the browser storage ,
and setValue is the function to set the value in the browser storage.

```

## Cookie

```
Here value is the value stored in the cookie ,
and setCookie is the function to set the value in the cookie.

```

| Name         | Type   | Description                       |
| ------------ | ------ | --------------------------------- |
| key          | string | The key of the value to be stored |
| value        | string | The value to be stored            |
| defaultValue | string | The default value to be stored    |
| expiry       | number | The expiry time of the cookie     |

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Author

- <img align="left" src="https://user-images.githubusercontent.com/83487057/224383152-3d83875a-6e49-46c2-be8f-5d0627e0a27e.png" alt="md-wahiduzzaman-emon" height="40" width="40" /> [Md Wahiduzzaman Emon]

## Contributing

- Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

* Please make sure to update tests as appropriate.
