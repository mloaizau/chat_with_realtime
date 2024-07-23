import { StyleSheet, SafeAreaView, StatusBar, Image, View } from 'react-native';
import React, { useState } from 'react';
import { Text, Input, Button } from 'native-base';

export const Login = (props: any) => {

    const { setUsername } = props;

    const [name, setName] = useState('');

    const onSubmit = () => {
        setUsername(name);
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <View >
                <Image
                    resizeMode='contain'
                    source={require('../assets/chatLogo.png')}
                    style={styles.logo}
                />
            </View>
            <View>
                <Input 
                    placeholder='Nombre de usuario'
                    style={{color: "#fff"}}
                    value={name}
                    onChange={(e: any) => {
                        setName(e.nativeEvent.text)
                    }}
                />
            </View>

            <Button style={styles.btnLogin} onPress={onSubmit} >
                <Text>Entrar</Text>
            </Button>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        marginBottom: 30
    },
    container: {
        marginHorizontal: 50,
        marginVertical: 50
    },
    btnLogin: {
        marginTop: 40,
        justifyContent: "center",
        backgroundColor: "#0098d3"
    }
})