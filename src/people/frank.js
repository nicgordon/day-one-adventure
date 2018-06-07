import constants from '../constants';

export default {
  id: constants.PERSON.FRANK,
  name: 'Frank',
  pattern: new RegExp('frank'),
  defaultState: {
    inventory: [],
  },
};
