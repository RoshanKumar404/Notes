import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function NotesScreen() {
  return (
    <View style={styles.background}> 
      <Text style={{fontSize:20}}>NotesScreen</Text>
      <View>
        <TouchableOpacity onPress={()=>console.log("jai sri ram")}>
           <Text>add one</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background:{
    backgroundColor:"#00385a",
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
