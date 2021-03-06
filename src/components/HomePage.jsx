import React from 'react';

import Header from './Header.jsx';
import Description from './Description.jsx';
import Venue from './Venue.jsx';
import Schedule from './Schedule.jsx';
import FAQ from './FAQ.jsx';
import Sponsors from './Sponsors.jsx';

export default class HomePage extends React.Component {

    render () {
      return (
        <div>
          <Header />
          <Description />
          <Venue />
          <Schedule />
          <FAQ />
          <Sponsors />
        </div>
      )
    }

}
