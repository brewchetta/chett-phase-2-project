import React from 'react'
import { useParams, Redirect, useHistory } from 'react-router-dom'

function Review({reviews}) {

  const params = useParams()
  const history = useHistory()

  const foundReview = reviews.find(review => review.id === parseInt(params.id))

  if (foundReview) {
    return (
      <div>

        <h3>{foundReview.restaurant}</h3>
        <p>{foundReview.rating} stars</p>
        <p>{foundReview.content}</p>

        <button onClick={() => history.push(`/reviews/${foundReview.id}/edit`)}>Edit</button>

      </div>
    )
  } else if (reviews.length) {
    return (<Redirect to="/" />)
  } else {
    return <h2>Loading Reviews...</h2>
  }

}

export default Review
