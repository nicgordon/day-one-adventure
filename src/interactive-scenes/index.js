import constants from '../constants';
import endGame from './end-game';
import keypad from './keypad';
import preScene from './pre-scene';

export default {
  preScene,
  [constants.INTERACTIVE_SCENE.END_GAME]: endGame,
  [constants.INTERACTIVE_SCENE.KEYPAD]: keypad,
};
