import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, FlatList } from 'react-native';
import { useTheme, Avatar, List, TouchableRipple, IconButton } from 'react-native-paper';
import { Topbar } from '../components/GroupInfo'
import mockMembers from '../data/mock/members';

// TODO: Handle API
// TODO: Add modal image
// TODO: Add modal on press member

const GroupInfoScreen = (props) => {
    const { colors } = useTheme();

    const LayoutDivider = ({ color }) => (
        <View style={{ flex: 1, height: 10, backgroundColor: color }} />
    )

    const renderMemberList = ({ item, index }) => {
        return (
            <List.Item
                title={item.name}
                left={props => <Avatar.Image {...props} size={40} style={styles.avatar} source={{ uri: item.avatar }} />} />
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <Topbar
                {...props} />
            <ScrollView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Avatar.Image size={64} source={{ uri: 'https://avatars2.githubusercontent.com/u/33979532?s=460&u=3738fbaa6b172215a466a64d17292366b0a7d2b7&v=4' }} />
                    <View style={styles.headerContent}>
                        <Text style={{ color: colors.primary, fontSize: 20 }}>Alfalabs Studio</Text>
                        <Text style={{ color: colors.accentSecondary, fontSize: 14 }}>99 anggota</Text>
                    </View>
                </View>
                <LayoutDivider color={colors.backgroundSecondary} />

                <View style={styles.descriptionContainer}>
                    <Text style={{ color: colors.primary, fontSize: 14, marginBottom: 8, paddingHorizontal: 16 }}>Deskripsi</Text>
                    <TouchableRipple
                        onPress={() => alert('Edit deskripsi')}
                        rippleColor="rgba(0,0,0,.32)">
                        <Text style={{ color: colors.primary, fontSize: 16, paddingHorizontal: 16 }}>Hello teams! Lets build something</Text>
                    </TouchableRipple>
                </View>
                <LayoutDivider color={colors.backgroundSecondary} />

                <TouchableRipple
                    onPress={() => alert('Tambah anggota')}
                    rippleColor="rgba(0,0,0,.32)">
                    <View style={styles.addMemberButton}>
                        <IconButton color={colors.primary} style={{ padding: 0, margin: 0, marginRight: 8 }} icon="account-plus-outline" size={20} />
                        <Text style={{ fontSize: 16, color: colors.primary }}>Tambah anggota</Text>
                    </View>
                </TouchableRipple>

                <LayoutDivider color={colors.backgroundSecondary} />
                <View style={styles.memberContainer}>
                    <Text style={{ color: colors.primary, fontSize: 14, marginBottom: 8 }}>Anggota</Text>
                    <FlatList
                        data={mockMembers}
                        renderItem={renderMemberList} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        padding: 16,
        flexDirection: 'row'
    },
    headerContent: {
        flex: 1,
        marginLeft: 24,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    descriptionContainer: {
        paddingVertical: 16
    },
    memberContainer: {
        padding: 16
    },
    addMemberButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default GroupInfoScreen;