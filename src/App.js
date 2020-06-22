import React from 'react';
import './App.css';

//import context provider component
import { GlobalProvider } from './context/GlobalState';
// import components
import { Header } from './components/Header';
import { CurrentBalance } from './components/CurrentBalance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { CurrencyToggler } from './components/CurrencyToggle';
import { Box } from '@material-ui/core';


function App() {
  return (
    <GlobalProvider>
      <Header/>
      
      <Box className="container">
        <Box>
            <CurrencyToggler/>
            <CurrentBalance/>
            <IncomeExpenses/>
        </Box>

        <Box>
          <TransactionList/>
        </Box>

        <Box>
          <AddTransaction/>
        </Box>

      </Box>
    </GlobalProvider>
  );
}

export default App;

