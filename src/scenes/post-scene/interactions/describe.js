import constants from '../../../constants';
import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^(${constants.WORD_GROUP.VERB.DESCRIBE})$`),
  action: (state, dispatch) => {
    dispatch(gameActions.pushMessage('Describe what?'));
  },
};
