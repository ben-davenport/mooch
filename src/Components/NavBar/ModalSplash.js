import React from 'react';
import { Link } from 'react-router-dom';

function ModalSplash(props){
    console.log(props)
    return(
        <div>
            <button className="facebook-login">Connect With Facebook</button>
            <button className="google-login">Connect with Google</button>
            <span>or</span>
            <button className="center email-login" onClick={()=>props.changeModalContent('signup')}>Sign up with email</button>
            <div className="border-rule"></div>
            <div className="login-text align-left" onClick={()=>props.changeModalContent('login')}>Already have an Airbnb account? <Link to="">Log in</Link></div>
        </div>
    )
}
export default ModalSplash;