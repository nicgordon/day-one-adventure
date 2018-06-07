import constants from '../../../constants';
import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^(${constants.VERB.TALK}) luka$`),
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage(
        `<em>"Hahaha bru, you should chick this out. I’m doing a sweet as personality tist ey!
        It’s called ‘What kind of vigitable are you bro?’ Guiss what I got?"</em>`
      )
    );
    dispatch(gameActions.toggleInteractiveMode(constants.INTERACTIVE_SCENE.HELP_DESIGN));
  },
};
