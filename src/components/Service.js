import React from 'react'
import Card from './Card'
import ArrayIter from './ArrayIter'

const Service = ({item,thing}) => {
    return (
        <div>
            {item===50 ? <Card item='Less than $50' thing='Your Monthly Budget for Services'/> : item === 100 ? <Card item='Between $50 and $100' thing='Your Monthly Budget for Services'/> :
            item === 1000 ? <Card item='Above $100' thing='Your Monthly Budget for Services'/> : <ArrayIter item={item}/> }
        </div>
    )
}

export default Service
