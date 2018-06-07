import _ from 'lodash';

import constants from '../constants';

export default {
  name: 'Feed Will',
  predicate: state =>
    _.includes(_.get(state, `present.people[${constants.PERSON.WILL}].inventory`, []), constants.ITEM.LUNCH),
};
