import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import * as sounds from './sounds';
import GridView from 'react-native-super-grid';
import * as Colors from '../styles/colors';
import SoundClass from './SoundClass';

type Props = {};
class MainViewComponent extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
      lastCategory: '',
    };
  }

  render() {
    const { handleClickButton, currentSound } = this.props;
    let lastCategory = '';

    return (
      <View>
        <ScrollView style={styles.container}>
          {sounds.sortedSound.map((item) => {
            let lastCategory1 = lastCategory;
            lastCategory = item.getCategory()[0];
            return(
              <View>
                {item.getCategory()[0] !== lastCategory1 && <Text style={{ marginTop: 10 }}>{item.getCategory()[0]}</Text>}
                <TouchableOpacity style={{ marginTop: 5 }} onPress={() => handleClickButton(item.getId())}>
                  <View style={[styles.itemContainer, { backgroundColor: item.getCategory()[1] }]}>
                    <Text style={styles.itemName}>{item.getName()}</Text>
                    <Text style={styles.itemCategory}>{item.getCategory()[0]}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: 5,
    marginLeft: 5
  },
  gridView: {
    paddingTop: 25
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    height: 70,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCategory: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});

MainViewComponent.propTypes = {
  handleClickButton: PropTypes.func.isRequired,
  currentSound: PropTypes.instanceOf(SoundClass),
};

export default MainViewComponent;
