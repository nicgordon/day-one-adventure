import _ from 'lodash';
import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import sceneActions from '../../../store/actions/scene';
import userActions from '../../../store/actions/user';

export default {
  pattern: new RegExp(`^(${constants.VERB.DISCARD}) ((the|a) )?(roll of )?(toilet paper|tp|loo paper|bog roll)`),
  predicate: state => _.includes(_.get(state, `present.user.inventory`, []), constants.ITEM.TOILET_PAPER),
  action: (state, dispatch) => {
    dispatch(userActions.giveItem(constants.ITEM.TOILET_PAPER, constants.TYPE.SCENE, constants.SCENE.TOILET));
    dispatch(gameActions.pushMessage('<em>"Hey thanks a bunch, pal. I owe you one!"</em>'));
    dispatch(
      sceneActions.setFlag(constants.SCENE.TOILET, {
        toiletPaperProvided: true,
      })
    );
  },
};
