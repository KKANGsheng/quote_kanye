import './App.css';
import React from "react"
import './style.css'

function App() {
  const [quote,setquote]=React.useState("");

  let fetchNewQuote = () => {
    fetch("https://api.kanye.rest")
      .then(res => res.json())
      .then(data=>setquote(data.quote))
  }

  // fetch the data
 React.useEffect(function(){
  fetch("https://api.kanye.rest")
  .then(res => res.json())
  .then(data=>setquote(data.quote))
 },[]);


  return(
    <div className="con">
      <h1 className="div-head">Grab the KANYE quote</h1>
      <button className="-btn" onClick={fetchNewQuote}>Grab Quote</button>
      <p className="quotes">{quote}</p>
    </div>
  )

}
export default App;
