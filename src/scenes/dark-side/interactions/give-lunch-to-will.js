import _ from 'lodash';
import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import userActions from '../../../store/actions/user';

export default {
  pattern: new RegExp(`^(${constants.VERB.GIVE}) (will )?(the )?lunch( (to )?will)?$`),
  predicate: state => _.includes(_.get(state, `present.user.inventory`, []), constants.ITEM.LUNCH),
  action: (state, dispatch) => {
    dispatch(gameActions.pushMessage(`<em>"Ooooh, delicious! A promise is a promise. Here’s your puzzle piece."</em>`));
    dispatch(userActions.giveItem(constants.ITEM.LUNCH, constants.TYPE.PERSON, constants.PERSON.WILL));
    dispatch(userActions.takeItem(constants.ITEM.PUZZLE_PIECE, constants.TYPE.PERSON, constants.PERSON.WILL));
  },
};
