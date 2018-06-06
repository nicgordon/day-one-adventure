import constants from '../constants';
import commonArea from './common-area';
import craigsHouse from './craigs-house';
import easeys from './easeys';
import outsideOffice from './outside-office';
import postScene from './post-scene';

export default {
  postScene,
  [constants.SCENE.COMMON_AREA]: commonArea,
  [constants.SCENE.CRAIGS_HOUSE]: craigsHouse,
  [constants.SCENE.EASEYS]: easeys,
  [constants.SCENE.OUTSIDE_OFFICE]: outsideOffice,
};
