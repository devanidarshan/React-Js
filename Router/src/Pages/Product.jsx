import React from "react";
import Navbar from "../Components/Navbar";
import product from '../assets/product.jpg'
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl mt-12">
        <div className="flex justify-around">
          <div className="w-[700px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              quae veritatis alias ad omnis sapiente perspiciatis dolorum error
              maxime, dicta asperiores fuga id, quod nam numquam! Ullam ratione
              officia vero? Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Et minus ipsam vitae fugit soluta iste cupiditate dolores
              aliquam nesciunt commodi, alias, unde veritatis assumenda
              blanditiis! Nesciunt dolor aliquid quae accusamus, iure eligendi
              laudantium sit voluptate sunt unde illo quos, nihil illum quaerat?
              Quo voluptatum impedit accusantium delectus ab mollitia numquam!
              Earum maiores laudantium iusto natus doloribus modi, nobis
              mollitia aliquid, atque numquam aspernatur, eum consequuntur.
              Consectetur rerum corrupti repellendus.
            </p>
          </div>
          <div className="">
            <img src={product} className="" alt="" />
          </div>
        </div>
        <Link className="font-semibold ml-14 text-green-600 underline" to="/">Go to Home Page</Link>
       </h1>
    </div>
  );
};

export default Product;
