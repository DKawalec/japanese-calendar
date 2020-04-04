import React from 'react';
import CalendarDisplay from '../../components/calendar-display/index';
import Section from '../../components/section/index';
import style from './style.scss';

class HomePage extends React.Component {
  render() {
    return (
      <div className={style.main}> 
        <Section>
          <h1>some text</h1>
          <CalendarDisplay />
        </Section>
      </div>
    );
  }
}

export default HomePage;
