import get from 'lodash/get';
import includes from 'lodash/includes';

import constants from '../constants';

export default {
  name: 'Feed Will',
  predicate: state =>
    includes(get(state, `present.people[${constants.PERSON.WILL}].inventory`, []), constants.ITEM.LUNCH),
};
