import constants from '../../../constants';
import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^(${constants.VERB.TALK}) (the )?plant`),
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage(`The plant looks at you somewhat astonished.<br />
      <em>
        "You speak to plants?! That’s extraordinary! You’re going to fit in here just fine.
        Hey, while I have you, keep an eye out for Frank upstairs will you?
        He’s been looking a little brown lately."
      </em>`)
    );
  },
};
