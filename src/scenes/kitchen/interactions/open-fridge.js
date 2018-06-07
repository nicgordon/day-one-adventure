import _ from 'lodash';
import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import sceneActions from '../../../store/actions/scene';

export default {
  pattern: new RegExp(`^(${constants.VERB.OPEN}) (the )?(fridge|refrigerator)$`),
  predicate: state => !_.get(state, `present.scenes[${constants.SCENE.KITCHEN}].fridgeOpen`, false),
  action: (state, dispatch) => {
    const kitchenInventory = _.get(state, `present.scenes[${constants.SCENE.KITCHEN}].inventory`, []);
    const isWaterInFridge = _.includes(kitchenInventory, constants.ITEM.WATER);
    const isLunchInFridge = _.includes(kitchenInventory, constants.ITEM.LUNCH);
    dispatch(
      gameActions.pushMessage(
        `You check the fridge because you’re either hungry or procrastinating, probably.
        There’s this and that${isWaterInFridge || isLunchInFridge ? ':' : ' in there.'} ${
          isWaterInFridge ? 'a bottle of water, ' : ''
        }${isLunchInFridge ? 'someone’s lunch, ' : ''}${isWaterInFridge || isLunchInFridge ? 'etc.' : ''}`
      )
    );
    // Open the fridge
    dispatch(
      sceneActions.setFlag(constants.SCENE.KITCHEN, {
        fridgeOpen: true,
      })
    );
  },
};
