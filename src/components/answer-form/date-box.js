import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import AnswerBox from './answer-box';

class DateBox extends PureComponent {
  render() {
    return (
      <AnswerBox placeholder="miesiąc, dzień, dzień tygodnia"/>
    );
  }
}

DateBox.propTypes = {
};

export default DateBox;
