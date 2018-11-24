import { createAction } from '../actions/index';
import * as soundManager from './soundManager';
import * as sounds from './sounds';
import Snackbar from 'react-native-snackbar';

export const PLAY_SOUND = 'PLAY_SOUND';

export const playSound = (soundId: string) =>
  async (dispatch: any) => {
    let currentSound;
    sounds.sounds.forEach((data) => {
      if (data.getId() === soundId) {
        Snackbar.show({
          title: `Playing ${data.getName()}...`,
          duration: Snackbar.LENGTH_LONG,
        });
        currentSound = data;
      }
    });
    soundManager.playSound(currentSound);
    await dispatch(createAction(PLAY_SOUND, {
      currentSound
    }));
  };
