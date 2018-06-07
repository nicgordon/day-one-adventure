import _ from 'lodash';
import constants from '../../../constants';
import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^(${constants.VERB.KNOCK})`),
  action: (state, dispatch) => {
    const doorOpen = _.get(state, `present.scenes[${constants.SCENE.OUTSIDE_OFFICE}].doorOpen`, false);
    const rollerDoorOpen = _.get(state, `present.scenes[${constants.SCENE.OUTSIDE_OFFICE}].rollerDoorOpen`, false);

    if (doorOpen) {
      dispatch(gameActions.pushMessage('The door is unlocked, go right on in.'));
      return;
    }

    if (rollerDoorOpen) {
      dispatch(gameActions.pushMessage('The knock echoes into the empty room. No one seems to hear.'));
      return;
    }

    dispatch(
      gameActions.pushMessage(
        'Banging on the roller door makes somewhat of a din but there doesn’t seem to be anyone in earshot.'
      )
    );
  },
};
