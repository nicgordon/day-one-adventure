import _ from 'lodash';
import constants from '../../../constants';
import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^(${constants.VERB.TALK}) (will)$`),
  action: (state, dispatch) => {
    const isWillNourished = _.includes(
      _.get(state, `present.people[${constants.PERSON.WILL}].inventory`, []),
      constants.ITEM.LUNCH
    );
    dispatch(
      gameActions.pushMessage(
        isWillNourished
          ? '<em>nom nom nom...</em>'
          : `<em>"I’ve got the deal of a lifetime for you sonny.
        Bring me some food and I’ll give you back the puzzle piece I stole from that chick out there, heh heh."</em>`
      )
    );
  },
};
