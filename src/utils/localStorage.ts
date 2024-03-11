export enum Key {
  authorization = '__authorization',
  lineLoginTempToken = '__line_login_temp_token'
}

export const getLocalStorageItem = <T>(key: Key): T | undefined => {
  if (typeof window !== 'undefined') {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : undefined;
  }
};

export const setLocalStorageItem = <T>(key: Key, value: T) => window.localStorage.setItem(key, JSON.stringify(value));

export const removeLocalStorageItem = (key: Key) => window.localStorage.removeItem(key);

export const clearLocalStorage = () => window.localStorage.clear();
