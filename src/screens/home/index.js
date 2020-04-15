import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setDate } from '../../actions/dateActions';
import CalendarDisplay from '../../components/calendar-display/index';
import TimeDisplay from '../../components/time-display/index';
import { DateTranslation, TimeTranslation } from '../../components/translation-display/index';
import Section from '../../components/section/index';
import style from '../style.scss';

class HomePage extends React.Component {
  render() {
    const { date, setDate } = this.props;
    return (
      <div className={style.main}> 
        <Section>
          <CalendarDisplay date={date} onDateChanged={setDate}/>
          <TimeDisplay />
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
  setDate: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    date: {
      year: state.date.year,
      month: state.date.month,
      day: state.date.day
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setDate: (date) => dispatch(setDate(date))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
