import constants from '../../../constants';
import userActions from '../../../store/actions/user';

export default {
  pattern: new RegExp(`^(${constants.VERB.MOVE}) (to )?(south|inlight|the office)$`),
  action: (state, dispatch) => {
    dispatch(userActions.move(constants.SCENE.OUTSIDE_OFFICE));
  },
};
