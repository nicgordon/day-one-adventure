import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^no?$`),
  action: (state, dispatch) => {
    dispatch(gameActions.pushMessage('Okay, let me know when you’re done.'));
    dispatch(gameActions.toggleInteractiveMode());
  },
};
