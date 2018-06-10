import gameActions from '../../../store/actions/game';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import items from '../../../items';
import join from 'lodash/join';
import map from 'lodash/map';

export default {
  pattern: new RegExp(`^((describe|look at|check) )?inventory$`),
  action: (state, dispatch) => {
    const itemsInInventory = join(
      map(get(state, 'present.user.inventory'), itemId => `<em>${items[itemId].name}</em>`),
      '<br />'
    );

    dispatch(
      gameActions.pushMessage(
        isEmpty(itemsInInventory)
          ? 'You don’t have any items'
          : `You have the following items:<br />${itemsInInventory}`
      )
    );
  },
};
