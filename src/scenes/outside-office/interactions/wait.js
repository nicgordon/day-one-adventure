import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import get from 'lodash/get';
import sceneActions from '../../../store/actions/scene';

export default {
  pattern: new RegExp(`^(${constants.VERB.WAIT})`),
  action: (state, dispatch) => {
    const isRollerDoorOpen = get(state, `present.scenes[${constants.SCENE.OUTSIDE_OFFICE}].rollerDoorOpen`, false);
    dispatch(
      gameActions.pushMessage(
        isRollerDoorOpen
          ? 'You’ve probably been waiting around for long enough now. Time to get on with it.'
          : 'You find a comfy nook and wait. Finally someone shows up and opens the roller door.'
      )
    );
    dispatch(
      sceneActions.setFlag(constants.SCENE.OUTSIDE_OFFICE, {
        rollerDoorOpen: true,
      })
    );
  },
};
