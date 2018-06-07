import constants from '../../../constants';
import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^(${constants.VERB.MOVE}) (to )?(south|the car ?park)$`),
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage(`The carpark really isn’t worth exploring.
      It’s a juxtaposition of trash and Teslas.
      An insightful commentary on our society perhaps, but worth expanding upon here? No.`)
    );
  },
};
