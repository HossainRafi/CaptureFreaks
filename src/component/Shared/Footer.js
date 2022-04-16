import React from 'react';

const Footer = () => {
    return (
      <div>
        <div className="bg-slate-400 h-auto flex flex-col items-center justify-center">
          <p className="text-2xl text-white font-serif mt-5">
            All Rights Reserved By
          </p>
          <p className="text-2xl my-2 text-white font-serif">
            Capture Freaks Photography
          </p>
          <p className="text-2xl text-white font-serif mb-5">
            &#169; Copyright, 2022
          </p>
        </div>
      </div>
    );
};

export default Footer;