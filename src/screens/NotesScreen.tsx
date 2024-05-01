import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'

export default function NotesScreen() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleTextInput = () => {
    setIsVisible(!isVisible);
  };

  // const renderTextInput = () => {
  //   if (isVisible) {
  //     return (<TextInput placeholder="jai" />)
  //   }
  //   return null;
  // };
  return (
    <View style={styles.background}>
      <Text style={{ fontSize: 20 }}>NotesScreen</Text>
      {isVisible && <TextInput placeholder="Plz Add your notes here" />}
      <View style={styles.container}>
        <TouchableOpacity onPress={() => console.log("jai sri ram")}>
          <Text>add one</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <Button onPress={toggleTextInput}>
            <View style={styles.buttonContent}>
              {/* <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 5 }}>addone</Text> */}
              <Text style={{ fontSize: 60 }}>+</Text>
            </View>
          </Button>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#45dea0",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column"
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 20,
    marginRight: 20,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 30,
    right: -150,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
