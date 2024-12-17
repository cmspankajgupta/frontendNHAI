import MuiButton from './componetns/Button/MuiButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <MuiButton variant="contained" name="Login" className="btn-80"/>
      <br/>
      <MuiButton variant="outlined" name="Sign Up" className="btn-80"/>
    </div>
  );
}

export default App;
