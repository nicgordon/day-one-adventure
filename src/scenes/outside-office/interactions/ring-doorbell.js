import _ from 'lodash';
import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import sceneActions from '../../../store/actions/scene';

export default {
  pattern: new RegExp(`^(${constants.WORD_GROUP.VERB.RING}) (the )?door ?bell$`),
  predicate: state => _.get(state, `present.scenes[${constants.SCENE.OUTSIDE_OFFICE}].rollerDoorOpen`, false),
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage(
        `After a few moments a young woman appears on the other side of the glass door.
        Opening it, she smiles at you and says:<br />
        "Hello, welcome to Inlight. I'm Christina. Come in!"`
      )
    );
    dispatch(
      sceneActions.setFlag(constants.SCENE.OUTSIDE_OFFICE, {
        doorOpen: true,
      })
    );
  },
};
