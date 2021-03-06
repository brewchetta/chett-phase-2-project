import React, { useState } from 'react'


function NewReviewForm({addReview}) {

  const [formData, setFormData] = useState({
    restaurant: '',
    content: '',
    rating: 0
  })

  function handleSubmit(event) {
    event.preventDefault()
    addReview(formData)
  }

  return (
    <form onSubmit={handleSubmit}>

      <input type="text"
        onChange={event => setFormData({...formData, restaurant: event.target.value})}
        value={formData.restaurant}
        placeholder='Restaurant Name'
      />

      <br/>

      <textarea
        onChange={event => setFormData({...formData, content: event.target.value})}
        value={formData.content}
        placeholder='Write your review here!'
      />

      <br/>

      <input type="number"
        onChange={event => setFormData({...formData, rating: event.target.value})}
        value={formData.rating}
        placeholder='Rating'
        max="5"
        min="0"
        step="0.5"
      />

      <br/>

      <input type="submit" value="Add A New Review" />

    </form>
  )

}

export default NewReviewForm
