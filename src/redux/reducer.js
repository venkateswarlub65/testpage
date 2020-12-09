import Promise from 'es6-promise';

const LOGIN_PENDING="LOGIN_PENDING";
const LOGIN_SUCCESS="LOGIN_SUCCESS";
const LOGIN_ERROR="LOGIN_ERROR";


function setLoginPending(isLoginPending){
    return{
        type:LOGIN_PENDING,
        isLoginPending
    };
}

function setLoginSuccess(isLoginSuccess){
    return{
        type:LOGIN_SUCCESS,
        isLoginSuccess
    };
}
function setLoginError(LoginError){
    return{
        type:LOGIN_ERROR,
        LoginError
    };
}

export function login(email, password){
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        sendLoginRequest(email,password)
        .then(success=>{
            dispatch(setLoginPending(false));
            dispatch(setLoginSuccess(true));
        })
        .catch(err=>{
            dispatch(setLoginPending(false));
            dispatch(setLoginError(err));
        });
    };
}

export default function reducer(state={
    isLoginPending:false,
    isLoginSuccess:false,
    isLoginError:null
}, action){

    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoginSuccess:action.isLoginSuccess
            };
            case LOGIN_PENDING:  
            return{
                ...state,
                isLoginSuccess:action.isLoginPending
            };
            case LOGIN_ERROR:
            return{
                ...state,
                LoginError:action.LoginError
            };
            default:
                return state;
    }
}

function sendLoginRequest(email,password){
    return new Promise((resolve, reject)=>{
       setTimeout(() => {
        if(email==='hruday@gmail.com' && password==='hruday123'){
            return resolve(true);
        }
        else{
            return reject(new Error('Invalid user Name or Password'));
        }
       }, 1000);
    });
}