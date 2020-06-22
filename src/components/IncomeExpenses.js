import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Card, makeStyles, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#fff",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        borderLeft: "5px solid #2ecc71",
        borderRight: "5px solid #c0392b",
        display: "flex",
        justifyContent: "space-between",
        margin: 0,
        
    },

    title: {
        textTransform: "uppercase",

    },

    income: {
        borderRight: "1px solid #dedede",
        flex: 1,
        textAlign: "center",
    },

    plus: {
        color: "#2ecc71",
        fontSize: "large",
    },

    minus: {
        color: "#c0392b",
        fontSize: "large",
    },

    expense: {
        textAlign: "center",
        flex: 1,
    }
})

export const IncomeExpenses = () => {
    const { transactions, sign } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const classes = useStyles();

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2);

    return (
        <Card className={classes.root}>
            <CardContent className={classes.income}>
                <Typography className={classes.title} variant="h6" component="h6">Income</Typography>
                <Typography className={classes.plus}>{income}</Typography>
                <Typography color="textSecondary">{`(in ${sign})`}</Typography>
            </CardContent>
            <CardContent className={classes.expense}>
                <Typography className={classes.title} variant="h6" component="h6">Expense</Typography>
                <Typography className={classes.minus}>{expense}</Typography>
                <Typography color="textSecondary">{`(in ${sign})`}</Typography>
            </CardContent>
        </Card>

    )
}
