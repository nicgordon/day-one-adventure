import _ from 'lodash';
import gameActions from '../../../store/actions/game';
import items from '../../../items';

export default {
  pattern: new RegExp(`^((describe|look at|check) )?inventory$`),
  action: (state, dispatch) => {
    const itemsInInventory = _(state)
      .chain()
      .get('present.user.inventory')
      .map(itemId => `<em>${items[itemId].name}</em>`)
      .join('<br />')
      .value();

    dispatch(
      gameActions.pushMessage(
        _.isEmpty(itemsInInventory)
          ? 'You don’t have any items'
          : `You have the following items:<br />${itemsInInventory}`
      )
    );
  },
};
