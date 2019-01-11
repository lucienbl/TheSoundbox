import Sound from 'react-native-sound';
import SoundClass from './SoundClass';
const path = '../sounds';
import * as Category from './categories';

Sound.setCategory('Playback');

const PRO = 'PRO';
const FREE = 'FREE';

export const sounds = [
  new SoundClass('1', 'Flying Free', Category.MYSTERIOUS, 'mysterious_sound.mp3', FREE),
  new SoundClass('2', 'Night Reflexion', Category.MYSTERIOUS, 'night_reflexion.mp3', FREE),
  new SoundClass('3', 'Aggressive Zombie Snarls', Category.HORROR, 'aggressive_zombie_snarls.mp3', FREE),
  new SoundClass('4', 'Alarm Clock', Category.ALARM, 'alarm_clock.mp3', FREE),
  new SoundClass('5', 'Male Zombie Roar', Category.HORROR, 'male_zombie_roar.mp3', FREE),
  new SoundClass('6', 'Laser Gun', Category.WAR, 'laser_gun.wav', FREE),
  new SoundClass('7', 'War Walkie-Talkie', Category.WAR, 'war_walkie_talkie.wav', FREE),
  new SoundClass('8', 'Nuclear Alarm', Category.ALARM, 'nuclear_alarm.wav', PRO)
];

export const sortedSound = sortByCategory();

function sortByCategory() {
  let result = {};
  let keys = [];
  sounds.forEach((data) => {
    if (!result[data.getCategory()[0]]) {
      result[data.getCategory()[0]] = [
        data
      ];
    }else{
      result[data.getCategory()[0]] = [
        ...result[data.getCategory()[0]],
        data
      ];
    }
    if (!keys.includes(data.getCategory()[0])) {
      keys.push(data.getCategory()[0]);
    }
  });
  let finalResult = [];
  keys.sort();
  keys.forEach((key) => {
    result[key].forEach((result) => {
      finalResult.push(result);
    });
  });
  return finalResult;
}
