import EaseContainer from "./UI/EaseContainer";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Choices.css';
import { useState } from "react";
import SiteMapObjects from '../Data/siteMap';
import LogOutButton from "./UI/LogOutButton";
import LogIn from "./Inputs/LogIn";
import EaseSubtitle from "./UI/EaseSubtitle";
import Registration from "./Inputs/Registration";
import Users from '../Data/users';
import jsonfile from 'jsonfile';


const Choices = () => {

    const [users,setUserData] = useState(Users.users);
    const [state,setOption] = useState({
            options: SiteMapObjects.options,
            isLoggedIn: "false",
            showbuttons: "true",
            register: "false",
            subtitle: SiteMapObjects.subtitle
        }
    );

    const EaseClickHandler = (e) => {
        if(e.target.dataset.title==="ORGANIZATION"){
            if(state.isLoggedIn==="true"){
                setOption((prevState) => {
                    return{...prevState,
                        options:prevState.options.find(obj => obj.title===e.target.dataset.title).options.loggedin.options,
                        subtitle: "WHAT NEXT"
                    } 
                });
            }
            else{
                setOption((prevState) => {
                    return{...prevState,
                        showbuttons: "false",
                        subtitle: "LOG IN"
                    } 
                });
            }
        }
        else{
            setOption((prevState) => {
                return{...prevState,
                    options:prevState.options.find(obj => obj.title===e.target.dataset.title).options,
                    subtitle:prevState.options.find(obj => obj.title===e.target.dataset.title).subtitle
                }
            });           
        }
    }

    const onLoginHandler = (userInfo) => {
        setOption((prevState) => {
            return{...prevState,
                showbuttons: "true",
                isLoggedIn: "true",
                options:prevState.options.find(obj => obj.title==="ORGANIZATION").options.loggedin.options,
                subtitle:"WHAT NEXT"
            }
        });
    }

    const validRegistrationHandler = (userInfo) =>{
        setOption((prevState) => {
            return{...prevState,
                showbuttons: "true",
                isLoggedIn: "true",
                options:prevState.options.find(obj => obj.title==="ORGANIZATION").options.loggedin.options,
                subtitle:"WHAT NEXT"
            }
        });
        setUserData((prevState) => {
            return{...prevState,
                userInfo
            }
        });
        jsonfile.writeFile('../Data/users.json', users, function (err) {
            if (err) console.error(err);
          });
    }

    const logOutHandler = () => {
        setOption((prevState) => {
            return{...prevState,
                options: SiteMapObjects.options,
                isLoggedIn: "false",
                showbuttons: "true",
                subtite: SiteMapObjects.subtite
            }
        });
    }
    const registerHandler = () =>{
        setOption((prevState) => {
            return{...prevState,
                showbuttons: "false",
                register: "true"
            }
        });
    }

    if(state.showbuttons==="true"){
        return(
            <div>
                <EaseSubtitle title={state.subtitle} />
                <EaseContainer>
                    <LogOutButton onLogout={logOutHandler} isloggedin = {state.isLoggedIn} />
                    <Row className="choices-container">
                    {state.options.map((option,index) => {
                    return <Col key={index}>
                        <button className="ease-button" data-title={option.title} onClick={EaseClickHandler} type="button">
                            <img className="ease-img" src={'/Choices/'+option.img} alt={option.title}></img>
                            {option.title}
                        </button>
                        </Col>
                    })}
                    </Row>
                </EaseContainer>
            </div>
        );
    }
    else if(state.register==="true" && state.showbuttons==="false"){
        return(
        <div>
            <EaseSubtitle title={"REGISTER"} />
            <EaseContainer>
                <Registration onValidRegistration={validRegistrationHandler} users={users}/>
            </EaseContainer>
        </div>
        )
    }
    else{
       return(
        <div>
            <EaseSubtitle title={state.subtitle} />
            <EaseContainer>
                <LogIn users={users} onRegister={registerHandler} onLogin={onLoginHandler}/>
            </EaseContainer>
        </div>)
    }
}

export default Choices;
