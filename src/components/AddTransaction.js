import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h3>Add Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input 
                        type="text" 
                        id="description" 
                        placeholder="Enter Description">
                    </input>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Transaction Amount</label>
                    <input 
                        type="number" 
                        id="amount" 
                        placeholder="Enter Transaction Amount">
                    </input>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
