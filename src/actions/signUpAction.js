import axios from 'axios';

export default (data) => {
    console.log(data);
    const signUpURL = `${window.apiHost}/users/signup`
    const axiosResponse = axios.post(signUpURL, data);
    
    return{
        type: 'signup',
        payload: axiosResponse,
    }
}