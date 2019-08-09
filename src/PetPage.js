import React from 'react';
import {Link} from 'react-router-dom'


const PetPage = ({pet}) => {

    return (
      <div>
        <Link to='/pets'>Pets</Link>
        {pet && pet.name} - {pet && pet.type}
      </div>
    );

}

export default PetPage;
