import _ from 'lodash';

import constants from '../constants';

export default {
  name: 'Find the missing puzzle piece',
  predicate: state =>
    _.includes(_.get(state, `present.people[${constants.PERSON.LAUREN}].inventory`, []), constants.ITEM.PUZZLE_PIECE),
};
