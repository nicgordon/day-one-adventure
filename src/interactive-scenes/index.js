import constants from '../constants';
import keypad from './keypad';
import preScene from './pre-scene';

export default {
  preScene,
  [constants.INTERACTIVE_SCENE.KEYPAD]: keypad,
};
