import ArenaSiDevOpsLogo from '/src/assets/logo.jpg'
import './App.css'

function App() {


  return (
    <>
      <div>
        {<a href="https://arena-si-devops.github.io/web/" target="_blank">
          <img src={ArenaSiDevOpsLogo} className="logo" alt="Arena Si DevOps LLC logo" style={{ width: '200px', height: '200px', float: 'left', marginRight: '20px' }} />
        </a>}
      </div>
      <h1>Arena Si DevOps LLC</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          <h2></h2>
        </p>
        <p>
          <h2></h2>
        </p>

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
          <h2>Contact</h2> 
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
