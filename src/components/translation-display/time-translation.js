import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TranslationBox from './translation-box';
import { getTimeTranslation } from '../../utils/translation-helper';

class DateTranslation extends PureComponent {
  render() {
    const { hour, minute, timeOfDay } = this.props;
    return <TranslationBox text={getTimeTranslation(hour, minute, timeOfDay)}/>;
  }
}

DateTranslation.propTypes = {
  hour: PropTypes.number.isRequired,
  minute: PropTypes.number.isRequired,
  timeOfDay: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    hour: state.time.hour,
    minute: state.time.minute,
    timeOfDay: state.time.timeOfDay
  };
}

export default connect(mapStateToProps)(DateTranslation);
