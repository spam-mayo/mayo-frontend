import { StorageKeys } from '@/constants/storageKeys';

export const initAuthStorage = () => {
  localStorage.removeItem(StorageKeys.UserID);
  localStorage.removeItem(StorageKeys.AT);
  localStorage.removeItem(StorageKeys.RT);
  localStorage.removeItem(StorageKeys.OAuth);
};
