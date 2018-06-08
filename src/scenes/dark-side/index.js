import constants from '../../constants';
import interactions from './interactions';

export default {
  id: constants.SCENE.DARK_SIDE,
  name: 'The dark side',
  defaultState: {
    inventory: [constants.ITEM.TOILET_PAPER],
  },
  interactions,
  getDescription: state => {
    return `The light in here is very dim and the imperial march is playing softly on repeat.
      You feel your way around in the darkness and stumble upon a vitamin D deficient character
      named Will who has built himself a fort out of spare toilet paper rolls.
      He looks a bit deranged and he beckons you closer.`;
  },
};
