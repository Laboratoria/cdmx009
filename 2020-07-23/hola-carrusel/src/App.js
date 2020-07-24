import React, { useState } from 'react';
import data from './data';
import './App.css';

//
// Implementación como _función_ usando _hooks_.
//
function App() {
  const [current, setCurrent] = useState(0);

  const handleClick = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };

  return (
    <div
      className="App"
      style={{
        color: data[current].color,
        backgroundColor: data[current].bgColor,
      }}
      onClick={handleClick}
    >
      {data[current].text}
    </div>
  );
}

//
// Implementación alternativa como _clase_.
//
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { current: 0 };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(({ current }) => ({
//       current: current === data.length - 1 ? 0 : current + 1,
//     }));
//   }

//   render() {
//     const { current } = this.state;
//     return (
//       <div
//         className="App"
//         style={{
//           color: data[current].color,
//           backgroundColor: data[current].bgColor,
//         }}
//         onClick={this.handleClick}
//       >
//         {data[current].text}
//       </div>
//     );
//   }
// }

export default App;
