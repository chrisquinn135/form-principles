import React, { useState } from 'react'
import states from './states'
import './User.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux'
import ReCaptchaV2 from 'react-google-recaptcha'
import result from '../redux/action/resultAction'
import { Button } from 'react-bootstrap'

const UserSmall = (props) => {
    const userStyle = {
        backgroundColor: 'white',
        margin: "30px",
    }

    const groupStyle = {
        marginTop: 20
    }

    const recaptchaSite = '6LdS4SAdAAAAAFawTVaZ6T1YjNDhOj5QgVDIy8tc'
    const recaptchaSecret = '6LdS4SAdAAAAALKNxftnin-N-5Ui5vzOlIu1S4Vn'
    const [cap, setCap] = useState(null)

    const [lastName, setLastName] = useState("");
    const [lnCheck, setlnCheck] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [fnCheck, setfnCheck] = useState(false);
    const [title, setTitle] = useState("");
    const [titleCheck, setTitleCheck] = useState(false);
    const [feet, setFeet] = useState("");
    const [inch, setInch] = useState("");
    const [email, setEmail] = useState("");
    const [emailCheck, setEmailCheck] = useState(false);
    const [phoneNumber, setPhone] = useState("");
    const [phoneCheck, setPhoneCheck] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [address1, setAddress1] = useState("")
    const [address1Check, setAddress1Check] = useState(false)
    const [address2, setAddress2] = useState("")
    const [address2Check, setAddress2Check] = useState(true)
    const [city, setCity] = useState("")
    const [cityCheck, setCityCheck] = useState(false)
    const [state, setState] = useState("")
    const [stateCheck, setStateCheck] = useState(false)
    const [zip, setZip] = useState("")
    const [zipCheck, setZipCheck] = useState(false)
    const [error, setError] = useState(false);
    const [budget, setBudget] = useState('');
    const [services, setService] = useState([false, false, false, false, false, false]);
    const [serviceCheck, setServiceCheck] = useState(false)
    const [budgetCheck, setBudgetCheck] = useState(false)
    const [term, setTerm] = useState(false)

    const dispatch = useDispatch();

    const check = () => {
        var test = false;
        services.forEach((item) => {
            if (item) {
                test = true;
            }
        })
        setServiceCheck(test)
    }

    const onClick = (event) => {
        event.preventDefault();
        setSubmit(true);
        setError(false);
        var test = false;
        services.forEach((item) => {
            if (item) {
                test = true;
            }
        })
        setServiceCheck(test)
        if (cap && term) {     // captcha check
            if (term && lnCheck && fnCheck && titleCheck && emailCheck && phoneCheck && address1Check && address2Check && cityCheck && stateCheck && zipCheck && (budget !== '') && test) {
                const results = [error, lastName, firstName, title, feet, inch, email, phoneNumber, address1, address2, city, state, zip, budget, services]
                console.log(results)
                dispatch(result(results))
                props.onSubmit();
            } else {
                setError(true)
            }
        } else {
            setError(true)
        }
    }


    return (
        <form style={{ marginTop: 10 }}>
            <div style={{ background: 'white', paddingTop: 25, paddingBottom: 50 }}>
                <div style={{ marginLeft:50,marginRight:50, }}>
                    {error ? <div className='row' style={{ marginTop: 15, backgroundColor: '#D43434', padding: 20, color: 'white' }}>
                        Sorry, something went wrong. Please check the form for errors, correct them, and submit again
                    </div> : ''}
                    {error ? <br /> : ''}
                </div>
                <h3 style={{ marginLeft: 40, paddingBottom: 10 }}><b>Personal Information</b></h3>
                <hr style={{ marginLeft: 50, marginRight: 50 }} />

                <div style={userStyle}>


                    <div className='row' style={{marginTop: 15 }}>
                        <div className='form-group'>
                            <label><b> Last Name <span style={{ color: '#D43434' }}>*</span></b></label>
                            <div>
                                <input type='text' className='form-control' id='last-name' placeholder='Last Name' onChange={e => {
                                    const test = e.target.value
                                    setLastName(e.target.value)
                                    if (/^[A-Za-z]+$/.test(test) && test.length < 41 && test.length > 0) {
                                        setlnCheck(true)
                                    } else {
                                        setlnCheck(false)
                                    }
                                }}
                                    style={!submit ? {} : lnCheck ? { marginTop: 5, borderColor: 'green' } : { marginTop: 5, borderColor: '#D43434' }} />
                            </div>
                            {!submit ? '' : lnCheck ? '' : lastName.length >= 41 ? <div style={{ color: '#D43434', marginTop: 3 }}>Last name must be under 40 letters</div> : !lastName ? <div style={{ color: '#D43434', marginTop: 3 }}>Required*</div> : /^[A-Za-z]+$/.test(lastName) ? <label style={{ fontSize: 13 }}>Last</label> : <div style={{ color: '#D43434', marginTop: 3 }}>Last name must contain alphabetical characters</div>}
                        </div>
                    </div>
                    <div className='row' style={{ marginTop: 15 }}>
                        <div className='form-group'>
                            <label><b> First Name <span style={{ color: '#D43434' }}>*</span></b></label>
                            <input type='text' className='form-control' id='first-name' placeholder='First Name' onChange={e => {
                                const test = e.target.value
                                setFirstName(e.target.value)
                                if (/^[A-Za-z]+$/.test(test) && test.length < 41 && test.length > 0) {
                                    setfnCheck(true)
                                } else {
                                    setfnCheck(false)
                                }
                            }}
                                style={!submit ? {} : fnCheck ? { marginTop: 5, borderColor: 'green' } : { marginTop: 5, borderColor: '#D43434' }} />
                            {!submit ? '' : fnCheck ? '' : firstName.length >= 41 ? <div style={{ color: '#D43434', marginTop: 3 }}>First name must be under 40 letters</div> : !firstName ? <div style={{ color: '#D43434', marginTop: 3 }}>Required*</div> : /^[A-Za-z]+$/.test(firstName) ? <label style={{ fontSize: 13 }}>First</label> : <div style={{ color: '#D43434', marginTop: 3 }}>First name contain use alphabetical characters</div>}                        </div>
                    </div>
                    <div className='row' style={{ marginTop: 10 }}>
                        <div className='form-group col-6'>
                            <label><b>Title <span style={{ color: '#D43434' }}>*</span></b></label>
                            <select className='form-control' name='title' id='title' onChange={e => {
                                const test = e.target.value
                                setTitle(e.target.value)
                                if (test && test !== 'Choose...') {
                                    setTitleCheck(true)
                                }
                                else {
                                    setTitleCheck(false)
                                }
                            }
                            } style={!submit ? {} : !titleCheck ? { borderColor: '#D43434' } : { borderColor: 'green' }}>
                                <option defaultValue>Choose...</option>
                                <option>None</option>
                                <option>Student</option>
                                <option>Professor</option>
                                <option>Staff</option>
                                <option>Retired</option>
                            </select>
                            {!submit ? '' : !titleCheck ? <div style={{ color: '#D43434', marginTop: 3 }}>Required*</div> : ''}
                        </div>
                    </div>
                    <div className='row' style={groupStyle}>
                        <div className='form-group col-6'>
                            <label><b>Height</b></label>
                            <select className='form-control' name='feet' id='feet' onChange={e => setFeet(e.target.value)}>
                                <option defaultValue>Feet</option>
                                <option>1'</option>
                                <option>2'</option>
                                <option>3'</option>
                                <option>4'</option>
                                <option>5'</option>
                                <option>6'</option>
                                <option>7'</option>
                                <option>8'</option>
                                <option>9'</option>
                            </select>
                        </div>
                        <div className='form-group col-6'>
                            <br />
                            <select className='form-control' name='inch' id='inch' onChange={e => setInch(e.target.value)}>
                                <option defaultValue>Inches</option>
                                <option>1''</option>
                                <option>2''</option>
                                <option>3''</option>
                                <option>4''</option>
                                <option>5''</option>
                                <option>6''</option>
                                <option>7''</option>
                                <option>8''</option>
                                <option>10''</option>
                                <option>11''</option>
                            </select>
                        </div>
                    </div>
                </div>
                <br />
                <h3 style={{ marginLeft: 40, paddingBottom: 10 }}><b>Contact Information</b></h3>
                <hr style={{ marginLeft: 50, marginRight: 50 }} />
                <div style={userStyle}>
                    <div className='row' style={{ marginTop: 15 }}>
                        <div className='form-group col-md-10'>
                            <label><b>Address <span style={{ color: '#D43434' }}>*</span></b></label>
                            <input type='text' className='form-control' id='address' placeholder='Address' onChange={e => {
                                const test = e.target.value;
                                setAddress1(e.target.value)
                                if (test && test.length > 0 && test.length < 41 && /^[\w\-\s]/.test(test)) {
                                    setAddress1Check(true)
                                } else {
                                    setAddress1Check(false)
                                }
                            }} style={!submit ? {} : !address1Check ? { borderColor: '#D43434' } : { borderColor: 'green' }} />
                            {!submit ? '' : address1.length < 1 ? <div style={{ color: '#D43434', marginTop: 3 }}>Required*</div> :  address1.length > 40 ? <div style={{ color: '#D43434', marginTop: 3 }}>Address length must be under 40 characters</div> : !address1Check ? <div style={{ color: '#D43434', marginTop: 3 }}>Address must only contain alpha numeric characters</div> : ''}
                        </div>
                    </div>
                    <div className='row' style={groupStyle} >
                        <div className='form-group col-md-10'>
                            <label ><b>Address 2</b></label>
                            <input type='text' className='form-control' id='address-2' onChange={e => {
                                const test = e.target.value
                                setAddress2(e.target.value)
                                if (test) {
                                    if (test.length < 41 && /^[\w\-\s]/.test(test)) {
                                        setAddress2Check(true)
                                    } else {
                                        setAddress2Check(false)
                                    }
                                }

                            }} placeholder='Apartment, studio, or floor' style={!submit ? {} : address2.length < 1 ? {} : !address2Check ? { borderColor: '#D43434' } : { borderColor: 'green' }} />
                            {!submit ? '' : address2.length > 40 ? <div style={{ color: '#D43434', marginTop: 3 }}>Address 2 length must be under 40 characters</div> : !address2Check ? <div style={{ color: '#D43434', marginTop: 3 }}>Address 2 must only contain alpha numeric characters</div> : ''}
                        </div>
                    </div>
                    <div className='row' style={groupStyle} >
                        <div className='form-group col-sm-5' >
                            <label><b>City <span style={{ color: '#D43434' }}>*</span></b></label>
                            <input type='text' className='form-control' name='city' id='city' onChange={e => {
                                const test = e.target.value
                                setCity(e.target.value)
                                if (test && test.length > 0 && test.length < 41 && /^[\w\-\s]/.test(test)) {
                                    setCityCheck(true)
                                } else {
                                    setCityCheck(false)
                                }
                            }} style={!submit ? {} : !cityCheck ? { borderColor: '#D43434' } : { borderColor: 'green' }} />
                            {!submit ? '' : city.length < 1 ? <div style={{ color: '#D43434', marginTop: 3 }}>Required*</div> : !cityCheck ? <div style={{ color: '#D43434', marginTop: 3 }}>Please enter a valid city</div> : ''}
                        </div>
                        <div className='form-group col-6' style={{ marginTop: 15 }}>
                            <label><b>State <span style={{ color: '#D43434' }}>*</span></b></label>
                            <select className='form-control' name='state' id='state' onChange={e => {
                                const test = e.target.value
                                setState(e.target.value)
                                if (test && test !== 'Choose...') {
                                    setStateCheck(true)
                                }
                                else {
                                    setStateCheck(false)
                                }
                            }} style={!submit ? {} : !stateCheck ? { borderColor: '#D43434' } : { borderColor: 'green' }}>
                                <option defaultValue>Choose...</option>
                                {states.map((state) => <option>{state.abbreviation}</option>)}
                            </select>
                            {!submit ? '' : !stateCheck ? <div style={{ color: '#D43434', marginTop: 3 }}>Required*</div> : ''}
                        </div>
                        <div className='form-group col-6' style={{ marginTop: 15 }}>
                            <label><b>Zip <span style={{ color: '#D43434' }}>*</span></b></label>
                            <input type='text' className='form-control' name='zip' id='zip' onChange={e => {
                                const test = e.target.value
                                setZip(e.target.value)
                                if (test && /^\d+$/.test(test) && test.length === 5 && test.length > 0) {
                                    setZipCheck(true)
                                } else {
                                    setZipCheck(false)
                                }
                            }} style={!submit ? {} : !zipCheck ? { borderColor: '#D43434' } : { borderColor: 'green' }} />
                            {!submit ? '' : zip.length < 1 ? <div style={{ color: '#D43434', marginTop: 3 }}>Required*</div> : !zipCheck ? <div style={{ color: '#D43434', marginTop: 3, width: 200 }}>Please enter a valid zip</div> : ''}
                        </div>
                        <div className='row' style={groupStyle}>
                            <div className='form-group col-sm-2' >
                                <label><b>Email <span style={{ color: '#D43434' }}>*</span></b></label>
                                <input type='text' className='form-control' name='email' id='email' placeholder='Email' onChange={e => {
                                    const tester = e.target.value
                                    setEmail(e.target.value)
                                    if (tester && /@/.test(tester)) {
                                        setEmailCheck(true)
                                    } else {
                                        setEmailCheck(false)
                                    }
                                }} style={!submit ? {} : !emailCheck ? { borderColor: '#D43434' } : { borderColor: 'green' }} />
                                {!submit ? '' : email.length < 1 ? <div style={{ color: '#D43434', marginTop: 3 }}>Required*</div> : !emailCheck ? <div style={{ color: '#D43434', marginTop: 3 }}>Please enter a valid email</div> : ''}
                            </div>
                        </div>
                        <div className='row' style={groupStyle}>
                            <div className='form-group col-7'>
                                <label><b>Phone Number</b></label>
                                <input type='text' className='form-control' name='phone' id='phone' placeholder='(XXX)-XXX-XXXX' onChange={e => {
                                    const test = e.target.value
                                    setPhone(e.target.value)
                                    if ((/^\d+$/.test(test) && test.length === 10) || test.length === 0) {
                                        setPhoneCheck(true)
                                    } else {
                                        setPhoneCheck(false)
                                    }
                                }} style={!submit ? {} : phoneNumber.length === 0 ? {} : !phoneCheck ? { borderColor: '#D43434' } : { borderColor: 'green' }} />
                            </div>
                            {!submit ? '' : phoneNumber.length === 0 ? '' : !phoneCheck ? <div style={{ color: '#D43434', marginTop: 3 }}>Please enter a valid phone number</div> : ''}
                        </div>
                    </div>
                </div>
                <br />
                <h3 style={{ marginLeft: 40, paddingBottom: 10 }}><b>Survey Answers</b></h3>
                <hr style={{ marginLeft: 50, marginRight: 50 }} />
                <div style={userStyle}>
                    <h4 style={{ marginTop: 15 }}>Check All Services You Require <span style={{ color: '#D43434' }}>*</span></h4>
                    {!submit ? '' : !serviceCheck ? <div style={{ color: '#D43434', marginTop: 3 }}>This question is required*</div> : ''}
                    <div className='form-check' style={{ marginLeft: 30 }}>
                        <input className='form-check-input' type='checkbox' onChange={e => {
                            if (e.target.checked) {
                                services[0] = true
                                setServiceCheck(true)
                            } else {
                                services[0] = false
                                check();
                            }
                        }} />
                        <label className='form-check-label'>E-Mail</label>
                    </div>
                    <div className='form-check' style={{ marginLeft: 30 }}>
                        <input className='form-check-input' type='checkbox' onChange={e => {
                            if (e.target.checked) {
                                services[1] = true
                                setServiceCheck(true)
                            } else {
                                services[1] = false
                                check();
                            }
                        }} />
                        <label className='form-check-label'>Phone</label>
                    </div>
                    <div className='form-check' style={{ marginLeft: 30 }}>
                        <input className='form-check-input' type='checkbox' onChange={e => {
                            if (e.target.checked) {
                                services[2] = true
                                setServiceCheck(true)
                            } else {
                                services[2] = false
                                check();
                            }
                        }} />
                        <label className='form-check-label'>Facebook</label>
                    </div>
                    <div className='form-check' style={{ marginLeft: 30 }}>
                        <input className='form-check-input' type='checkbox' onChange={e => {
                            if (e.target.checked) {
                                services[3] = true
                                setServiceCheck(true)
                            } else {
                                services[3] = false
                                check();
                            }
                        }} />
                        <label className='form-check-label'>Twitter</label>
                    </div>
                    <div className='form-check' style={{ marginLeft: 30 }}>
                        <input className='form-check-input' type='checkbox' onChange={e => {
                            if (e.target.checked) {
                                services[4] = true
                                setServiceCheck(true)
                            } else {
                                services[4] = false
                                check();
                            }
                        }} />
                        <label className='form-check-label'>Surface Mail</label>
                    </div>
                    <div className='form-check' style={{ marginLeft: 30 }}>
                        <input className='form-check-input' type='checkbox' onChange={e => {
                            if (e.target.checked) {
                                services[5] = true
                                setServiceCheck(true)
                            } else {
                                services[5] = false
                                check();
                            }
                        }} />
                        <label className='form-check-label'>Personal Visit</label>
                    </div>
                </div>
                <br />
                <div style={userStyle}>
                    <h5>Your Monthly Budget for Services<span style={{ color: '#D43434' }}>*</span></h5>
                    {!submit ? '' : !budgetCheck ? <div style={{ color: '#D43434', marginTop: 3 }}>This question is required*</div> : ''}
                    <div className='form-check' style={{ marginLeft: 30 }}>
                        <input className='form-check-input' name='budget' type='radio' onChange={e => {
                            setBudget(50)
                            setBudgetCheck(true);
                        }} />
                        <label className='form-check-label'>Less than $50</label>
                    </div>
                    <div className='form-check' style={{ marginLeft: 30 }}>
                        <input className='form-check-input' name='budget' type='radio' onChange={e => {
                            setBudget(100)
                            setBudgetCheck(true);
                        }} />
                        <label className='form-check-label'>Between $50 and $100</label>
                    </div>
                    <div className='form-check' style={{ marginLeft: 30 }}>
                        <input className='form-check-input' name='budget' type='radio' onChange={e => {
                            setBudget(1000)
                            setBudgetCheck(true);
                        }} />
                        <label className='form-check-label'>Above $100</label>
                    </div>
                </div>
                <br />
                <br />
                <div style={{ marginLeft: 50 }}>
                    <ReCaptchaV2 sitekey={recaptchaSite} onChange={e => setCap(e)} onExpire={e => setCap(null)} style={{ margin: 'auto' }} />
                    {!submit ? '' : !cap ? <div style={{ color: '#D43434', marginTop: 3 }}>Please fill out the CAPTCHA</div> : ''}
                    <div className='form-check' style={{ marginTop: 15 }}>
                        <input className='form-check-input' type='checkbox' onChange={e => {
                            if (e.target.checked) {
                                setTerm(true)
                            } else {
                                setTerm(false)
                            }
                        }} />
                        <label className='form-check-label'>I have read and agree to the <a href='dummy' target='_blank'>terms of service</a><span style={{ color: '#D43434' }}>*</span></label>
                        {!submit ? '' : !term ? <div style={{ color: '#D43434', marginTop: 3 }}>Please read and agree to the terms of service*</div> : ''}
                    </div>
                </div>

                <br />
                <Button variant='primary' size='lg' type='submit' onClick={onClick} style={{ marginLeft: 50 }}>Submit</Button>
            </div>
            <br />
        </form>
    )
}

export default UserSmall
