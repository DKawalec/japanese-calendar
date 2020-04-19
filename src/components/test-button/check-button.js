import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setTestResult } from '../../actions/testActions';
import Button from './button';

class CheckButton extends PureComponent {
  constructor(props) {
    super(props);

    this.checkAnswers = this.checkAnswers.bind(this);
  }

  checkAnswers() {
    const { setTestResult } = this.props;

    setTestResult(true);
  }

  render() {
    return <Button label="Sprawdź" onClick={this.checkAnswers}/>;
  }
}

CheckButton.propTypes = {
  setTestResult: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    setTestResult: (isPassed) => dispatch(setTestResult(isPassed))
  };
}

export default connect(null, mapDispatchToProps)(CheckButton);
