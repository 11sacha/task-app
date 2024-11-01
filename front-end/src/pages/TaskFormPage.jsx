import React from 'react'

const TaskFormPage = () => {
  return (
    <div>
      <form action="">
        <input type="text" placeholder='Title' />
        <textarea rows="3" placeholder="Description"></textarea>
        <button>Save</button>
      </form>
    </div>
  )
}

export default TaskFormPage