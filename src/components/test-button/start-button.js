import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setTestData } from '../../actions/testActions';
import { getRandomDate } from '../../utils/date-helpers';
import { getRandomTime } from '../../utils/time-helpers';
import Button from './button';

class StartButton extends PureComponent {
  constructor(props) {
    super(props);

    this.createTest = this.createTest.bind(this);
  }

  createTest() {
    const { setTestData } = this.props;

    setTestData(getRandomDate(), getRandomTime());
  }

  render() {
    return <Button label="Dalej" onClick={this.createTest}/>;
  }
}

StartButton.propTypes = {
  setTestData: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    setTestData: (date, time) => dispatch(setTestData(date, time))
  };
}

export default connect(null, mapDispatchToProps)(StartButton);
