import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp('.*'),
  action: (state, dispatch) => {
    dispatch(gameActions.pushMessage('That wasn’t an option... A or B?'));
  },
};
