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
          About Us
        </p>
        <p>
          Services
          <li>DevOps Consulting</li>
          <li>Infrastructure Implementation Services</li>
          <li>Managed Pipeline Solutions</li>

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
