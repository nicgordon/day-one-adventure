import constants from '../../constants';
import interactions from './interactions';

export default {
  id: constants.SCENE.EASEYS,
  name: 'Easeys',
  defaultState: {
    inventory: [],
  },
  interactions,
  getDescription: state =>
    `As it turns out, the train car park is actually a burger restaurant called Easey’s.
  Delicious flame grilled burger smells fill the air. Their menu includes a burger with
  dim sims in it.`,
};
