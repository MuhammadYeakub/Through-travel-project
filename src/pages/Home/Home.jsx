import React from "react";
import Categories from "../../components/Categories/Categories";
import Places from "../../components/Places/Places";
import Banner from "../../components/Banner/Banner";
import Payment from "../../components/Payment/Payment";
import "./home.css";
import Testimonials from "../../components/Testimonials/Testimonial";
import LeafMap from "../../components/Map/LeafMap";

const Home = () => {
  return (
    <>
      <h1 className="animated-text text-center text-5xl my-2">
        Through Travels
      </h1>
      <Banner />
      <h1 className="animated-text text-center text-3xl mt-8">
        Explore Category
      </h1>
      <h4 className="animated-text text-center text-lg">
        Now you can select your destination by categories
      </h4>
      <Categories />
      <Places />
      <h1 className="animated-text text-center text-3xl mt-20">
        Reviews from Customers
      </h1>
      <h4 className="animated-text text-center text-lg">
        We Believe In Quality trust our world wide services
      </h4>
      <Testimonials />
      <h1 className="animated-text text-center text-3xl mt-20">
        Payment Partner
      </h1>
      <h4 className="animated-text text-center text-lg">
        Now you can Pay with our trusted world wide payment services
      </h4>
      <Payment />
      <h1 className="animated-text text-center text-3xl mt-20">
        Use our world Map
      </h1>
      <h4 className="animated-text text-center text-lg">
        Find your best destination and enjoy your trip
      </h4>
      <LeafMap />
    </>
  );
};

export default Home;
