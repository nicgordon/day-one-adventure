import get from 'lodash/get';

import constants from '../constants';

export default {
  name: 'Recover a password',
  predicate: state => get(state, `present.scenes[${constants.SCENE.LIGHT_SIDE}].passwordRecovered`, false),
};
