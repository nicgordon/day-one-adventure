import constants from '../../constants';
import get from 'lodash/get';
import interactions from './interactions';

export default {
  id: constants.SCENE.TOILET,
  name: 'Toilets',
  defaultState: {
    toiletPaperProvided: false,
    inventory: [],
  },
  interactions,
  getDescription: state => {
    const isToiletPaperProvided = get(state, `present.scenes[${constants.SCENE.TOILET}].toiletPaperProvided`, false);

    return isToiletPaperProvided
      ? 'A couple of toilets and a sink. Nothing to see here. Stop checking yourself out in the mirror.'
      : 'Someone is definitely pooping in here. They seem to be calling out for assistance.';
  },
};
