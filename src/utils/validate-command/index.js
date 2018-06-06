import _ from 'lodash';

import scenes from '../../scenes';

const validateCommand = (command, state) => {
  const sceneId = _.get(state, 'present.user.location');
  const availableInteractions = _.concat(scenes[sceneId].interactions, scenes.permanent.interactions);
  const successfulInteraction = _.find(
    availableInteractions,
    interaction => (interaction.predicate ? interaction.predicate(state) : true) && interaction.pattern.test(command)
  );
  return successfulInteraction;
};

export default validateCommand;
