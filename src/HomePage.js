import React from 'react';
import {Link} from 'react-router-dom'
import Pets from './Pets'


class HomePage extends React.Component {


  render() {

    return (
      <div>
          <p>HomePage</p>
          <Link to='/pets'> Click to see Pets!</Link>
      </div>
    );
  }
}

export default HomePage;
