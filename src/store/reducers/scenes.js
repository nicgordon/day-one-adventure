import concat from 'lodash/concat';
import constants from '../../constants';
import includes from 'lodash/includes';
import scenes from '../../scenes';
import without from 'lodash/without';

const initialState = {
  [constants.SCENE.OUTSIDE_OFFICE]: scenes[constants.SCENE.OUTSIDE_OFFICE].defaultState,
};

const scenesReducer = (state = initialState, action) => {
  const reducers = {
    [constants.ACTION.SCENE_SET_FLAG]: () => ({
      ...state,
      [action.sceneId]: {
        ...state[action.sceneId],
        ...action.flag,
      },
    }),

    [constants.ACTION.USER_MOVE]: () => {
      if (state[action.destination]) {
        return state;
      }

      return {
        ...state,
        [action.destination]: scenes[action.destination].defaultState,
      };
    },

    [constants.ACTION.USER_GIVE_ITEM]: () => {
      if (action.recipientType === constants.TYPE.SCENE) {
        const sceneState = {
          ...state[action.recipientId],
          inventory: concat(state[action.recipientId].inventory, [action.itemId]),
        };

        return {
          ...state,
          [action.recipientId]: sceneState,
        };
      }

      return state;
    },

    [constants.ACTION.USER_TAKE_ITEM]: () => {
      if (action.donorType === constants.TYPE.SCENE && includes(state[action.donorId].inventory, action.itemId)) {
        const sceneState = {
          ...state[action.donorId],
          inventory: without(state[action.donorId].inventory, action.itemId),
        };

        return {
          ...state,
          [action.donorId]: sceneState,
        };
      }

      return state;
    },
  };

  return reducers[action.type] ? reducers[action.type]() : state;
};

export default scenesReducer;
