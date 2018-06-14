import compact from 'lodash/compact';
import constants from '../../../constants';
import find from 'lodash/find';
import gameActions from '../../../store/actions/game';
import get from 'lodash/get';
import items from '../../../items';
import map from 'lodash/map';

const pattern = new RegExp(`^(?:${constants.VERB.CHECK}) (.+)$`);

export default {
  pattern,
  action: (state, dispatch, command) => {
    const itemSearchTerm = command.match(pattern)[1];
    const availableItems = compact(map(get(state, 'present.user.inventory', []), itemId => items[itemId]));
    const item = find(availableItems, availableItem => availableItem.pattern.test(itemSearchTerm));

    if (item) {
      dispatch(gameActions.pushMessage(item.getDescription(state)));
      return;
    }

    dispatch(gameActions.pushMessage('You can’t do that.'));
  },
};
