import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

import constants from '../../constants';
import gameActions from '../../store/actions/game';
import validateCommand from '../../utils/validate-command';

import './styles.css';

class TerminalInput extends PureComponent {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.input.current.focus();
  }

  handleSubmit(event) {
    event.preventDefault();

    const { actions, dispatch, sceneId, state } = this.props;

    const command = this.input.current.value;
    actions.game.submitCommand(command);

    // Allow the interaction to do its damage
    const interaction = validateCommand(command, sceneId);
    if (interaction) {
      interaction.action(state, dispatch);
    } else {
      // Check if it is at least a known command
      actions.game.pushMessage(
        new RegExp(`^(${constants.WORD_GROUP.VERB.ALL})`).test(_.trim(_.toLower(command)))
          ? 'You can’t do this here.'
          : 'This command is utter nonsense.'
      );
    }

    // Reset
    this.input.current.value = '';
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <span>&gt;&nbsp;</span>
        <input className="input" ref={this.input} type="text" />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  sceneId: state.present.user.location,
  state,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    game: bindActionCreators(gameActions, dispatch),
  },
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TerminalInput);
