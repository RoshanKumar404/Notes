import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function NotesScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [notes, setNotes] = useState('');
  const [addons, setAddons] = useState([]);

  const toggleTextInput = () => {
    setIsVisible(!isVisible);
    if (notes.trim() !== '') {
      setAddons(prevAddons => [...prevAddons, notes]);
      setNotes('');
    }
  };

  return (
    <View style={styles.background}>
      {isVisible && (
        <TextInput
          placeholder="Plz Add your notes here"
          style={{ marginTop: 10 }}
          multiline={true}
          value={notes}
          onChangeText={text => setNotes(text)}
        />
      )}
      <View style={styles.notesContainer}>
        {addons.map((note, index) => (
          <Text key={index} style={styles.note}>
            {note}
          </Text>
        ))}
      </View>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity onPress={toggleTextInput}>
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
  },
  note: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  addButton: {
    fontSize: 70,
    color: '#00bfff',
  },
});
