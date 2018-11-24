import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import * as selectors from './selectors';
import * as actionCreators from './actionCreators';
import MainViewComponent from './MainViewComponent';
import PropTypes from 'prop-types';
import SoundClass from './SoundClass';

const mapStateToProps = state => ({
  currentSound: selectors.currentSound(state),
});

type Props = {};
class MainViewContainer extends Component<Props> {

  _handleClickButton = async (soundId: string) => {
    const { dispatch } = this.props;
    await dispatch(actionCreators.playSound(soundId));
  }

  render() {
    const { currentSound } = this.props;

    return (
      <MainViewComponent
        handleClickButton={this._handleClickButton}
        currentSound={currentSound}
      />
    );
  }
}

MainViewContainer.propTypes = {
  currentSound: PropTypes.instanceOf(SoundClass),
};

export default connect(mapStateToProps)(MainViewContainer);
