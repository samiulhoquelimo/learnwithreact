import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage';
import './index.css';
import IncomeTransactions from "./components/IncomeTransactions.jsx";
import ExpenseTransactions from "./components/ExpenseTransactions.jsx";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/income" element={<IncomeTransactions/>}/>
                    <Route path="/expense" element={<ExpenseTransactions/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
