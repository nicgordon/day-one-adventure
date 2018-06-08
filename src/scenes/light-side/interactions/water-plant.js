import _ from 'lodash';
import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import sceneActions from '../../../store/actions/scene';
import userActions from '../../../store/actions/user';

export default {
  pattern: new RegExp(`^((give|pour|put) )?water ((on|to) )?(the )?(plant|frank)`),
  predicate: state => _.includes(_.get(state, `present.user.inventory`, []), constants.ITEM.WATER),
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage(
        `<em>"Wooah buddy that was so refreshing. Thanks a million. You wouldn’t happen to have any sun would you?"</em>`
      )
    );
    // Take the water out of the user’s inventory
    dispatch(userActions.giveItem(constants.ITEM.WATER));
    // Mark Frank as having been watered
    dispatch(
      sceneActions.setFlag(constants.SCENE.LIGHT_SIDE, {
        frankWatered: true,
      })
    );
  },
};
