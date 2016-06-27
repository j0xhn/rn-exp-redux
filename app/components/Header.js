import React from 'react'

import { Text, View, StyleSheet } from 'react-native'

export default ({label, onPress}) => (
  <View style={styles.header}>
    <Text style={styles.label}>{label}</Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    height: 70,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingTop: 40
  },
  label: {
    color: 'black'
  }
})
