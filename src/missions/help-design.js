import _ from 'lodash';

import constants from '../constants';

export default {
  name: 'Help design',
  predicate: state => _.get(state, `present.scenes[${constants.SCENE.LIGHT_SIDE}].designFixed`, false),
};
