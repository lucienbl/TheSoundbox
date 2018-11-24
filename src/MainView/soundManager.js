import * as sounds from './sounds';
import SoundClass from './SoundClass';

export const playSound = (currentSound: SoundClass) => {
  currentSound.playSound();
}
