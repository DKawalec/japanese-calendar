import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

class Center extends React.Component {
  render() {
    return (
      <div className={style.centered}>
        {this.props.children}
      </div>
    );
  }
}

Center.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired
  ])
};

export default Center;
