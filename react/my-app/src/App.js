import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const list = [1, 2, 3, 4, 5];
  // const list = [{ name: '11' }, { name: '22' }, { name: '33' }];
  // const list = ['aaa', 'bbb', 'ccc'];
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header> */}
      <h1>标题</h1>
      <div>
        {list.map((item) => (
          <div>item: {item}</div>
        ))}

        <h1>你好</h1>
      </div>
    </div>
  );
}

export default App;
