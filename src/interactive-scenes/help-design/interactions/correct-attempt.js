import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import sceneActions from '../../../store/actions/scene';

export default {
  pattern: new RegExp('^(option )?(a|b)$'),
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage(
        `Hmmmm, yeah nah I'm going to go with the other one. Thanks for your help though!
        This was fun, we should do it more often!`
      )
    );
    // Flag design as helped
    dispatch(
      sceneActions.setFlag(constants.SCENE.LIGHT_SIDE, {
        designFixed: true,
      })
    );
    // Exit interactive mode
    dispatch(gameActions.toggleInteractiveMode());
  },
};
