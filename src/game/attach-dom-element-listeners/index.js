import { ActionCreators as undoActions } from 'redux-undo';

import executeCommand from '../../utils/execute-command';
import gameActions from '../../store/actions/game';

export default store => {
  const helpButton = document.getElementsByClassName('helpButton')[0];
  const undoButton = document.getElementsByClassName('undoButton')[0];

  helpButton.addEventListener('click', () => {
    const command = 'help';
    store.dispatch(gameActions.submitCommand(command));
    executeCommand(command, store.getState(), store.dispatch);
  });
  undoButton.addEventListener('click', () => {
    store.dispatch(undoActions.undo());
  });
};
