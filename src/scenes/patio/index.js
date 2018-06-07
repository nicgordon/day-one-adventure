import constants from '../../constants';
import interactions from './interactions';

export default {
  id: constants.SCENE.PATIO,
  name: 'The deck',
  defaultState: {
    inventory: [],
  },
  interactions,
  getDescription: state => 'A lovely deck to escape to for a bit of sunshine.',
};
