import _ from 'lodash';
import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import userActions from '../../../store/actions/user';

export default {
  pattern: new RegExp(`^(${constants.WORD_GROUP.VERB.MOVE}) (west|inside|in)$`),
  action: (state, dispatch) => {
    const doorOpen = _.get(state, `present.scenes[${constants.SCENE.OUTSIDE_OFFICE}].doorOpen`, false);
    const rollerDoorOpen = _.get(state, `present.scenes[${constants.SCENE.OUTSIDE_OFFICE}].rollerDoorOpen`, false);

    if (doorOpen) {
      dispatch(userActions.move(constants.SCENE.COMMON_AREA));
      return;
    }

    if (rollerDoorOpen) {
      dispatch(gameActions.pushMessage('The glass door is locked.'));
      return;
    }

    dispatch(
      gameActions.pushMessage(
        'The roller door appears to be locked. In any case it is filthy and you shouldn’t touch it.'
      )
    );
  },
};
