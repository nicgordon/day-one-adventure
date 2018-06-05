import constants from '../constants';
import easeys from './easeys';
import outsideOffice from './outside-office';
import permanent from './permanent';

export default {
  permanent,
  [constants.SCENE.EASEYS]: easeys,
  [constants.SCENE.OUTSIDE_OFFICE]: outsideOffice,
};
