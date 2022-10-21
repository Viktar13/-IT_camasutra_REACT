// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;

// {/* <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     IT-KAMASURA Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header> */}
