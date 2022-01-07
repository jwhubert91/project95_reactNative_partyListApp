import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';
import partyImageTaller from './assets/partyImageTaller.jpeg';

export default function App() {
  const [invitees, setInvitees] = useState([]);
  const [newInvitee, setNewInvitee] = useState('');

  return (
    <View style={styles.viewContainer}>
      <View>
        <Text style={styles.header}>React Native Party Invites App</Text>
      </View>
      <View style={styles.imageContainer}>
        <ImageBackground source={partyImageTaller} resizeMode="cover" style={styles.partyImage}>
          <Text style={styles.imageText}>Your Guest List</Text>
        </ImageBackground>
      </View>
      <View style={ styles.inputContainer }>
        <Text>New Invitee:</Text>
        <TextInput
          style={ styles.input }
          value={ newInvitee }
          onChangeText={setNewInvitee}
          placeholder='Enter invitee here...'
        />
        <Button
          title='Add new invitee'
          onPress={ ()=> {
            setInvitees([newInvitee, ...invitees])
            setNewInvitee('')
          } }
        />
      </View>
      <View style={ styles.listContainer }>
        <FlatList
          data={ invitees }
          keyExtractor={ invitee => invitee }
          renderItem={({item})=> <Text style={ styles.inviteeText }>{ item }</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
  },
  partyImage: {
    height: '300',
  },
  imageText: {
    color: "white",
    fontSize: 27,
    lineHeight: 29,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "#000000c0",
    paddingVertical: 50,
  },
  inputContainer: {
    paddingVertical: 5,
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  listContainer: {
    padding: 5,
  },
  inviteeText: {
    fontSize: 18,
  },
});
