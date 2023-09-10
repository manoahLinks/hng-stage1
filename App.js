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
        style={{width: '50%', height: '30%', borderRadius: 10}}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.name}>Manoah Luka</Text>
        <View style={styles.detialItemContainer}>
          <Text style={styles.keyText}>Display name:</Text>
          <Text>Mano.dev1️⃣</Text>
        </View>

        <View style={styles.detialItemContainer}>
          <Text style={styles.keyText}>Email:</Text>
          <Text>Manoahluka@gmail.com</Text>
        </View>

        <View style={styles.detialItemContainer}>
          <Text style={styles.keyText}>Pronouns:</Text>
          <Text>he/his</Text>
        </View>
        
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
    backgroundColor: '#fff',
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
    color: '#000'
  },

  detailsContainer:{
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#8D8FA5',
    rowGap: 10,
    width: '80%',
  },

  detialItemContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  keyText: {
    color: '#8D8FA5'
  }
});
