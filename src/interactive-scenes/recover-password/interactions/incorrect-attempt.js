import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp('.*'),
  action: (state, dispatch) => {
    dispatch(gameActions.pushMessage('That’s not right. Get inside James’ head! ...no wait. Don’t do that.'));
  },
};
