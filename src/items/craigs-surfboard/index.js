import constants from '../../constants';

export default {
  id: constants.ITEM.CRAIGS_SURFBOARD,
  name: 'Craig’s surfboard',
  pattern: new RegExp('(craig’?s )?surf ?board'),
  getDescription: state =>
    `It’s a totally tubular surfboard maaaan.
    Primed for carving the gnarlest sets.
    Could do with a wax though.`,
};
