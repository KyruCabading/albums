import React from 'react';
import { View, Text } from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={"Albums"}/>
    <AlbumList />
  </View>
);

export default App;
