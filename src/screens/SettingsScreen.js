import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { useTheme, Appbar, Avatar, TouchableRipple, Divider } from 'react-native-paper';
import { LayoutDivider } from '../components/Common';

const SettingsScreen = ({ navigation }) => {
    const { colors } = useTheme();

    const InfoItem = (props) => {
        const { title, content, onPress } = props;
        return (
            <TouchableRipple rippleColor="rgba(0,0,0,.32)" onPress={onPress}>
                <View style={{ paddingVertical: 8 }}>
                    <Text style={{ color: colors.primary, fontSize: 16, paddingHorizontal: 16 }}>{content}</Text>
                    <Text style={{ color: colors.accentSecondary, fontSize: 14, paddingHorizontal: 16 }}>{title}</Text>
                </View>
            </TouchableRipple>
        );
    }

    const SettingItem = (props) => {
        const { icon, title, onPress } = props;

    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Pengaturan" />
            </Appbar.Header>

            <ScrollView style={{ flex: 1 }}>
                <View style={styles.headerContainer}>
                    <Avatar.Image size={64} source={{ uri: 'https://avatars2.githubusercontent.com/u/33979532?s=460&u=3738fbaa6b172215a466a64d17292366b0a7d2b7&v=4' }} />
                    <View style={styles.headerContent}>
                        <Text style={{ color: colors.primary, fontSize: 20 }}>Azki</Text>
                    </View>
                </View>
                <LayoutDivider />

                <View style={styles.sectionContainer}>
                    <Text style={{ color: colors.primary, ...styles.sectionTitle }}>Akun</Text>
                    <InfoItem
                        title="NIM"
                        content="17106050045"
                        onPress={() => alert('NIM')} />

                    <InfoItem
                        title="Telepon"
                        content="085236484301"
                        onPress={() => alert('Telepon')} />

                    <InfoItem
                        title="Email"
                        content="azkihidayatulloh@gmail.com"
                        onPress={() => alert('Email')} />

                    <InfoItem
                        title="Bio"
                        content="I dont know."
                        onPress={() => alert('Bio')} />
                </View>
                <LayoutDivider />

                {/* <View style={styles.sectionContainer}>
                    <Text style={{ color: colors.primary, ...styles.sectionTitle }}>Pengaturan</Text>
                </View> */}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
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
    sectionContainer: {
        paddingVertical: 16
    },
    sectionTitle: {
        fontSize: 16,
        marginBottom: 8,
        paddingHorizontal: 16
    }
});

export default SettingsScreen;