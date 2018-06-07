import constants from '../../../constants';
import userActions from '../../../store/actions/user';

export default {
  pattern: new RegExp(`^(${constants.VERB.MOVE}) (to the )?(south|toilets?|bathroom)$`),
  action: (state, dispatch) => {
    dispatch(userActions.move(constants.SCENE.TOILET));
  },
};
