import {
    GET_ERRORS
} from './type';
import User from '../Models/User';

export const login = (data, history) => dispatch => {
    User.create(data)
        .then(res => {
            console.log(data)
            if (parseInt(res.data.status) === 200) {
                window.localStorage.setItem('info', JSON.stringify(res.data))
                window.localStorage.setItem('token', JSON.stringify(res.token))
                history.push('/dashboard');
            } else {
                dispatch({
                    type: GET_ERRORS,
                    payload: 'Please enter correct information'
                })
            }

        })
        .catch(
            // dispatch({
            //     type: GET_ERRORS,
            //     payload: res.data.message
            // })
            // err=>this.setState({errors:err.response.data})
        )
    // return {
    //     type: SELLER_LOGIN,
    //     payload: sellerData,
    // }
};

