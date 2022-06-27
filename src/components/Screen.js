import React from "react";
import '../styles/Screen.css'

// Otra forma de definir componentes
const Screen = ({ input }) => {
  return(
    <div className="input">
      { input }
    </div>
  )
}

export default Screen