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
          <li>xxx</li>
          <li>xxx</li>
          <li>xxx</li>

        </p>
        <p>
          Contact 
        </p>
        {/* <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
      <p className="read-the-docs">
        Enter a tag line here for the company
      </p>
    </>
  )
}

export default App
