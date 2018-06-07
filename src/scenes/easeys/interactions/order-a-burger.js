import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import sceneActions from '../../../store/actions/scene';

export default {
  pattern: new RegExp(`^(${constants.VERB.ORDER}).*burger`),
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage(
        'You get yourself a burger and gobble it up. Eating burgers is a great way to pass the time.'
      )
    );
    // Open the roller door to the office
    dispatch(
      sceneActions.setFlag(constants.SCENE.OUTSIDE_OFFICE, {
        rollerDoorOpen: true,
      })
    );
  },
};
