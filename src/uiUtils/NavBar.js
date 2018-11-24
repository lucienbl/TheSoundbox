import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import * as Colors from '../styles/colors';

type Props = {};
class NavBar extends Component<Props> {

  render() {
    return (
      <View elevation={8} style={styles.appBar}>
        <Text style={styles.appBarText}>TheSoundBox</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appBar: {
    height: 56,
    width: '100%',
    backgroundColor: Colors.primary,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  appBarText: {
    color: 'white',
    fontSize: 18
  },
});

export default NavBar;
