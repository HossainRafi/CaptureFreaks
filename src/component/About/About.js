import React from "react";
import img from "../../Utilities/images/profile.jpg";

const About = () => {
  return (
    <div className="bg-gray-200 md:flex justify-center items-center py-6 px-5">
      <div className="md:w-1/2 md:pl-16 py-5">
        <h1 className="text-4xl font-serif text-blue-600 pb-5">
          Hi..!! I'm Hossain Rafi{" "}
        </h1>
        <p className="text-xl text-justify text-gray-700">
          I am a beginner in programming community. Last four month was very
          hard time for me as a beginner. I worked hard to learn HTML, CSS,
          Basic JavaScript and Basic React.js. I Challenged myself to learn
          Advance JavaScript, Advance React.js, Node.js and MongoDB in next six months. After six month I want to see myself as a
          Front End Junior Web Developer. I'm trying hard and soul to achieve my
          goal
        </p>
      </div>
      <div className="flex justify-center items-center md:w-1/2 md:pl-14 py-5 px-5">
        <img className="h-[300px] w-[300px]" src={img} alt="" />
      </div>
    </div>
  );
};

export default About;
