import React from 'react';
import CalendarDisplay from '../../components/calendar-display/index';
import TimeDisplay from '../../components/time-display/index';
import { DateTranslation, TimeTranslation } from '../../components/translation-display/index';
import Section from '../../components/section/index';
import style from '../style.scss';

class HomePage extends React.Component {
  render() {
    return (
      <div className={style.main}> 
        <Section>
          <CalendarDisplay />
          <TimeDisplay />
          <DateTranslation />
          <TimeTranslation />
        </Section>
      </div>
    );
  }
}

export default HomePage;
