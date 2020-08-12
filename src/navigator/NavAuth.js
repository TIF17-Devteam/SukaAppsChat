import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const NavAuth = () => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
);

export default NavAuth;