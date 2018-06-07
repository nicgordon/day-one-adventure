import _ from 'lodash';
import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import sceneActions from '../../../store/actions/scene';

export default {
  pattern: new RegExp(`^(${constants.VERB.TURN_OFF}) (the )?coffee machine$`),
  action: (state, dispatch) => {
    const isCoffeeMachineOff = _.get(state, `present.scenes[${constants.SCENE.KITCHEN}].coffeeMachineOff`, false);
    dispatch(
      gameActions.pushMessage(
        isCoffeeMachineOff
          ? 'It’s already off.'
          : `With a sigh of relief from everyone other than those who are trying to make their coffees,
            you switch off the machine and the incessant grinding fades to blissful silence.`
      )
    );
    // Turn off the blasted coffee machine
    dispatch(
      sceneActions.setFlag(constants.SCENE.KITCHEN, {
        coffeeMachineOff: true,
      })
    );
  },
};
