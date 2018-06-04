import constants from '../../constants';
import scenes from '../../scenes';

const addCommandToLog = (log, command) => `${log}<span class="command">&gt; ${command}</span><br />`;
const addMessageToLog = (log, message) => `${log}&gt; ${message}<br /><br />`;

const initialState = {
  log: addMessageToLog('', scenes[constants.SCENE.OUTSIDE_OFFICE].getDescription()),
};

const gameReducer = (state = initialState, action) => {
  const reducers = {
    [constants.ACTION.GAME_SUBMIT_COMMAND]: () => ({
      ...state,
      log: addCommandToLog(state.log, action.command),
    }),

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

export default gameReducer;
