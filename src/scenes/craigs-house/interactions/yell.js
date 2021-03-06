import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import get from 'lodash/get';
import sceneActions from '../../../store/actions/scene';

export default {
  pattern: new RegExp(`^(${constants.VERB.YELL})`),
  action: (state, dispatch) => {
    const craigAwake = get(state, `present.scenes[${constants.SCENE.CRAIGS_HOUSE}].craigAwake`, false);
    dispatch(
      gameActions.pushMessage(
        craigAwake
          ? `Craig throws the window open:<br />
          "Y'alright mate?! Keep a lid on it ya daft git!"`
          : 'The snoring stops abruptly and the curtains crack ever so slightly. Through the gap you can make out a Craig that looks a bit worse for wear.'
      )
    );
    dispatch(
      sceneActions.setFlag(constants.SCENE.CRAIGS_HOUSE, {
        craigAwake: true,
      })
    );
  },
};
