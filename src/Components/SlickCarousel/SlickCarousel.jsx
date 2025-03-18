import React, { useState } from "react";
import avatar1 from "../../assets/Home/Ellipse31.svg";
import doubleQuotes from "../../assets/Home/doubleQuotes.svg";
import Travel_Concepts_2 from "../../assets/Home/Travel_Concepts_2.svg";
import { Avatar } from "@mui/material";
import "./SlickCarousel.css";
import avatar2 from "../../assets/Home/Ellipse32.svg";
import avatar3 from "../../assets/Home/Ellipse33.svg";
import avatar4 from "../../assets/Home/Ellipse34.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import nature from "../../assets/Home/nature.mp4";
const PrevArrow = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <MdArrowBackIos />
    </div>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <MdArrowForwardIos />
    </div>
  );
};

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    // <div className="home_testimonials">
    //   <div className="home_testimonials_headings">
    //     <h4>TESTIMONIALS</h4>
    //     <h3>See What Our Clients Say About Us</h3>
    //   </div>
    //   <div className="home_testimonials_wrap">
    //     <div className="home_testimonials_div">
    //       {/* <h3>
    //         <Avatar
    //           alt="testimonial1"
    //           src={avatar1}
    //           sx={{
    //             border: "none !important",
    //             outline: "none !important",
    //             left: "0.5vw",
    //             width: "8vw",
    //             height: "8vw",
    //           }}
    //         />
    //       </h3> */}
    //       {/* <div className="home_testimonials_quote">
    //         <img src={doubleQuotes} alt="doubleQuotes" />
    //       </div> */}
    //       <p>
    //         Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam
    //         et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt
    //         provident quo possimus impedit vel doloremque obcaecati qui ullam
    //         consectetur et ipsum omnis.
    //       </p>
    //       <h4>Christine Beckam - Designer</h4>
    //     </div>
    //     <div className="home_testimonials_div">
    //       {/* <h3>
    //         <Avatar
    //           alt="testimonial1"
    //           src={avatar2}
    //           sx={{
    //             border: "none !important",
    //             outline: "none !important",
    //             left: "0.5vw",
    //             width: "8vw",
    //             height: "8vw",
    //           }}
    //         />
    //       </h3> */}
    //       {/* <div className="home_testimonials_quote">
    //         <img src={doubleQuotes} alt="doubleQuotes" />
    //       </div> */}
    //       <p>
    //         Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam
    //         et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt
    //         provident quo possimus impedit vel doloremque obcaecati qui ullam
    //         consectetur et ipsum omnis.
    //       </p>
    //       <h4>Christine Beckam - Designer</h4>
    //     </div>
    //     <div className="home_testimonials_div">
    //       <h3>
    //         {/* <Avatar
    //           alt="testimonial1"
    //           src={avatar3}
    //           sx={{
    //             border: "none !important",
    //             outline: "none !important",
    //             left: "0.5vw",
    //             width: "8vw",
    //             height: "8vw",
    //           }}
    //         /> */}
    //       </h3>
    //       {/* <div className="home_testimonials_quote">
    //         <img src={doubleQuotes} alt="doubleQuotes" />
    //       </div> */}
    //       <p>
    //         Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam
    //         et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt
    //         provident quo possimus impedit vel doloremque obcaecati qui ullam
    //         consectetur et ipsum omnis.
    //       </p>
    //       <h4>Christine Beckam - Designer</h4>
    //     </div>
    //     <div className="home_testimonials_div">
    //       {/* <h3>
    //         <Avatar
    //           alt="testimonial1"
    //           src={avatar4}
    //           sx={{
    //             border: "none !important",
    //             outline: "none !important",
    //             left: "0.5vw",
    //             width: "8vw",
    //             height: "8vw",
    //           }}
    //         />
    //       </h3> */}
    //       {/* <div className="home_testimonials_quote">
    //         <img src={doubleQuotes} alt="doubleQuotes" />
    //       </div> */}
    //       <p>
    //         Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam
    //         et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt
    //         provident quo possimus impedit vel doloremque obcaecati qui ullam
    //         consectetur et ipsum omnis.
    //       </p>
    //       <h4>Christine Beckam - Designer</h4>
    //     </div>
    //   </div>
    //   <div className="home_testimonials_side_img">
    //     <img src={Travel_Concepts_2} alt="Travel_Concepts_2" />
    //   </div>
    // </div>
    <div className="videos">
      <video autoPlay muted loop playsInline className="background-video">
        <source src={nature} type="video/mp4" />
      </video>
    </div>
  );
};

export default SlickCarousel;
