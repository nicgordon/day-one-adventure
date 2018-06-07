import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^(exit|stop|quit)$`),
  action: (state, dispatch) => {
    dispatch(gameActions.pushMessage('Exited.'));
    dispatch(gameActions.toggleInteractiveMode());
  },
};
