import constants from '../../constants';
import scenes from '../../scenes';

export default {
  move: destination => (dispatch, getState) => {
    const state = getState();

    dispatch({
      type: constants.ACTION.USER_MOVE,
      destination,
      description: scenes[destination].getDescription(state),
    });
  },

  giveItem: (itemId, recipientType, recipientId) => ({
    type: constants.ACTION.USER_GIVE_ITEM,
    itemId,
    recipientId,
    recipientType,
  }),

  takeItem: (itemId, donorType, donorId) => ({
    type: constants.ACTION.USER_TAKE_ITEM,
    itemId,
    donorId,
    donorType,
  }),
};
