import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import get from 'lodash/get';

export default {
  pattern: new RegExp(`^(${constants.VERB.OPEN}) (the )?door$`),
  predicate: state => get(state, `present.scenes[${constants.SCENE.OUTSIDE_OFFICE}].rollerDoorOpen`, false),
  action: (state, dispatch) => {
    const doorOpen = get(state, `present.scenes[${constants.SCENE.OUTSIDE_OFFICE}].doorOpen`, false);

    if (doorOpen) {
      dispatch(gameActions.pushMessage('The door is open, go right on in.'));
      return;
    }

    dispatch(gameActions.pushMessage('It’s locked.'));
  },
};
