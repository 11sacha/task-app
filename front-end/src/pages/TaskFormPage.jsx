import useForm from "react-hook-form";

const TaskFormPage = () => {
  const { register } = useForm();

  return (
    <div>
      <form action="">
        <input 
          type="text" 
          placeholder='Title'
          {...register("title", { required: true })} 
        />
        <textarea 
          rows="3" 
          placeholder="Description"
          {...register("description", { required: true })} 
        ></textarea>
        <button>Save</button>
      </form>
    </div>
  )
}

export default TaskFormPage