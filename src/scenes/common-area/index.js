import _ from 'lodash';
import constants from '../../constants';
import interactions from './interactions';

export default {
  id: constants.SCENE.COMMON_AREA,
  name: 'Common area',
  defaultState: {
    inventory: [],
  },
  interactions,
  getDescription: state => {
    const isCoffeeMachineOff = _.get(state, `present.scenes[${constants.SCENE.KITCHEN}].coffeeMachineOff`, false);

    return `There is a long wooden table with several people sat around it on bench seats.
    A burly, bearded man named Chris is fiddling with a projector.
    ${
      isCoffeeMachineOff
        ? ''
        : 'He’s attempting to speak to the group but his voice is being drowned out by a racket eminating from the kitchen.'
    }
    A girl named Lauren is hunched over the table and is putting together an enormous puzzle.
    Felicity is waving at you from the end of the table.`;
  },
};
