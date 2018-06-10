import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import get from 'lodash/get';
import includes from 'lodash/includes';
import userActions from '../../../store/actions/user';

export default {
  pattern: new RegExp(
    `^(${
      constants.VERB.GIVE
    }) ((lauren|lauz|lozza|loz) )?(the )?(puzzle|jigsaw) piece( (to )?(lauren|lauz|lozza|loz))?$`
  ),
  predicate: state => includes(get(state, `present.user.inventory`, []), constants.ITEM.PUZZLE_PIECE),
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage(
        `<em>"Are you kidding? Where was this?! I've been looking for this for hours. Thanks a lot!"</em>`
      )
    );
    dispatch(userActions.giveItem(constants.ITEM.PUZZLE_PIECE, constants.TYPE.PERSON, constants.PERSON.LAUREN));
  },
};
