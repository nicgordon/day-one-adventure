import constants from '../../../constants';
import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^(${constants.VERB.MOVE})`),
  action: (state, dispatch) => {
    dispatch(gameActions.pushMessage('You can’t go there just now.'));
  },
};
