import React, { useEffect, useState } from "react";
import "./Home.css";
import { FaShippingFast, FaStar, FaWpforms, FaShopify, FaHandshake } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import {AiOutlineSafety} from "react-icons/ai";
import {MdHighQuality,MdIncompleteCircle} from 'react-icons/md';
import {GiWallet} from "react-icons/gi"
import {SiSpringsecurity} from 'react-icons/si';
import {SlDiamond} from "react-icons/sl";
import {TbTruckDelivery} from "react-icons/tb";
import {CiMedal} from "react-icons/ci";


import ListComp from "../components/ListComponents/ListComp";
import SingleComp from "../components/ListComponents/SingleComp";
import ItemComp from "../components/ItemComponents/ItemComp";
import FeachApi from "../../../utils/FeachAPI";
import { useSelector, useDispatch } from "react-redux";
import { Home_Product_List_Action } from "../../../redux/actions/productList_actions/Product_List_action";
import productLogo from "./images/fa02f6685524d553a14cd27b9d4344ec-removebg-preview.png";

const Home = () => {
  const [filterKey, setfilterKey] = useState({
    home_best_Dispensery: "Best_Seller",
  });

  const { Home_actions, Home_product_List } = useSelector((state) => state);
  const Dispatch = useDispatch();
  useEffect(() => {
    ProductList();
  }, []);

  const ProductList = async () => {
    let Obj = {
      url: `products`,
      method: "get",
    };
    try {
      let data = await FeachApi(Obj);
      if (data.status === true) {
        console.log(data);
        Dispatch(Home_Product_List_Action(data.data));
      }
    } catch (error) {}
  };

  const OnHandel = ({ target: { name, value } }) => {
    setfilterKey({ ...filterKey, [name]: value });
  };

  return (
    <div className="home">
      <div className="home_slider">
        <div className="home_slider_left">
          <label>BEST SELLER</label>
          <h1>BEST DISPENSARY TO BUY LAPTOP & MOBILE ONLINE </h1>
          <a>Products & Accessories</a>

          <div className="home_slider_left_offers">
            <a>Get 25% Off</a>
            <hr />
            <a>Free Shipping</a>
          </div>
          <button>Shop All</button>
        </div>

        <div className="home_slider_right">
          <br />
          <div className="home_slider_right_img">
            <img src={productLogo} />
          </div>
        </div>
      </div>

      <div className="home_OurQuality">
        <div className="home_OurQuality_content">
          <div className="home_OurQuality_content_logo">
            <FaShippingFast />
          </div>
          <div className="home_OurQuality_content_detail">
            <h3>Reliable Shipping</h3>
            <p>
              Green Society provides Canada Post Xpress Shipping right to your
              doorstep! You can also opt in for shipping insurance. For orders
              over $149, shipping is free!
            </p>
          </div>
        </div>

        <div className="home_OurQuality_content">
          <div className="home_OurQuality_content_logo">
            <AiOutlineSafety />
          </div>
          <div className="home_OurQuality_content_detail">
            <h3>You’re Safe With Us</h3>
            <p>
              Our secure payment system accepts the most common forms of
              payments making the checkout process quicker! The payments we
              accept are debit, all major credit cards, and cryptocurrency.
            </p>
          </div>
        </div>

        <div className="home_OurQuality_content">
          <div className="home_OurQuality_content_logo">
            <MdHighQuality />
          </div>
          <div className="home_OurQuality_content_detail">
            <h3>Best Quality & Pricing </h3>
            <p>
              Here at Green Society, we take pride in the quality of our
              products and service. Our prices are set to ensure you receive
              your medication at a reasonable price and safely
            </p>
          </div>
        </div>
      </div>

      <div className="home_best_Dispensery">
        <div className="home_best_Dispensery_header">
          <h2>BEST DISPENSARY TO BUY LAPTOP & MOBILE ONLINE IN INDORE</h2>
        </div>
        <div className="home_best_Dispensery_section">
          <button
            name="home_best_Dispensery"
            style={
              filterKey?.home_best_Dispensery == "Best_Seller"
                ? { color: "green" }
                : {}
            }
            value="Best_Seller"
            onClick={OnHandel}
          >
            Best Sellers
          </button>
          <button
            name="home_best_Dispensery"
            style={
              filterKey?.home_best_Dispensery == "Promotions"
                ? { color: "green" }
                : {}
            }
            value="Promotions"
            onClick={OnHandel}
          >
            Bundles & Promotions
          </button>
          <button
            name="home_best_Dispensery"
            style={
              filterKey?.home_best_Dispensery == "On_Sale"
                ? { color: "green" }
                : {}
            }
            value="On_Sale"
            onClick={OnHandel}
          >
            On Sale
          </button>
        </div>
        <div className="home_best_Dispensery_content">
          <div className="home_best_Dispensery_content_div">
            <ListComp type={filterKey} data={Home_product_List} />
          </div>
        </div>
      </div>

      <div className="home_testimonials">
        <div className="home_testimonials_header">
          <h2>CUSTOMER TESTIMONIALS</h2>
        </div>

        <div className="home_testimonials_content">
          <div className="home_testimonials_content_logo">
            <div className="home_testimonials_content_logo_header">
              <h2>VOTED BEST ONLINE DISPENSARY IN INDORE</h2>
            </div>
            <hr />
            <div className="home_testimonials_content_logo_content">
              <div className="home_testimonials_content_logo_content_label">
                <label id="google">Google</label>
                <label id="exellencet">EXELLENCET</label>
                <div className="home_testimonials_content_logo_content_label_rating">
                  <label id="stars">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </label>
                  <span>|</span>
                  <label className="home_testimonials_content_logo_content_label_rating_reviews">
                    <label id="reviews_count">on </label>
                    <label id="reviews_count">135</label>
                    <label id="reviews">Reviews</label>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="home_testimonials_content_info">
            <div className="home_testimonials_content_info_box">
              <div className="home_testimonials_content_info_box_content">
                <div className="home_testimonials_content_info_box_content_header">
                  <img />
                  <label>Terry Baskey</label>
                </div>
                <hr />

                <div className="home_testimonials_content_info_box_content_info">
                  <label>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </label>
                  <p>
                    Absolutely love TopShelfBC; affordable on any budget and
                    such fast delivery, straight to my door! I recommend them to
                    all my friends and family for their 420 needs.
                  </p>
                </div>
              </div>
              <div className="home_testimonials_content_info_box_date">
                <label>January 5, 2023</label>
              </div>
            </div>

            <div className="home_testimonials_content_info_box">
              <div className="home_testimonials_content_info_box_content">
                <div className="home_testimonials_content_info_box_content_header">
                  <img />
                  <label>Terry Baskey</label>
                </div>
                <hr />

                <div className="home_testimonials_content_info_box_content_info">
                  <label>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </label>
                  <p>Best damn place to buy your canabis at great prices</p>
                </div>
              </div>
              <div className="home_testimonials_content_info_box_date">
                <label>January 5, 2023</label>
              </div>
            </div>

            <div className="home_testimonials_content_info_box">
              <div className="home_testimonials_content_info_box_content">
                <div className="home_testimonials_content_info_box_content_header">
                  <img />
                  <label>Terry Baskey</label>
                </div>
                <hr />

                <div className="home_testimonials_content_info_box_content_info">
                  <label>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </label>
                  <p>
                    Absolutely love TopShelfBC; affordable on any budget and
                    such fast delivery, straight to my door! I recommend them to
                    all my friends and family for their 420 needs.
                  </p>
                </div>
              </div>
              <div className="home_testimonials_content_info_box_date">
                <label>January 5, 2023</label>
              </div>
            </div>

            <div className="home_testimonials_content_info_box">
              <div className="home_testimonials_content_info_box_content">
                <div className="home_testimonials_content_info_box_content_header">
                  <img />
                  <label>Terry Baskey</label>
                </div>
                <hr />

                <div className="home_testimonials_content_info_box_content_info">
                  <label>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </label>
                  <p>
                    Absolutely love TopShelfBC; affordable on any budget and
                    such fast delivery, straight to my door! I recommend them to
                    all my friends and family for their 420 needs.
                  </p>
                </div>
              </div>
              <div className="home_testimonials_content_info_box_date">
                <label>January 5, 2023</label>
              </div>
            </div>

            <div className="home_testimonials_content_info_box">
              <div className="home_testimonials_content_info_box_content">
                <div className="home_testimonials_content_info_box_content_header">
                  <img />
                  <label>Terry Baskey</label>
                </div>
                <hr />

                <div className="home_testimonials_content_info_box_content_info">
                  <label>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </label>
                  <p>
                    Absolutely love TopShelfBC; affordable on any budget and
                    such fast delivery, straight to my door! I recommend them to
                    all my friends and family for their 420 needs.
                  </p>
                </div>
              </div>
              <div className="home_testimonials_content_info_box_date">
                <label>January 5, 2023</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home_choose_your_weed">
        <ItemComp data={Home_product_List} />
      </div>

      <div className="how_to_order">
        {/* <div className="how_to_order_popup">
          <div className="how_to_order_popup_content">
            <div className="how_to_order_popup_content_left">
              <h3>REFER A FRIENDS</h3>
              <div className="how_to_order_popup_content_left_off">
                <span id="order_popup_get_off">And get</span>
                <span id="order_popup_get_off_value">$30!</span>
              </div>
            </div>
            <div className="how_to_order_popup_content_right">
              <button>Refer Here</button>
            </div>
          </div>
        </div> */}


        <div className="how_to_order_box">
          <div className="how_to_order_box_header">
            <h1>HOW TO ORDER LAPTOP ONLINE FROM SYSTEM REPAIR WORLD INDORE</h1>
          </div>
          <div className="how_to_order_box_content">
            <p>
              Ordering Laptop online from System Repair World is easy. We are
              proud to have made the process accessible across multiple
              platforms and simple to understand, meaning that more people can
              come to us to buy their cannabis products online.
            </p>
          </div>
          <div className="how_to_order_box_guidance">
            <div className="how_to_order_box_guidance_info">
              <div className="how_to_order_box_guidance_info_header">
                <span>1</span>
                <div id="guidance_info_logo">
                  <FaWpforms color="white" />
                </div>
              </div>
              <h3>REGISTER</h3>
              <p>
                Sign up for an account with us. This is quick and simple. We
                don’t require any more details from you than the bare minimum
                needed for you to place an order and get your product delivered.
              </p>
            </div>
            <div className="how_to_order_box_guidance_info">
              <div className="how_to_order_box_guidance_info_header">
                <span>2</span>
                <div id="guidance_info_logo">
                  <FaShopify color="white" />
                </div>
              </div>
              <h3>SHOP</h3>
              <p>
                Decide on what you want to purchase. We stock a wide range of
                edibles,flowers , concentrates and mushrooms there is bound to
                be something for everyone.
              </p>
            </div>
            <div className="how_to_order_box_guidance_info">
              <div className="how_to_order_box_guidance_info_header">
                <span>3</span>
                <div id="guidance_info_logo">
                  <GiWallet color="white" />
                </div>
              </div>
              <h3>MAKE PAYMENT</h3>
              <p>
                Pay securely. Our site boasts sturdy protection certificates to
                keep your card details and related data safe.
              </p>
            </div>
            <div className="how_to_order_box_guidance_info">
              <div className="how_to_order_box_guidance_info_header">
                <span>4</span>
                <div id="guidance_info_logo">
                  <MdIncompleteCircle color="white" />
                </div>
              </div>
              <h3>RELAX</h3>
              <p>
                Your product will be packaged discretely and shipped by Canada
                Post Xpresspost. We will provide you with a tracking number so
                then you can follow your mail order marijuana every step of the
                way.
              </p>
            </div>
          </div>
          <div className="how_to_order_box_btn">
            <button>Choose your Item</button>
          </div>
        </div>
      </div>

      <div className="what_makes_us_the_no_one">
        <div className="what_makes_us_the_no_one_header">
          <h1>
            WHAT MAKES US THE <span>#1</span> ONLINE LAPTOP & MOBILE DISPENSARY
            IN INDORE?
          </h1>
          <p>
            When it comes to what makes us the foremost online Laptop dispensary
            in indore, we could wax lyrical about our positive qualities.
            Instead, to make this information clearer, we’ve highlighted the six
            prioritized features that we feel makes us a cut above the rest.
          </p>
        </div>
        <div className="what_makes_us_the_no_one_box">
          <div className="what_makes_us_the_no_one_box_item">
            <div className="what_makes_us_the_no_one_box_item_header">
              <RiCustomerService2Line />
            </div>
            <div className="what_makes_us_the_no_one_box_item_content">
              <h5>CUSTOMER SERVICE</h5>
              <p>
                Whether it is answering any questions you have before making a
                purchase, helping out with the buying process itself or taking
                your feedback under consideration, we are proud to provide high
                quality customer service that makes you – the customer – the
                most important person in the transaction.
              </p>
            </div>
          </div>

          <div className="what_makes_us_the_no_one_box_item">
            <div className="what_makes_us_the_no_one_box_item_header">
              <SiSpringsecurity />
            </div>
            <div className="what_makes_us_the_no_one_box_item_content">
              <h5>SECURITY</h5>
              <p>
              When it comes to security, we only keep what details are necessary for you to have an account with us and make an order. When it comes to shipping your mail order marijuana out, we use only tamper-proof and discrete packaging so then what you’ve purchased is your business only.
              </p>
            </div>
          </div>


          <div className="what_makes_us_the_no_one_box_item">
            <div className="what_makes_us_the_no_one_box_item_header">
              <SlDiamond />
            </div>
            <div className="what_makes_us_the_no_one_box_item_content">
              <h5>BEST VALUE</h5>
              <p>
              We are continually adjusting what we supply and our prices to ensure that we maintain an optimal balance of affordable and quality for our products. We invest in the best quality strains that we can find and are always on the lookout for new, affordable and high quality weed products.
              </p>
            </div>
          </div>

          <div className="what_makes_us_the_no_one_box_item">
            <div className="what_makes_us_the_no_one_box_item_header">
              <TbTruckDelivery />
            </div>
            <div className="what_makes_us_the_no_one_box_item_content">
              <h5>DELIVERY INSURANCE</h5>
              <p>
              If your mail order marijuana becomes lost, stolen, or damaged during transit, we will send you a replacement completely free of charge. Free Canada Post Xpress shipping on all orders over $120
              </p>
            </div>
          </div>


          <div className="what_makes_us_the_no_one_box_item">
            <div className="what_makes_us_the_no_one_box_item_header">
              <CiMedal />
            </div>
            <div className="what_makes_us_the_no_one_box_item_content">
              <h5>HIGHEST QUALITY</h5>
              <p>
              All of our cannabis products are tested to ensure that they are the highest quality possible. We work with expert suppliers and are always revising what makes a quality cannabis product to ensure that we have only the best available.
              </p>
            </div>

          </div>

      <div className="what_makes_us_the_no_one_box_item">
            <div className="what_makes_us_the_no_one_box_item_header">
              <FaHandshake />
            </div>
            <div className="what_makes_us_the_no_one_box_item_content">
              <h5>TRUST</h5>
              <p>
              With over 15 years in the weed business, you can rest assured that you will be taken care of. You can guarantee that we have your best interests in mind. Feel free to check out our reviews.
              </p>
            </div>
          </div>

        </div>
      </div>


      <div className="recently_add_items">
        <ItemComp data={Home_product_List} />
      </div>
    </div>
  );
};

export default Home;
