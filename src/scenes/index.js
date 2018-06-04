import all from './all';
import constants from '../constants';
import easeys from './easeys';
import outsideOffice from './outside-office';

export default {
  all,
  [constants.SCENE.EASEYS]: easeys,
  [constants.SCENE.OUTSIDE_OFFICE]: outsideOffice,
};
