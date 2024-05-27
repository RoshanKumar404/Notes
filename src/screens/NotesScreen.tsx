import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { Button, Modal, TextInput } from 'react-native-paper';

export default function NotesScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [notes, setNotes] = useState('');
  const [addons, setAddons] = useState([]);
  const [greet, setGreet] = useState('');
  const [onmodal, setOnModal] = useState(false);
  const [title, setTitle] = useState('');

  const findGreet = () => {
    const hrs = new Date().getHours();
    if (hrs === 0 || hrs < 12) return 'Morning';
    if (hrs === 1 || hrs < 17) return 'Afternoon';
    return 'Evening';
  };

  useEffect(() => {
    setGreet(findGreet());
  }, []);

  const toggleTextEntry = () => {
    setOnModal(!onmodal);
  };

  const addNote = () => {
    if (notes.trim() !== '' && title.trim() !== '') {
      setAddons(prevAddons => [...prevAddons, { id: Date.now(), title: title, text: notes }]);
      setNotes('');
      setTitle('');
      setOnModal(false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.noteContainer}>
      <Text style={styles.noteTitle}>{item.title}</Text>
      <Text style={styles.note}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.background}>
      <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#EA7773' }}>Hello Roshan, Good {greet}</Text>
      <Modal visible={onmodal} onDismiss={() => setOnModal(false)}>
        <View style={{ backgroundColor: 'white', padding: 20 }}>
          <TextInput
            placeholder="Title"
            style={{ marginTop: 10, paddingHorizontal: 10 }}
            value={title}
            onChangeText={text => setTitle(text)}
            autoFocus={onmodal}
          />
          <TextInput
            placeholder="Please add your notes here"
            style={{ marginTop: 10, paddingHorizontal: 10 }}
            multiline={true}
            value={notes}
            onChangeText={text => setNotes(text)}
          />
          <Button mode="contained" onPress={addNote} style={{ marginTop: 10 }}>
            Add Note
          </Button>
        </View>
      </Modal>
      <FlatList
        data={addons}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ alignItems: 'flex-start' }}
        style={styles.notesContainer}
      />
      <TouchableOpacity style={styles.addButtonContainer} onPress={toggleTextEntry}>
        <Text style={styles.addButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  notesContainer: {
    flex: 1,
    width: '100%',
    paddingVertical: 20,
  },
  noteContainer: {
    flex: 1,
    width: '50%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  noteTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  note: {
    fontSize: 16,
    color: 'white',
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 50,
    right: 40,
  },
  addButton: {
    fontSize: 70,
    color: '#00bfff',
  },
});
