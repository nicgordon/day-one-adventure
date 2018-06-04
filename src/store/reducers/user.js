import constants from '../../constants';

const initialState = {
  location: constants.SCENE.OUTSIDE_OFFICE,
};

const userReducer = (state = initialState, action) => {
  const reducers = {
    [constants.ACTION.USER_MOVE]: () => ({
      ...state,
      location: action.destination,
    }),
  };

  return reducers[action.type] ? reducers[action.type]() : state;
};

export default userReducer;
