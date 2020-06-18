import React from 'react'

export const TransactionList = () => {
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                <li className="plus">
                    Earnings
                    <span>$20</span>
                    <button className="delete-btn">X</button>
                </li>
                <li className="minus">
                    Spendings
                    <span>$10</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    )
}
