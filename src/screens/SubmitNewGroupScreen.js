import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Appbar, useTheme, FAB, Avatar, TouchableRipple, TextInput, List } from "react-native-paper";
import ImagePicker from 'react-native-image-crop-picker';

/*
TODO: 
- Compress photo before upload
- Use better approach to validate input
- Get user from global state, and append on chat members
- Store data to API
*/

const SubmitNewGroupScreen = (props) => {
    const { colors } = useTheme();
    const { route, navigation } = props;
    const { selectedList } = route.params;
    const [photoUri, setPhotoUri] = useState(null);
    const [groupName, setGroupName] = useState('');
    const user = {
        id: '3',
        name: 'Hidayat',
        avatar: 'https://avatars2.githubusercontent.com/u/33979532?s=460&u=3738fbaa6b172215a466a64d17292366b0a7d2b7&v=4',
        username: '17106050045'
    };

    const openImagePicker = async () => {
        try {
            const image = await ImagePicker.openPicker({ cropping: true });
            setPhotoUri(image.path);
        } catch (err) {
            console.log(err)
        }
    }

    const submitNewGroup = () => {
        if (groupName != '') {
            // 
            const chatMembers = selectedList.map(member => member.id);
            chatMembers.push(user.id);

            const payload = {
                chat_type: 'group',
                chat_members: chatMembers,
                name: groupName,
                id_creator: user.id
            };
            console.log(payload);
            // navigation.navigate('Home');
        } else {
            alert('Nama grup tidak boleh kosong');
        }
    }

    const CustomAvatar = ({ avatarUri, style }) => {
        return (
            <TouchableRipple onPress={openImagePicker} borderless={true} style={style}>
                {avatarUri ?
                    <Avatar.Image size={64} source={{ uri: avatarUri }} /> :
                    <Avatar.Icon size={64} icon="image-plus" style={{ backgroundColor: colors.accent }} />
                }
            </TouchableRipple>
        );
    }

    const renderList = ({ item }) => {
        const renderAvatar = () => (
            <View style={{ justifyContent: 'center', marginRight: 8 }}>
                <Avatar.Image source={{ uri: item.avatar }} size={45} />
            </View>
        );

        return (
            <List.Item
                title={item.name}
                description={item.username}
                left={renderAvatar}
                style={{ paddingHorizontal: 16 }} />
        );
    }

    return (
        <View style={{ ...styles.container, backgroundColor: colors.background }}>
            <Appbar.Header style={{ backgroundColor: colors.primary }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Grup baru" />
            </Appbar.Header>

            <View style={styles.subjectContainer}>
                <CustomAvatar
                    style={{ marginRight: 16 }}
                    avatarUri={photoUri} />
                <TextInput
                    mode="outlined"
                    label="Nama grup"
                    placeholder="Masukkan nama grup"
                    style={{ flex: 1 }}
                    onChangeText={(text) => setGroupName(text)}
                    value={groupName} />
            </View>
            <View style={{ ...styles.divider, backgroundColor: colors.backgroundSecondary }} />

            <View style={styles.memberContainer}>
                <Text style={{ color: colors.primary, marginHorizontal: 16, marginTop: 16, marginBottom: 8 }}>{selectedList.length} anggota</Text>
                <FlatList
                    data={selectedList}
                    renderItem={renderList} />
            </View>
            <FAB
                icon="check"
                style={styles.fab}
                onPress={submitNewGroup} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subjectContainer: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    divider: {
        height: 10,
    },
    memberContainer: {
        flex: 1,
    },
    fab: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 16
    }
});

export default SubmitNewGroupScreen;