import React from 'react';
import loginAction from './../../actions/loginAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: '',
            msg: "",
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.auth.msg !== prevProps.auth.msg){
            let msg = "";

            if(this.props.auth.msg === 'badPass'){
                msg = "This password is incorrect"
            }
            else if(this.props.auth.msg === "loggedIn"){
            this.props.closeModal();
            }
            else if(this.props.auth.msg === "noEmail"){
            msg = "This email is not registered. Please register or try a different email."
            }
        
        this.setState({
            msg
        })
        }
    }
    changeEmail = (e) =>{this.setState({email: e.target.value})}
    changePass = (e) =>{this.setState({password: e.target.value})}

    submitLogin=(e)=>{
        e.preventDefault();
        // validation for email and password would go here if you want it.
        const formData = {...this.state}
        this.props.login(formData);

    }

    render(){
        return(
        <div className="login-form">
            <p className="red-text">{this.state.msg}</p>
            <form onSubmit={this.submitLogin}>
                <button className="facebook-login">Connect With Facebook</button>
                <button className="google-login">Connect with Google</button>
                <span>or</span>
                <input type="email" className="email-signup" placeholder="Email address" onChange={this.changeEmail} value={this.state.email} />
                <input type="password" className="password-signup" placeholder="Password" onChange={this.changePass} value={this.state.pass} />
                <button className="sign-up-button" onClick={this.submitLogin}>Log In</button>
                <div className="border-rule"></div>
                <div className="login-text align-left">Don't have an account? <span onClick={ ()=>this.props.changeModalContent('signup') }>Sign Up </span></div>
            </form>
        </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        //bindActionCreators-
        //makes our otherewise simple function an action creator!
        login: loginAction,
    }, dispatch)}

    function mapStateToProps(state){
        return{
            auth: state.auth,
        }
    }
// export default Login;
export default connect(mapStateToProps, mapDispatchToProps)(Login);
