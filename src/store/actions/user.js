import constants from '../../constants';
import scenes from '../../scenes';

export default {
  move: destination => (dispatch, getState) => {
    const state = getState();

    dispatch({
      type: constants.ACTION.USER_MOVE,
      destination,
      description: scenes[destination].getDescription(state),
    });
  },
};
