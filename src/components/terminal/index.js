import { connect } from 'react-redux';
import React from 'react';

import './styles.css';

const Terminal = ({ log }) => <div className="terminal">{log}</div>;

const mapStateToProps = state => ({
  log: state.game.log,
});

export default connect(mapStateToProps)(Terminal);
