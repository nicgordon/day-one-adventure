import constants from '../../constants';
import interactions from './interactions';

export default {
  id: constants.SCENE.FOYER,
  name: 'Entryway',
  pattern: new RegExp('(?:the )?(?:foyer|downstairs|entry ?way)'),
  defaultState: {
    readBook: false,
    inventory: [constants.ITEM.PASSWORD_NOTE],
  },
  interactions,
  getDescription: state =>
    `Your footsteps echo off the polished concrete floors in this downstairs area of the Inlight office.
    There is a large meeting room with glass walls taking up majority of the space.
    Nothing of interest is happening in there... As per usual.<br /><br />
    There is a bookshelf containing some books and a plant in the corner who looks a little lonely.
    From here you can see stairs that lead up to the rest of the office.`,
};
