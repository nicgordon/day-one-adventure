import _ from 'lodash';

import constants from '../constants';

export default {
  name: 'Fix the code',
  predicate: state => _.get(state, `present.scenes[${constants.SCENE.LIGHT_SIDE}].codeFixed`, false),
};
