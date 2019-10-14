import React from 'react';
class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
        <div>
            <h1>Hi, I'm Name</h1>
            <h3>Date Joined</h3>
            <h6># of Rentals</h6>
            <h2>About Me</h2>
            <p>Here's something about Me</p>
            <h2>Contact Info</h2>
                <li>Phone: </li>
                <li>Email: </li>
            <h2>Tools Available</h2> 
            <ul>
                <li>Hammer</li>
                <li>Chainsaw</li>
                <li>Sheers</li>
            </ul>
        </div>)
    }
}
export default Profile;

