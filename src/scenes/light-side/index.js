import constants from '../../constants';
import interactions from './interactions';

export default {
  id: constants.SCENE.LIGHT_SIDE,
  name: 'The light side',
  defaultState: {
    inventory: [],
  },
  interactions,
  getDescription: state => {
    // @TODO
    return `Placeholder...`;
  },
};
