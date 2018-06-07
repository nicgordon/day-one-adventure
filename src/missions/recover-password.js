import _ from 'lodash';

import constants from '../constants';

export default {
  name: 'Recover a password',
  predicate: state => _.get(state, `present.scenes[${constants.SCENE.LIGHT_SIDE}].passwordRecovered`, false),
};
