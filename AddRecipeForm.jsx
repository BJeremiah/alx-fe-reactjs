import React, { useState } from 'react'
import { useRecipeStore } from './recipeStore'

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (title.trim() === '' || description.trim() === '') return

    const newRecipe = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    }

    addRecipe(newRecipe)
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '18px' }}>
      <div style={{ marginBottom: '8px' }}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '8px' }}>
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          rows={4}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <button type="submit">Add Recipe</button>
    </form>
  )
}

export default AddRecipeForm
