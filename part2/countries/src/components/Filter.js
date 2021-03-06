import React from 'react'

const Filter = ({filter, setFilter}) => {

    const changeFilter = (event) => {
        setFilter(event.target.value)
    }
    return (
        <div>
            Find countries <input value={filter} onChange={changeFilter}/>
        </div>
    )
}

export default Filter