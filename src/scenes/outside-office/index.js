import constants from '../../constants';
import get from 'lodash/get';
import has from 'lodash/has';
import interactions from './interactions';

export default {
  id: constants.SCENE.OUTSIDE_OFFICE,
  name: 'Outside Inlight HQ',
  defaultState: {
    doorOpen: false,
    rollerDoorOpen: false,
    inventory: [],
  },
  interactions,
  getDescription: state => {
    const firstMove = get(state, 'present.game.moves', 0) === 0;
    const rollerDoorOpen = get(state, `present.scenes[${constants.SCENE.OUTSIDE_OFFICE}].rollerDoorOpen`, false);
    const visitedEaseys = has(get(state, 'present.scenes'), constants.SCENE.EASEYS);

    return `${
      firstMove
        ? `You stand outside the address you were given: 17 Budd Street, Collingwood.
          When you took the job you thought it might be for a lighting company or a church
          group. Turns out Inlight is a digital agency. You probably should have guessed.<br /><br />`
        : ''
    }
    In front of you is an extremely shabby building covered in graffiti and torn posters.
    ${
      rollerDoorOpen
        ? 'With the roller door up a glass facade greets you and through it you can see a neon sign glowing. There’s a doorbell and a keypad beside the glass door.'
        : 'The building appears to be double storey with a roller door covering the entrance.'
    }
    To the south is a carpark and to the north ${
      visitedEaseys ? 'is Easey’s.' : 'someone appears to have parked a train on top of a building?!'
    }`;
  },
};
