import {MMKV} from 'react-native-mmkv';

const mmkvStorage = new MMKV({
  id: 'app-storage',
  encryptionKey: 'encryption-key',
});

export const zustandMMKVStorage = {
  getItem: (name: string) => {
    const value = mmkvStorage.getString(name);
    return value ? JSON.parse(value) : null;
  },
  setItem: (name: string, value: any) => {
    mmkvStorage.set(name, JSON.stringify(value));
  },
  removeItem: (name: string) => {
    mmkvStorage.delete(name);
  },
  clearAll: () => {
    mmkvStorage.clearAll();
  },
};
