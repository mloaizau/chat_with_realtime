import React, { useState } from 'react';
import { LogBox, StyleSheet, YellowBox } from 'react-native';
import { NativeBaseProvider, Center, Box } from "native-base";
import { Login } from './src/screens/Login';
import { Chat } from './src/screens/Chat';

LogBox.ignoreLogs(["In React 18"]);

function App(): React.JSX.Element {

  const [userName, setUserName] = useState(null);

  return (

    <NativeBaseProvider>
      <Center>
        <Box style={styles.container} >
          {
            !userName ? (
              <Login setUsername={setUserName} />
            ) : (
              <Chat username={userName} />
            )
          }
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#16202b",
    height: "100%",
    width: "100%",
    alignItems: "center"
  }
});

export default App;
