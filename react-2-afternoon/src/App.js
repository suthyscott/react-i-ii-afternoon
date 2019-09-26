import React from 'react'
import Update from './Components/Update'
import Header from './Components/Header'
import './App.css'

const App = (props) => {

  return (
    <div className="main-body">
      <Header />
      <div className="update-button-bar">
      <Update className="update"/>
      </div>
    </div>
  )

}

export default App