import _ from 'lodash';
import constants from '../../constants';
import people from '../../people';

const initialState = _(constants.PERSON)
  .invert()
  .mapValues((key, personId) => people[personId].defaultState)
  .value();

const peopleReducer = (state = initialState, action) => {
  const reducers = {
    [constants.ACTION.USER_GIVE_ITEM]: () => {
      if (action.recipientType === constants.TYPE.PERSON) {
        const personState = {
          ...state[action.recipientId],
          inventory: _.concat(state[action.recipientId].inventory, [action.itemId]),
        };

        return {
          ...state,
          [action.recipientId]: personState,
        };
      }

      return state;
    },

    [constants.ACTION.USER_TAKE_ITEM]: () => {
      if (action.donorType === constants.TYPE.PERSON && _.includes(state[action.donorId].inventory, action.itemId)) {
        const personState = {
          ...state[action.donorId],
          inventory: _.without(state[action.donorId].inventory, action.itemId),
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
