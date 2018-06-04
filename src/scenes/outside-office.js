import constants from '../constants';
import gameActions from '../store/actions/game';
import userActions from '../store/actions/user';

export default {
  id: constants.SCENE.OUTSIDE_OFFICE,
  name: 'Outside Inlight HQ',
  getDescription: state =>
    `You stand outside the address you were given: 17 Budd Street, Collingwood.
    In front of you is an extremely shabby building covered in graffiti and torn posters.
    The building appears to be double storey with a roller door covering the entrance.
    To your south is a carpark and to your north someone appears to have parked a train on
    top of a building?!`,
  defaultState: {
    rollerDoorOpen: false,
  },
  interactions: [
    {
      pattern: new RegExp(`^(${constants.WORD_GROUP.VERB.OPEN}) (the )?(roller door|door|rollerdoor)$`),
      action: (state, dispatch) => {
        dispatch(
          gameActions.pushMessage('It appears to be locked. In any case it is filthy and you shouldn’t touch it.')
        );
      },
    },
    {
      pattern: new RegExp(`^(${constants.WORD_GROUP.VERB.MOVE}) (to )?(north|easey'?s)$`),
      action: (state, dispatch) => {
        dispatch(userActions.move(constants.SCENE.EASEYS));
      },
    },
  ],
};
