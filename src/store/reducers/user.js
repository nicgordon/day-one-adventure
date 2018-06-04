import constants from '../../constants';

const initialState = {
  location: null,
};

const user = (state = initialState, action) => {
  const reducers = {
    [constants.ACTION.USER_MOVE]: () => ({
      ...state,
      location: action.destination,
    }),
  };

  return reducers[action.type] ? reducers[action.type]() : state;
};

export default user;
