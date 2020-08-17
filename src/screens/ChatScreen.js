import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, Alert } from "react-native";
import { Appbar, IconButton, Menu, useTheme } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import { GiftedChat, Send, InputToolbar, Bubble } from "react-native-gifted-chat";
import DocumentPicker from 'react-native-document-picker';
import { Topbar, ImageModal } from '../components/Chat';
import mockMessages from '../data/mock/messages';

// TODO: Connect to API
// TODO: Connect to FCM

const ChatScreen = (props) => {
    const { colors } = useTheme();
    const [messages, setMessages] = useState([]);
    const [isAttachmentMenuVisible, setAttachmentMenuVisible] = useState(false);
    const openAttachmentMenu = () => setAttachmentMenuVisible(true);
    const closeAttachmentMenu = () => setAttachmentMenuVisible(false);
    const [imageUri, setImageUri] = useState(null);
    const [documentUri, setDocumentUri] = useState(null);
    const openImageModal = (uri) => setImageUri(uri);
    const closeImageModal = () => setImageUri(null);

    useEffect(() => {
        setMessages(mockMessages)
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    }, []);

    const openCamera = () => {
        closeAttachmentMenu();
        ImagePicker.openCamera({
            mediaType: 'photo'
        }).then(image => {
            openImageModal(image.path);
        });
    }

    const openImagePicker = () => {
        closeAttachmentMenu();
        ImagePicker.openPicker({
            mediaType: 'photo'
        }).then(image => {
            openImageModal(image.path);
        });
    }

    const openDocumentPicker = async () => {
        closeAttachmentMenu();
        try {
            const res = await DocumentPicker.pick({
                type: DocumentPicker.types.allFiles
            });
            console.log(res);
            // TODO: Change with actual recipient
            Alert.alert(
                '',
                `Kirim "${res.name}" ke "${"Azki"}"?`,
                [
                    { text: 'Batal', style: 'cancel' },
                    { text: 'Ya' }
                ],
                { cancelable: false }
            );
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log(err);
            }
        }
    }

    const renderSend = (props) => {
        const { text } = props
        if (!text) {
            return (
                <Menu
                    visible={isAttachmentMenuVisible}
                    onDismiss={closeAttachmentMenu}
                    anchor={
                        <IconButton
                            icon="attachment"
                            size={24}
                            color={colors.accentSecondary}
                            onPress={openAttachmentMenu} />
                    }>
                    <Menu.Item title="Dokumen" onPress={openDocumentPicker} />
                    <Menu.Item title="Gambar" onPress={openImagePicker} />
                    <Menu.Item title="Camera" onPress={openCamera} />
                </Menu>
            )
        }

        return (
            <Send {...props}
                containerStyle={{ elevation: 0 }}>
                <IconButton
                    icon="send"
                    size={24}
                    color={colors.accent} />
            </Send>
        )
    }

    const renderActions = (props) => {
        return (
            <IconButton
                {...props}
                icon="emoticon-outline"
                size={24}
                color={colors.accentSecondary} />
        )
    }

    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: colors.accent,
                    }
                }}
            />
        )
    }

    const renderInputToolbar = (props) => {
        return (
            <InputToolbar
                {...props}
                containerStyle={{ backgroundColor: colors.background, borderTopWidth: 0, elevation: 8 }} />
        )
    }

    return (
        <View style={{ ...styles.container, backgroundColor: colors.background }}>
            <Topbar
                {...props} />
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{ _id: 1 }}
                renderSend={props => renderSend(props)}
                renderActions={props => renderActions(props)}
                placeholder="Tulis pesan"
                renderInputToolbar={props => renderInputToolbar(props)}
                showUserAvatar={false}
                renderAvatar={null}
                renderBubble={props => renderBubble(props)} />
            {imageUri ?
                <ImageModal
                    imageUri={imageUri}
                    onCloseModal={closeImageModal}
                    recipient="Azki" />
                : null
            }
        </View >
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

