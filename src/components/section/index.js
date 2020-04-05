import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

class Section extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div>{this.props.children.filter((e,i) => !(i%2))}</div>
        <div>{this.props.children.filter((e,i) => i%2)}</div>
      </div>
    );
  }
}

Section.propTypes = {
  children: PropTypes.array.isRequired
};

export default Section;
