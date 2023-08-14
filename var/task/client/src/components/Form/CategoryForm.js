import React from 'react'

const CategoryForm = ({handleSubmit , value , setValue}) => {
  return (
    <>
      <form onSubmit={handleSubmit} className='d-flex'> 
        <div className='name-modal-form'>
            <input type="text" className="form-control" placeholder='Add Category' value={value} onChange={(e)=>setValue(e.target.value)}/>
        </div>
       
        <button type="submit" className="btn btn-primary ms-2">Submit</button>
      </form>

    </>
  )
}

export default CategoryForm