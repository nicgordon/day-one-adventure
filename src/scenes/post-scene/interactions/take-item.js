import _ from 'lodash';
import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import items from '../../../items';
import userActions from '../../../store/actions/user';

const pattern = new RegExp(`^(${constants.WORD_GROUP.VERB.GET}) (.+)$`);

export default {
  pattern,
  action: (state, dispatch, command) => {
    const itemSearchTerm = command.match(pattern)[2];
    const currentLocation = _.get(state, 'present.user.location');
    const sceneState = _.get(state, `present.scenes[${currentLocation}]`);
    const availableItems = _.compact(_.map(_.get(sceneState, 'inventory', []), itemId => items[itemId]));
    const item = _.find(availableItems, availableItem => availableItem.pattern.test(itemSearchTerm));

    if (item) {
      dispatch(userActions.takeItem(item.id, constants.TYPE.SCENE, currentLocation));
      dispatch(gameActions.pushMessage('Taken.'));
      return;
    }

    dispatch(gameActions.pushMessage('You can’t take that.'));
  },
};
