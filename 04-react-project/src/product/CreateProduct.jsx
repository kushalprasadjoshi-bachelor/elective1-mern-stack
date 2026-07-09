import React from 'react'

const CreateProduct = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Form is submitted successfully!")
    }

  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <div>
                
            </div>

            <div>
                <button>Create</button>
            </div>
        </form>
    </div>
  )
}

export default CreateProduct