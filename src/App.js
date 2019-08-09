import React from 'react';
import {Route, Redirect} from 'react-router-dom'

import Pets from './Pets'
import HomePage from './HomePage'
import PetPage from './PetPage'


class App extends React.Component {

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

  getPet = (petId) => {
    return this.state.pets[petId-1]
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => <Redirect to='/home'/> } />
        <Route exact path='/home' component={HomePage}/>
        <Route exact path='/pets' render={(routerProps) => <Pets {...routerProps} pets={this.state.pets}/>}/>
        <Route path='/pets/:id' render={({match}) => <PetPage pet={this.getPet(match.params.id)}/>}/>
      </div>
    );
  }
}

export default App;
