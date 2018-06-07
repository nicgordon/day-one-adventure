import _ from 'lodash';

import constants from '../constants';

export default {
  name: 'Silence the coffee machine',
  predicate: state => _.get(state, `present.scenes[${constants.SCENE.KITCHEN}].coffeeMachineOff`, false),
};
