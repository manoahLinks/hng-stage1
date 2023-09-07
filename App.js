import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import WebView from 'react-native-webview';

export default function App() {

  const [visible, setVisible] = useState(false)

  const openLink = () => {
      setVisible(true)
  }

  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={openLink}> 
        <Text>Github</Text>
      </TouchableOpacity>

      <Modal
        visible={visible}
        animationType='slide'
        presentationStyle='pageSheet'
        onRequestClose={()=>{setVisible(false)}}
      >
        <WebView source={{ uri: 'https://github.com' }} />
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
  },
});
