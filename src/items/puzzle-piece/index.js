import constants from '../../constants';

export default {
  id: constants.ITEM.PUZZLE_PIECE,
  name: 'A puzzle piece',
  pattern: new RegExp('(a|the )?(jigsaw|puzzle) piece$'),
  getDescription: state => 'A puzzle piece that is red and has a straight edge on one side.',
};
