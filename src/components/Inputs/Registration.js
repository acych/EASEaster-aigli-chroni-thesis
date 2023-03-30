import { useState } from "react";
import ErrorMessages from "./ErrorMessages";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Forms.css";

const Registration = (props) =>{
    const users = props.users;
    const [registrationInfo,setRegistrationInfo] = useState({
        name: '',
        taxID: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        email: '',
        password: ''
    })

    const [passwordValidation, setPasswordValidation] = useState({
        password: '',
        isInvalid: false
    });

    const [emailInvalid, setEmailValidation] = useState(false);
    const [idInvalid, setIdValidation] = useState(false);

    const nameInputHandler = (event) => {
        setRegistrationInfo((prevState) => {
            return{...prevState,
                name:event.target.value
            }
        });
    }

    const taxInputHandler = (event) => {
        setRegistrationInfo((prevState) => {
            return{...prevState,
                taxID:event.target.value
            }
        });
    }

    const phoneInputHandler = (event) => {
        setRegistrationInfo((prevState) => {
            return{...prevState,
                phone:event.target.value
            }
        });
    }
    
    const addressInputHandler = (event) => {
        setRegistrationInfo((prevState) => {
            return{...prevState,
                address:event.target.value
            }
        });
    }
    
    const cityInputHandler = (event) => {
        setRegistrationInfo((prevState) => {
            return{...prevState,
                city:event.target.value
            }
        });
    }
    const postalInputHandler = (event) => {
        setRegistrationInfo((prevState) => {
            return{...prevState,
                postalCode:event.target.value
            }
        });
    }
    const emailInputHandler = (event) => {
        setRegistrationInfo((prevState) => {
            return{...prevState,
                email:event.target.value
            }
        });
    }
    const passwordInputHandler = (event) => {
        setRegistrationInfo((prevState) => {
            return{...prevState,
                password:event.target.value
            }
        });
    }

    const passwordValidationInputHandler = (event) => {
        setPasswordValidation((prevState) => {
            return{...prevState,
                password:event.target.value
            }
        });
    }

    const submitRagistrationHandler = (event) => {
        event.preventDefault();
        if(passwordValidation.password!==registrationInfo.password){
            setPasswordValidation((prevState) => {
                return{...prevState,
                    isInvalid:true
                }
            });
        }
        else{
            setPasswordValidation((prevState) => {
                return{...prevState,
                    isInvalid:false
                }
            });
        }
        let foundUser = users.find(obj=> obj.email===registrationInfo.email);
        if(foundUser){
            setEmailValidation(true);
        }
        else{
            setEmailValidation(false);
        }
        foundUser = users.find(obj=> obj.ID===registrationInfo.taxID);
        if(foundUser){
            setIdValidation(true);
        }
        else{
            setIdValidation(false);
        }
        if(registrationInfo.name!=='' && registrationInfo.taxID!=='' && registrationInfo.phone!=='' && registrationInfo.address!=='' && registrationInfo.city!=='' && registrationInfo.postalCode!==''
        && registrationInfo.email!=='' && registrationInfo.password!='' && !idInvalid && !emailInvalid && !passwordValidation.isInvalid){
            props.onValidRegistration(registrationInfo);
        }
    }

    return(
        <form onSubmit={submitRagistrationHandler} className="input-form">
            <input type="text" value={registrationInfo.name} placeholder="Organization's name" className="input-form-item" onInput={nameInputHandler}/>
            <input type="text" value={registrationInfo.taxID} placeholder="Tax-ID" className="input-form-item" onInput={taxInputHandler}/>
            <ErrorMessages visible={idInvalid} message={"User with this tax-ID already exists"}/>
            <input type="text" value={registrationInfo.phone} placeholder="Phone" className="input-form-item" onInput={phoneInputHandler}/>
            <input type="text" value={registrationInfo.address} placeholder="Address" className="input-form-item" onInput={addressInputHandler} />
            <input type="text" value={registrationInfo.city} placeholder="City" className="input-form-item" onInput={cityInputHandler} />
            <input type="text" value={registrationInfo.postalCode} placeholder="Postal Code" className="input-form-item" onInput={postalInputHandler}/>
            <input type="email" value={registrationInfo.email} placeholder="Email" className="input-form-item" onInput={emailInputHandler} />
            <ErrorMessages visible={emailInvalid} message={"User with this email already exists"}/>
            <input type="password" value={registrationInfo.password} placeholder="Password" className="input-form-item" onInput={passwordInputHandler} />
            <input type="password" vlaue={passwordValidation} placeholder="Confirm Password" className="input-form-item" onInput={passwordValidationInputHandler}/>
            <ErrorMessages visible={passwordValidation.isInvalid} message={"Passwords don't match"}/>
            <Row className="input-form-buttons">
                <Col>
                   <button className="cancel-button" data-title="cancel" type="button">CANCEL</button>
                </Col>
                <Col>
                    <button type="submit" className="submit-button" data-title="login">REGISTER</button>
                </Col>
            </Row>
        </form>
    )
}

export default Registration;