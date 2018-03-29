// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('albums', () => App);

// Import a Library to help create a registerComponent
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => (
  <Text> Some Text </Text>
);

// Render a component into the device
AppRegistry.registerComponent('albums', () => App);
