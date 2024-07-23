import React, { useState } from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Input as InputNB, Stack } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Input = (props: any) => {

    const {sendMessage} = props;
    const [message, setMessage] = useState('');

    const onSubmit = () => {
        if(message.length > 0) {
            sendMessage(message);
            setMessage('');
        }
    }

    return (
        <View style={styles.container} >
            <Stack direction={"row"} style={styles.viewContain} >
                <InputNB
                    style={styles.input}
                    placeholder=' Mensaje...'
                    w="100%"
                    InputRightElement={
                        <TouchableOpacity onPress={onSubmit}>
                            <MaterialCommunityIcons style={styles.iconSend} name='send' size={16} />
                        </TouchableOpacity>
                    }
                    value={message}
                    onChange={(e) => setMessage(e.nativeEvent.text)}
                />
            </Stack>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#16202b",
        paddingBottom: Platform.OS === 'ios' ? 20 : 0,
        paddingHorizontal: 20
    },
    viewContain: {
        borderColor: "#16202b",
        paddingTop: 20
    },
    input: {
        color: "#fff",
        fontSize: 12,
    },
    iconSend: {
        paddingRight: 10,
        color: "#fff"
    }
});