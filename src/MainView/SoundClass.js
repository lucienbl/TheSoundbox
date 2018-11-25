import Sound from 'react-native-sound';

export default class SoundClass {

  constructor(id, name, category, sound, model) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.sound = sound;
    this.model = model;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getCategory() {
    return this.category;
  }

  isPro() {
    if (this.model === 'PRO') {
      return true;
    }
    return false;
  }

  async playSound() {
    let sound = await SoundClass._loadSound(this.sound);
    sound.setVolume(1);
    sound.play((success) => {
      if (success) {
        console.log('Successfully finished playing');
      } else {
        console.log('Playback failed due to audio decoding errors');
        sound.reset();
      }
    });
    return true;
  }

  static _loadSound(fileName: string): Promise<any> {
    return new Promise((resolve) => {
      const sound = new Sound(fileName, Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log(error);
          resolve(undefined);
          return;
        }
        resolve(sound);
      });
    });
  }
}
