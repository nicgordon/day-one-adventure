import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp('^(a )?potato$'),
  action: (state, dispatch) => {
    dispatch(gameActions.pushMessage(`<em>"Haha, spot on bro. Proper potato!"</em>`));
    // Exit interactive mode
    dispatch(gameActions.toggleInteractiveMode());
  },
};
