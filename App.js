/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import configureStore from './src/store/configureStore'
import MainContainer from './src/containers/MainContainer'

const { persistor, store } = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainContainer />
        </PersistGate>
      </Provider>
    );
  }
}