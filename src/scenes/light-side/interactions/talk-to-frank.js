import constants from '../../../constants';
import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^(${constants.VERB.TALK}) (frank|(the )?plant)$`),
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage(
        `<em>"Waheyyy, man I'm feeling pretty rough.
        They say you can’t kill an indoor plant, well, I feel close to it.
        All we need is water and a bit of sun. Is that too much to ask?
        I'm Frank by the way, pleasure to meet ya."</em>`
      )
    );
  },
};
