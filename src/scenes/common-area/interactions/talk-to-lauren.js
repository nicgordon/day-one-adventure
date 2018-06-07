import constants from '../../../constants';
import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^(${constants.VERB.TALK}) (lauren|lauz|loz|lozza)$`),
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage(
        `<em>"Jeepers, this puzzle is hard. If you happen to find a red edge piece let me know!"</em>`
      )
    );
  },
};
