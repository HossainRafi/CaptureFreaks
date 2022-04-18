import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import Reviews from "../Reviews/Reviews";
import Packages from "./../Packages/Packages";

const Home = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div>
      <div className="pb-7">
        <Carousel />
      </div>
      <h1 className="text-center font-serif text-blue-600 text-5xl pt-10 mx-5">
        Packages For You
      </h1>
      <div className="grid md:grid-cols-3 gap-5 pt-10 py-10">
        {packages.map((packages) => (
          <Packages key={packages.id} packages={packages} />
        ))}
          </div>
          <Reviews/>
    </div>
  );
};

export default Home;
