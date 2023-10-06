// import logo from './logo.svg';
import React, { Component, useState, useEffect } from 'react'
import './App.css';
// import axios from 'axios'

// function App() {
//   // const list = [1, 2, 3, 4, 5];
//   // const list = [{ name: '11' }, { name: '22' }, { name: '33' }];
//   // const list = ['aaa', 'bbb', 'ccc'];
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setCount(2);
//   })

//   console.log('渲染了多少次');
//   return (
//     <div className="App">
//       <h1>{count}</h1>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }

  render() {
    const { count } = this.state;

    // this.setState({
    //   count: 2,
    // })
    // console.log('渲染了几次');

    return (
      <div>
        {count}
      </div>
    );
  }
}

export default App;
