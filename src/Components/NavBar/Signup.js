import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import signUpAction from '../../actions/signUpAction';

class Signup extends React.Component{
    constructor(props){
        super()
        this.state = {
            email: "",
            first: "",
            last: "",
            password: "",
            msg: "",
        }
    }

    //this lifecycle method runs anytime props or state changes for this component
    componentDidUpdate(prevProps, prevState){
        if((this.props.auth.msg === 'userExists') && (prevProps.auth.msg !== 'userExists')){
            this.setState({
                msg: "This user already exists. Please log in or create a new account."
            })
        }
        else if((this.props.auth.msg === "userAdded") && (prevProps.auth.msg !== 'userAdded')){
            this.props.closeModal();
        }
    }
    changeEmail = (e) =>{this.setState({email: e.target.value})}
    changeFirst = (e) =>{this.setState({first: e.target.value})}
    changeLast = (e) =>{this.setState({last: e.target.value})}
    changePass = (e) =>{this.setState({password: e.target.value})}

    submitSignup = (e)=>{
        e.preventDefault();
        //assume the data is valid; if we run into invalid switch to false
        let formValid = true;
        let msg = "";
        for (let key in this.state){
            if((this.state[key].length < 1) && (key !== 'msg')){
                formValid=false;
                const msg = `${key} field is required`
                break
            }
        }
        if(this.state.password.toLowerCase() === this.state.password){
            formValid=false;
            msg="Your password must contain at least 1 uppercase letter"
        }else if(!(/\d/.test(this.state.password))){
            formValid=false;
            msg="Your password must contain at lest 1 number."
        }
        if(formValid){
            const userData= {...this.state};
            console.log(`form submitted`)
            this.props.signUpAction(userData);
        }
        else{
            this.setState({
                msg
            })
        }
        
        // console.log(`Name: ${this.state.first}, ${this.state.last}`)
        // console.log(`Email: ${this.state.email}`)
        // console.log(`Email: ${this.state.email}`)
        // console.log(`Password: ${this.state.password}`)
    }

    render(){
            console.log(this.props.auth)
        return(
        <div className="register-form">
            <p className="form-msg">{this.state.msg}</p>
            <form onSubmit={this.submitSignup}>
                <input required type="email" className="email-signup" placeholder="Email address" onChange={this.changeEmail} value={this.state.email} />
                <input required className="first-signup" placeholder="First name" onChange={this.changeFirst} value={this.state.first}/>
                <input required className="last-signup" placeholder="Last name" onChange={this.changeLast} value={this.state.last}/>
                <input required type="password" className="password-signup" placeholder="Password" onChange={this.changePass} value={this.state.password}/>
                <button className="sign-up-button">Sign up</button>
                <div className="border-rule"></div>
                <div className="login-text align-left">Already have an Airbnb account? <span onClick= {()=>this.props.changeModalContent('login')}>Log In</span></div>
            </form>
        </div> 
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

function mapDispatchtoProps(dispatch){
    return bindActionCreators({
        signUpAction,
    }, dispatch)
}
// export default Signup;
export default connect(mapStateToProps, mapDispatchtoProps)(Signup)