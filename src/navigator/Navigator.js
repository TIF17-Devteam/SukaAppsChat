import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

import { storeToken, getToken, destroyToken } from "../data/local/auth";
import { AppContext } from "../config/context";
import { DefaultTheme, DarkTheme } from "../config/theme";

import SplashScreen from '../screens/SplashScreen';
import NavAuth from './NavAuth';
import NavHome from './NavHome';

const Navigator = () => {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        isLoading: false,
                        token: action.token
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignedIn: true,
                        token: action.token
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignedIn: false,
                        token: null
                    };
                case 'CHANGE_THEME':
                    return {
                        ...prevState,
                        theme: action.theme
                    }
            }
        },
        {
            isLoading: true,
            isSignedIn: false,
            token: null,
            theme: 'default'
        });

    React.useEffect(() => {
        const bootstrapAsync = async () => {
            const token = await getToken();
            dispatch({ type: 'RESTORE_TOKEN', token: token });

            // TODO("Load app config")
        };

        bootstrapAsync();
    }, []);

    const appContext = React.useMemo(
        () => ({
            signIn: async token => {
                await storeToken(token);
                dispatch({ type: 'SIGN_IN', token: token });
            },
            signOut: async () => {
                await destroyToken();
                dispatch({ type: 'SIGN_OUT' })
            },
            changeTheme: async theme => {
                dispatch({ type: 'CHANGE_THEME', theme: theme })
            }
        }),
        []
    );

    if (state.isLoading) {
        return <SplashScreen />;
    }

    const theme = state.theme == 'default' ? DefaultTheme : DarkTheme

    return (
        <PaperProvider theme={theme}>
            <AppContext.Provider value={appContext}>
                <NavigationContainer>
                    {state.token ?
                        <NavHome /> :
                        <NavAuth />
                    }
                </NavigationContainer>
            </AppContext.Provider>
        </PaperProvider>
    );
}

export default Navigator;
