/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React from 'react';
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import moduleName from '../redux_4/src/components/Main'
import Main from '../redux_4/src/components/Main';
import store from './src/store/store'
import {Provider} from 'react-redux'
 class App extends Component {
  render() {
      return (
        <Provider store = {store}>
          <View style ={styles.container}>
            <Main/>
          </View>
        </Provider>
      )
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});
