import React from "react";
import { StyleSheet, SafeAreaView, Text, TextInput, Button, Alert, StatusBar} from 'react-native';


export default function App() {
  const [Username, onChangeUsername] = React.useState(null);
  const [Password, onChangePassword] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
      />
      <Text style={styles.titleText}>Instant Auth</Text>
      <Text style={styles.baseText}>Login or create an account :)</Text>
      <TextInput 
        style={styles.input}
        onChangeText={onChangeUsername}
        value={Username}
        placeholder="Username"
        placeholderTextColor='#FF2079'
      />
      <TextInput 
        style={styles.input}
        onChangeText={onChangePassword}
        value={Password}
        placeholder="Password"
        placeholderTextColor='#FF2079'
        secureTextEntry={true}
      />
      <Button
        style={styles.button}
        title="Login"
        onPress={() => Alert.alert('Under Construction :(')}
      />
      <Button
        style={styles.button}
        title="Create Account"
        onPress={() => Alert.alert('Under Construction :(')}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    color: '#49C2CC',
    borderRadius: 10,
    alignSelf: 'center',

  },
  container: {
    flex: 1,
    backgroundColor: '#040720',
    
    justifyContent: 'center',
  },
  baseText: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: "bold",
    color: '#fff',
    

  },
  titleText: {
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: "bold",
    color: '#FF2079',
  },
  input: {
    borderRadius: 10,
    borderColor: '#FF2079',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#FF2079',
    
  },
});
