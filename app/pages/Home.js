import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Button from 'StoryTime/app/components/Button'
import Header from 'StoryTime/app/components/Header'
import {storyRoute, aboutRoute, openDrawer} from 'StoryTime/app/routes'


const Home = ({_handleNavigate}) => (
  <View>
    <Header label='header' />
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button onPress={() => _handleNavigate(aboutRoute)} label='Go To About' />
      <Button onPress={() => _handleNavigate(storyRoute)} label='Go To Story' />
      <Button onPress={() => _handleNavigate(openDrawer)} label='Open Drawer' />
    </View>
  </View>
)

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center'
  },
  container: {
    paddingTop: 10
  }
})

export default Home
