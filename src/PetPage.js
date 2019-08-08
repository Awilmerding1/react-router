import React from 'react';

import {BrowserRouter, Route, Redirect, Link, Switch} from 'react-router-dom'

const PetPage = (props) => {

  const findPet = () => {
    const urlId = props.match.params.petid
    const pet = props.pets[urlId-1]
      console.log(pet)
    if (pet) {
      return (
        <div>
          {pet.name} - {pet.type}
        </div>
      )
    } else {

      window.alert('cannot find pet')
      return (
        <div>
          <Redirect to='/pets'/>
        </div>
      )
    }
  }

    return (
      <div>
        {findPet()}
      </div>
    );

}

export default PetPage;
