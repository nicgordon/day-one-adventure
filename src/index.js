import { ActionCreators as undoActions } from 'redux-undo';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import replace from 'lodash/replace';
import toLower from 'lodash/toLower';
import trim from 'lodash/trim';

import initCommandListeners from './game/init-command-listeners';
import executeCommand from './utils/execute-command';
import gameActions from './store/actions/game';
import registerServiceWorker from './registerServiceWorker';
import scenes from './scenes';
import store from './store';

import './styles/reset.css';
import './styles/base.css';
import './styles/main.css';

console.info('Checking the source kinda ruins the fun don’t you think?');

// Add document handlers
document.addEventListener('keypress', () => {
  const input = document.getElementById('input');
  input.focus();
});

// Add component handlers
const form = document.getElementsByClassName('form')[0];
const input = document.getElementsByClassName('input')[0];
const helpButton = document.getElementsByClassName('helpButton')[0];
const undoButton = document.getElementsByClassName('undoButton')[0];
form.addEventListener('submit', event => {
  event.preventDefault();

  const command = toLower(trim(replace(input.value, /(>|&lt;|&gt;)/gi, '')));

  if (isEmpty(command)) {
    return;
  }
  store.dispatch(gameActions.submitCommand(command));
  executeCommand(command, store.getState(), store.dispatch);

  // Reset input
  input.value = '';
});
helpButton.addEventListener('click', () => {
  const command = 'help';
  store.dispatch(gameActions.submitCommand(command));
  executeCommand(command, store.getState(), store.dispatch);
});
undoButton.addEventListener('click', () => {
  store.dispatch(undoActions.undo());
});

initCommandListeners(store);

// Add state subscriptions
const locationName = document.getElementsByClassName('locationName')[0];
const log = document.getElementsByClassName('log')[0];
const terminalContainer = document.getElementsByClassName('terminalContainer')[0];

let currentState;
const subscribeListener = () => {
  const previousState = currentState;
  currentState = store.getState();
  if (get(currentState, `present.game.log`) !== get(previousState, `present.game.log`)) {
    log.innerHTML = get(currentState, `present.game.log`);
    terminalContainer.scrollTop = terminalContainer.scrollHeight;
  }
  locationName.innerText = scenes[get(currentState, `present.user.location`)].name;
};
store.subscribe(subscribeListener);

registerServiceWorker();

// Basically, do the first render
subscribeListener();
