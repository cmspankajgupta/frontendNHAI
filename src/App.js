import './App.scss';
import Login from './Pages/Login';
import Header from './componetns/Header/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Form-container">
          <Login/>
      </div>      
    </div>
  );
}

export default App;
