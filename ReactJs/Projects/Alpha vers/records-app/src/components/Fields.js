import React from 'react'

const Fields = (props) => {
  return (
    <div className='data_val'>
          <h4>{props.name}</h4>
          <h4>{props.email}</h4>
          <h4>
            <Button variant="outlined" color="error">
                <DeleteOutlineIcon />
            </Button>
            </h4>
    </div>
  )
}

export default Fields