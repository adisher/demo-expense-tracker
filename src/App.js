import React from 'react';
import './App.css';

// import components
import { Header } from './components/Header';
import { CurrentBalance } from './components/CurrentBalance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';


function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <CurrentBalance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;
