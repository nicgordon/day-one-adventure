import get from 'lodash/get';
import includes from 'lodash/includes';

import constants from '../constants';

export default {
  name: 'Find the missing puzzle piece',
  predicate: state =>
    includes(get(state, `present.people[${constants.PERSON.LAUREN}].inventory`, []), constants.ITEM.PUZZLE_PIECE),
};
