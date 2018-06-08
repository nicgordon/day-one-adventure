import _ from 'lodash';
import constants from '../../../constants';
import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^(${constants.VERB.TALK}) sean$`),
  action: (state, dispatch) => {
    const isCodeFixed = _.get(state, `present.scenes[${constants.SCENE.LIGHT_SIDE}].codeFixed`, false);
    dispatch(
      gameActions.pushMessage(
        isCodeFixed
          ? `<em>"Cheers fam, your code skills are lit."</em>`
          : `<em>"I haven’t written a for loop in forever. The syntax of the first line is hard to remember. This is what I’ve got so far but it isn’t working:"</em><br /><br />
            for (+i+; const i = 0; i < 5)<br /><br />
            <em>"Could you have a crack at fixing it for me please?"</em>`
      )
    );
    if (!isCodeFixed) {
      dispatch(gameActions.toggleInteractiveMode(constants.INTERACTIVE_SCENE.HELP_DEVELOPMENT));
    }
  },
};
