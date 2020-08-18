import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { useTheme, Avatar, List, Appbar, Divider, FAB, IconButton } from 'react-native-paper';
import mockMembers from '../data/mock/members';


const NewGroupScreen = (props) => {
    const { navigation } = props;
    const { colors } = useTheme();
    const [userList, setUserList] = useState([]);
    const [selectedList, setSelectedList] = useState([]);

    useEffect(() => {
        setUserList(mockMembers);
    }, []);

    const addOrRemove = (item) => {
        let users = [...userList];
        let selecteds = [...selectedList];
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

        for (let data of users) {
            if (data.id == item.id) {
                data.selected = (data.selected == null) ? true : !data.selected
                break
            }
        }
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
                data={mockMembers}
                renderItem={renderMemberList}
                ItemSeparatorComponent={() => <Divider />}
                style={{ flex: 1 }} />
            {
                selectedList.length > 0 ?
                    <FAB
                        icon="arrow-right"
                        onPress={() => alert('Next')}
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