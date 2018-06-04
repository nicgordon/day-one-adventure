import { combineReducers } from 'redux';

import game from './game';
import scenes from './scenes';
import user from './user';

export default combineReducers({ game, scenes, user });
