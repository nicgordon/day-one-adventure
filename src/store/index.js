import { createStore } from 'redux';
import undoable, { includeAction } from 'redux-undo';

import constants from '../constants';
import rootReducer from './reducers';

const store = createStore(
  undoable(rootReducer, {
    filter: includeAction(constants.ACTION.GAME_SUBMIT_COMMAND),
    limit: 5,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
