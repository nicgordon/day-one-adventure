import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';

import constants from './constants';
import Terminal from './components/terminal';
import userActions from './store/actions/user';

import './styles.css';

class App extends PureComponent {
  componentWillMount() {
    this.props.actions.user.move(constants.SCENE.OUTSIDE_OFFICE_EAST);
  }

  render() {
    return (
      <div className="app">
        <Terminal />
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
