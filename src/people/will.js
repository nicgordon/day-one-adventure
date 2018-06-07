import constants from '../constants';

export default {
  id: constants.PERSON.WILL,
  name: 'Will',
  pattern: new RegExp('will'),
  defaultState: {
    inventory: [constants.ITEM.PUZZLE_PIECE],
  },
};
