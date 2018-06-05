import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import sceneActions from '../../../store/actions/scene';

export default {
  pattern: new RegExp(`^(${constants.WORD_GROUP.VERB.WAIT})`),
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage('You find a comfy nook and wait. Finally someone shows up and opens the roller door.')
    );
    dispatch(
      sceneActions.setFlag(constants.SCENE.OUTSIDE_OFFICE, {
        rollerDoorOpen: true,
      })
    );
  },
};
