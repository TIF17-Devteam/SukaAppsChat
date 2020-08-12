import AsyncStorage from '@react-native-community/async-storage';

const TOKEN_KEY = "token_key";

export const storeToken = async (token) => {
    try {
        await AsyncStorage.setItem(TOKEN_KEY, token);
        return true;
    } catch (error) {
        return false;
    }
}

export const getToken = async () => await AsyncStorage.getItem(TOKEN_KEY);

export const destroyToken = async () => {
    try {
        await AsyncStorage.removeItem(TOKEN_KEY);
        return true;
    } catch (error) {
        return false;
    }
}