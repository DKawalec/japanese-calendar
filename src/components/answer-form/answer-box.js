import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

class AnswerBox extends PureComponent {
  render() {
    const { value, placeholder, onChange } = this.props;
    return (
      <textarea
        placeholder={placeholder}
        className={style.answerbox}
        value={value}
        onChange={onChange}
      />
    );
  }
}

AnswerBox.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default AnswerBox;
