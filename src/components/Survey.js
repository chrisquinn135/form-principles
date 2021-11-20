import React, { useState } from 'react'
import Header from './Header'
import Confirm from './Confirm'
import User from './User'
import UserSmall from './UserSmall'
import Result from './Result'
import { connect } from 'react-redux'
import ResultSmall from './ResultSmall'
import MapForResult from './MapForResult'


const Survey = () => {


    const [small, setSmall] = useState(false)
    React.useEffect(() => {
        function handleResize() {
            if(window.innerWidth < 800) {
                setSmall(true);
                console.log('SMALL')
            } else {
                setSmall(false)
                console.log("LARGE")
            }
        }

        window.addEventListener('resize', handleResize)
    })

    const surveyStyle = {
        
        marginTop: '50px',
        width: "800px",
        
        // top: '54px',
        // background: 'white',    //background: '#FFF0F0',
        // boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.25)'
    }

    const smallStyle = {
        marginTop: '50px',
        width: "100%",

        // top: '54px',
        // background: 'white',    //background: '#FFF0F0',
        // boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.25)'
    }


    const [formSub, setFormSub] = useState(false)

    const onSubmit = () => {
        setFormSub(true);
    }

    return (
        <div style={small ? smallStyle : surveyStyle}>
            {!formSub ? <Header /> : <Confirm />}
            {/* {props.submit.map((item) => item)} */}
            {!formSub ? small ? <UserSmall onSubmit={onSubmit} /> : <User onSubmit={onSubmit} /> : small ? <ResultSmall /> :<Result />}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        submit: state.results
    }
}

export default connect(mapStateToProps)(Survey)
