import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import MainViewContainer from './MainView/MainViewContainer';
import NavBar from './uiUtils/NavBar';
import * as Colors from './styles/colors';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const ALL_SOUNDS = 'ALL_SOUNDS';
const FAVORITES = 'FAVORITES';
const CATEGORIES = 'CATEGORIES';
const SETTINGS = 'SETTINGS';

const tabs = [
    {
      key: ALL_SOUNDS,
      icon: 'music',
      label: 'All Sounds',
      barColor: Colors.primary,
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: FAVORITES,
      icon: 'heart',
      label: 'Favorites',
      barColor: Colors.secondary,
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: CATEGORIES,
      icon: 'clone',
      label: 'Categories',
      barColor: Colors.primary,
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: SETTINGS,
      icon: 'cog',
      label: 'Settings',
      barColor: Colors.secondary,
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
];

type Props = {};
export default class RootNavigator extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: ALL_SOUNDS,
    };
  }

  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  )

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )

  render() {
    const { activeTab } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={Colors.primaryDark}
          barStyle="light-content"
        />
        <NavBar />
        <View style={{ flex: 1 }}>
          {activeTab === ALL_SOUNDS && <MainViewContainer />}
        </View>
        <BottomNavigation
          onTabPress={newTab => this.setState({ activeTab: newTab.key })}
          renderTab={this.renderTab}
          tabs={tabs}
        />
      </View>
    );
  }
}
