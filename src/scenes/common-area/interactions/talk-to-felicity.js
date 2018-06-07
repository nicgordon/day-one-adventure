import constants from '../../../constants';
import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^(${constants.VERB.TALK}) (felicity|flic)$`),
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage(`<em>"Hey there!"</em> Felicity says, her face beaming with a smile,
        <em>"I hope your first day is going swimmingly.
        At any point you feel like you’ve had enough for the day please come and let me know.
        In fact, have you had enough now?"</em>`)
    );
    dispatch(gameActions.toggleInteractiveMode(constants.INTERACTIVE_SCENE.END_GAME));
  },
};
