import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
//import Material UI
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    focused: {
        background: "white",
    },
    helperText: {
        marginLeft: "5px",
        color: "blue",
    }
}));

export const AddTransaction = () => {
    const classes = useStyles();
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");

    const {addTransaction} = useContext(GlobalContext);
    // This will set the state to null
    const clearState = () => {
        setDescription("")
        setAmount("")
    }

    const onSubmit = e => {
        e.preventDefault();
        clearState(); // calling the clearState function to clear the input fields on submit

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            description,
            amount: +amount
        }
        addTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit} autoComplete="off">
                <TextField
                    variant="outlined"
                    margin="dense"
                    required
                    fullWidth
                    autoFocus
                    name="description"
                    label="Description"
                    type="text" 
                    id="text"
                    helperText="e.g Salary"
                    value={description || ''}
                    onChange={
                        (e) => setDescription(e.target.value)}
                    InputProps={{
                        classes: {
                            focused: classes.focused
                        }
                        
                    }}
                    FormHelperTextProps={{ 
                        classes: { 
                            root: classes.helperText 
                        }
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="dense"
                    required
                    fullWidth
                    name="amount"
                    label="Amount"
                    type="number"
                    helperText="'+' for Income and '-' for Expense"
                    value={amount || ''}
                    onChange={
                        (e) => setAmount(e.target.value)}
                    InputProps={{
                        classes: {
                            focused: classes.focused
                        }
                    }}
                    FormHelperTextProps={{ 
                        classes: { 
                            root: classes.helperText 
                        } 
                    }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                
                >
                    Add Transaction
                </Button>
            </form>
        </div>
    )
}
