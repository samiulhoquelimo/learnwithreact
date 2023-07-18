import {useState} from 'react'

function ToggleComponent() {
    const [visibility, setVisibility] = useState(false)

    return (<>
        {visibility && <p>Its toggling visibility</p>}
        <button onClick={() => setVisibility(!visibility)}> Toggle Visibility</button>
    </>)
}

export default ToggleComponent
