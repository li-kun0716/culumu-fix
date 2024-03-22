export enum Key {
  lineLoginTempToken = '__line_login_temp_token'
}

export const getSessionStorageItem = <T>(key: Key): T | undefined => {
  if (typeof window !== 'undefined') {
    const item = window.sessionStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : undefined;
  }
};

export const setSessionStorageItem = <T>(key: Key, value: T) =>
  window.sessionStorage.setItem(key, JSON.stringify(value));

export const removeSessionStorageItem = (key: Key) => window.sessionStorage.removeItem(key);

export const clearSessionStorage = () => window.sessionStorage.clear();
