import React, { useState, useEffect } from "react"
import HttpClient from "./HttpClient"
import styled from "styled-components";

const App = () => {
  const [apod, setApod] = useState({})

  useEffect(() => {
    HttpClient.getApod().then(apodData => {
      setApod(apodData.data)
    })
  }, [])

  return (
   
    <div style={{ 'background-color':"#EFEFEF" ,padding:20}} >
      <h1 style={{ 'padding-left': 600 ,color:"#08FFC8"}}>NASA API</h1>
      <h2 style={{'padding-left': 500 ,color:"#FFFFFF"}}>Astronomy Picture of the Day</h2>
      {apod && (
        <article>
          <header style={{ 'padding-left': 500}}>
            {apod.title} - <i style={{ 'margin-left':45}}>{apod.date}</i>
          </header>
          <img style={{ 'margin-left':1 ,padding:25 ,'border-radius':60,}} src={apod.url} alt="APOD" width="1350" height="500" />
          <p style={{color:"#008cff" ,padding:50,'font-size':30}}>{apod.explanation}</p>
          <pre
            style={{
              overflowX: "auto",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              color:"#08FFC8",
              'background-color':"#000",
              margin:50,
              padding:50,
              'border-radius':40,
              
            }}
          >
            <hr />
            {JSON.stringify(apod, null, 2)}
          </pre>
        </article>
      )}
    </div>
  )
}

export default App

