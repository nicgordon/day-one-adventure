import constants from '../constants';
import craigsSurfboard from './craigs-surfboard';
import lunch from './lunch';
import passwordNote from './password-note';
import water from './water';
import toiletPaper from './toilet-paper';

export default {
  [constants.ITEM.CRAIGS_SURFBOARD]: craigsSurfboard,
  [constants.ITEM.LUNCH]: lunch,
  [constants.ITEM.PASSWORD_NOTE]: passwordNote,
  [constants.ITEM.WATER]: water,
  [constants.ITEM.TOILET_PAPER]: toiletPaper,
};
