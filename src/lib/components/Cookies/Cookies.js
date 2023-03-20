import { useState } from "react";

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  const useCookie = (key, defaultValue, exp=365) => {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = getCookie(key);
        if (item !== "" && item !== null && item !== undefined) {
          return JSON.parse(item);
        } else {
          setCookie(key, JSON.stringify(defaultValue), exp);
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
        setCookie(key, JSON.stringify(valueToStore), exp);
      } catch (error) {
        console.error(error);
      }
    };
    return [storedValue, setValue];
  };
  
  export { 
    useCookie,
    setCookie,
    getCookie
   };