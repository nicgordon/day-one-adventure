import constants from '../../../constants';
import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^(${constants.WORD_GROUP.VERB.MEOW})`),
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage('You’re fired. Game over.<br /><br />...Okay, not really, but DON’T do that again.')
    );
  },
};
