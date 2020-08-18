import React, { useState } from 'react';
import { useTheme, Appbar, Menu } from 'react-native-paper';

const Topbar = (props) => {
    const { navigation, chatData } = props
    const { colors } = useTheme();
    const [isMenuVisible, setMenuVisible] = useState(false);
    const dismissMenu = () => setMenuVisible(false);

    const navigateToDetail = () => {
        dismissMenu();
        navigation.navigate('Profile')
    }

    return (
        <Appbar.Header style={{ backgroundColor: colors.primary }}>
            <Appbar.BackAction onPress={() => navigation.goBack()} />
            <Appbar.Content title="Azki" />
            <Menu
                visible={isMenuVisible}
                onDismiss={dismissMenu}
                anchor={<Appbar.Action icon="dots-vertical" onPress={() => setMenuVisible(true)} color="#ffffff" />} >
                <Menu.Item onPress={navigateToDetail} title="Info grup" />
                <Menu.Item onPress={() => alert('Keluar grup')} title="Keluar grup" />
            </Menu>
        </Appbar.Header>
    )
}

export default Topbar