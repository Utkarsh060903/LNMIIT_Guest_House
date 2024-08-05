// src/utils/tokenUtils.js

export const setTokenWithExpiry = (token, name, days) => {
    const now = new Date();
    const expiryDate = now.getTime() + days * 24 * 60 * 60 * 1000;
    const tokenObject = {
      value: token,
      name: name,
      expiry: expiryDate
    };
    localStorage.setItem('token', JSON.stringify(tokenObject));
  };
  
  export const getToken = () => {
    const tokenObject = JSON.parse(localStorage.getItem('token'));
    if (!tokenObject) return null;
  
    const now = new Date();
    if (now.getTime() > tokenObject.expiry) {
      localStorage.removeItem('token');
      return null;
    }
  
    return tokenObject;
  };
  