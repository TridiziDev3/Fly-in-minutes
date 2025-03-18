import React, { useEffect } from "react";
import "./Home.css";
import { IoIosSearch } from "react-icons/io";
import wave from "../../assets/Home/Vector1.svg";
import { Avatar, AvatarGroup, Rating, Stack } from "@mui/material";
import avatar1 from "../../assets/Home/Ellipse31.svg";
import avatar2 from "../../assets/Home/Ellipse32.svg";
import avatar3 from "../../assets/Home/Ellipse33.svg";
import avatar4 from "../../assets/Home/Ellipse34.svg";
import avatar5 from "../../assets/Home/Ellipse35.svg";
import avatar6 from "../../assets/Home/Ellipse36.svg";
import boximg1 from "../../assets/Home/Group1.svg";
import boximg2 from "../../assets/Home/Group2.svg";
import boximg3 from "../../assets/Home/image.svg";
import boximg4 from "../../assets/Home/Group3.svg";
import bgElement from "../../assets/Home/BackgroundElement.svg";
import section3Img from "../../assets/Home/Illustration.svg";
import line from "../../assets/Home/Line-1.svg";
import line1 from "../../assets/Home/Line-3.svg";
import line2 from "../../assets/Home/Line-8.svg";
import aero from "../../assets/Home/aero.svg";
import sqaure from "../../assets/Home/square.svg";
import water from "../../assets/Home/water.svg";
import car from "../../assets/Home/car.svg";
import girl from "../../assets/Home/girl.svg";
import chennai from "../../assets/Home/chennai.svg";
import send from "../../assets/Home/send.svg";
import map from "../../assets/Home/map.svg";
import leaf from "../../assets/Home/leaf.svg";
import building from "../../assets/Home/building.svg";
import { CiHeart } from "react-icons/ci";
import BackgroundElement1 from "../../assets/Home/BackgroundElement1.svg";
import cardImg1 from "../../assets/Home/cardImg1.svg";
import cardImg2 from "../../assets/Home/cardImg2.svg";
import cardImg3 from "../../assets/Home/cardImg3.svg";
import cardImg4 from "../../assets/Home/cardImg4.svg";
import cardImg5 from "../../assets/Home/cardImg5.svg";
import cardImg6 from "../../assets/Home/cardImg6.svg";
import bgElement2 from "../../assets/Home/BackgroundElement2.svg";
import package1 from "../../assets/Home/package1.svg";
import package2 from "../../assets/Home/package2.svg";
import package3 from "../../assets/Home/package3.svg";
import { BsPerson } from "react-icons/bs";
import { MdOutlineCalendarToday } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import promotionL from "../../assets/Home/promotionL.svg";
import Destination1 from "../../assets/Home/Destination1.svg";
import Destination2 from "../../assets/Home/Destination2.svg";
import Destination3 from "../../assets/Home/Destination3.svg";
import Destination4 from "../../assets/Home/Destination4.svg";
import doubleQuotes from "../../assets/Home/doubleQuotes.svg";
import testimonial1 from "../../assets/Home/testimonial1.svg";
import Travel_Concepts_2 from "../../assets/Home/Travel_Concepts_2.svg";
import TripBig from "../../assets/Home/TripBig.svg";
import trip1 from "../../assets/Home/trip1.svg";
import trip2 from "../../assets/Home/trip2.svg";
import trip3 from "../../assets/Home/trip3.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const PrevArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className="home_left_btn">
      <p>
        <HiArrowLongLeft />
      </p>
    </div>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className="home_right_btn">
      <p>
        <HiArrowLongRight />
      </p>
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <div className="home_main_container">
      <div className="home_banner_container">
        <div className="home_banner_content">
          <div className="home_banner_top">
            <div className="home_banner_top_wrapper">
              <img src={wave} alt="wave" />
              <h1>No matter where you’re going to, we’ll take you there</h1>
              <div className="home_banner_top_btm">
                <AvatarGroup
                  max={7}
                  sx={{
                    "& .MuiAvatarGroup-avatar": {
                      width: 30,
                      height: 30,
                    },
                  }}
                >
                  <Avatar
                    alt="avatar1"
                    src={avatar1}
                    sx={{
                      border: "none !important",
                      outline: "none !important",
                      left: "0.5vw",
                    }}
                  />

                  <Avatar
                    alt="avatar2"
                    src={avatar2}
                    sx={{
                      border: "none !important",
                      outline: "none !important",
                      left: "0.5vw",
                    }}
                  />
                  <Avatar
                    alt="avatar3"
                    src={avatar3}
                    sx={{
                      border: "none !important",
                      outline: "none !important",
                      left: "0.5vw",
                    }}
                  />
                  <Avatar
                    alt="avatar4"
                    src={avatar4}
                    sx={{
                      border: "none !important",
                      outline: "none !important",
                      left: "0.5vw",
                    }}
                  />
                  <Avatar
                    alt="avatar5"
                    src={avatar5}
                    sx={{
                      border: "none !important",
                      outline: "none !important",
                      left: "0.5vw",
                    }}
                  />
                  <Avatar
                    alt="avatar6"
                    src={avatar6}
                    sx={{
                      border: "none !important",
                      outline: "none !important",
                      left: "0.5vw",
                    }}
                  />
                </AvatarGroup>
                <p>2,500 people booked Tommorowland Event in last 24 hours</p>
              </div>
            </div>
          </div>
          <div className="home_banner_bottom">
            <div className="home_banner_btm_search">
              <p>
                <IoIosSearch />
              </p>
              <input
                type="search"
                placeholder="Search Key word"
                className="home_banner_btm_search_input"
              />
            </div>
            <div className="home_banner_btm_navigates">
              <p>Tours</p>
              <p>Travels</p>
              <p>Travels</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home_category">
        <div className="home_category_top">
          <p>CATEGORY</p>
          <h3>We Offer Best Services</h3>
        </div>
        <div className="home_category_boxes">
          <div className="home_category_box1" data-aos="fade-right">
            <div className="home_category_box1_img">
              <img src={boximg1} alt="boximg1" />
            </div>
            <div className="home_category_box1_txt">
              <h3>Road Trips</h3>
              <p>
                sunt qui repellat saepe quo velit aperiam id aliquam placeat.
              </p>
            </div>
          </div>
          <div className="home_category_box2" data-aos="fade-up">
            <div className="home_category_box2_wrapper">
              <div className="home_category_box1_img">
                <img src={boximg3} alt="boximg3" />
              </div>
              <div className="home_category_box1_txt">
                <h3>Home Stays</h3>
                <p>
                  sunt qui repellat saepe quo velit aperiam id aliquam placeat.{" "}
                </p>
              </div>
            </div>
            <div className="home_category_box2_back"></div>
          </div>
          <div className="home_category_box1" data-aos="fade-down">
            <div className="home_category_box1_img">
              <img src={boximg2} alt="boximg2" />
            </div>
            <div className="home_category_box1_txt">
              <h3>Religious Tours</h3>
              <p>
                sunt qui repellat saepe quo velit aperiam id aliquam placeat.{" "}
              </p>
            </div>
          </div>
          <div>
            <div className="home_category_box1" data-aos="fade-left">
              <div className="home_category_box1_img">
                <img src={boximg4} alt="boximg4" />
              </div>
              <div className="home_category_box1_txt">
                <h3>Historical Tours</h3>
                <p>
                  sunt qui repellat saepe quo velit aperiam id aliquam placeat.{" "}
                </p>
              </div>
            </div>
            <div className="last_box_dot"></div>
          </div>
        </div>
      </div>
      <div className="home_section3">
        <div className="home_section3_left">
          <div
            className="home_section3_left_sml_img1"
            data-aos="fade-down"
            // data-aos-delay="600"
          >
            <img src={trip1} alt="trip1" />
          </div>
          <div
            className="home_section3_left_sml_img2"
            data-aos="fade-up-right"
            // data-aos-delay="200"
          >
            <img src={trip2} alt="trip2" />
          </div>
          <div
            className="home_section3_left_sml_img3"
            data-aos="fade-down-right"
            // data-aos-delay="200"
          >
            <img src={trip3} alt="trip3" />
          </div>
          <div className="home_section_left_big_img" data-aos="fade-right">
            <div className="home_section_left_big_img_bdr">
              <img src={TripBig} alt="tripbig" />
            </div>
          </div>
        </div>
        <div className="home_section3_right" data-aos="fade-left">
          <h4>Historical Trips</h4>
          <h3>Our Historic Tropical Destinations</h3>
          <p>
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>
          {/* <button>View Packages</button> */}
          <motion.button
            whileTap={{ scale: 0.85 }}
            style={{
              background: "#553214",
              outline: "none",
            }}
          >
            View Packages
          </motion.button>
        </div>
      </div>
      <div className="home_section3_sml_img">
        <img src={bgElement} alt="bgElement" />
      </div>

      
      <div className="home_section4">
        <div
          className="home_section4_left"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          <h4>Fast & Easy</h4>
          <h3>Get Your Home Stay Travel Bookings</h3>
          <div className="home_section4_Left_box_container">
            <div className="home_section4_Left_box1">
              <div className="home_section4_left_box1_img">
                <img src={sqaure} alt="sqaure" />
              </div>
              <div className="home_section4_Left_box1_text">
                <h4>Choose Destination</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
            <div className="home_section4_Left_box2">
              <div className="home_section4_left_box2_img">
                <img src={water} alt="water" />
              </div>
              <div className="home_section4_Left_box2_text">
                <h4>Check Availability</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
            <div className="home_section4_Left_box3">
              <div className="home_section4_left_box3_img">
                <img src={car} alt="car" />
              </div>
              <div className="home_section4_Left_box3_text">
                <h4>Let’s Go</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home_section4_right">
          <div
            className="home_section4_right_aero"
            data-aos="fade-down-right"
            data-aos-delay="600"
            // data-aos-offset="300"
            // data-aos-easing="ease-in-sine"
          >
            <img src={aero} alt="aero" />
          </div>
          <div className="home_section4_right_card">
            <div className="home_section4_right_card_top">
              <img src={chennai} alt="chennai" />
            </div>
            <div className="home_section4_right_card_btm">
              <h4>Trip to Tamil Nadu </h4>
              <h5>14-29 June | by JR Martinax</h5>
              <div className="home_section4_right_card_btm_icons">
                <div className="home_section4_right_card_btm_icon1">
                  <img src={leaf} alt="leaf" />
                </div>
                <div className="home_section4_right_card_btm_icon1">
                  <img src={map} alt="map" />
                </div>
                <div className="home_section4_right_card_btm_icon1">
                  <img src={send} alt="send" />
                </div>
              </div>
              <div className="home_section4_right_card_btm_intrested">
                <div className="home_section4_right_card_btm_intrested_left">
                  <img src={building} alt="building" />
                  <p>60 people are interested</p>
                </div>
                <div className="home_section4_right_card_btm_intrested_love">
                  <p>
                    <CiHeart />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="home_section4_right_sml_card"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div className="home_section4_right_sml_card_img">
              <img src={girl} alt="girl" />
            </div>
            <div className="home_section4_right_sml_card_content">
              <h4>Ongoing</h4>
              <h3>Trip to Bangalore</h3>
              <p>
                <span>40%</span> completed
              </p>
              <div className="home_section4_right_sml_card_bar">
                <div className="home_section4_right_sml_card_bar1"></div>
              </div>
            </div>
          </div>
          <div className="home_section4_right_img">
            <img src={BackgroundElement1} alt="BackgroundElement1" />
          </div>
          <div className="home_section4_right_blur"></div>
        </div>
      </div>
      <div className="home_section5">
        <h4>Let’s Make Your </h4>
        <h5>Next Holiday Amazing</h5>
        <img src={line} alt="line" />
      </div>
      <div className="home_section6">
        <div className="home_section6_content">
          <h4>Promotion</h4>
          <h3>We Provide You India Best Sightseeing Tours</h3>
          <p>
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>

          <motion.button
            whileTap={{ scale: 0.85 }}
            style={{
              background: "#553214",
              outline: "none",
            }}
          >
            View Packages
          </motion.button>
        </div>
        <div className="home_section6_imgs">
          <div className="home_section6_large_img">
            <div className="home_section6_large_img_brdr">
              <img src={promotionL} alt="promotionL" />
            </div>
          </div>
          <div className="home_section6_large_img_text">
            <h3>Heart Felting Place in India</h3>
          </div>
          <div className="home_section6_blur"></div>
          <div className="home_section6_bg_img">
            <img src={BackgroundElement1} alt="BackgroundElement1" />
          </div>
          <div className="home_section6_sml_imgs">
            <img src={Destination1} alt="Destination1" />
            <img src={Destination2} alt="Destination2" />
            <img src={Destination3} alt="Destination3" />
            <img src={Destination4} alt="Destination4" />
          </div>
        </div>
      </div>
      <div className="home_section7">
        <div className="home_section7_top">
          <h3>Top things to do worldwide</h3>
        </div>
        <div className="home_section7_bottom">
          <div className="home_section7_cards">
            <div className="home_section7_card">
              <div className="home_section7_card_img">
                <img src={cardImg1} alt="cardImg1" />
              </div>
              <div className="home_section7_card_text">
                <h4>Tower of London</h4>
                <p>London</p>
              </div>
            </div>
            <div className="home_section7_card">
              <div className="home_section7_card_img">
                <img src={cardImg2} alt="cardImg2" />
              </div>
              <div className="home_section7_card_text">
                <h4>Tower of London</h4>
                <p>London</p>
              </div>
            </div>
            <div className="home_section7_card">
              <div className="home_section7_card_img">
                <img src={cardImg3} alt="cardImg3" />
              </div>
              <div className="home_section7_card_text">
                <h4>Tower of London</h4>
                <p>London</p>
              </div>
            </div>
            <div className="home_section7_card">
              <div className="home_section7_card_img">
                <img src={cardImg4} alt="cardImg4" />
              </div>
              <div className="home_section7_card_text">
                <h4>Tower of London</h4>
                <p>London</p>
              </div>
            </div>
            <div className="home_section7_card">
              <div className="home_section7_card_img">
                <img src={cardImg5} alt="cardImg5" />
              </div>
              <div className="home_section7_card_text">
                <h4>Tower of London</h4>
                <p>London</p>
              </div>
            </div>
            <div className="home_section7_card">
              <div className="home_section7_card_img">
                <img src={cardImg6} alt="cardImg6" />
              </div>
              <div className="home_section7_card_text">
                <h4>Tower of London</h4>
                <p>London</p>
              </div>
            </div>
          </div>
          <div className="home_section7_bottom_box"></div>
          <div className="home_section7_bg_img">
            <img src={bgElement2} alt="bgElement2" />
          </div>
        </div>
      </div>
      <div className="home_section8">
        <div className="home_section8_left">
          <h4>Promotion</h4>
          <h3>Explore Nature</h3>
          <img src={line1} alt="line1" />
          {/* <button>View Packages</button> */}
          <motion.button
            whileTap={{ scale: 0.85 }}
            style={{
              background: "none",
              outline: "none",
            }}
          >
            View Packages
          </motion.button>
        </div>
        <div className="home_section8_right">
          <h4>Promotion</h4>
          <h3>Explore Cities</h3>
          <img src={line2} alt="line2" />
          {/* <button>View Packages</button> */}
          <motion.button
            whileTap={{ scale: 0.85 }}
            style={{
              background: "none",
              outline: "none",
            }}
          >
            View Packages
          </motion.button>{" "}
        </div>
      </div>
      <div className="home_section9">
        <div className="home_section9_top">
          <p>TRENDY</p>
          <h3>Our Trending Tour Packages</h3>
        </div>
        <div className="home_section9_btm_cards">
          <div className="home_section9_btm_card">
            <div className="home_section9_blur"></div>
            <div className="home_section9_btm_card_img">
              <img src={package1} alt="package1" />
            </div>
            <div className="home_section9_btm_card_content_div">
              <div className="home_section9_btm_card_top">
                <div className="home_section9_btm_card_top_left">
                  <p>
                    <span>
                      <MdOutlineCalendarToday />
                    </span>
                    8 Days
                  </p>
                </div>
                <div className="home_section9_btm_card_top_right">
                  <p>
                    <span>
                      <BsPerson />
                    </span>
                    25 People going
                  </p>
                </div>
              </div>
              <div className="home_section9_btm_card_rating">
                <div className="home_section9_btm_card_rating_txt">
                  <h3>Exclusive Kerala</h3>
                </div>
                <div className="home_section9_btm_card_rating_star">
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={5}
                      precision={0.5}
                      readOnly
                      sx={{ fontSize: "1vw" }}
                    />
                  </Stack>
                </div>
              </div>
              <div className="home_section9_btm_card_location">
                <span>
                  <SlLocationPin />
                </span>
                <p>Kerala</p>
              </div>
              <div className="home_section9_btm_card_price">
                <div className="home_section9_btm_card_discount_price">
                  <h3>45,000</h3>
                </div>
                <div className="home_section9_btm_card_original_price">
                  <h4>60,000</h4>
                </div>
              </div>
              <div className="home_section9_btm_card_content_txt">
                <p>
                  Nam exercitationem commodi et ducimus quia in dolore animi sit
                  mollitia amet id quod eligendi. Et labore harum non nobis
                  ipsum eum molestias mollitia et corporis praesentium a
                  laudantium internos.
                </p>
              </div>
            </div>
            <div className="home_section9_btm_card_button">
              <motion.button
                whileTap={{ scale: 0.85 }}
                style={{
                  border: "none",
                  background: "#553214",
                  outline: "none",
                }}
              >
                {/* <button>Explore Now</button> */}
                Explore Now
              </motion.button>
            </div>
          </div>
          <div className="home_section9_btm_card">
            <div className="home_section9_btm_card_img">
              <img src={package2} alt="package2" />
            </div>
            <div className="home_section9_btm_card_content_div">
              <div className="home_section9_btm_card_top">
                <div className="home_section9_btm_card_top_left">
                  <p>
                    <span>
                      <MdOutlineCalendarToday />
                    </span>
                    8 Days
                  </p>
                </div>
                <div className="home_section9_btm_card_top_right">
                  <p>
                    <span>
                      <BsPerson />
                    </span>
                    30 People going
                  </p>
                </div>
              </div>
              <div className="home_section9_btm_card_rating">
                <div className="home_section9_btm_card_rating_txt">
                  <h3>Hampi</h3>
                </div>
                <div className="home_section9_btm_card_rating_star">
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={5}
                      precision={0.5}
                      readOnly
                      sx={{ fontSize: "1vw" }}
                    />
                  </Stack>
                </div>
              </div>
              <div className="home_section9_btm_card_location">
                <span>
                  <SlLocationPin />
                </span>
                <p>Karnataka</p>
              </div>
              <div className="home_section9_btm_card_price">
                <div className="home_section9_btm_card_discount_price">
                  <h3>45,000</h3>
                </div>
                <div className="home_section9_btm_card_original_price">
                  <h4>60,000</h4>
                </div>
              </div>
              <div className="home_section9_btm_card_content_txt">
                <p>
                  Nam exercitationem commodi et ducimus quia in dolore animi sit
                  mollitia amet id quod eligendi. Et labore harum non nobis
                  ipsum eum molestias mollitia et corporis praesentium a
                  laudantium internos.
                </p>
              </div>
            </div>
            <div className="home_section9_btm_card_button">
              <motion.button
                whileTap={{ scale: 0.85 }}
                style={{
                  border: "none",
                  background: "#553214",
                  outline: "none",
                }}
              >
                {/* <button>Explore Now</button> */}
                Explore Now
              </motion.button>
            </div>
          </div>
          <div className="home_section9_btm_card">
            <div className="home_section9_btm_card_img">
              <img src={package3} alt="package3" />
            </div>
            <div className="home_section9_btm_card_content_div">
              <div className="home_section9_btm_card_top">
                <div className="home_section9_btm_card_top_left">
                  <p>
                    <span>
                      <MdOutlineCalendarToday />
                    </span>
                    8 Days
                  </p>
                </div>
                <div className="home_section9_btm_card_top_right">
                  <p>
                    <span>
                      <BsPerson />
                    </span>
                    155 People going
                  </p>
                </div>
              </div>
              <div className="home_section9_btm_card_rating">
                <div className="home_section9_btm_card_rating_txt">
                  <h3>Sri Lanka</h3>
                </div>
                <div className="home_section9_btm_card_rating_star">
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={5}
                      precision={0.5}
                      readOnly
                      sx={{ fontSize: "1vw" }}
                    />
                  </Stack>
                </div>
              </div>
              <div className="home_section9_btm_card_location">
                <span>
                  <SlLocationPin />
                </span>
                <p>Sri Lanka</p>
              </div>
              <div className="home_section9_btm_card_price">
                <div className="home_section9_btm_card_discount_price">
                  <h3>45,000</h3>
                </div>
                <div className="home_section9_btm_card_original_price">
                  <h4>60,000</h4>
                </div>
              </div>
              <div className="home_section9_btm_card_content_txt">
                <p>
                  Nam exercitationem commodi et ducimus quia in dolore animi sit
                  mollitia amet id quod eligendi. Et labore harum non nobis
                  ipsum eum molestias mollitia et corporis praesentium a
                  laudantium internos.
                </p>
              </div>
            </div>
            <div className="home_section9_btm_card_button">
              <motion.button
                whileTap={{ scale: 0.85 }}
                style={{
                  border: "none",
                  background: "#553214",
                  outline: "none",
                }}
              >
                {/* <button>Explore Now</button> */}
                Explore Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <div className="home_testimonials">
        <div className="home_testimonials_headings">
          <h4>TESTIMONIALS</h4>
          <h3>See What Our Clients Say About Us</h3>
        </div>
        {/* <div className="home_testimonials_div">
          <h3>
            <Avatar
              alt="testimonial1"
              src={avatar1}
              sx={{
                border: "none !important",
                outline: "none !important",
                left: "0.5vw",
                width: "8vw",
                height: "8vw",
              }}
            />
          </h3>
          <div className="home_testimonials_quote">
            <img src={doubleQuotes} alt="doubleQuotes" />
          </div>
          <p>
            Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam
            et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt
            provident quo possimus impedit vel doloremque obcaecati qui ullam
            consectetur et ipsum omnis.
          </p>
          <h4>Christine Beckam - Designer</h4>
        </div> */}
        <div className="carousel">
          <Slider {...settings}>
            <div className="home_testimonials_div">
              <h3>
                <Avatar
                  alt="testimonial1"
                  src={avatar1}
                  sx={{
                    border: "none !important",
                    outline: "none !important",
                    left: "0.5vw",
                    width: "8vw",
                    height: "8vw",
                  }}
                />
              </h3>
              <div className="home_testimonials_quote">
                <img src={doubleQuotes} alt="doubleQuotes" />
              </div>
              <p>
                Vel officiis dolor ea illo aut eligendi ullam non laudantium
                magnam et recusandae molestiae sit iure unde aut voluptate
                quaerat. Id sunt provident quo possimus impedit vel doloremque
                obcaecati qui ullam consectetur et ipsum omnis.
              </p>
              <h4>Christine Beckam - Designer</h4>
            </div>
            {/* <div className="home_testimonials_div">
              <h3>
                <Avatar
                  alt="testimonial1"
                  src={avatar2}
                  sx={{
                    border: "none !important",
                    outline: "none !important",
                    left: "0.5vw",
                    width: "8vw",
                    height: "8vw",
                  }}
                />
              </h3>
              <div className="home_testimonials_quote">
                <img src={doubleQuotes} alt="doubleQuotes" />
              </div>
              <p>
                Vel officiis dolor ea illo aut eligendi ullam non laudantium
                magnam et recusandae molestiae sit iure unde aut voluptate
                quaerat. Id sunt provident quo possimus impedit vel doloremque
                obcaecati qui ullam consectetur et ipsum omnis.
              </p>
              <h4>Christine Beckam - Designer</h4>
            </div> */}
            <div className="home_testimonials_div">
              <h3>
                <Avatar
                  alt="testimonial1"
                  src={avatar3}
                  sx={{
                    border: "none !important",
                    outline: "none !important",
                    left: "0.5vw",
                    width: "8vw",
                    height: "8vw",
                  }}
                />
              </h3>
              <div className="home_testimonials_quote">
                <img src={doubleQuotes} alt="doubleQuotes" />
              </div>
              <p>
                Vel officiis dolor ea illo aut eligendi ullam non laudantium
                magnam et recusandae molestiae sit iure unde aut voluptate
                quaerat. Id sunt provident quo possimus impedit vel doloremque
                obcaecati qui ullam consectetur et ipsum omnis.
              </p>
              <h4>Christine Beckam - Designer</h4>
            </div>
            <div className="home_testimonials_div">
              <h3>
                <Avatar
                  alt="testimonial1"
                  src={avatar4}
                  sx={{
                    border: "none !important",
                    outline: "none !important",
                    left: "0.5vw",
                    width: "8vw",
                    height: "8vw",
                  }}
                />
              </h3>
              <div className="home_testimonials_quote">
                <img src={doubleQuotes} alt="doubleQuotes" />
              </div>
              <p>
                Vel officiis dolor ea illo aut eligendi ullam non laudantium
                magnam et recusandae molestiae sit iure unde aut voluptate
                quaerat. Id sunt provident quo possimus impedit vel doloremque
                obcaecati qui ullam consectetur et ipsum omnis.
              </p>
              <h4>Christine Beckam - Designer</h4>
            </div>
          </Slider>
        </div>
        <div className="home_testimonials_side_img">
          <img src={Travel_Concepts_2} alt="Travel_Concepts_2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
