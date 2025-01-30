// import ArenaSiDevOpsLogo from '/companylogo.svg'
import './App.css'

function App() {


  return (
    <>
      {/* <div>
        {<a href="https://react.dev" target="_blank">
          <img src={ArenaSiDevOpsLogo} className="logo arenasidevops" alt="Arena Si DevOps LLC logo" />
        </a> }
      </div> */}
      <h1>Arena Si DevOps LLC</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          <h2>About Us</h2>
        </p>
        <p>
          <h2>Services</h2>
          <ul>
            <li>DevOps Consulting</li>
            <li>Infrastructure Implementation Services</li>
            <li>Managed Pipeline Solutions</li>
          </ul>
        </p>
        <p>
          Contact 
        </p>
        {/* <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
      <p className="read-the-docs">
        Our focus is to offer best in class DevOps as a Service to accelerate your software development and maximize ROI.
      </p>
    </>
  )
}

export default App
