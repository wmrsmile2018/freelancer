export const setItem = (key, value) => {
  sessionStorage.setItem(key, value);
};

export const getStorage = () => {
  return sessionStorage;
};

export const clearStorage = () => {
  sessionStorage.clear();
};

export const removeItem = (key) => {
  sessionStorage.removeItem(key);
};

export const getItem = (key) => {
  return sessionStorage.getItem(key);
};
