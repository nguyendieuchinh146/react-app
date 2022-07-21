import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuard = (props) => {
    if(props.middleware){
        let middleWareRoute  = new MiddleWareRoute();
        let middleWare = { action: '', permission: true};
        props.middleware.forEach(function(value, index, arr){
            if(!middleWareRoute[value](props)){
                middleWare.permission = false;
                middleWare.action = value;
            }
        })
        if(!middleWare.permission){
            return <Navigate to="/login" />;
        }
    }
    return props.component;
}
class MiddleWareRoute{
    AuthenticateLogin(props){
        let token = null;
        const auth = ( token != null ) ? true : null;
        if(!auth){
            return false;
        }else{
            return true;
        }
    }
    ProductPermission(props){
        let token = 'exits';
        const auth = ( token != null ) ? true : null;
        if(!auth){
            return false;
        }else{
            return true;
        }
    }
}

export default AuthGuard
