import _ from 'lodash';
import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import userActions from '../../../store/actions/user';

export default {
  pattern: new RegExp(`^(${constants.VERB.CHECK}) (the )?(handwritten )?note`),
  predicate: state => _.get(state, `present.scenes[${constants.SCENE.FOYER}].readBook`, false),
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage(
        `You take the handwritten note out of the book and examine it closely. It says:<br />
        .. -. .-.. .. --. .... - ....- .-.. -.-- ..-.`
      )
    );
    dispatch(userActions.takeItem(constants.ITEM.PASSWORD_NOTE, constants.TYPE.SCENE, constants.SCENE.FOYER));
  },
};
