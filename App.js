
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
import AppContainer from './src/routes';

const ConnectedSubApp = connect(null)(AppContainer);

export default function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <View>
        <ConnectedSubApp />
      </View>
    </Provider>
  );
}
