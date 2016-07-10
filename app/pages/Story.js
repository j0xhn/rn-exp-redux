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
import Button from 'storytime/app/components/Button'
import Header from 'storytime/app/components/Header'

import {storyRoute, aboutRoute} from 'storytime/app/routes'

class Story extends Component {
  static propTypes = {
    _goBack: PropTypes.func,
    _handleNavigate: PropTypes.func
  };

  state={text: '____', 'moreText': '____'}

  render () {
    const {_goBack, _handleNavigate } = this.props

    return (
      <View style={styles.background}>
        <Header label='Story Title' backFunction={_goBack} />
        <View style={styles.container}>
          <TextInput
          style={styles.textEdit}
          onChangeText={(text) => this.setState({text})}
          placeholder="First Input"
          />
          <TextInput
          style={styles.textEdit}
          onChangeText={(moreText) => this.setState({moreText})}
          placeholder="Second Input"
          />

          <Text>
            Here is text with an element from
            before here <Text style={styles.placeholder}>{this.state.text} </Text>
            and then more text here <Text style={styles.placeholder}>{this.state.moreText} </Text>
            that is from the second Input
          </Text>
        </View>
        <Button onPress={() => _handleNavigate(aboutRoute)} label='Go About' />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  background: {
    backgroundColor: 'white'
  },
  placeholder: {
    width: 100,
    color: 'blue'
  },
  container: {
    padding: 10,
  },
  title: {
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center'
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
    borderColor: '#eee',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 5
  }
});

export default Story
