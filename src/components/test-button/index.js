import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StartButton from './start-button';
import CheckButton from './check-button';

class TestButton extends PureComponent {
  render() {
    return this.props.isAnswered ? <StartButton/> : <CheckButton/>;
  }
}

TestButton.propTypes = {
  isAnswered: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAnswered: state.test.isAnswered
  };
}

export default connect(mapStateToProps)(TestButton);
