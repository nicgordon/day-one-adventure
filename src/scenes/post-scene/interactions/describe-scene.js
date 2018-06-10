import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import get from 'lodash/get';
import scenes from '../../../scenes';

export default {
  pattern: new RegExp(`^(${constants.VERB.DESCRIBE}) scene$`),
  action: (state, dispatch) => {
    const currentLocation = get(state, 'present.user.location');
    dispatch(gameActions.pushMessage(scenes[currentLocation].getDescription(state)));
  },
};
