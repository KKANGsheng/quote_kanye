import './App.css';
import React from "react"
import './style.css'

function App() {
  const [quote,setquote]=React.useState("");


  // fetch the data
const set= React.useEffect(()=>{
  fetch("https://api.kanye.rest/")
  .then(res=>res.json())
  .then(data=>setquote(data.quote))
  },[])


  return(
    <div className="con">
      <h1 className="div-head">Grab the KANYE quote</h1>
      <button className="-btn" onClick={set}>Grab Quote</button>
      <p className="quotes">{quote}</p>
    </div>
  )

}
export default App;
