import _ from 'lodash';
import constants from '../../../constants';
import gameActions from '../../../store/actions/game';
import missions from '../../../missions';

export default {
  pattern: new RegExp(`^y(es)?$`),
  action: (state, dispatch) => {
    // @TODO: Exclude the bonus mission from the counts
    const missionsAvailable = missions.length;
    const missionsCompleted = _.filter(missions, mission => mission.predicate(state)).length;
    const missionsCompletedPercentage = (missionsCompleted / missionsAvailable) * 100;
    let summary =
      'Pretty poor effort really. I’m not sure if it’s worth having you back in. Here’s a box. Pack up your stuff.';
    if (missionsCompletedPercentage > 25) {
      summary = 'You managed to get around to doing a few things, but I think you can do better.';
    } else if (missionsCompletedPercentage > 50) {
      summary = 'You quite an effective day. Welcome to the Inlight family!';
    } else if (missionsCompletedPercentage === 100) {
      summary = 'You are amazing! In fact, I think the CEO role just opened up again. Would you like it?';
    }
    const hasCraigsSurfboard = _.includes(_.get(state, 'present.user.inventory', []), constants.ITEM.CRAIGS_SURFBOARD);
    dispatch(
      gameActions.pushMessage(`Okay! Well, let’s see how you went today:<br />
      You completed ${missionsCompleted} of the total ${missionsAvailable} tasks that were available.
      ${summary} ${
        hasCraigsSurfboard ? 'Also, that’s Craig’s surfboard so you might want to give that back at some point.' : ''
      }<br /><br />
      <span class="command">Game over!</span>`)
    );
    dispatch(gameActions.toggleInteractiveMode());
    dispatch(gameActions.gameOver());
  },
};
