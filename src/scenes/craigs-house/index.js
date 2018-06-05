import _ from 'lodash';
import constants from '../../constants';
import interactions from './interactions';

export default {
  id: constants.SCENE.CRAIGS_HOUSE,
  name: 'Craig’s house',
  defaultState: {
    craigAwake: false,
    inventory: [constants.ITEM.CRAIGS_SURFBOARD],
  },
  interactions,
  getDescription: state => {
    const sceneState = _.get(state, `present.scenes[${constants.SCENE.CRAIGS_HOUSE}]`);

    // If there is no sceneState then this is the first time the user has come here
    const craigAwake = _.get(sceneState, 'craigAwake', false);
    const surfboardIsHere = sceneState
      ? _.includes(_.get(sceneState, 'inventory', []), constants.ITEM.CRAIGS_SURFBOARD)
      : true;
    return `A small, yellow-brick apartment block is here.
    Graffiti scrawled on the wall in black ink says, "Craig lives here".
    ${
      craigAwake
        ? 'Craig is staring at you bleary eyed through the window.'
        : 'From the street you can hear someone snoring inside.'
    }
    ${surfboardIsHere ? 'A surfboard is leaning up against the wall beside the front door.' : ''}`;
  },
};
