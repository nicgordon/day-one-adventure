import constants from '../../constants';

export default {
  move: destination => ({
    type: constants.ACTION.USER_MOVE,
    destination,
  }),
};
