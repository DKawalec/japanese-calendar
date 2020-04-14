import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setDate } from '../../../actions/dateActions';
import style from './style.scss';

class DayCell extends PureComponent {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { day, month, year, setDate } = this.props;
    setDate({day, month, year});
  }

  render() {
    const { day, currentDay } = this.props;
    
    // just placeholder to align cells with the right weekday
    if (day === 0) {
      return <td className={`${style.cell} ${style.empty}`}/>;
    }

    return (
      <td
        className={`${style.cell} ${day === currentDay ? style.active : ''}`}
        onClick={this.onClick}
      >
        { day }
      </td>
    );
  }
}

DayCell.propTypes = {
  day: PropTypes.number.isRequired,
  currentDay: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  setDate: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    currentDay: state.date.day,
    month: state.date.month,
    year: state.date.year
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setDate: (date) => dispatch(setDate(date))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DayCell);
