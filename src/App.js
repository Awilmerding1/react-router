import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import FirstRoute from './FirstRoute'
import SecondRoute from './SecondRoute'

class App extends React.Component {

  render() {
    return (
      <div>
          <p>App Component</p>
          <Route path="/firstroute" component={FirstRoute}/>
      </div>
    );
  }
}

export default App;
