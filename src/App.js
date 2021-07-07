import logo from './logo.svg';
import './App.css';
import firebaseInit from './firebaseInit';

function App() {
  // firebaseInit에서 넘어온 정보를 콘솔에 출력
  console.log(firebaseInit)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;