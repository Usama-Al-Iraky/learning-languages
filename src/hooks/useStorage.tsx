import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

type StorageType = "async" | "secure";

const useStorage = () => {
  const setItem = async (
    key: string,
    value: any,
    storageType: StorageType = "async",
  ): Promise<void> => {
    const data = JSON.stringify(value);

    if (storageType === "secure") {
      await SecureStore.setItemAsync(key, data);
      return;
    }

    await AsyncStorage.setItem(key, data);
  };

  const getItem = async (
    key: string,
    storageType: StorageType = "async",
  ): Promise<any> => {
    const item =
      storageType === "secure"
        ? await SecureStore.getItemAsync(key)
        : await AsyncStorage.getItem(key);

    if (item === null) {
      return undefined;
    }

    return JSON.parse(item);
  };

  const removeItem = async (
    key: string,
    storageType: StorageType = "async",
  ): Promise<void> => {
    if (storageType === "secure") {
      await SecureStore.deleteItemAsync(key);
      return;
    }

    await AsyncStorage.removeItem(key);
  };

  return { setItem, getItem, removeItem };
};

export default useStorage;
