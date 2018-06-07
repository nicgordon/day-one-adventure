import constants from '../../../constants';
import userActions from '../../../store/actions/user';

export default {
  pattern: new RegExp(`^(${constants.VERB.MOVE}) east$`),
  action: (state, dispatch) => {
    dispatch(userActions.move(constants.SCENE.CRAIGS_HOUSE));
  },
};
