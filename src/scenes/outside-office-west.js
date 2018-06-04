import gameActions from '../store/actions/game';
import constants from '../constants';

export default {
  id: constants.SCENE.OUTSIDE_OFFICE_EAST,
  name: 'East of office',
  getDescription: state =>
    'You stand outside the address you were given: 17 Budd Street, Collingwood. In front of you is an extremely shabby building covered in graffiti and torn posters. The building appears to be double storey with a roller door covering the entrance.',
  flags: [
    {
      rollerDoorOpen: false,
    },
  ],
  interactions: [
    {
      pattern: /^open (the )?(roller door|door|rollerdoor)$/,
      action: (state, dispatch) => {
        dispatch(
          gameActions.pushMessage('It appears to be locked. In any case it is filthy and you shouldn’t touch it.')
        );
      },
    },
  ],
};
