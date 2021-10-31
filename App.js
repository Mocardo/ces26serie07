import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Calc from './src/components/Calc'
import store from './src/store'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <Calc/>
      </Provider>
    </View>
  );
}
