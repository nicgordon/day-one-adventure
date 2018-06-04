import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

import gameActions from '../../store/actions/game';

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

    this.props.actions.game.submitCommand(this.input.current.value);

    // @TODO: Parse the command and do shit

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

const mapDispatchToProps = dispatch => ({
  actions: {
    game: bindActionCreators(gameActions, dispatch),
  },
});

export default connect(
  null,
  mapDispatchToProps
)(TerminalInput);
