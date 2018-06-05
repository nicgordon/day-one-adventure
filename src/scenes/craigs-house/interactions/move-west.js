import constants from '../../../constants';
import userActions from '../../../store/actions/user';

export default {
  pattern: new RegExp(`^(${constants.WORD_GROUP.VERB.MOVE}) (to )?(west|inlight|the office)$`),
  action: (state, dispatch) => {
    dispatch(userActions.move(constants.SCENE.OUTSIDE_OFFICE));
  },
};
