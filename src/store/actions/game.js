import constants from '../../constants';

export default {
  gameOver: () => ({
    type: constants.ACTION.GAME_OVER,
  }),

  pushMessage: message => ({
    type: constants.ACTION.GAME_PUSH_MESSAGE,
    message,
  }),

  submitCommand: command => ({
    type: constants.ACTION.GAME_SUBMIT_COMMAND,
    command,
  }),

  toggleInteractiveMode: scene => ({
    type: constants.ACTION.GAME_TOGGLE_INTERACTIVE_MODE,
    scene,
  }),
};
