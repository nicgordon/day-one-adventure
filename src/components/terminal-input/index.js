import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

import gameActions from '../../store/actions/game';
import executeCommand from '../../utils/execute-command';

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

    const { actions, dispatch, state } = this.props;

    const command = _(this.input.current.value)
      .chain()
      .replace(/(>|&lt;|&gt;)/gi, '')
      .trim()
      .toLower()
      .value();

    if (_.isEmpty(command)) {
      return;
    }
    actions.game.submitCommand(command);
    executeCommand(command, state, dispatch);

    // Reset
    this.input.current.value = '';
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <span>&gt;&nbsp;</span>
        <input
          className="input"
          maxLength="60"
          onBlur={() => {
            this.input.current.focus();
          }}
          ref={this.input}
          type="text"
        />
      </form>
    );
  }
}

const mapStateToProps = state => ({
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
