import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)

  function handleClick(){
    // setIsOn(!isOn)
    setIsOn((isOn) => !isOn)
  }
  const color = isOn ? "red" : "white";
  return (
    <div>
      <button className="btn" style={{ background: color }} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>
    </div>
  )
}

export default Toggle;
