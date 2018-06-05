import _ from 'lodash';
import constants from '../../constants';

const initialState = {
  inventory: [],
  location: constants.SCENE.OUTSIDE_OFFICE,
};

const userReducer = (state = initialState, action) => {
  const reducers = {
    [constants.ACTION.USER_MOVE]: () => ({
      ...state,
      location: action.destination,
    }),

    [constants.ACTION.USER_GIVE_ITEM]: () => ({
      ...state,
      inventory: _.without(state.inventory, action.itemId),
    }),

    [constants.ACTION.USER_TAKE_ITEM]: () => ({
      ...state,
      inventory: _.concat(state.inventory, [action.itemId]),
    }),
  };

  return reducers[action.type] ? reducers[action.type]() : state;
};

export default userReducer;
