import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
    sign: "Rupees",
    currentCurrency: "Rupees",
    difference: 167.0,
    transactions: [
       {id: 1, description: "Salary", amount: 2000},
       {id: 2, description: "Food", amount: -500},
    ],
}

// global context
export const GlobalContext = createContext(initialState);

// create a provider for global context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

     // Actions
    function delTransaction(id) {
        dispatch({
            type: 'DEL_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    function changeCurrency(currentCurrency) {
        dispatch({
            type: 'CHANGE_CURRENCY',
            payload: currentCurrency
        });
    }

    return (
        <GlobalContext.Provider value= {
            {
                transactions: state.transactions,
                currentCurrency: state.currentCurrency,
                sign: state.sign,
                delTransaction,
                addTransaction,
                changeCurrency
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}