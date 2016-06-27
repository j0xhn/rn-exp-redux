import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Button from './Button'
import {storyRoute, aboutRoute} from '../routes'

const About = ({_goBack, _handleNavigate}) => (
  <View style={styles.container}>
    <Text style={styles.title}>About</Text>
    <Button onPress={_goBack} label='Go Back' />
    <Button onPress={() => _handleNavigate(storyRoute)} label='Go Story' />
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

export default About
