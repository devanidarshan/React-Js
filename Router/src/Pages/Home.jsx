import React from "react";
import Navbar from "../Components/Navbar";
import home from '../assets/home.jpg'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <h1 className="text-2xl mt-12">
        <div className="flex justify-around">
          <div className="w-[700px] mt-10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              quae veritatis alias ad omnis sapiente perspiciatis dolorum error
              maxime, dicta asperiores fuga id, quod nam numquam! Ullam ratione
              officia vero? Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Et minus ipsam vitae fugit soluta iste cupiditate dolores
              aliquam nesciunt commodi, alias, unde veritatis assumenda
              blanditiis! Nesciunt dolor aliquid quae accusamus, iure eligendi
              laudantium sit voluptate sunt unde illo quos, nihil illum quaerat?
              Quo voluptatum..{" "}
            </p>
          </div>
          <div className="w-96">
            <img src={home} className="" alt="" />
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Home;
