import React from 'react'

const ClearButton = (props) => {
  return (
    <div className='' onClick={props.manageClear}>
        {props.children}
    </div>
  )
}

export default ClearButton