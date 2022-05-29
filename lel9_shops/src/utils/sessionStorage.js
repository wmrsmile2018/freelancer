// кладет занчение по ключу в localStorage
export const setItem = (key, value) => {
  sessionStorage.setItem(key, value);
};

// достает всю инфу из localStorage
export const getStorage = () => {
  return sessionStorage;
};

// очищает все что есть в localStorage
export const clearStorage = () => {
  sessionStorage.clear();
};

// очищает по ключу в localStorage
export const removeItem = (key) => {
  sessionStorage.removeItem(key);
};

// достает по ключу из localStorage
export const getItem = (key) => {
  return sessionStorage.getItem(key);
};
