import { ActionCreators } from 'redux-undo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import scenes from '../../scenes';

import './styles.css';

const Header = ({ actions, canUndo, locationName }) => {
  return (
    <header className="header">
      {locationName}
      {canUndo && (
        <span className="undoButton" onClick={actions.undoable.undo}>
          ↺ Undo
        </span>
      )}
    </header>
  );
};

const mapStateToProps = state => ({
  canUndo: state.past.length > 0,
  locationName: scenes[state.present.user.location].name,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    undoable: bindActionCreators(ActionCreators, dispatch),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
