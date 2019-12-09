
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider , connect } from 'react-redux';
import thunk from 'redux-thunk';
import AppContainer from './src/routes';

const ConnectedSubApp = connect(null)(AppContainer);

export default function App() {
  return (
    <Provider store={ createStore(reducers, applyMiddleware(thunk)) }>
      <View>
        <ConnectedSubApp>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
