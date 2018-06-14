import findKey from 'lodash/findKey';
import get from 'lodash/get';
import mapValues from 'lodash/mapValues';

import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import scenes from '../../';
import userActions from '../../../store/actions/user';

const pattern = new RegExp(`^(${constants.VERB.MOVE}) ?(.*)`);

export default {
  pattern,
  action: (state, dispatch, command) => {
    const scenePatterns = mapValues(scenes, scene => scene.pattern);

    const destination = command.match(pattern)[2];
    const sceneDestination = findKey(scenePatterns, scene => scene && scene.test(destination));
    // If there is a match and the user has already visited that place then go directly there
    if (sceneDestination && get(state, `present.scenes[${sceneDestination}]`)) {
      if (get(state, 'present.user.location') === sceneDestination) {
        dispatch(gameActions.pushMessage('You are already there!'));
        return;
      }

      dispatch(userActions.move(sceneDestination));
      return;
    }

    const moveTerm = command.match(pattern)[1];
    dispatch(
      gameActions.pushMessage(
        `Sorry, where did you want to ${moveTerm}?${destination ? ' I don’t recognise that place.' : ''}`
      )
    );
  },
};
