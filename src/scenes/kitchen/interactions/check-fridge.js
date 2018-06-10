import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import get from 'lodash/get';

export default {
  pattern: new RegExp(`^(${constants.VERB.CHECK}) (the )?(fridge|refrigerator)$`),
  action: (state, dispatch) => {
    const isFridgeOpen = get(state, `present.scenes[${constants.SCENE.KITCHEN}].fridgeOpen`, false);
    dispatch(gameActions.pushMessage(`The fridge is ${isFridgeOpen ? 'open' : 'closed'}.`));
  },
};
