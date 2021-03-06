import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import get from 'lodash/get';

export default {
  pattern: new RegExp(`^(${constants.VERB.TALK}) james`),
  action: (state, dispatch) => {
    const isPasswordRecovered = get(state, `present.scenes[${constants.SCENE.LIGHT_SIDE}].passwordRecovered`, false);
    dispatch(
      gameActions.pushMessage(
        isPasswordRecovered
          ? `He’s drilling something with vigor. Best not go near.`
          : `<em>"Dude, I can’t remember my password. I even wrote it down somewhere.
          I’ve tried every heuristic I can think of to try and remember it. Here, you try..."</em>`
      )
    );
    if (!isPasswordRecovered) {
      dispatch(gameActions.toggleInteractiveMode(constants.INTERACTIVE_SCENE.RECOVER_PASSWORD));
    }
  },
};
