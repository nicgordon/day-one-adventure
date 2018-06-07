import constants from '../../constants';
import gameActions from '../../store/actions/game';
import validateCommand from '../validate-command';

const executeCommand = (command, state, dispatch) => {
  // Allow the interaction to do its damage
  const interaction = validateCommand(command, state);
  if (interaction) {
    interaction.action(state, dispatch, command);
  } else {
    // Check if it is at least a known command
    dispatch(
      gameActions.pushMessage(
        new RegExp(`^(${constants.VERB.ALL})`).test(command)
          ? 'You can’t do this here.'
          : 'This command is utter nonsense.'
      )
    );
  }
};

export default executeCommand;
