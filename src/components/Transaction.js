import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { IconButton, ListItemText, ListItem } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';



export const Transaction = ({ transaction }) => {
    const {delTransaction, sign} = useContext(GlobalContext);
    const [date] = useState(new Date());

    // const sign = transaction.amount < 0 ? '-' : '+';
    // {transaction.amount < 0 ? 'Expense' : 'Income'}
    return (
        <ListItem className={transaction.amount < 0 ? 'minus' : 'plus'}>
            <IconButton 
                color="secondary" 
                aria-label="delete" 
                onClick={() => delTransaction(transaction.id)}
            >
                <DeleteIcon/>
            </IconButton>

            <ListItemText 
                primary={transaction.description} 
                secondary={`${date.toLocaleDateString()}`}
            />
            
            <ListItemText 
                primary={Math.abs(transaction.amount.toFixed(2))} 
                secondary={transaction.amount < 0 ? `(Expense in ${sign})` : `(Income in ${sign})`}
                style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    justifyContent: "center",
                    alignItems: "inherit",
                    margin: "0 auto",
                    width: "50%",
                    padding: "0 0 0 30px"
                    
                }}
            />
        </ListItem>
    )
}
