import get from 'lodash/get';

import interactiveScenes from '../../interactive-scenes';
import scenes from '../../scenes';

export default store => {
  const form = document.getElementsByClassName('form')[0];
  const locationName = document.getElementsByClassName('locationName')[0];
  const log = document.getElementsByClassName('log')[0];
  const terminalContainer = document.getElementsByClassName('terminalContainer')[0];

  let currentState;
  return () => {
    const previousState = currentState;
    currentState = store.getState();
    if (get(currentState, `present.game.log`) !== get(previousState, `present.game.log`)) {
      log.innerHTML = get(currentState, `present.game.log`);
      terminalContainer.scrollTop = terminalContainer.scrollHeight;
    }

    // Show the current location as the scene name (or ineractive scene name if they are in one)
    locationName.innerText =
      get(interactiveScenes, `${get(currentState, 'present.game.interactiveScene')}.name`) ||
      scenes[get(currentState, `present.user.location`)].name;

    // Hide the input field when the game is over
    if (get(currentState, `present.game.gameOver`) !== get(previousState, `present.game.gameOver`)) {
      form.classList[get(currentState, `present.game.gameOver`) ? 'add' : 'remove']('hidden');
    }
  };
};
