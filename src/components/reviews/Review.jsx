import React from 'react'

export default function Review({book}) {
  return (
    <div className="mt-6 w-full max-w-lg mx-auto">
      <h4 className="text-xl font-semibold">Reviews:</h4>
      <div className="mt-4">
        {book.ratings.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          book.ratings.map((rating) => (
            <div
              key={rating.id}
              className="mb-4 p-4 border border-gray-300 rounded-lg"
            >
              <h5 className="font-semibold">{rating.fullName}</h5>
              <p className="text-gray-700">{rating.comment}</p>
              <p className="text-sm text-gray-500">
                Published: 
                {new Date(rating.creationDate).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
