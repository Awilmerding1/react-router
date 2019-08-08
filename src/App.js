import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom'

import Pets from './Pets'
import HomePage from './HomePage'
import PetPage from './PetPage'


class App extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     pets: [
  //       {id: 1, name: 'Fido', type: 'dog'},
  //       {id: 2, name: 'Fluffy', type: 'cat'},
  //       {id: 3, name: 'Rover', type: 'dog'}
  //     ]
  //   }
  // }

  render() {
      console.log(this.props)
    return (
      <div>

          <Route path='/' render={() => <Redirect to='/home'/>}/>
          <Route path='/home' component={HomePage}/>
          <Route path='/pets' component={Pets}/>
          {/*}<Route path='/pets/:id' component={PetPage}/>*/}
          {/*<Route exact path='/pets' render={(routerProps) => <Pets pets={this.state.pets} {...routerProps}/> }/>*/}
      </div>
    );
  }
}

export default App;
