import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import get from 'lodash/get';
import sceneActions from '../../../store/actions/scene';

export default {
  pattern: new RegExp(`^(${constants.VERB.CLOSE}) (the )?(fridge|refrigerator)$`),
  predicate: state => get(state, `present.scenes[${constants.SCENE.KITCHEN}].fridgeOpen`, false),
  action: (state, dispatch) => {
    dispatch(gameActions.pushMessage('Very decent of you.'));
    // Close the fridge
    dispatch(
      sceneActions.setFlag(constants.SCENE.KITCHEN, {
        fridgeOpen: false,
      })
    );
  },
};
