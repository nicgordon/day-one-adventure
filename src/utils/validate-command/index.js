import _ from 'lodash';

import scenes from '../../scenes';

const validateCommand = (command, sceneId) => {
  const scene = scenes[sceneId];

  const successfulInteraction = _.find(scene.interactions, interaction => interaction.pattern.test(_.toLower(command)));
  return successfulInteraction;
};

export default validateCommand;
