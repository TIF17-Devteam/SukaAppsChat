import * as React from 'react';
import { AuthContext } from "../config/context";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Menu, Appbar, List, Avatar, Badge, Divider, FAB, Portal } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components';

const chatMocks = [
    {
        name: 'Alfa',
        url: 'https://avatars2.githubusercontent.com/u/33979532?s=460&u=3738fbaa6b172215a466a64d17292366b0a7d2b7&v=4',
        unread: 2,
        lastMessage: 'Hey, developer burnout is real!'
    },
]

const HomeScreen = ({ navigation }) => {
    const { signOut } = React.useContext(AuthContext);
    const [isMenuVisible, setMenuVisible] = React.useState(false);
    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    const [isFabOpen, setFabOpen] = React.useState(false);

    const renderChatList = ({ item, index }) => (
        <List.Item
            title={item.name}
            description={item.lastMessage}
            left={props => <Avatar.Image {...props} size={40} style={styles.avatar} source={{ uri: item.url }} />}
            right={props => <View style={styles.badgeContainer}><Badge size={24} style={styles.badge}>{item.unread}</Badge></View>}
            onPress={() => alert('Detail')} />
    )

    return (
        <View style={styles.container}>
            <Appbar.Header style={{ backgroundColor: '#363636' }}>
                <Appbar.Content title="Percakapan" />
                <Menu
                    visible={isMenuVisible}
                    onDismiss={closeMenu}
                    anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} color="#ffffff" />} >
                    <Menu.Item onPress={() => alert('Pengaturan')} title="Pengaturan" />
                    <Menu.Item onPress={signOut} title="Logout" />
                </Menu>
            </Appbar.Header>
            <FlatList
                data={chatMocks}
                renderItem={(props) => renderChatList(props)}
                style={{ flex: 1 }}
                ItemSeparatorComponent={() => <Divider />} />
            <Portal>
                <FAB.Group
                    fabStyle={styles.fab}
                    color="#363636"
                    open={isFabOpen}
                    icon={isFabOpen ? 'close' : 'plus'}
                    onStateChange={({ open }) => setFabOpen(open)}
                    actions={[
                        {
                            icon: 'account-group',
                            label: 'Group baru',
                            onPress: () => alert('Group baru')
                        },
                        {
                            icon: 'message-draw',
                            label: 'Pesan baru',
                            onPress: () => alert('Pesan baru')
                        }
                    ]} />
            </Portal>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    avatar: {
        margin: 8,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    badgeContainer: {
        margin: 8,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    badge: {
        backgroundColor: '#ffba7a',
        color: '#363636',
    },
    fab: {
        backgroundColor: '#ffba7a'
    }
})