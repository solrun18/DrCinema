import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
import AppContainer from './src/routes';
// import Main from './src/views/Main';
// import Cinemas from './src/views/Cinemas';

export default function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
<<<<<<< HEAD
      <View style={{ flex: 1, backgroundColor: 'black' }}>
=======
      <View style={{flex: 1, backgroundColor: 'black'}}>
>>>>>>> 7c4982a9e98c944370bf5ed98b1a76a0ec4ebadc
        <AppContainer />
      </View>
    </Provider>
  );
}
