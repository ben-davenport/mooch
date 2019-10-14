import axios from 'axios';

export default(data)=>{
    // console.log(data);
    const loginUrl = `${window.apiHost}/users/login`;
    const axiosResponse = axios.post(loginUrl, data);

    //waiting. waiting. waiting. via redux-promise which is our middleware
    return{
        type:"login",
        payload: axiosResponse,
    }
}