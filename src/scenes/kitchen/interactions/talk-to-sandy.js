import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import get from 'lodash/get';

export default {
  pattern: new RegExp(`^(${constants.VERB.TALK}) sandy$`),
  predicate: state => get(state, `present.scenes[${constants.SCENE.KITCHEN}].coffeeMachineOff`, false),
  action: (state, dispatch) => {
    dispatch(gameActions.pushMessage(`<em>"Hmph."</em>`));
  },
};
