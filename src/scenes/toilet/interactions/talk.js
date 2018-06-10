import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import get from 'lodash/get';

export default {
  pattern: new RegExp(`^(${constants.VERB.TALK}|${constants.VERB.YELL})`),
  predicate: state => !get(state, `present.scenes[${constants.SCENE.TOILET}].toiletPaperProvided`, false),
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage(`
        You call out to the pooper and they respond:<br />
        <em>
          "Whoever that is, could you please snag us a bog roll? I don’t want to use my hand.
          Just drop it out there when you’ve got it. Ta."
        </em>
      `)
    );
  },
};
