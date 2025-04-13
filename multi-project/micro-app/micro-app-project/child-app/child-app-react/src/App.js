/*
 * @Author: TerryMin
 * @Date: 2025-04-13 14:49:51
 * @LastEditors: TerryMin
 * @LastEditTime: 2025-04-13 15:18:42
 * @Description: file not
 */
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          child-app-react子应用
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
