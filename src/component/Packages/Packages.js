import React from "react";
import { useNavigate } from "react-router-dom";

const Packages = ({ packages }) => {
  const navigate = useNavigate();
  const { name, price, descOne, descTwo, descThree, descFour, descFive, img } =
    packages;
  return (
    <div>
      <div className="card-container mx-5 mb-10 bg-gray-300 rounded-xl h-[680px] relative">
        <img className="rounded-t-xl mt-3 h-[280px] w-full" src={img} alt="" />
        <h3 className="text-2xl font-serif italic text-center text-blue-500 font-bold pt-3 pb-8">
          {name}
        </h3>

        <div className="px-5 py-2 text-lg pb-20">
          <p className="text-xl mb-2">
            <i className="text-xl text-blue-600 font-bold las la-hand-point-right"></i>{" "}
            {descOne}
          </p>
          <p className="text-xl mb-2">
            <i className="text-xl text-blue-600 font-bold las la-hand-point-right"></i>{" "}
            {descTwo}
          </p>
          <p className="text-xl mb-2">
            <i className="text-xl text-blue-600 font-bold las la-hand-point-right"></i>{" "}
            {descThree}
          </p>
          <p className="text-xl mb-2">
            <i className="text-xl text-blue-600 font-bold las la-hand-point-right"></i>{" "}
            {descFour}
          </p>
          <p className="text-xl mb-2">
            <i className="text-xl text-blue-600 font-bold las la-hand-point-right"></i>{" "}
            {descFive}
          </p>
          <h2 className="text-2xl text-blue-700 font-bold text-center">
            Price: {price}
          </h2>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate("/checkout")}
            className="bg-blue-300 hover:bg-blue-400 text-xl font-serif font-bold px-5 py-1 rounded-full text-center pb-1 absolute bottom-5"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Packages;
