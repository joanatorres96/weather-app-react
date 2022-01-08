import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather/>
      <div className='text-center pb-2 fs-5'>
        <p> <a href='https://github.com/joanatorres96/weather-app-react'title='Github Link' className='text-decoration-none'>Open-source code</a>{" by "}<a href='https://cranky-poincare-a3701c.netlify.app/' className='fst-italic text-decoration-none'>Joana Torres</a>. </p>
      </div>
    </div>
  );
}

export default App;
