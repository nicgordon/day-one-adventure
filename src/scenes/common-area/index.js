// import _ from 'lodash';
import constants from '../../constants';
import interactions from './interactions';

export default {
  id: constants.SCENE.COMMON_AREA,
  name: 'Common area',
  defaultState: {},
  interactions,
  getDescription: state => {
    // const sceneState = _.get(state, `present.scenes[${constants.SCENE.COMMON_AREA}]`);

    // If there is no sceneState then this is the first time the user has come here
    return `There is a long wooden table with several people sat around it on bench seats.
    A burly, bearded man named Chris is fiddling with a projector.
    He’s attempting to speak to the group but his voice is being drowned out by a racket eminating from the kitchen.
    A girl named Lauren is hunched over the table and is putting together an enormous puzzle.
    Felicity is waving at you from the end of the table.`;
  },
};
