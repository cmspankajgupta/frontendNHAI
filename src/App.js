import "@fontsource/inter"; 
import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
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
