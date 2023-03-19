import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router';

export const ContextAuth = createContext();

export default function ContextAutho({ children }) {

    const userData = {
        login: "user",
        password: "1",
    }

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [checkBool, setCheckBool] = useState(false);
    const navigate = useNavigate();

    const validationUserName = (evt, func) => {
        func(evt.target.value);
        if (evt.target.value === userData.login) {
            evt.target.style.borderColor = "green";
        } else if (evt.target.value === "") {
            evt.target.style.borderColor = "grey";
        } else {
            evt.target.style.borderColor = "red";
        }
    }

    const validationPassword = (evt, func) => {
        func(evt.target.value);
        if (evt.target.value === userData.password) {
            evt.target.style.borderColor = "green";
        } else if (evt.target.value === "") {
            evt.target.style.borderColor = "grey";
        } else {
            evt.target.style.borderColor = "red";
        }
    }

    const navToPresentation = () => {
        navigate('/presentation');
    }

    const checkLocalStorage = (event) => {
        event.preventDefault();
        if (login === userData.login && password === userData.password) {
            if (checkBool) {
                localStorage.setItem("User", JSON.stringify({
                    userName: login,
                    userPassword: password,
                }));
                navToPresentation();
                setLogin("");
                setPassword("");
                setError("");
            } else {
                navToPresentation();
            }
        } else {
            setError('Incroect datas')
        }
    }

    const values = {
        login, setLogin,
        password, setPassword,
        error, validationUserName,
        validationPassword, checkLocalStorage,
        checkBool, setCheckBool
    };

    return (
        <ContextAuth.Provider value={values}>
            {children}
        </ContextAuth.Provider>
    )
}
