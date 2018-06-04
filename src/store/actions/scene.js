import constants from '../../constants';

export default {
  setFlag: (sceneId, flag) => ({
    type: constants.ACTION.SCENE_SET_FLAG,
    sceneId,
    flag,
  }),
};
