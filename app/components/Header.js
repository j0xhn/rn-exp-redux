import React from 'react'

import { Text, View, StyleSheet } from 'react-native'

export default ({label, onPress, backFunction}) => (
  <View style={styles.header}>
    {backFunction && <Text style={styles.backButton} onPress={backFunction}>Back</Text>}
    <Text style={styles.label}>{label}</Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    height: 70,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    paddingTop: 40
  },
  label: {
    color: 'black',
    alignSelf: 'center'
  },
  backButton: {
    left: 10,
    position: 'absolute'
  }
})
