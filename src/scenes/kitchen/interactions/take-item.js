import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import get from 'lodash/get';

export default {
  pattern: new RegExp(`^(${constants.VERB.GET})`),
  predicate: state => !get(state, `present.scenes[${constants.SCENE.KITCHEN}].fridgeOpen`, false),
  action: (state, dispatch) => {
    dispatch(gameActions.pushMessage('You can’t take that.'));
  },
};
