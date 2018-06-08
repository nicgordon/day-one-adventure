import gameActions from '../../../store/actions/game';

export default {
  pattern: new RegExp(`^help$`),
  action: (state, dispatch) => {
    dispatch(
      gameActions.pushMessage(`Some things you could always try doing are:<br />
        &gt; <em>describe scene</em> - To describe your current surroundings<br />
        &gt; <em>move (in a compass direction)</em> - To walk somewhere else<br />
        &gt; <em>take (thing)</em> - To put said thing into your inventory<br />
        &gt; <em>check (thing)</em> - To get a more detailed description of said thing<br />
        &gt; <em>inventory</em> - To check out your loot`)
    );
  },
};
