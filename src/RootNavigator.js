import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import MainViewContainer from './MainView/MainViewContainer';
import NavBar from './uiUtils/NavBar';
import * as Colors from './styles/colors';

type Props = {};
export default class RootNavigator extends Component<Props> {
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor={Colors.primaryDark}
          barStyle="light-content"
        />
        <NavBar />
        <MainViewContainer />
      </View>
    );
  }
}
