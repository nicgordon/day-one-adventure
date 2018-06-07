import { combineReducers } from 'redux';

import game from './game';
import people from './people';
import scenes from './scenes';
import user from './user';

export default combineReducers({ game, people, scenes, user });
