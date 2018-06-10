import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import get from 'lodash/get';
import sceneActions from '../../../store/actions/scene';

export default {
  pattern: new RegExp(`^(${constants.VERB.RING}) (the )?door ?bell$`),
  predicate: state => get(state, `present.scenes[${constants.SCENE.OUTSIDE_OFFICE}].rollerDoorOpen`, false),
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage(
        `After a few moments a young woman appears on the other side of the glass door.
        Opening it, she smiles at you and says:<br />
        <em>"Hello, welcome to Inlight. I'm Christina. Come in!"</em>`
      )
    );
    dispatch(
      sceneActions.setFlag(constants.SCENE.OUTSIDE_OFFICE, {
        doorOpen: true,
      })
    );
  },
};
