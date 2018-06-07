import _ from 'lodash';
import constants from '../../../constants';
import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^(${constants.VERB.OPEN}) (the )?door$`),
  predicate: state => _.get(state, `present.scenes[${constants.SCENE.OUTSIDE_OFFICE}].rollerDoorOpen`, false),
  action: (state, dispatch) => {
    const doorOpen = _.get(state, `present.scenes[${constants.SCENE.OUTSIDE_OFFICE}].doorOpen`, false);

    if (doorOpen) {
      dispatch(gameActions.pushMessage('The door is open, go right on in.'));
      return;
    }

    dispatch(gameActions.pushMessage('It’s locked.'));
  },
};
