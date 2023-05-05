import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/reducers/counterReducer';
import { selectCounterValue } from './selectCounterValue';

function Counter() {
	const dispatch = useDispatch();
	const value = useSelector(selectCounterValue);

	const onIncrement = () => {
		dispatch(increment());
	};

	const onDecrement = () => {
		dispatch(decrement());
	};

	return (
  		<div>
  			<h1 data-testid="counter-value">{value}</h1>
  			<button onClick={onIncrement} data-testid="incr-btn">
  				increment
			</button>
  			<button onClick={onDecrement} data-testid="decr-btn">
  				decrement
			</button>
		</div>
	);
}

export default Counter;
