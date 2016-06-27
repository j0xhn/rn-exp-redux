import React, {
  Component,
  PropTypes
} from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'
import Button from './Button'
import {storyRoute, aboutRoute} from '../routes'

class Story extends Component {
  static propTypes = {
    _goBack: PropTypes.func,
    _handleNavigate: PropTypes.func
  };

  render () {
    const {_goBack, _handleNavigate } = this.props

    state = {text: '', moreText: ''}
    return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.welcome}>
        Text Input Example
        </Text>

        <Text style={styles.instructions}>
        sample text
        </Text>

        <TextInput
        style={styles.textEdit}
        onChangeText={(text) => this.setState({text})}
        placeholder="What you gotta say?"
        />

        <Text style={styles.instructions}>
        sample More Text
        </Text>

        <TextInput
        style={styles.textEdit}
        onChangeText={(moreText) => this.setState({moreText})}
        defaultValue="Iron Maiden, Up the Irons"
        />
      </View>
      <Button onPress={_goBack} label='Go Back' />
      <Button onPress={() => _handleNavigate(aboutRoute)} label='Go About' />
    </View>
  )
}
}

var styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center'
  },
  container: {
    paddingTop: 60
  },
  welcome: {
    fontSize: 28,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    color: 'blue',
    fontSize: 22,
    marginBottom: 5,
  },
  textEdit: {
    height: 40,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1
  },
});

export default Story
