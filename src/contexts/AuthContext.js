import React from 'react';

const AuthContext = React.createContext({
    user: null,
    setUser:()=>{},
});

export default AuthContext;