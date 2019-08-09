import React from 'react';
import {Link} from 'react-router-dom'
import PetPage from './PetPage'


class Pets extends React.Component {


  render() {

    return (
      <div>
        <h2>Pets</h2>
        {this.props.pets && this.props.pets.map(pet => <li><Link to={`/pets/${pet.id}`}> {pet.name} </Link></li> )}
      </div>
    );
  }
}

export default Pets;
