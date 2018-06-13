import get from 'lodash/get';

export default store => {
  // Add component handlers
  const form = document.getElementsByClassName('form')[0];
  const input = document.getElementsByClassName('input')[0];
  let previousCommandIndex = 0;
  let halfTypedCommand = '';

  form.addEventListener('submit', event => {
    previousCommandIndex = 0;
  });

  input.addEventListener('keydown', event => {
    const state = store.getState();
    const previousCommandsCount = get(state, 'past.length', 0);

    const copyPreviousCommand = () => {
      // Get the previous command and populate the input with it
      if (previousCommandIndex === 0) {
        input.value = halfTypedCommand;
      } else if (previousCommandIndex === 1) {
        input.value = get(state, 'present.game.lastCommand', '');
      } else {
        input.value = get(state, `past[${previousCommandsCount + 1 - previousCommandIndex}].game.lastCommand`, '');
      }
    };

    if (event.key === 'ArrowUp' && previousCommandIndex < previousCommandsCount) {
      if (previousCommandIndex === 0) {
        halfTypedCommand = input.value;
      }

      previousCommandIndex += 1;
      copyPreviousCommand();

      // Override Chrome moving the cursor to the start of the input when up is pressed
      setTimeout(() => {
        input.selectionStart = input.selectionEnd = input.value.length;
      });
    }

    if (event.key === 'ArrowDown' && previousCommandIndex > 0) {
      previousCommandIndex -= 1;
      copyPreviousCommand();
    }

    if (event.key === 'Backspace' || event.key === 'Delete') {
      previousCommandIndex = 0;
    }
  });
};
