import { useSelector, useDispatch } from 'react-redux';
import { darkMode, whiteMode } from './store/actions';

const App = () => {
  const background = useSelector(state => state.background.background)
  const dispach = useDispatch()
  const style = {
    background: background,
    height: "100vh"
  }
  return (
    <div className="text-center">
      <div style={style}>
      {background === "white" ? <button onClick={() => { dispach(darkMode()) }} className="btn btn-dark mt-5">Dark Mode</button> : <button onClick={() => { dispach(whiteMode()) }} className="btn btn-light mt-5">White Mode</button> }
      </div>
    </div>
  );
}

export default App;
