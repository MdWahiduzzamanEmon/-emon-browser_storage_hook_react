import { useState } from "react";

const useSessionStorage = (key, defaultValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.sessionStorage.getItem(key);
			if (item) {
				return JSON.parse(item);
			} else {
				sessionStorage.setItem(key, JSON.stringify(defaultValue));
				return defaultValue;
			}
		} catch (error) {
			// console.log(error);
			return defaultValue;
		}
	});

	const setValue = (value) => {
		try {
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			// console.log(error);
		}
	};
	return [storedValue, setValue];
};

export default useSessionStorage;
