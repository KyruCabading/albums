import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import AlbumList from './components/AlbumList';
import LoginForm from './components/LoginForm';

// Create a component
class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyA6d-G7WhII4vbtpszVStJdOGpwdyc-dhg",
      authDomain: "album-763e0.firebaseapp.com",
      databaseURL: "https://album-763e0.firebaseio.com",
      projectId: "album-763e0",
      storageBucket: "album-763e0.appspot.com",
      messagingSenderId: "475926031818"
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Login" />
        <LoginForm />
      </View>
    );
  }
}
// const App = () => (
//   <View style={{ flex: 1 }}>
//     <Header headerText="Login"/>
//   </View>
// );

// AlbumList
// const App = () => (
//   <View style={{ flex: 1 }}>
//     <Header headerText="Albums"/>
//     <AlbumList />
//   </View>
// );

export default App;
