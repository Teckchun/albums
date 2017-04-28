// Code for ios

// 1. Import Library to help create Component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// 2. Create Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
  );

// 3. Render it to the Device
AppRegistry.registerComponent('albums', () => App);
