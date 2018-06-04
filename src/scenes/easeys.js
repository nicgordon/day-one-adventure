import constants from '../constants';
import gameActions from '../store/actions/game';
import sceneActions from '../store/actions/scene';
import userActions from '../store/actions/user';

export default {
  id: constants.SCENE.EASEYS,
  name: 'Easeys',
  getDescription: state =>
    `As it turns out, the train car park is actually a burger restaurant called Easey’s.
    Delicious flame grilled burger smells fill the air. Their menu includes a burger with
    dim sims in it.`,
  defaultState: {},
  interactions: [
    {
      pattern: new RegExp(`^(${constants.WORD_GROUP.VERB.ORDER}).*burger`),
      action: (state, dispatch) => {
        dispatch(
          gameActions.pushMessage(
            'You get yourself a burger and gobble it up. Eating burgers is a great way to pass the time.'
          )
        );
        // Open the roller door to the office
        dispatch(
          sceneActions.setFlag(constants.SCENE.OUTSIDE_OFFICE, {
            rollerDoorOpen: true,
          })
        );
      },
    },
    {
      pattern: new RegExp(`^(${constants.WORD_GROUP.VERB.MOVE}) (to )?(south|inlight|the office)$`),
      action: (state, dispatch) => {
        dispatch(userActions.move(constants.SCENE.OUTSIDE_OFFICE));
      },
    },
  ],
};
