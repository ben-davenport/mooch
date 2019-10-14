import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import ModalSplash from './ModalSplash';
import Login from './Login';
import Signup from './Signup';
import Profile from '../Profile/Profile'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logoutAction from './../../actions/logoutAction';
// import testThunkAction from '../../actions/thunkTest';

class NavBar extends React.Component{
    constructor(){
        super()
        this.state = {
            showModal: false,
            modalContent: "",
        }
    }

    componentDidMount(){
        // this.props.aThunk();
        this.setState({
            modalContent: <ModalSplash changeModalContent={this.changeModalContent} closeModal={this.closeModal} />
        })
    }

    signUp = ()=>{
        document.querySelector('body').className = 'body-modal-show';
        this.setState({
            showModal: true,
        })
    }
    closeModal = (e)=>{
        document.querySelector('body').className = '';
        this.setState({
            showModal: false,
        })
    }

    changeModalContent= (newContent)=>{
        let modalContent = <ModalSplash changeModalContent={this.changeModalContent}/>
        if(newContent=== 'login'){
            modalContent = <Login changeModalContent={this.changeModalContent} closeModal={this.closeModal}/>}
        else if(newContent === 'signup'){
                modalContent = <Signup changeModalContent={this.changeModalContent} closeModal={this.closeModal}/>}
        this.setState({
            modalContent})
        }

    buildNavLinks= ()=>{
        let navLinks = "";
        // if(!this.props.auth.token){
            //user is not logged in; give them standard nav
            navLinks =  
            <ul id="nav-mobile" className="right">
                <li>
                    <Link to="/host/home">Host a Home</Link>
                </li>
                <li>
                    <Link to="/host/experience">Lend a Tool</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/help">Help</Link>
                </li>
                <li className="nav-non-link" onClick={this.signUp} >
                    Sign Up
                </li>
                <li className="nav-non-link" onClick={this.signUp} >
                    Log In
                </li>
            </ul>
        // }
        // else{
        //     //user is logged in so give them the logged in nav
        //     navLinks =
        //     <ul id="nav-mobile" className="right">
        //         <li>
        //             <Link to="/host/home">Host a Home</Link>
        //         </li>
        //         <li>
        //             <Link to="/saved">Saved</Link>
        //         </li>
        //         <li>
        //             <Link to="/trips">Trips</Link>
        //         </li>
        //         <li onClick={this.props.logout}>Logout</li>
        //         <li>
        //             <Link to="/account">Welcome, {this.props.auth.first}</Link>
        //         </li>
                
        //     </ul>
        // }
        return navLinks
    }

    render(){
        let navColor= "transparent";
        // if(this.props.location.pathname !== '/'){
        //     navColor = 'black';
        // }
        const navLinks = this.buildNavLinks();
        console.log(`State:`)
        console.log(this.state.modalContent)
        return(
        <div className="container-fluid nav">
            <div className="row">
                <nav className={navColor}>
                    <div className="nav-wrapper">
                        <Link to="/" className="left">Mooch</Link>
                        {navLinks}
                    </div>
                </nav>

            </div>
            <div className="login-modal" style={this.state.showModal ? {"display": "block"} : {}}>
                    <button id="close-modal" onClick={this.closeModal}>&Chi;</button>
                    <div className="modal-content">
                        {this.state.modalContent}
                    </div>
                </div>
        </div>)
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        logout: logoutAction,
    }, dispatch)
}

function mapStateToProps(state){
    return{
        auth: state.auth,
    }
}
// export default NavBar;
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)