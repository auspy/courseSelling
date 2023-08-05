import { useLocalStorage } from "./constants.data";

export function storeInBrowser(
  key: string,
  value: any,
  expiryInSecs?: number,
  local: boolean = useLocalStorage
) {
  const data: Record<string, any> = {
    value,
  };
  if (expiryInSecs) {
    data["ttl"] = new Date().getTime() + expiryInSecs * 1000;
  }
  if (local) {
    window.localStorage.setItem(key, JSON.stringify(data));
  } else {
    window.sessionStorage.setItem(key, JSON.stringify(data));
  }
}
export function removeFromBrowser(
  key: string,
  local: boolean = useLocalStorage
) {
  return local
    ? window.localStorage.removeItem(key)
    : window.sessionStorage.removeItem(key);
}

export function getFromBrowser(key: string, local: boolean = useLocalStorage) {
  const data = local
    ? window.localStorage.getItem(key)
    : window.sessionStorage.getItem(key);
  if (!data) return null;
  const parsedData = JSON.parse(data);
  if (parsedData.ttl && new Date().getTime() > parsedData.ttl) {
    local
      ? window.localStorage.removeItem(key)
      : window.sessionStorage.removeItem(key);
    return null;
  }
  return parsedData.value;
}
