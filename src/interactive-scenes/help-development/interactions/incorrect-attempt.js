import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp('.*'),
  action: (state, dispatch) => {
    dispatch(gameActions.pushMessage('That’s not working either. What else have you got?'));
  },
};
