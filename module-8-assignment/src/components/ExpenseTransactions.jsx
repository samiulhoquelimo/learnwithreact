import {useEffect, useState} from "react";

function ExpenseTransactions() {

    const [input, setInput] = useState('')
    const [expense, setExpense] = useState([])

    useEffect(() => {
        const fetch = JSON.parse(localStorage.getItem('wallet'))
        if (fetch) {
            setExpense(fetch)
        }
    }, [])

    const handleInputChange = (e) => setInput(e.target.value)

    const handleAddItem = () => {
        if (input === '') {
            return
        }
        setExpense((prevState) => {
            const list = [...prevState, {
                id: Math.random() * 1234,
                amount: parseInt(input),
                type: 'expense',
                date: new Date().toLocaleString()
            }]
            localStorage.setItem('wallet', JSON.stringify(list))
            return list
        });
        setInput('')
    };

    const handleDeleteItem = (id) => {
        const updated = expense.filter((item) => item.id !== id)
        localStorage.setItem('wallet', JSON.stringify(updated))
        setExpense(updated)
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleAddItem()
        }
    }

    return (
        <section>
            <header>
                <h1>Expense List</h1>
            </header>
            <br/>
            <br/>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Expense</div>
                    <div
                        className="stat-value">Tk.{expense.reduce((sum, model) => 'expense' === model.type ? (sum + model.amount) : sum, 0)}</div>
                </div>
            </div>
            <br/>
            <br/>
            <input
                placeholder="Enter amount here"
                type="number"
                value={input}
                onKeyDown={handleKeyDown}
                onChange={handleInputChange}
                className="input input-bordered input-primary w-full max-w-xs"/>
            <label className="label">
                <span className="label-text-alt"></span>
                <span className="label-text-alt">Only numbers</span>
            </label>
            <br/>
            <button onClick={handleAddItem} className="btn btn-success">Enter to add</button>
            <br/>
            <br/>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {0 === expense.filter((map) => 'expense' === map.type).length && <tr>
                        <td>Your do not have any items</td>
                        <th></th>
                    </tr>}

                    {expense.map((item, index) => 'expense' === item.type && (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>Tk. {item.amount}</td>
                            <td>{item.date}</td>
                            <th>
                                {<button className="btn btn-error btn-sm"
                                         onClick={() => handleDeleteItem(item.id)}>delete
                                </button>}
                            </th>
                        </tr>
                    ))}

                    </tbody>
                    {/* foot */}
                    <tfoot>
                    <tr>
                        <th>#</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    </tfoot>

                </table>
            </div>
        </section>
    )
}

export default ExpenseTransactions
