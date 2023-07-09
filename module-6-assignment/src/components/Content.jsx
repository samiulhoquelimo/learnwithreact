import {useState} from "react";

function Content() {
    const [input, setInput] = useState("")
    const [result, setResult] = useState("")

    let onChangeInput = (event) => {
        setResult("")
        const val = event.target.value;
        setInput(val);
    }

    let submitResult = () => {
        setResult(input)
    }

    return (
        <>
            <div className="card">
                <label>
                    Write your text here:
                    <br/>
                    <textarea
                        onChange={onChangeInput}
                        name="inputContent"
                        rows={8}
                        cols={60}
                    />
                </label>

                <br/>
                <br/>

                <button onClick={submitResult}>Submit</button>

                <br/>
                <br/>

                <p>{result}</p>

            </div>
        </>
    )
}

export default Content
