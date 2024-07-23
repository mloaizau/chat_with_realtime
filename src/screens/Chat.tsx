import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { Input } from '../components/Input';
import { SafeAreaView } from 'react-native-safe-area-context';
import firebase from '../utils/firebase';
import "firebase/compat/database";
import moment from 'moment';
import { Heading, HStack, Text } from 'native-base';
import { map } from "lodash";
import { Message } from '../components/Message';

export const Chat = (props: any) => {

    const { username } = props;
    const [messages, setMessages] = useState([]);
    const chatScrollRef = useRef();

    useEffect(() => {
        const chat = firebase.database().ref("general");
        chat.on("value", (snapshot) => {
            setMessages(snapshot.val());
        });
    }, [])

    const sendMessage = (message: string) => {
        const time = moment().format("hh:mm a");
        firebase.database().ref("general").push({ username, text: message, time });
    }

    useEffect(() => {
        chatScrollRef.current.scrollTo({ y: 10000000000000000});
    }, [messages])


    return (
        <SafeAreaView>
            <HStack justifyContent="center">
                <Heading size={'xl'} color={"#fff"} backgroundColor={"#16202b"}>
                    Chat
                </Heading>
            </HStack>
            <View style={styles.content}>
                <ScrollView style={styles.chatView} ref={chatScrollRef} >
                    {
                        map(messages, (message, index) => (
                            <Message key={index} message={message} name={username} />
                        ))
                    }
                </ScrollView>
                <Input sendMessage={sendMessage} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "space-between"
    },
    chatView: {
        backgroundColor: "#1b2734"
    }
})