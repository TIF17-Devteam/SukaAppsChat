import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen';
import { View } from 'react-native';

const Stack = createStackNavigator();

const NavHome = () => (
    // <Stack.Navigator
    //     screenOptions={{
    //         headerStyle: {
    //             backgroundColor: '#363636'
    //         },
    //         headerTintColor: '#FFFFFF'
    //     }}>
    //     <Stack.Screen
    //         name="Home"
    //         component={HomeScreen}
    //         options={{
    //             title: 'Percakapan'
    //         }} />
    // </Stack.Navigator>
    <Stack.Navigator headerMode="none">
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                title: 'Percakapan'
            }} />
    </Stack.Navigator>
);

export default NavHome;