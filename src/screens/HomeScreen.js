import * as React from 'react';
import { StyleSheet, View } from "react-native";
import { Menu, Appbar, List, Avatar, Badge, Divider, FAB, useTheme } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
import { AppContext } from "../config/context";
import mockChats from "../data/mock/chats";

const HomeScreen = ({ navigation }) => {
    const { signOut } = React.useContext(AppContext);
    const { colors } = useTheme();
    const [isMenuVisible, setMenuVisible] = React.useState(false);
    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    const [isFabOpen, setFabOpen] = React.useState(false);

    const renderChatList = ({ item, index }) => (
        <List.Item
            title={item.name}
            description={item.lastMessage}
            left={props => <Avatar.Image {...props} size={40} style={styles.avatar} source={{ uri: item.url }} />}
            right={props => <View style={styles.badgeContainer}><Badge size={24} style={{ backgroundColor: colors.accent }}>{item.unread}</Badge></View>}
            onPress={() => navigation.navigate('Chat')} />
    )

    const openSettings = () => {
        closeMenu();
        navigation.navigate('Settings');
    }

    return (
        <View style={{ backgroundColor: colors.background, ...styles.container }}>
            <Appbar.Header style={{ backgroundColor: colors.primary }}>
                <Appbar.Content title="Percakapan" />
                <Menu
                    visible={isMenuVisible}
                    onDismiss={closeMenu}
                    anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} color={colors.background} />} >
                    <Menu.Item onPress={openSettings} title="Pengaturan" />
                    <Menu.Item onPress={signOut} title="Logout" />
                </Menu>
            </Appbar.Header>
            <FlatList
                data={mockChats}
                renderItem={(props) => renderChatList(props)}
                style={{ flex: 1 }}
                ItemSeparatorComponent={() => <Divider />} />
            <FAB.Group
                open={isFabOpen}
                icon={isFabOpen ? 'close' : 'plus'}
                onStateChange={({ open }) => setFabOpen(open)}
                actions={[
                    {
                        icon: 'account-group',
                        label: 'Group baru',
                        onPress: () => navigation.navigate('NewGroup')
                    },
                    {
                        icon: 'message-text',
                        label: 'Pesan baru',
                        onPress: () => navigation.navigate('NewPersonalChat')
                    }
                ]} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    avatar: {
        margin: 8,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    badgeContainer: {
        margin: 8,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
})