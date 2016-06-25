import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Button from './Button'
import {feedRoute, aboutRoute} from '../routes'

const Feed = ({_goBack, _handleNavigate}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Feed</Text>
    <Button onPress={_goBack} label='Go Back' />
    <Button onPress={() => _handleNavigate(aboutRoute)} label='Go About' />
  </View>
)

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center'
  },
  container: {
    paddingTop: 60
  }
})

export default Feed
