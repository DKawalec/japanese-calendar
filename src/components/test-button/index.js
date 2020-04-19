import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StartButton from './start-button';

class TestButton extends PureComponent {
  render() {
    return <StartButton/>;
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
