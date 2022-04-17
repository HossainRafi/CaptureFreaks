import React from "react";

const Review = ({ review }) => {
  const { name, img, ratting, comment } = review;
  console.log(review);
  return (
    <div>
      <div className="card-container mx-5 mb-10 bg-gray-200 rounded-xl h-[430px] pt-5">
        <img
          className="h-[80px] w-[80px] mx-auto rounded-full"
          src={img}
          alt=""
        />
        <h3 className="text-2xl font-serif text-center text-blue-500 font-bold pt-2 pb-3">
          {name}
        </h3>
        <div className="px-5 py-2 text-lg pb-20">
          <p className="text-xl text-center my-2">{comment}</p>
          <h2>Ratting:{ratting}</h2>
        </div>
      </div>
    </div>
  );
};

export default Review;
