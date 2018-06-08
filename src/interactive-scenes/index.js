import constants from '../constants';
import endGame from './end-game';
import helpDesign from './help-design';
import helpDevelopment from './help-development';
import keypad from './keypad';
import personalityTest from './personality-test';
import preScene from './pre-scene';
import recoverPassword from './recover-password';

export default {
  preScene,
  [constants.INTERACTIVE_SCENE.END_GAME]: endGame,
  [constants.INTERACTIVE_SCENE.HELP_DESIGN]: helpDesign,
  [constants.INTERACTIVE_SCENE.HELP_DEVELOPMENT]: helpDevelopment,
  [constants.INTERACTIVE_SCENE.KEYPAD]: keypad,
  [constants.INTERACTIVE_SCENE.PERSONALITY_TEST]: personalityTest,
  [constants.INTERACTIVE_SCENE.RECOVER_PASSWORD]: recoverPassword,
};
