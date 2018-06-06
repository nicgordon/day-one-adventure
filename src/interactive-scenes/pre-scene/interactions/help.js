import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^help$`),
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage('You need to either answer the question being posed to you or <strong>exit</strong>.')
    );
  },
};
