import React, { useContext, useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'
import { GlobalContext } from '../context/GlobalState';

export const CurrencyToggler = () => {
    const { changeCurrency, currentCurrency } = useContext(GlobalContext);
    const [ alignment, setAlignment ] = useState(currentCurrency);

    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
            changeCurrency(newAlignment);
        }
    }
            
    return (
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            style={{ 
                margin: "10px auto",
                width: "100%", 
            }}
        >
            <ToggleButton value="dollar" aria-label="left-aligned">
                Dollars
            </ToggleButton>

            <ToggleButton value="rupees" aria-label="right-aligned">
                Rupees
            </ToggleButton>
        </ToggleButtonGroup>
    );
}