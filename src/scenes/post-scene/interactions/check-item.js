import _ from 'lodash';
import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import items from '../../../items';

const pattern = new RegExp(`^(${constants.VERB.CHECK}) (.+)$`);

export default {
  pattern,
  action: (state, dispatch, command) => {
    const itemSearchTerm = command.match(pattern)[2];
    const availableItems = _.compact(_.map(_.get(state, 'present.user.inventory', []), itemId => items[itemId]));
    const item = _.find(availableItems, availableItem => availableItem.pattern.test(itemSearchTerm));

    if (item) {
      dispatch(gameActions.pushMessage(item.getDescription(state)));
      return;
    }

    dispatch(gameActions.pushMessage('You can’t do that.'));
  },
};
