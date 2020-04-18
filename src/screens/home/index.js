import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setDate, setTime } from '../../actions/trainingActions';
import CalendarDisplay from '../../components/calendar-display/index';
import TimeDisplay from '../../components/time-display/index';
import { DateTranslation, TimeTranslation } from '../../components/translation-display/index';
import Section from '../../components/section/index';
import style from '../style.scss';

class HomePage extends React.Component {
  render() {
    const { date, time, setDate, setTime } = this.props;
    return (
      <div className={style.main}> 
        <Section>
          <CalendarDisplay date={date} onDateChanged={setDate}/>
          <TimeDisplay time={time} onTimeChanged={setTime}/>
          <DateTranslation />
          <TimeTranslation />
        </Section>
      </div>
    );
  }
}

HomePage.propTypes = {
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
      year: state.training.year,
      month: state.training.month,
      day: state.training.day
    },
    time: {
      hour: state.training.hour,
      minute: state.training.minute
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setDate: (date) => dispatch(setDate(date)),
    setTime: (time) => dispatch(setTime(time))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
