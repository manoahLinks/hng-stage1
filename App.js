import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TouchableOpacity, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import WebView from 'react-native-webview';

export default function App() {

  const [visible, setVisible] = useState(false)

  const openLink = () => {
      setVisible(true)
  }

  return (
    <View style={styles.container}>

      <Image
        source={require('./assets/profile.jpeg')}
        style={{width: '50%', height: '30%', borderRadius: 100}}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.name}>Manoah Luka</Text>
        <Text>Mano.dev</Text>
        <Text>Manoahluka@gmail.com</Text>
      </View>

      <TouchableOpacity style={styles.githubButton} onPress={openLink}> 
        <Icon name='github' size={30} color={`blue`} />
        <Text style={styles.githubButtonText}>Github</Text>
      </TouchableOpacity>

      <Modal
        visible={visible}
        animationType='slide'
        presentationStyle='pageSheet'
        onRequestClose={()=>{setVisible(false)}}
      >
        <WebView source={{ uri: 'https://github.com/manoahLinks' }} />
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },

  githubButton:{
    paddingHorizontal: 20,
    paddingVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    borderColor: 'blue',
    borderWidth: 1,
    color: 'blue',
    borderRadius: 5,
  },

  githubButtonText: {
    color: 'blue'
  },

  name: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff'
  },

  detailsContainer:{
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    backgroundColor: '#2F2F2F'
  }
});
