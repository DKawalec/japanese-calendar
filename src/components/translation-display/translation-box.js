import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const TranslationBox = ({text}) => <div className={style.container}>{text}</div>;

TranslationBox.propTypes = {
  text: PropTypes.string
};

export default TranslationBox;
