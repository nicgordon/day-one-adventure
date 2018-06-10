import concat from 'lodash/concat';
import constants from '../../constants';
import includes from 'lodash/includes';
import invert from 'lodash/invert';
import mapValues from 'lodash/mapValues';
import people from '../../people';
import without from 'lodash/without';

const initialState = mapValues(invert(constants.PERSON), (key, personId) => people[personId].defaultState);

const peopleReducer = (state = initialState, action) => {
  const reducers = {
    [constants.ACTION.USER_GIVE_ITEM]: () => {
      if (action.recipientType === constants.TYPE.PERSON) {
        const personState = {
          ...state[action.recipientId],
          inventory: concat(state[action.recipientId].inventory, [action.itemId]),
        };

        return {
          ...state,
          [action.recipientId]: personState,
        };
      }

      return state;
    },

    [constants.ACTION.USER_TAKE_ITEM]: () => {
      if (action.donorType === constants.TYPE.PERSON && includes(state[action.donorId].inventory, action.itemId)) {
        const personState = {
          ...state[action.donorId],
          inventory: without(state[action.donorId].inventory, action.itemId),
        };

        return {
          ...state,
          [action.donorId]: personState,
        };
      }

      return state;
    },
  };

  return reducers[action.type] ? reducers[action.type]() : state;
};

export default peopleReducer;
