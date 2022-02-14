import React, { useState } from "react"

const Toggle = () => {
  const [toggle, setToggle] = useState(false)
  const onChangeSwitch = () => {
    setToggle(!toggle)
  }
  return (
    <div className="reactToggle">
      <label htmlFor="switch" className="leftCheck">
        🌞
      </label>
      <label htmlFor="switch" className="rightCheck">
        🌛
      </label>
      <label
        htmlFor="switch"
        className={toggle ? "blackActive" : "whiteActive"}
      ></label>
      <input type="checkbox" id="switch" onChange={onChangeSwitch} />
    </div>
  )
}

export default Toggle
