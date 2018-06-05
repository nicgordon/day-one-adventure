import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

import TerminalInput from '../terminal-input';

import './styles.css';

class Terminal extends PureComponent {
  constructor(props) {
    super(props);
    this.container = React.createRef();
  }

  componentDidUpdate() {
    this.container.current.scrollTop = this.container.current.scrollHeight;
  }

  render() {
    const { log } = this.props;
    return (
      <div className="terminalContainer" ref={this.container}>
        <div className="terminal">
          <div dangerouslySetInnerHTML={{ __html: log }} />
          <TerminalInput />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  log: state.present.game.log,
});

export default connect(mapStateToProps)(Terminal);
