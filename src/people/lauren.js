import constants from '../constants';

export default {
  id: constants.PERSON.LAUREN,
  name: 'Lauren',
  pattern: new RegExp('lauren|lauz|lozza|loz'),
  defaultState: {
    inventory: [],
  },
};
