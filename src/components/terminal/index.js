import { connect } from 'react-redux';
import React from 'react';

import TerminalInput from '../terminal-input';

import './styles.css';

const Terminal = ({ log }) => (
  <div className="terminalContainer">
    <div className="terminal">
      <div dangerouslySetInnerHTML={{ __html: log }} />
      <TerminalInput />
    </div>
  </div>
);

const mapStateToProps = state => ({
  log: state.present.game.log,
});

export default connect(mapStateToProps)(Terminal);
