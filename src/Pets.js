import React from 'react';

import {BrowserRouter, Route, Redirect, Link, Switch} from 'react-router-dom'
import PetPage from './PetPage'


class Pets extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      pets: [
        {id: 1, name: 'Fido', type: 'dog'},
        {id: 2, name: 'Fluffy', type: 'cat'},
        {id: 3, name: 'Rover', type: 'dog'}
      ]
    }
  }


  render() {
        console.log(this.props)
    return (
      <div>
        <h2>Pets</h2>
        {this.props.match.isExact ? this.state.pets.map(pet => <li><Link to={`/pets/${pet.id}`}>{pet.name} </Link></li>) : null}
          <Route path="/pets/:petid" render={(routerProps) => <PetPage pets={this.state.pets} {...routerProps}/>}/>
      </div>
    );
  }
}

export default Pets;
