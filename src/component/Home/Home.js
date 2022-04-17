import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
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
      <div className="py-7">
        <Carousel />
      </div>
      <div className="pt-10 grid grid-cols-3 gap-5 py-10">
        {packages.map((packages) => (
          <Packages key={packages.id} packages={packages} />
        ))}
      </div>
    </div>
  );
};

export default Home;
