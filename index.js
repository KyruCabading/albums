// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('albums', () => App);

// Import a Library to help create a registerComponent
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View>
    <Header headerText={"Albums"}/>
    <AlbumList />
  </View>
);

// Render a component into the device
AppRegistry.registerComponent('albums', () => App);
