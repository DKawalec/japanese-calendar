import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

class TwoColumn extends React.Component {
  render() {
    return (
      <div className={style.columnContainer}>
        <div className={style.column}>{this.props.children.filter((e,i) => !(i%2))}</div>
        <div className={style.column}>{this.props.children.filter((e,i) => i%2)}</div>
      </div>
    );
  }
}

TwoColumn.propTypes = {
  children: PropTypes.array.isRequired
};

export default TwoColumn;
