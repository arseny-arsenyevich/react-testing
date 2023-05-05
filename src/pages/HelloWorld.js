import { useState } from "react"


const HelloWorld = () => {
	const [value, setValue] = useState('')
	const [visible, setVisisble] = useState(false)

	const handleToggle = () => {
		if (value === 'hello') {
			setVisisble(v => !v)
		}
	}

	const handleChange = (e) => {
		setValue(e.target.value)
	}

	return (
		<div>
			<input onChange={handleChange} id="search" type="text" />
			<button onClick={handleToggle} id="toggle">Hello World</button>
			{visible && <h1 id="hello">HELLO</h1>}
		</div>
	)
}

export default HelloWorld