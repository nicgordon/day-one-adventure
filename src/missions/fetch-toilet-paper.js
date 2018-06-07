import _ from 'lodash';

import constants from '../constants';

export default {
  name: 'Fetch toilet paper',
  predicate: state =>
    _.includes(_.get(state, `present.scenes[${constants.SCENE.TOILET}].inventory`, []), constants.ITEM.TOILET_PAPER),
};
