import {useState} from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header title={"MODULE 6 ASSIGNMENT"}/>
            <Content/>
            <Footer/>
        </>
    )
}

export default App
