import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import { storeToken, getToken, destroyToken } from "../data/local/auth";

import SplashScreen from '../screens/SplashScreen';
import NavAuth from './NavAuth';
import NavHome from './NavHome';

import { AuthContext } from "../config/context";

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
            }
        },
        {
            isLoading: true,
            isSignedIn: false,
            token: null
        });

    React.useEffect(() => {
        const bootstrapAsync = async () => {
            const token = await getToken();
            dispatch({ type: 'RESTORE_TOKEN', token: token });
        };

        bootstrapAsync();
    }, []);

    const authContext = React.useMemo(
        () => ({
            signIn: async token => {
                await storeToken(token);
                dispatch({ type: 'SIGN_IN', token: token });
            },
            signOut: async () => {
                await destroyToken();
                dispatch({ type: 'SIGN_OUT' })
            }
        }),
        []
    );

    if (state.isLoading) {
        return <SplashScreen />;
    }

    return (
        <PaperProvider>
            <AuthContext.Provider value={authContext}>
                <NavigationContainer>
                    {state.token ?
                        <NavHome /> :
                        <NavAuth />
                    }
                </NavigationContainer>
            </AuthContext.Provider>
        </PaperProvider>
    );
}

export default Navigator;
