/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { connect } from 'react-redux'
import { 
  setLoading,
  setUser,
  deleteUser
} from '../actions'
import { PURGE } from 'redux-persist'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class MainContainer extends Component {

  constructor(props) {
    super(props)
    
    this.onSubmit = this.onSubmit.bind(this)
    this.onClearData = this.onClearData.bind(this)
  }

  onSubmit() {
    this.props.loading(true)
    this.props.registerUser('Bob!')
  }

  onClearData() {
    this.props.deleteUser()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button
          title="Click"
          color="#841584"
          onPress={this.onSubmit}
        />
        <Text style={styles.instructions}>{this.props.user}</Text>
        <Button
          title="Clear Data"
          color="#841584"
          onPress={this.onClearData}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapDispatchToProps = (dispatch) => ({

  loading: (value) => {
    dispatch(setLoading(value))
  },
  registerUser: (payload) => {
    dispatch(setUser(payload))
  },
  deleteUser: () => {
    dispatch(deleteUser())
  }
})

const mapStateToProps = (state) => ({
  user: state.app.user
})

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)