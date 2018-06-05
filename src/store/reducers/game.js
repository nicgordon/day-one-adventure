import constants from '../../constants';
import scenes from '../../scenes';

const addCommandToLog = (log, command) => `${log}<span class="command">&gt; ${command}</span><br />`;
const addMessageToLog = (log, message) => `${log}&gt; ${message}<br /><br />`;

const initialState = {
  log: addMessageToLog('', scenes[constants.SCENE.OUTSIDE_OFFICE].getDescription()),
  moves: 0,
};

const gameReducer = (state = initialState, action) => {
  const reducers = {
    [constants.ACTION.GAME_SUBMIT_COMMAND]: () => ({
      ...state,
      log: addCommandToLog(state.log, action.command),
      moves: state.moves + 1,
    }),

    [constants.ACTION.GAME_PUSH_MESSAGE]: () => ({
      ...state,
      log: addMessageToLog(state.log, action.message),
    }),

    [constants.ACTION.USER_MOVE]: () => ({
      ...state,
      log: addMessageToLog(state.log, action.description),
    }),
  };

  return reducers[action.type] ? reducers[action.type]() : state;
};

export default gameReducer;
