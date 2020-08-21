import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import GroupInfoScreen from '../screens/GroupInfoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NewGroupScreen from '../screens/NewGroupScreen';
import SubmitNewGroupScreen from '../screens/SubmitNewGroupScreen';
import NewPersonalScreen from '../screens/NewPersonalScreen';

const Stack = createStackNavigator();

const NavHome = () => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="GroupInfo" component={GroupInfoScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="NewGroup" component={NewGroupScreen} />
        <Stack.Screen name="SubmitNewGroup" component={SubmitNewGroupScreen} />
        <Stack.Screen name="NewPersonalChat" component={NewPersonalScreen} />

    </Stack.Navigator>
);

export default NavHome;