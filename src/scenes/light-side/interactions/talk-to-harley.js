import _ from 'lodash';
import constants from '../../../constants';
import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^(${constants.VERB.TALK}) harley$`),
  action: (state, dispatch) => {
    const isDesignFixed = _.get(state, `present.scenes[${constants.SCENE.LIGHT_SIDE}].designFixed`, false);
    dispatch(
      gameActions.pushMessage(
        isDesignFixed
          ? `<em>"Thanks for that help buddy"</em>`
          : `<em>
            "So I’m tossing up between these two designs:<br />
            - A: This one with a nice drop shadow and the scrolling marquee; or<br />
            - B: This one with the page fold and the mouse cursor trail<br />
            Which one do you like?"</em>`
      )
    );
    dispatch(gameActions.toggleInteractiveMode(constants.INTERACTIVE_SCENE.HELP_DESIGN));
  },
};
