import _ from 'lodash';
import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import lunch from '../../../items/lunch';
import userActions from '../../../store/actions/user';
import will from '../../../people/will';

export default {
  pattern: new RegExp(
    `^(${constants.VERB.GIVE}) (${will.pattern.source} )?${lunch.pattern.source}( (to )?${will.pattern.source})?$`
  ),
  predicate: state => _.includes(_.get(state, `present.user.inventory`, []), constants.ITEM.LUNCH),
  action: (state, dispatch) => {
    dispatch(gameActions.pushMessage(`<em>"Ooooh, delicious! A promise is a promise. Here’s your puzzle piece."</em>`));
    dispatch(userActions.giveItem(constants.ITEM.LUNCH, constants.TYPE.PERSON, constants.PERSON.WILL));
    dispatch(userActions.takeItem(constants.ITEM.PUZZLE_PIECE, constants.TYPE.PERSON, constants.PERSON.WILL));
  },
};
