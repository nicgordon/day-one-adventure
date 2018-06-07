import _ from 'lodash';
import constants from '../../constants';
import interactions from './interactions';

export default {
  id: constants.SCENE.KITCHEN,
  name: 'Kitchen',
  defaultState: {
    coffeeMachineOff: false,
    fridgeOpen: false,
    inventory: [constants.ITEM.LUNCH, constants.ITEM.WATER],
  },
  interactions,
  getDescription: state => {
    const isCoffeeMachineOff = _.get(state, `present.scenes[${constants.SCENE.KITCHEN}].coffeeMachineOff`, false);
    return isCoffeeMachineOff
      ? `Pretty standard kitchen set up: there’s a very silent coffee machine and a fridge.
        There’s also a man named Sandy who looks downright grumpy about the lack of coffee.`
      : `It’s a cosy kitchen with a few people milling around the fridge,
        but right now you can’t hear yourself think over the insanely loud coffee machine.`;
  },
};
