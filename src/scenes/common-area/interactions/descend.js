import constants from '../../../constants';
import userActions from '../../../store/actions/user';

export default {
  pattern: new RegExp(`^(${constants.VERB.DESCEND})`),
  action: (state, dispatch) => {
    dispatch(userActions.move(constants.SCENE.FOYER));
  },
};
