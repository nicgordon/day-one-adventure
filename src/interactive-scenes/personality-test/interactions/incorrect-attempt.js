import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp('.*'),
  action: (state, dispatch) => {
    dispatch(gameActions.pushMessage('<em>"Nah bru, have another crack ey?"</em>'));
  },
};
