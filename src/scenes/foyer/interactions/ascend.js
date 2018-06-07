import constants from '../../../constants';
import userActions from '../../../store/actions/user';

export default {
  pattern: new RegExp(`^(${constants.VERB.ASCEND})`),
  action: (state, dispatch) => {
    dispatch(userActions.move(constants.SCENE.COMMON_AREA));
  },
};
