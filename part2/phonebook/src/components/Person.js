import React from 'react'
import Button from './Button';


const Person = ({person, removePerson}) => {

    return (
        <p>{person.name} {person.number} <Button text="delete" handleClick={removePerson}/></p>
    )
}

export default Person