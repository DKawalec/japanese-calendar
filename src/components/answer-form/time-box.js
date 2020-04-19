import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import AnswerBox from './answer-box';

class TimeBox extends PureComponent {
  render() {
    return (
      <AnswerBox placeholder="pora dnia, godziny, minuty"/>
    );
  }
}

TimeBox.propTypes = {
};

export default TimeBox;
