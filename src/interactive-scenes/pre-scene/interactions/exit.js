import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^exit$`),
  action: (state, dispatch) => {
    dispatch(gameActions.pushMessage('Exited.'));
    dispatch(gameActions.toggleInteractiveMode());
  },
};
