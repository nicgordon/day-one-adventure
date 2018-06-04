import constants from '../../constants';

const initialState = {
  [constants.SCENE.OUTSIDE_OFFICE_EAST]: '',
};

const scenes = (state = initialState, action) => {
  const reducers = {
    [constants.ACTION.SCENE_UPDATE]: () => ({
      ...state,
      [action.scene]: action.state,
    }),
  };

  return reducers[action.type] ? reducers[action.type]() : state;
};

export default scenes;
