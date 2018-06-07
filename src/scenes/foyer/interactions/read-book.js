import _ from 'lodash';
import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import sceneActions from '../../../store/actions/scene';

export default {
  pattern: new RegExp(`^(${constants.VERB.CHECK}) (a )?book$`),
  action: (state, dispatch) => {
    const userHasTakenNote = !_.includes(
      _.get(state, `present.scenes[${constants.SCENE.FOYER}].inventory`),
      constants.ITEM.PASSWORD_NOTE
    );
    dispatch(
      gameActions.pushMessage(
        `You grab a book down off the shelf.
        It’s titled ‘The Art of Software Testing’.
        You wonder who on earth would read such a thing.
        ${
          userHasTakenNote
            ? ''
            : 'As you flip through it you notice a handwritten note is stuck in between two of the pages.'
        }`
      )
    );
    dispatch(
      sceneActions.setFlag(constants.SCENE.FOYER, {
        readBook: true,
      })
    );
  },
};
