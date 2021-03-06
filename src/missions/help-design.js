import get from 'lodash/get';

import constants from '../constants';

export default {
  name: 'Help design',
  predicate: state => get(state, `present.scenes[${constants.SCENE.LIGHT_SIDE}].designFixed`, false),
};
