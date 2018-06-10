import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import get from 'lodash/get';

export default {
  pattern: new RegExp(`^(${constants.VERB.USE}) (the )?key ?pad$`),
  predicate: state => get(state, `present.scenes[${constants.SCENE.OUTSIDE_OFFICE}].rollerDoorOpen`, false),
  action: (state, dispatch) => {
    dispatch(gameActions.pushMessage('Enter the code...'));
    dispatch(gameActions.toggleInteractiveMode(constants.INTERACTIVE_SCENE.KEYPAD));
  },
};
