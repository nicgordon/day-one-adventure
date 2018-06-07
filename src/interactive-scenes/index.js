import constants from '../constants';
import endGame from './end-game';
import helpDesign from './help-design';
import keypad from './keypad';
import preScene from './pre-scene';
import recoverPassword from './recover-password';

export default {
  preScene,
  [constants.INTERACTIVE_SCENE.END_GAME]: endGame,
  [constants.INTERACTIVE_SCENE.HELP_DESIGN]: helpDesign,
  [constants.INTERACTIVE_SCENE.KEYPAD]: keypad,
  [constants.INTERACTIVE_SCENE.RECOVER_PASSWORD]: recoverPassword,
};
