import { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Forms.css";
import ErrorMessages from "./ErrorMessages";

const LogIn = (props) => {
    const users = props.users;
    const [loginInputValues,setLoginInputValues] = useState({
        email : '',
        password: '',
        showError: false
    })

    const clickRegisterHandler = () =>{
        props.onRegister();
    }
    const loginHandler = (event) => {
        event.preventDefault();
        let foundUser = users.find(obj=> obj.email===loginInputValues.email && obj.password===loginInputValues.password)
        if(foundUser){
            props.onLogin(foundUser.ID);
        }
        else{
            foundUser = users.find(obj=> obj.ID===loginInputValues.email && obj.password===loginInputValues.password)
            if (foundUser){
                props.onLogin(foundUser.ID);
            }
            else{
                setLoginInputValues((prevState) => {
                    return{...prevState,
                        showError: true
                    }
                });
            }
        }
        setLoginInputValues((prevState) => {
            return{...prevState,
                email: '',
                password: ''
            }
        });

    }
    const emailInputHandler = (event) => {
        setLoginInputValues((prevState) => {
            return{...prevState,
                email:event.target.value
            }
        });
    }
    const passwordInputHandler = (event) => {
        setLoginInputValues((prevState) => {
            return{...prevState,
                password:event.target.value
            }
        });
    }

    return(
        <form onSubmit={loginHandler} className="input-form">
            <input type="text" placeholder="Email or tax-ID" value={loginInputValues.email} className="input-form-item" onInput={emailInputHandler} />
            <input type="password" value={loginInputValues.password} placeholder="Password" className="input-form-item" onInput={passwordInputHandler} />
            <ErrorMessages visible={loginInputValues.showError} message={"Wrong email or password"}/>
            <Row className="input-form-buttons">
                <Col>
                   <button className="cancel-button" onClick={clickRegisterHandler} data-title="cancel" type="button">REGISTER</button>
                </Col>
                <Col>
                    <button type="submit" className="submit-button" data-title="login">LOGIN</button>
                </Col>
            </Row>
        </form>
    )
}

export default LogIn;