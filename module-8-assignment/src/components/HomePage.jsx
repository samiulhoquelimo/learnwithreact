import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    const [wallet, setWallet] = useState([])

    useEffect(() => {
        const fetch = JSON.parse(localStorage.getItem('wallet'))
        console.log(fetch)
        if (fetch) {
            setWallet(fetch)
        }
    }, [])

    const navigateExpense = () => navigate("/expense")

    const navigateIncome = () => navigate("/income")

    return (
        <section>
            <header>
                <h1>Expense/Income App</h1>
            </header>
            <br/>
            <br/>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Balance</div>
                    <div
                        className="stat-value">Tk.{wallet.reduce((sum, model) => 'income' === model.type ? (sum + model.amount) : (sum - model.amount), 0)}</div>

                </div>
                <div className="stat">
                    <div className="stat-title">Expense</div>
                    <div
                        className="stat-value">Tk.{wallet.reduce((sum, model) => 'expense' === model.type ? (sum + model.amount) : sum, 0)}</div>
                    <button className="btn btn-success btn-sm" onClick={navigateExpense}>Add</button>
                </div>
                <div className="stat">
                    <div className="stat-title">Income</div>
                    <div
                        className="stat-value">Tk.{wallet.reduce((sum, model) => 'income' === model.type ? (sum + model.amount) : sum, 0)}</div>
                    <button className="btn btn-success btn-sm" onClick={navigateIncome}>Add</button>
                </div>
            </div>
            <br/>
            <br/>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>

                    {0 === wallet.length && <tr>
                        <td>Your do not have any to do items</td>
                        <th></th>
                    </tr>}

                    {wallet.map((item, index) => (<tr key={index}>
                        <td>{index + 1}</td>
                        <td>Tk. {item.amount}</td>
                        <td>{item.type}</td>
                        <td>{item.date}</td>
                    </tr>))}

                    </tbody>
                    {/* foot */}
                    <tfoot>
                    <tr>
                        <th>#</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Date</th>
                    </tr>
                    </tfoot>

                </table>
            </div>

        </section>
    )
}

export default HomePage
