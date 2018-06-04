import constants from '../constants';

export default {
  id: constants.SCENE.OUTSIDE_OFFICE_WEST,
  name: 'West of office',
  getDescription: state =>
    'You stand outside the address you were given: 17 Budd Street, Collingwood. In front of you is an extremely shabby building covered in graffiti and torn posters. The building appears to be double storey with a roller door covering the entrance.',
  flags: [
    {
      rollerDoorOpen: false,
    },
  ],
  interactions: [
    {
      test: /^open (the )?(roller door|door|rollerdoor)$/,
      action: () => {},
    },
  ],
};
