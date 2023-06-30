import React from 'react'
import PropTypes from 'prop-types'
function Student(props) {
  return (
    <div>
        <div>
            {props.name}
        </div>
        <div>
            {props.rollno}
        </div>
    </div>
  )
}

export default Student