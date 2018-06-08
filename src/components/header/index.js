import { ActionCreators } from 'redux-undo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

import gameActions from '../../store/actions/game';
import executeCommand from '../../utils/execute-command';
import scenes from '../../scenes';

import './styles.css';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.handleHelpClick = this.handleHelpClick.bind(this);
  }

  handleHelpClick() {
    const { actions, state, dispatch } = this.props;

    const command = 'help';
    actions.game.submitCommand(command);
    executeCommand(command, state, dispatch);
  }

  render() {
    const { actions, canUndo, locationName } = this.props;
    return (
      <header className="header">
        {locationName}
        <span className="links">
          <span className="helpButton" onClick={this.handleHelpClick}>
            Help
          </span>
          {canUndo && (
            <span className="undoButton" onClick={actions.undoable.undo}>
              ↺ Undo
            </span>
          )}
        </span>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  canUndo: state.past.length > 0 && state.present.game.gameOver,
  locationName: scenes[state.present.user.location].name,
  state,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    game: bindActionCreators(gameActions, dispatch),
    undoable: bindActionCreators(ActionCreators, dispatch),
  },
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
