import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, FlatList } from 'react-native';
import { useTheme, Avatar, List, TouchableRipple, IconButton, Appbar } from 'react-native-paper';

// TODO: Handle API
// TODO: Add image modal
// TODO: Navigate to Chat
const GroupInfoScreen = (props) => {
    const { navigation } = props
    const { colors } = useTheme();

    const LayoutDivider = ({ color }) => (
        <View style={{ flex: 1, height: 10, backgroundColor: color }} />
    )

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <Appbar.Header style={{ backgroundColor: colors.primary }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Profil" />
            </Appbar.Header>

            <ScrollView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Avatar.Image size={64} source={{ uri: 'https://avatars2.githubusercontent.com/u/33979532?s=460&u=3738fbaa6b172215a466a64d17292366b0a7d2b7&v=4' }} />
                    <View style={styles.headerContent}>
                        <Text style={{ color: colors.primary, fontSize: 20 }}>Azki</Text>
                    </View>
                </View>
                <LayoutDivider color={colors.backgroundSecondary} />

                <View style={styles.infoContainer}>
                    <Text style={{ color: colors.primary, fontSize: 14, marginBottom: 8, paddingHorizontal: 16 }}>Info</Text>
                    <TouchableRipple rippleColor="rgba(0,0,0,.32)" onPress={() => console.log('Username')}>
                        <View style={{ paddingVertical: 8 }}>
                            <Text style={{ color: colors.primary, fontSize: 16, paddingHorizontal: 16 }}>17106050045</Text>
                            <Text style={{ color: colors.accentSecondary, fontSize: 14, paddingHorizontal: 16 }}>NIM</Text>
                        </View>
                    </TouchableRipple>

                    <TouchableRipple rippleColor="rgba(0,0,0,.32)" onPress={() => console.log('Phone')}>
                        <View style={{ paddingVertical: 8 }}>
                            <Text style={{ color: colors.primary, fontSize: 16, paddingHorizontal: 16 }}>085236484301</Text>
                            <Text style={{ color: colors.accentSecondary, fontSize: 14, paddingHorizontal: 16 }}>Telepon</Text>
                        </View>
                    </TouchableRipple>

                    <TouchableRipple rippleColor="rgba(0,0,0,.32)" onPress={() => console.log('Email')}>
                        <View style={{ paddingVertical: 8 }}>
                            <Text style={{ color: colors.primary, fontSize: 16, paddingHorizontal: 16 }}>azkihidayatulloh@gmail.com</Text>
                            <Text style={{ color: colors.accentSecondary, fontSize: 14, paddingHorizontal: 16 }}>Email</Text>
                        </View>
                    </TouchableRipple>

                    <TouchableRipple rippleColor="rgba(0,0,0,.32)" onPress={() => console.log('Bio')}>
                        <View style={{ paddingVertical: 8 }}>
                            <Text style={{ color: colors.primary, fontSize: 16, paddingHorizontal: 16 }}>Software engineer wannabe!</Text>
                            <Text style={{ color: colors.accentSecondary, fontSize: 14, paddingHorizontal: 16 }}>Bio</Text>
                        </View>
                    </TouchableRipple>
                </View>
                <LayoutDivider color={colors.backgroundSecondary} />

                <TouchableRipple
                    onPress={() => alert('Mulai percakapan')}
                    rippleColor="rgba(0,0,0,.32)">
                    <View style={styles.startMessagingContainer}>
                        <IconButton color={colors.primary} style={{ padding: 0, margin: 0, marginRight: 8 }} icon="message-text" size={20} />
                        <Text style={{ fontSize: 16, color: colors.primary }}>Mulai percakapan</Text>
                    </View>
                </TouchableRipple>
                <LayoutDivider color={colors.backgroundSecondary} />
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
    infoContainer: {
        paddingVertical: 16
    },
    startMessagingContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default GroupInfoScreen;