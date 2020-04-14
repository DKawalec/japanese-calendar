import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TranslationBox from './translation-box';
import { getDateTranslation } from '../../utils/translation-helper';

class DateTranslation extends PureComponent {
  render() {
    const { year, month, day, dayOfWeek } = this.props;
    return <TranslationBox text={getDateTranslation(year, month, day, dayOfWeek)}/>;
  }
}

DateTranslation.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
  dayOfWeek: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    year: state.date.year,
    month: state.date.month,
    day: state.date.day,
    dayOfWeek: state.date.dayOfWeek
  };
}

export default connect(mapStateToProps)(DateTranslation);
