import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import Service from './Service'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import MapForResult from './MapForResult';



import { BsCheckCircleFill } from "react-icons/bs"

const ResultSmall = (props) => {
    const userStyle = {
        width: 700,
        backgroundColor: 'white',
        marginLeft: 50
    }



    return (
        <div style={{ marginTop: 10 }}>
            <div style={{ background: 'white', paddingTop: 25, paddingBottom: 50 }}>
                <div style={{ width: 600, margin: "auto", }}>
                    <div className='row' style={{ marginTop: 15, backgroundColor: '#F0F8F0', padding: 20, }}>
                        <span><BsCheckCircleFill style={{ color: 'green', marginRight: 10, fontSize: '1.5rem' }} /> Thanks! Your response has been submitted</span>
                    </div>
                </div>
                <br />
                <h3 style={{ marginLeft: 40, paddingBottom: 10 }}><b>Personal Information</b></h3>
                <hr style={{ marginLeft: 50, marginRight: 50 }} />

                <div style={userStyle}>
                    
                        {props.submit[1] ? <Card item={props.submit[1]} thing='Last Name' /> : ""}
                        {props.submit[2] ? <Card item={props.submit[2]} thing='First Name' /> : ""}
                        {props.submit[3] ? <Card item={props.submit[3]} thing='Title' /> : ""}
                        {props.submit[4] ? <Card item={props.submit[4]} thing='Height (Feet)' /> : ""}
                        {props.submit[5] ? <Card item={props.submit[5]} thing='Height (Inches)' /> : ""}

                </div>

                <br />
                <h3 style={{ marginLeft: 40, paddingBottom: 10 }}><b>Contact Information</b></h3>
                <hr style={{ marginLeft: 50, marginRight: 50 }} />

                <div style={userStyle}>
                    <div style={{ display: 'flex' }}>
                        <div>
                            {props.submit[8] ? <Card item={props.submit[8]} thing='Address' /> : ""}
                            {props.submit[9] ? <Card item={props.submit[9]} thing='Second Address' /> : ""}
                            {props.submit[10] ? <Card item={props.submit[10]} thing='City' /> : ""}
                            {props.submit[11] ? <Card item={props.submit[11]} thing='State' /> : ""}
                            {props.submit[12] ? <Card item={props.submit[12]} thing='Zip' /> : ""}
                            {props.submit[6] ? <Card item={props.submit[6]} thing='Email' /> : ""}
                            {props.submit[7] ? <Card item={props.submit[7]} thing='Phone Number' /> : ""}
                        </div>
                            <div style={{marginLeft:75,marginTop:15,width: '325px', height: '325px',overflow:'-moz-hidden-unscrollable'}}>
                                <MapForResult />
                            </div>
                            

                        

                    </div>

                </div>
                <br />
                <h3 style={{ marginLeft: 40, paddingBottom: 10 }}><b>Survey Answers</b></h3>
                <hr style={{ marginLeft: 50, marginRight: 50 }} />

                <div style={userStyle}>

                    {props.submit[14] ? <Service item={props.submit[14]} thing='Check All Services You Require' /> : ""}
                    {props.submit[13] ? <Service item={props.submit[13]} /> : ""}


                </div>
                <br />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        submit: state.results
    }
}

export default connect(mapStateToProps)(ResultSmall)
