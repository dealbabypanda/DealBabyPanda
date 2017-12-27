/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import * as firebase from 'firebase';
import {Input} from './components/input';
import {Button} from './components/button';
import {GoogleSignin} from 'react-native-google-signin';
import {FirebaseApp} from './firebase/firebaseApp';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
state = {
  email: '',
  password: '',
  authenticating: false,
}

componentWillMount() {
  GoogleSignin.configure({});
}
renderCurrentState() {
  if (this.state.authenticating) {
    return(<View style={styles.form}>
    <ActivityIndicator size='large' />
    </View>);
  } else {
    return(
      <View style={styles.form}>
      <Button onPress={() => this.onPressSignInGoogle()}>Log In with Google</Button>
      </View>
    );
  }
}

onPressSignInGoogle() {
  var googleProvider = new firebase.auth.GoogleAuthProvider();
  console.log('Entering signin');
  GoogleSignin.signIn()
  .then((user) => { 
    console.log(user);
    var credential = googleProvider.credential(idToken = user.idToken, accessToken = user.accessToken);
    firebase.auth().signInWithCredential(credential)
    .then(u => {
      console.log('Im logged in now');
    })
    .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err));
}

  render() {
    return (
     <View style={styles.container}>
      {this.renderCurrentState()}
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  form:{
    flex: 1,
  }
});
