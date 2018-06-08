import { applyMiddleware, compose, createStore } from 'redux';
import undoable, { includeAction } from 'redux-undo';
import thunk from 'redux-thunk';

import constants from '../constants';
import rootReducer from './reducers';

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  undoable(rootReducer, {
    filter: includeAction(constants.ACTION.GAME_SUBMIT_COMMAND),
    limit: 5,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
