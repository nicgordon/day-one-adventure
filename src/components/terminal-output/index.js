import { connect } from 'react-redux';
import React from 'react';

const TerminalOutput = ({ log }) => <div>{log}</div>;

const mapStateToProps = state => ({
  log: state.game.log,
});

export default connect(mapStateToProps)(TerminalOutput);
