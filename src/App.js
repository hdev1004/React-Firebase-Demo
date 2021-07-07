import logo from './logo.svg';
import './App.css';
import firebaseInit from './firebaseInit';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


function App() {
  console.log(firebaseInit.database);
  // firebaseInit에서 넘어온 정보를 콘솔에 출력
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;