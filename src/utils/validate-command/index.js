import concat from 'lodash/concat';
import find from 'lodash/find';
import get from 'lodash/get';

import interactiveScenes from '../../interactive-scenes';
import scenes from '../../scenes';

const validateCommand = (command, state) => {
  const interactiveSceneId = get(state, 'present.game.interactiveScene');
  const sceneId = get(state, 'present.user.location');
  // Are we in an interactive mode?
  const availableInteractions = interactiveSceneId
    ? concat(interactiveScenes.preScene.interactions, interactiveScenes[interactiveSceneId].interactions)
    : concat(scenes[sceneId].interactions, scenes.postScene.interactions);

  const successfulInteraction = find(
    availableInteractions,
    interaction => (interaction.predicate ? interaction.predicate(state) : true) && interaction.pattern.test(command)
  );
  return successfulInteraction;
};

export default validateCommand;
