import constants from '../../../constants';
import userActions from '../../../store/actions/user';

export default {
  pattern: new RegExp(`^(${constants.WORD_GROUP.VERB.MOVE}) (to )?(north|easey'?s)$`),
  action: (state, dispatch) => {
    dispatch(userActions.move(constants.SCENE.EASEYS));
  },
};
