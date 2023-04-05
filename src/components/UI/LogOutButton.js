import './Buttons.css';

const LogOutButton = (props) => {
    const onClickLogoutHander = () =>{
        props.onLogout();
    }
    
    if(props.isloggedin){
        return     <button onClick={onClickLogoutHander}  className="log-out-button" type="button">Log Out</button>
    }
    else{
        return <></>
    }
}

export default LogOutButton;