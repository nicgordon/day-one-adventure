import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import constants from './constants';
import TerminalOutput from './components/terminal-output';
import userActions from './store/actions/user';

import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.actions.user.move(constants.SCENE.OUTSIDE_OFFICE_WEST);
  }

  render() {
    return (
      <div className="App">
        <TerminalOutput />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    user: bindActionCreators(userActions, dispatch),
  },
});

export default connect(
  null,
  mapDispatchToProps
)(App);
