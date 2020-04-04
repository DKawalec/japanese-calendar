import React from 'react';
import PropTypes from 'prop-types';

class Section extends React.Component {
  render() {
    return (
      <div>
        <div id="1">{this.props.children.filter((e,i) => !(i%2))}</div>
        <div id="2">{this.props.children.filter((e,i) => i%2)}</div>
      </div>
    );
  }
}

Section.propTypes = {
  children: PropTypes.array.isRequired
};

export default Section;
