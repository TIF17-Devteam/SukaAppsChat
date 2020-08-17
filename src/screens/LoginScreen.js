import * as React from 'react'
import { View, Text, Button, TouchableOpacity, ScrollView, StyleSheet, TextInput, Image, ActivityIndicator } from "react-native";
import { AppContext } from "../config/context";

const LoginScreen = ({ navigation }) => {
    const { signIn } = React.useContext(AppContext);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const scrollViewRef = React.useRef();

    const submit = async () => {
        if (username === '' || password === '') {
            alert('Input tidak boleh kosong')
        } else {
            setLoading(true);
            // TODO("Change the following line with actual logic")
            await new Promise(resolve => setTimeout(resolve, 1500));
            setLoading(false);
            signIn('demo-token');
        }
    }

    return (
        <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={{ flexGrow: 1 }}
            onLayout={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
            <View style={styles.container}>
                <Text style={styles.headline}>
                    Selamat datang di Suka App Chat
                </Text>
                <Image source={require('../assets/image/uin-logo.png')} style={styles.logo} />
                <TextInput
                    style={styles.tinput}
                    placeholder="Username"
                    onChangeText={setUsername}
                    value={username} />

                <TextInput
                    style={styles.tinput}
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true} />
                <TouchableOpacity
                    disabled={loading}
                    style={styles.btn}
                    onPress={() => submit()}>
                    {loading ? <ActivityIndicator color="#ffffff" /> : <Text style={styles.btnText}>Login</Text>}
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingStart: 30,
        paddingEnd: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    headline: {
        color: 'black',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 32,
        fontWeight: 'bold',
        paddingStart: 24,
        paddingEnd: 24
    },
    logo: {
        height: 140,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginBottom: 32,
    },
    tinput: {
        height: 60,
        padding: 16,
        borderColor: 'transparent',
        borderWidth: 1.5,
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: '#f3f3f3',
        textAlign: 'center',
        fontWeight: 'normal'
    },
    btn: {
        height: 60,
        backgroundColor: '#363636',
        justifyContent: 'center',
        borderRadius: 6,
        marginBottom: 32
    },
    btnText: {
        color: '#ffffff',
        fontWeight: 'normal',
        fontSize: 16,
        textAlign: 'center'
    }
})

export default LoginScreen