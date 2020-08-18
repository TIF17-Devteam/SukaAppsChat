import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import GroupInfoScreen from '../screens/GroupInfoScreen';

const Stack = createStackNavigator();

const NavHome = () => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="GroupInfo" component={GroupInfoScreen} />
    </Stack.Navigator>
);

export default NavHome;