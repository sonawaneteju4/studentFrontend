import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover"
      style={{ backgroundImage: `url("/bg.jpg")` }}
    >
      <center>

      <div className="lg:flex sm:block">
        <Link to="/register">
          <button className="m-5 p-3 px-5 backdrop-sepia-0 bg-white/50 font-serif font-semibold hover:bg-white/100 backdrop-blur-sm drop-shadow-xl rounded-tl-lg rounded-br-lg bg-white">
            Register Now!
          </button>
        </Link>
        <Link to="/responce">
          <button className="m-5 p-3 px-5 backdrop-sepia-0 bg-white/50 font-serif font-semibold hover:bg-white/100 backdrop-blur-sm drop-shadow-xl rounded-tl-lg rounded-br-lg bg-white">
            Check Responce
          </button>
        </Link>
      </div>
      </center>
    </div>
  );
};

export default Home;
