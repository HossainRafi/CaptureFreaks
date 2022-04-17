import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [userReviews, setUserReviews] = useState([]);
    useEffect(() => {
      fetch("rattingFakeData.json")
        .then((res) => res.json())
        .then((data) => setUserReviews(data));
    }, []);
    return (
        <div>
            <h1 className="text-center font-serif text-blue-600 text-6xl pt-10">Customer Reviews</h1>
        <div className="pt-10 grid md:grid-cols-3 gap-5 py-10">
          {userReviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
      </div>
    );
};

export default Reviews;