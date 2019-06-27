import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function RestrictedRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (localStorage.getItem('token')) {
                    return <Component {...props} />
                }
                return <Redirect to="/login" />
            }}
        />
    );
}

export default RestrictedRoute;