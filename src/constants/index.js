import actions from './actions';
import items from './items';
import scenes from './scenes';
import interactiveScenes from './interactive-scenes';
import wordGroups from './word-groups';

const constants = {
  ACTION: actions,
  INTERACTIVE_SCENE: interactiveScenes,
  ITEM: items,
  SCENE: scenes,
  TYPE: {
    PERSON: 'person',
    SCENE: 'scene',
  },
  WORD_GROUP: wordGroups,
};

export default constants;
