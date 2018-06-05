import constants from '../constants';
import craigsHouse from './craigs-house';
import easeys from './easeys';
import outsideOffice from './outside-office';
import permanent from './permanent';

export default {
  permanent,
  [constants.SCENE.CRAIGS_HOUSE]: craigsHouse,
  [constants.SCENE.EASEYS]: easeys,
  [constants.SCENE.OUTSIDE_OFFICE]: outsideOffice,
};
