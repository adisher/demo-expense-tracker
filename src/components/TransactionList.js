import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';
import { List } from '@material-ui/core';

export const TransactionList = () => {
const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>Transaction History</h3>
            <List className="list">
                {transactions.map(
                    transaction => (
                        <Transaction key={transaction.id} transaction={transaction}/>
                    )
                )}
            </List>
        </div>
    )
}
