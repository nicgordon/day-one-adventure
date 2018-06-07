import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import sceneActions from '../../../store/actions/scene';

export default {
  pattern: new RegExp('^inlight4lyf$'),
  action: (state, dispatch) => {
    dispatch(gameActions.pushMessage('Nailed it. He’s in!'));
    // Set the password to recovered
    dispatch(
      sceneActions.setFlag(constants.SCENE.LIGHT_SIDE, {
        passwordRecovered: true,
      })
    );
    // Exit interactive mode
    dispatch(gameActions.toggleInteractiveMode());
  },
};
