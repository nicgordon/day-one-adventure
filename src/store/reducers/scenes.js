import constants from '../../constants';
import scenes from '../../scenes';

const initialState = {
  [constants.SCENE.OUTSIDE_OFFICE]: '',
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
  };

  return reducers[action.type] ? reducers[action.type]() : state;
};

export default scenesReducer;
