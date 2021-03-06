import { makeRegReq }from '../utils/crudOps'

const REGISTERING_USER = "REGISTERING_USER";
const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const registerUserAction = (user) => dispatch => {
    dispatch({type: REGISTERING_USER});
    makeRegReq(user)
        .then(res => {
            // console.log(res);
            dispatch({type: REGISTER_USER_SUCCESS, payload: res});
        })
        .catch(err => {
            // console.log(err);
            dispatch({type: REGISTER_USER_ERROR, payload: err});
        });
};
   