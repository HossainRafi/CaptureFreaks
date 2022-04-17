import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";

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
          <div className="flex justify-center">
            <h2 className="text-xl font-bold text-orange-400">Ratting:</h2>
            <Rating
              className="pt-1 ml-3"
              readonly
              initialRating={ratting}
              emptySymbol={<AiOutlineStar color="orange" size={"20px"} />}
              fullSymbol={<AiFillStar color="orange" size={"20px"} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
