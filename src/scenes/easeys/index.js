import constants from '../../constants';
import interactions from './interactions';

export default {
  id: constants.SCENE.EASEYS,
  name: 'Easeys',
  pattern: new RegExp(`easey'?s`),
  defaultState: {
    inventory: [],
  },
  interactions,
  getDescription: state =>
    `As it turns out, the train car park is actually a burger restaurant called Easey’s.
  The smell of delicious flame grilled burgers wafts through the air. Their menu includes a burger with
  dim sims in it.`,
};
