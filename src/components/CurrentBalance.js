import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Card, makeStyles, Typography, CardContent } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        borderRight: "5px solid #2e16a5",
        borderLeft: "5px solid #2e16a5",
    },
    title: {
        fontSize: 24,
    },
    pos: {
        paddingLeft: 3
    },
    balance: {
        padding: "10px 10px 5px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    total: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "x-large",
        color: '#2e16a5',
        padding: "0 0 10px"
    }

})

export const CurrentBalance = () => {

    const classes = useStyles();
    const {transactions, sign} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0);
    return (
        <Card className={classes.root}>
            <CardContent className={classes.balance}>
                <Typography className={classes.title}>Current Balance</Typography>
                <Typography className={classes.pos} color="textSecondary">{`(in ${sign})`}</Typography>
            </CardContent>
            <Typography className={classes.total}>{total.toFixed(2)}</Typography>
            
        </Card>

        )
        
        
}
