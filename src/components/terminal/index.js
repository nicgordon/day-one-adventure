import { connect } from 'react-redux';
import React from 'react';

import TerminalInput from '../terminal-input';

import './styles.css';

const Terminal = ({ log }) => (
  <div className="terminal">
    <div dangerouslySetInnerHTML={{ __html: log }} />
    <TerminalInput />
  </div>
);

const mapStateToProps = state => ({
  log: state.game.log,
});

export default connect(mapStateToProps)(Terminal);
