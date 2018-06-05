import _ from 'lodash';

import scenes from '../../scenes';

const validateCommand = (command, sceneId) => {
  const availableInteractions = _.concat(scenes[sceneId].interactions, scenes.permanent.interactions);
  const successfulInteraction = _.find(availableInteractions, interaction =>
    interaction.pattern.test(_.trim(_.toLower(command)))
  );
  return successfulInteraction;
};

export default validateCommand;
