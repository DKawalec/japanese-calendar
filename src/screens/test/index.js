import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CalendarDisplay from '../../components/calendar-display/index';
import TimeDisplay from '../../components/time-display/index';
import Section from '../../components/section/index';
import style from '../style.scss';

class TestPage extends React.Component {
  render() {
    const { date, time } = this.props;
    return (
      <div className={style.main}>
        <Section>
          <CalendarDisplay date={date} isActive={false}/>
          <TimeDisplay time={time} isActive={false}/>
        </Section>
      </div>
    );
  }
}

TestPage.propTypes = {
  date: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    day: PropTypes.number.isRequired
  }).isRequired,
  time: PropTypes.shape({
    hour: PropTypes.number.isRequired,
    minute: PropTypes.number.isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return {
    date: {
      year: state.test.year,
      month: state.test.month,
      day: state.test.day
    },
    time: {
      hour: state.test.hour,
      minute: state.test.minute
    }
  };
}

export default connect(mapStateToProps)(TestPage);
