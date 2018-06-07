import constants from '../../constants';

export default {
  id: constants.ITEM.WATER,
  name: 'A bottle of water',
  pattern: new RegExp('(the )?(bottle of )?water( bottle)?$'),
  getDescription: state => `A glass bottle containing some thoroughly hydrating liquid.`,
};
