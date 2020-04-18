import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setDate } from '../../actions/dateActions';
import { setTime } from '../../actions/timeActions';
import CalendarDisplay from '../../components/calendar-display/index';
import TimeDisplay from '../../components/time-display/index';
import Section from '../../components/section/index';
import style from '../style.scss';

class TestPage extends React.Component {
  render() {
    const { date, time, setDate, setTime } = this.props;
    return (
      <div className={style.main}>
        <Section>
          <CalendarDisplay date={date} onDateChanged={setDate} isActive={false}/>
          <TimeDisplay time={time} onTimeChanged={setTime} isActive={false}/>
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
  }).isRequired,
  setDate: PropTypes.func.isRequired,
  setTime: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    date: {
      year: state.date.year,
      month: state.date.month,
      day: state.date.day
    },
    time: {
      hour: state.time.hour,
      minute: state.time.minute
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setDate: (date) => dispatch(setDate(date)),
    setTime: (time) => dispatch(setTime(time))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
