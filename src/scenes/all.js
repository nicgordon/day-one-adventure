import constants from '../constants';
import gameActions from '../store/actions/game';

export default {
  interactions: [
    {
      pattern: new RegExp(`^(${constants.WORD_GROUP.VERB.MEOW})`),
      action: (state, dispatch) => {
        dispatch(gameActions.pushMessage('You’re fired. Game over.'));
      },
    },
  ],
};
