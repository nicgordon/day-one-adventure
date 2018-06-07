import actions from './actions';
import interactiveScenes from './interactive-scenes';
import items from './items';
import people from './people';
import scenes from './scenes';
import verbs from './verbs';

const constants = {
  ACTION: actions,
  INTERACTIVE_SCENE: interactiveScenes,
  ITEM: items,
  PERSON: people,
  SCENE: scenes,
  TYPE: {
    PERSON: 'person',
    SCENE: 'scene',
  },
  VERB: verbs,
};

export default constants;
