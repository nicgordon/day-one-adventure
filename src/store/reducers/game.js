import constants from '../../constants';
import scenes from '../../scenes';

const initialState = {
  log: '',
};

const addMessageToLog = (log, message) => `${log}\n\n> ${message}`;

const game = (state = initialState, action) => {
  const reducers = {
    [constants.ACTION.GAME_PUSH_MESSAGE]: () => ({
      ...state,
      log: addMessageToLog(state.log, action.message),
    }),

    [constants.ACTION.USER_MOVE]: () => ({
      ...state,
      log: addMessageToLog(state.log, scenes[action.destination].getDescription(state)),
    }),
  };

  return reducers[action.type] ? reducers[action.type]() : state;
};

export default game;
