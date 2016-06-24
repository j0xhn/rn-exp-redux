import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Button from './Button'
import {feedRoute, aboutRoute} from '../routes'

const Home = ({_handleNavigate}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Home</Text>
    <Button onPress={() => _handleNavigate(aboutRoute)} label='Go To About' />
    <Button onPress={() => _handleNavigate(feedRoute)} label='Go To Feed' />
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

export default Home
