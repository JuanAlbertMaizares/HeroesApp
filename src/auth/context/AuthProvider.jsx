import {useReducer} from 'react';
import {AuthContext} from './AuthContext';
import {authReducer} from './authReducer';

import { types } from '../types/types';

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({children}) => { //recibe, react carga los hijos que van apareciendo
    
    const [authState, dispatch ] = useReducer(authReducer, {}, init);
    // mandamos una f comun que el compo hijo podra usar para cargar una nueva action.
    const login = (name = '') => {
        const user = {
            id: 'ABC',
            name: name
        };
        const action = {
            type: types.login,
            payload: user
        }
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
    }
    const logout = () => {
        localStorage.removeItem('user');
        const action = { type: types.logout };
        dispatch(action);
    }

    return (
        // en cada hijo, le damos el contexto para que lo pueda acceder a el.
        <AuthContext.Provider value = {{
            // authState,
            ...authState,   
            login,
            logout
        }}>
            {children} 
        </AuthContext.Provider>
    );
}