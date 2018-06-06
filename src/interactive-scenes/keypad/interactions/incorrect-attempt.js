import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp('.*'),
  action: (state, dispatch) => {
    dispatch(gameActions.pushMessage('That didn’t seem to work. Try another one.'));
  },
};
