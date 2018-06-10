import concat from 'lodash/concat';
import constants from '../../constants';
import without from 'lodash/without';

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
      inventory: without(state.inventory, action.itemId),
    }),

    [constants.ACTION.USER_TAKE_ITEM]: () => ({
      ...state,
      inventory: concat(state.inventory, [action.itemId]),
    }),
  };

  return reducers[action.type] ? reducers[action.type]() : state;
};

export default userReducer;
