import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useTheme, Appbar, List, Avatar, Divider, Searchbar, ActivityIndicator } from 'react-native-paper';
import mockMembers from '../data/mock/members';

// TODO: Add paging (optional but important)
const NewPersonalScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const users = mockMembers;
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const fetchData = useCallback(async () => {
        // TODO: Change with actual API call
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setLoading(false);
    }, []);

    const onChangeQuery = (query) => {
        setSearchQuery(query);
    }

    const onSubmitSearch = () => {
        fetchData();
    }

    const openChat = (userId) => {
        navigation.replace('Chat');
        // TODO: Check is already have chat with that user, if not exist, create it. Dont forget to pass chat id to navigation params
    }

    const renderListItem = ({ item }) => {
        const renderAvatar = (uri) => (
            <View style={{ marginRight: 8, justifyContent: 'center' }}>
                <Avatar.Image size={45} source={{ uri }} style={{ margin: 0 }} />
            </View>
        );

        return (
            <List.Item
                title={item.name}
                description={item.username}
                left={() => renderAvatar(item.avatar)}
                onPress={() => openChat(item.id)}
                style={{ backgroundColor: colors.background, paddingHorizontal: 16, paddingVertical: 8 }} />
        );
    }

    return (
        <View style={{ ...styles.container, backgroundColor: colors.background }}>
            <Appbar.Header style={{ backgroundColor: colors.primary }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Pesan baru" />
            </Appbar.Header>

            <Searchbar
                placeholder="Cari nama atau NIM"
                style={{ margin: 16 }}
                onChangeText={onChangeQuery}
                value={searchQuery}
                onSubmitEditing={onSubmitSearch} />

            {
                isLoading ?
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <ActivityIndicator animating={true} color={colors.accent} />
                    </View> :
                    <FlatList
                        data={users}
                        renderItem={renderListItem}
                        ItemSeparatorComponent={() => <Divider />}
                        style={{ flex: 1 }} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default NewPersonalScreen;