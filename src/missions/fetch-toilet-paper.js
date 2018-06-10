import get from 'lodash/get';
import includes from 'lodash/includes';

import constants from '../constants';

export default {
  name: 'Fetch toilet paper',
  predicate: state =>
    includes(get(state, `present.scenes[${constants.SCENE.TOILET}].inventory`, []), constants.ITEM.TOILET_PAPER),
};
