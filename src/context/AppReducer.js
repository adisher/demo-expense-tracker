export default (state, action) => {
    switch(action.type) {
        case 'DEL_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
            case 'ADD_TRANSACTION':
                return {
                    ...state,
                    transactions: [action.payload, ...state.transactions]
                }
                case "CHANGE_CURRENCY":
                    let updatedtran = [];
                    
                        state.transactions.forEach(
                        (e) => {
                            if (action.payload === "dollar") {
                                updatedtran.push({
                                    id: e.id,
                                    description: e.description,
                                    amount: parseFloat(e.amount / state.difference),
                                })
                            } 
                            else {
                                updatedtran.push({
                                    id: e.id,
                                    description: e.description,
                                    amount: parseFloat(e.amount * state.difference),
                                })
                            }
                        });
                        return {
                            ...state,
                            currentCurrency: action.payload,
                            sign: action.payload === "dollar" ? "Dollars" : "Rupees",
                            transactions: updatedtran,
                        }
                        default:
                            return state;
    }
}