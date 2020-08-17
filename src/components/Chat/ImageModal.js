import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import { Appbar, useTheme, IconButton } from 'react-native-paper';
import { InputToolbar, Send } from "react-native-gifted-chat";
import ImagePicker from 'react-native-image-crop-picker';

const styles = StyleSheet.create({
    modalContainer: {
        margin: 0
    },
    content: {
        flex: 1,
        backgroundColor: '#000000'
    },
    topBar: {
        backgroundColor: '#000000'
    },
    overlayBottomInput: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        top: 0,
        left: 0,
        right: 0
    },
    image: {
        flex: 1,
        resizeMode: 'contain'
    }
})

// TODO: Add compression method
// TODO: Handle send image

const ImageModal = (props) => {
    const { onCloseModal, recipient, recipientAvatar } = props;
    const { colors } = useTheme();
    const [imageUri, setImageUri] = useState('');
    const [caption, setCaption] = useState('');

    useEffect(() => {
        setImageUri(props.imageUri);
    }, []);

    const renderSend = (props) => {
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
                icon="emoticon"
                size={24}
                color="#ffffff" />
        )
    }

    const openCropper = () => {
        ImagePicker.openCropper({
            path: imageUri
        }).then(image => setImageUri(image.path));
    }

    return (
        <Modal
            isVisible={true}
            style={styles.modalContainer}
            onBackButtonPress={onCloseModal}>
            <View style={styles.content}>
                <Appbar style={styles.topBar}>
                    <Appbar.BackAction onPress={onCloseModal} />
                    <Appbar.Content title={recipient} style={{ opacity: 1 }} />
                    <Appbar.Action icon="square-edit-outline" color="#ffffff" onPress={openCropper} />
                </Appbar>
                <Image
                    style={styles.image}
                    source={{ uri: imageUri }} />
                <InputToolbar
                    text={caption}
                    onTextChanged={(text) => setCaption(text)}
                    renderSend={renderSend}
                    renderActions={renderActions}
                    containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderTopWidth: 0 }}
                    textInputStyle={{ color: '#ffffff' }}
                    placeholder="Tambahkan caption..."
                />
            </View>
        </Modal>
    )
}

export default ImageModal;