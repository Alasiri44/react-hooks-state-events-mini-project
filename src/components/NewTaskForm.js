import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, seText] = useState('');
  const [category, setCategory] = useState('');

  // function to handle submission
  function handleSubmit(event){
    event.preventDefault();
    const formData = {
      'text': text,
      'category': category
    }
    
    onTaskFormSubmit(formData)
  }
  return (
    <form className="new-task-form" onSubmit={(event) => handleSubmit(event)}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => seText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} >
          {/* render <option> elements for each category here */
          categories.map((category, index) => {
             return <option key={index}>{category}</option>
          })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
