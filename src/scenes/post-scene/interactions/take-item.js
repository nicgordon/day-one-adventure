import compact from 'lodash/compact';
import constants from '../../../constants';
import find from 'lodash/find';
import gameActions from '../../../store/actions/game';
import get from 'lodash/get';
import items from '../../../items';
import map from 'lodash/map';
import userActions from '../../../store/actions/user';

const pattern = new RegExp(`^(${constants.VERB.GET}) (.+)$`);

export default {
  pattern,
  action: (state, dispatch, command) => {
    const itemSearchTerm = command.match(pattern)[2];
    const currentLocation = get(state, 'present.user.location');
    const sceneState = get(state, `present.scenes[${currentLocation}]`);
    const availableItems = compact(map(get(sceneState, 'inventory', []), itemId => items[itemId]));
    const item = find(availableItems, availableItem => availableItem.pattern.test(itemSearchTerm));

    if (item) {
      dispatch(userActions.takeItem(item.id, constants.TYPE.SCENE, currentLocation));
      dispatch(gameActions.pushMessage('Taken.'));
      return;
    }

    dispatch(gameActions.pushMessage('You can’t take that.'));
  },
};
