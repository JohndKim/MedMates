// import logo from './logo.svg';
// import './App.css';
import React from "react";

const Name = () => {
  // thing in here is rendered in the site
  return (
    <div>Hi there.</div>
  )
}

function App() {
  return (
    <div className="App">
      <Name></Name>
    </div>
  )

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
