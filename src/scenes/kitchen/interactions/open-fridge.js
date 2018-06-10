import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import get from 'lodash/get';
import includes from 'lodash/includes';
import sceneActions from '../../../store/actions/scene';

export default {
  pattern: new RegExp(`^(${constants.VERB.OPEN}) (the )?(fridge|refrigerator)$`),
  predicate: state => !get(state, `present.scenes[${constants.SCENE.KITCHEN}].fridgeOpen`, false),
  action: (state, dispatch) => {
    const kitchenInventory = get(state, `present.scenes[${constants.SCENE.KITCHEN}].inventory`, []);
    const isWaterInFridge = includes(kitchenInventory, constants.ITEM.WATER);
    const isLunchInFridge = includes(kitchenInventory, constants.ITEM.LUNCH);
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
