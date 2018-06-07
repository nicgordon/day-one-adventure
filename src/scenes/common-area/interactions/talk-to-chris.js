import _ from 'lodash';
import constants from '../../../constants';
import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^(${constants.VERB.TALK}) (lauren|lauz|loz|lozza)$`),
  action: (state, dispatch) => {
    const isCoffeeMachineOff = _.get(state, `present.scenes[${constants.SCENE.KITCHEN}].coffeeMachineOff`, false);
    dispatch(
      gameActions.pushMessage(
        isCoffeeMachineOff
          ? '<em>BRRRRRRZZZZZZZZZZZCCCHHHHHHHHTTTTTTT</em><br />You can’t hear Chris over the noise coming from the kitchen.'
          : `<em>
            "Wow, thanks for powering down that coffee machine.
            Now I can get on with this presentation about how I think we might be able to land a brewery client."
          </em>`
      )
    );
  },
};
