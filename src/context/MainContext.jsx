import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const mainContext = createContext();
const MainContext = ({ children }) => {
    const [signUp, setSignUp] = useState({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        password: "",
    })

    const value = { setSignUp, signUp }
    return (
        <mainContext.Provider value={value}>
            {children}
        </mainContext.Provider>
    );
};

export default MainContext;