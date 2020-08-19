import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { useTheme, Avatar, List, Appbar, Divider, FAB } from 'react-native-paper';

/*
TODO:
- Get data from API
- Add search
- Add pagination (optional)
- Display selected list (we can use chip like telegram)
*/

const NewGroupScreen = (props) => {
    const mockMembers = [
        {
            id: '1',
            name: 'Alfa',
            avatar: 'https://avatars2.githubusercontent.com/u/33979532?s=460&u=3738fbaa6b172215a466a64d17292366b0a7d2b7&v=4',
            username: '17106050045'
        },
        {
            id: '2',
            name: 'Azki',
            avatar: 'https://avatars2.githubusercontent.com/u/33979532?s=460&u=3738fbaa6b172215a466a64d17292366b0a7d2b7&v=4',
            username: '17106050045'
        },
        {
            id: '3',
            name: 'Hidayat',
            avatar: 'https://avatars2.githubusercontent.com/u/33979532?s=460&u=3738fbaa6b172215a466a64d17292366b0a7d2b7&v=4',
            username: '17106050045'
        },
    ];
    const { navigation } = props;
    const { colors } = useTheme();
    const [userList, setUserList] = useState([]);
    const [selectedList, setSelectedList] = useState([]);

    useEffect(() => {
        const members = Array.from(mockMembers);
        setUserList(members);
    }, []);

    const addOrRemove = (item) => {
        let users = Array.from(userList);
        let selecteds = Array.from(selectedList);
        let isSelected = false,
            index = null

        for (let i = 0; i < selecteds.length; i++) {
            if (selecteds[i].id == item.id) {
                isSelected = true
                index = i
                break
            }
        }

        if (isSelected) {
            selecteds.splice(index, 1)
        } else {
            selecteds = [...selecteds, item]
        }
        setSelectedList(selecteds);

        users = users.map(user => {
            if (user.id == item.id) {
                user.selected = user.selected == null ? true : !user.selected
            }
            return user
        })
        setUserList(users);
    }

    const renderMemberList = ({ item, index }) => {
        const renderAvatar = () => (
            <View>
                <Avatar.Image {...props} size={40} style={styles.avatar} source={{ uri: item.avatar }} />
            </View>
        )

        return (
            <List.Item
                title={item.name}
                description={item.username}
                left={renderAvatar}
                onPress={() => addOrRemove(item)}
                style={{ backgroundColor: item.selected ? colors.accentSecondary : colors.background }} />
        )
    }

    return (
        <View style={{ ...styles.container, backgroundColor: colors.background }}>
            <Appbar.Header style={{ backgroundColor: colors.primary }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Grup baru" subtitle={selectedList.length > 0 ? `${selectedList.length} terpilih` : 'Tambahkan anggota'} />
            </Appbar.Header>
            <FlatList
                data={userList}
                renderItem={props => renderMemberList(props)}
                ItemSeparatorComponent={() => <Divider />}
                style={{ flex: 1 }} />
            {
                selectedList.length > 0 ?
                    <FAB
                        icon="arrow-right"
                        onPress={() => navigation.navigate('SubmitNewGroup', { selectedList: selectedList })}
                        style={{ position: 'absolute', bottom: 0, right: 0, margin: 16 }} /> :
                    null
            }
        </View>
    )
}

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
        backgroundColor: '#ffffff'
    },
});

export default NewGroupScreen;