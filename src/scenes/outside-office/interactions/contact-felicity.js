import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import sceneActions from '../../../store/actions/scene';

export default {
  pattern: new RegExp(`^(${constants.VERB.CONTACT}) (flic|felicity|hr)$`),
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage(`The phone rings a few times before Felicity answers.<br />
        <em>"Hello...? Oh hi! You’re nice and early for your first day.
          There’s probably no one at the office just yet but what you could do..."</em><br />
        Her soothing voice lulls you to sleep and by the time you wake up again the roller door is open!`)
    );
    dispatch(
      sceneActions.setFlag(constants.SCENE.OUTSIDE_OFFICE, {
        rollerDoorOpen: true,
      })
    );
  },
};
