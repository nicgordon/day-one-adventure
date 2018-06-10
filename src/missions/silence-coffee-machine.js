import get from 'lodash/get';

import constants from '../constants';

export default {
  name: 'Silence the coffee machine',
  predicate: state => get(state, `present.scenes[${constants.SCENE.KITCHEN}].coffeeMachineOff`, false),
};
