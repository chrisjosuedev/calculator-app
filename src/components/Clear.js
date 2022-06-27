import React from "react";
import '../styles/Clear.css'

const Clear = (props) => {
  return (
    <div className="button-clear" onClick={props.handleClear}>
      {props.children}
    </div>
  )
}

export default Clear