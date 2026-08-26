import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, Reset } from './Feature/counter/counterSlice'
import './index.css'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleIncrementClick() {
    dispatch(increment())
  }

  function handleDecrementClick() {
    dispatch(decrement())
  }

  function handleResetClick() {
    dispatch(Reset())
  }

  return (
    <div className="container">
      <h1>Redux Counter</h1>

      <div className="counter-controls">
        <button className="btn" onClick={handleDecrementClick}>-</button>
        <p className="count">{count}</p>
        <button className="btn" onClick={handleIncrementClick}>+</button>
      </div>

      {/* Own block-level child of the column flex container -> sits on its own row */}
      <button className="reset" onClick={handleResetClick}>Reset</button>

      <p className="hint">Count is managed with React Redux Toolkit</p>
    </div>
  )
}

export default App