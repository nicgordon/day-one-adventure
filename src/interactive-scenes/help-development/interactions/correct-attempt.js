import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import sceneActions from '../../../store/actions/scene';

export default {
  pattern: /^for \(let i = 0; i < 5; i\+\+\)$/,
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage(
        `Oh boom town. Before I was all <em>"riiip, I’m shook"</em> and now I’m like <em>"sweeet"</em> so thanks for that.`
      )
    );
    // Flag development as helped
    dispatch(
      sceneActions.setFlag(constants.SCENE.LIGHT_SIDE, {
        codeFixed: true,
      })
    );
    // Exit interactive mode
    dispatch(gameActions.toggleInteractiveMode());
  },
};
