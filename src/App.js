import logo from './assets/logo.svg'; 
import profile_pic from './assets/profile_pic_ai_1.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Alexander Solinger's Personal Site!</p>
        <img src={profile_pic} className="Profile-pic" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="mailto:alexandersolinger@me.com"
          target="#"
          rel="noopener noreferrer"
        >
          Contact Me
        </a>
      </header>
    </div>
  );
}

export default App;
