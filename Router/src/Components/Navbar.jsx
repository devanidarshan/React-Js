import React from "react";
import { Link } from "react-router-dom";
Link;

const Navbar = () => {
  return (
    <div>
      <div>
        <div>
          <ul className="flex justify-around bg-teal-600 p-5">
            <li className="">
              <Link className="underline text-white text-2xl" to="/">
                Home
              </Link>
            </li>
            <li className="">
              <Link className="underline text-white text-2xl" to="/about">
                About
              </Link>
            </li>
            <li className="">
              <Link className="underline text-white text-2xl" to="/product">
                Product
              </Link>
            </li>
            <li className="">
              <Link className="underline text-white text-2xl" to="/contact">
                Contact
              </Link>
            </li>
            <li className="">
              <Link className="underline text-white text-2xl" to="/filter">
                Filter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
