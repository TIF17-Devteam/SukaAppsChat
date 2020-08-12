import * as React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const SplashScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color="#363636" size="large"/>
        </View>
    )
}

export default SplashScreen