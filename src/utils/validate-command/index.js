import _ from 'lodash';

import interactiveScenes from '../../interactive-scenes';
import scenes from '../../scenes';

const validateCommand = (command, state) => {
  const interactiveSceneId = _.get(state, 'present.game.interactiveScene');
  const sceneId = _.get(state, 'present.user.location');
  // Are we in an interactive mode?
  const availableInteractions = interactiveSceneId
    ? _.concat(interactiveScenes.preScene.interactions, interactiveScenes[interactiveSceneId].interactions)
    : _.concat(scenes[sceneId].interactions, scenes.postScene.interactions);

  const successfulInteraction = _.find(
    availableInteractions,
    interaction => (interaction.predicate ? interaction.predicate(state) : true) && interaction.pattern.test(command)
  );
  return successfulInteraction;
};

export default validateCommand;
