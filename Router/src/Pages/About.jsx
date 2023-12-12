import React from "react";
import Navbar from "../Components/Navbar";
import about from "../assets/about.webp";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="About-Store flex items-center mt-[80px] mb-[250px] mx-28">
        <div>
          <img className="h-[400px] w-[500px]" src={about} alt="" />
        </div>
        <div className="ml-[70px] w-[50%] h-[50%]">
          <div className="flex mb-2">
            <i class="far fa-shopping-basket h-6 w-6 text-base border bg-[#3577F0] text-white rounded-full flex items-center justify-center"></i>
            <h1 className="flex items-center text-[#3577F0] text-sm font-bold ml-2">
              About Store
            </h1>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#27272E] mb-8">
              Online shopping includes both buying things online.
            </h1>
            <p className="text-gray-500 text-xl leading-9 mb-8">
              Salesforce B2C Commerce can help you create unified, intelligent
              digital commerce experiences — both online and in the store.
            </p>
          </div>
          <div className="text-gray-500 grid grid-cols-2 gap-7  text-sm ">
            <p>
              Empower your sales teams with industry tailored solutions that
              support manufacturers as they go digital, and adapt to changing
              markets & customers faster by creating new business.
            </p>
            <p>
              Salesforce B2B Commerce offers buyers the seamless, self-service
              experience of online shopping with all the B2B
            </p>
          </div>
        </div>
      </div>
      <ul className="flex">
        <li>
          <Link className="link" to="/">
            Go to Home Page
          </Link>
        </li>
        <li>
          <Link
            className="link font-semibold ml-14 text-green-600 underline"
            to="/user/anil"
          >
            anil Page
          </Link>
        </li>
        <li>
          <Link
            className="link font-semibold ml-14 text-green-600 underline"
            to="/user/mark"
          >
            Mark Page
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
