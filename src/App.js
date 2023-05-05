import React, { memo, useEffect, useRef, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";

function V() {
	const [state, setState] = useState(1);

	return (
		<>
			<button
				onClick={() => {
					setState(state + 1);
				}}
			>
				{state}
			</button>
			<h1>I am V</h1>
		</>
	);
}

function A() {
	const [state, setState] = useState(1);
	const ref = useRef();

	return (
		<div>
			I am div
			<button
				onClick={() => {
					setState(state + 1);
				}}
			>
				{state}
			</button>
			<p>
				I am p
				<V ref={ref} />
			</p>
		</div>
	);
}

function App() {
	const [data, setData] = useState(null)
	const [toggle, setToggle] = useState(false)
	const [value, setValue] = useState('')

	const onClick = () => setToggle(t => !t)

	useEffect(() => {
		setTimeout(() => {
			setData([])
		}, 100)
	}, [])


	return (
		<>
			{toggle === true && <div data-testid="toggle-div">toggle</div>}
			{data && <div>hello!</div>}
			<h1>работает</h1>
			<h1 data-testid="input-h1">{value}</h1>
			<button data-testid="toggle-btn" onClick={onClick}>click me</button>
			<input data-testid="input" type="text" placeholder="input" value={value} onChange={e => setValue(e.target.value)} />
			<Link to="/" data-testid="main-link">
				main
			</Link>
			<Link to="/about" data-testid="about-link">
				about
			</Link>
			<Routes>
				<Route path="/" Component={MainPage} />
				<Route path="/about" Component={AboutPage} />
				<Route path="/*" Component={ErrorPage} />
			</Routes>
		</>
	);
}

// console.log(<App />);

// function App() {
// 	const [data, setData] = useState(null)
// 	const [toggle, setToggle] = useState(false)
// 	const [value, setValue] = useState('')

// 	const onClick = () => setToggle(t => !t)

// 	useEffect(() => {
// 		setTimeout(() => {
// 			setData([])
// 		}, 100)
// 	}, [])

// 	return (
// 		<div className="App">
// 			{toggle === true && <div data-testid="toggle-div">toggle</div>}
// 			{data && <div>hello!</div>}
// 			<h1>работает</h1>
// 			<h1 data-testid="input-h1">{value}</h1>
// 			<button data-testid="toggle-btn" onClick={onClick}>click me</button>
// 			<input data-testid="input" type="text" placeholder="input" value={value} onChange={e => setValue(e.target.value)} />
// 		</div >
// 	);
// }

export default App;
