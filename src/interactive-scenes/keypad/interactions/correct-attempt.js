import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import sceneActions from '../../../store/actions/scene';

export default {
  pattern: new RegExp('^1234$'),
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage(
        'Security is a bit lax, but you got it correct! You can hear the mechanical lock opening.'
      )
    );
    // Open the door to the office
    dispatch(
      sceneActions.setFlag(constants.SCENE.OUTSIDE_OFFICE, {
        doorOpen: true,
      })
    );
    // Exit interactive mode
    dispatch(gameActions.toggleInteractiveMode());
  },
};
