import React from "react";
import "./Home.css";
import { FaShippingFast, FaStar, FaWpforms } from "react-icons/fa";
import { RiCustomerService2Line} from 'react-icons/ri';
import ListComp from "../components/ListComponents/ListComp";
import SingleComp from "../components/ListComponents/SingleComp";
import ItemComp from '../components/ItemComponents/ItemComp';

const Home = () => {
  return (
    <div className="home">
      <div className="home_slider">
        <div className="home_slider_left">
          <label>BEST SELLER</label>
          <h1>BEST DISPENSARY TO BUY WEED ONLINE </h1>
          <a>Vitamins & Supplements</a>

          <div className="home_slider_left_offers">
            <a>Get 25% Off</a>
            <hr />
            <a>Free Shipping</a>
          </div>
          <button>Shop All</button>
        </div>

        <div className="home_slider_right">
          <br/>
          <div className="home_slider_right_img">
            <img src="https://i.pinimg.com/originals/ff/1d/1d/ff1d1dcc0d913d819ceb0bf6699f008f.png" />
          </div>
        </div>
      </div>

      <div className="home_OurQuality">
        {[1, 2, 3].map(() => (
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
        ))}
      </div>

      <div className="home_best_Dispensery">
        <div className="home_best_Dispensery_header">
          <h2>BEST DISPENSARY TO BUY WEED ONLINE IN CANADA</h2>
        </div>
        <div className="home_best_Dispensery_section">
          <button>Best Sellers</button>
          <button>Bundles & Promotions</button>
          <button>On Sale</button>
        </div>
        <div className="home_best_Dispensery_content">
          <div className="home_best_Dispensery_content_div">
            <ListComp />
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
              <h2>VOTED BEST ONLINE DISPENSARY IN CANADA</h2>
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
            {[1, 2, 3, 4, 5].map(() => (
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
                      such fast delivery, straight to my door! I recommend them
                      to all my friends and family for their 420 needs.
                    </p>
                  </div>
                </div>
                <div className="home_testimonials_content_info_box_date">
                  <label>January 5, 2023</label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="home_choose_your_weed">
        <ItemComp/>
      </div>

      <div className="how_to_order">
        <div className="how_to_order_popup">
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
        </div>
        <div className="how_to_order_box">
          <div className="how_to_order_box_header">
            <h1>
              HOW TO ORDER WEED ONLINE FROM TOP SHELF BC - MAIL ORDER MARIJUANA
            </h1>
          </div>
          <div className="how_to_order_box_content">
            <p>
              Ordering weed online from Top Shelf BC is easy. We are proud to
              have made the process accessible across multiple platforms and
              simple to understand, meaning that more people can come to us to
              buy their cannabis products online.
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
          </div>
          <div className="how_to_order_box_btn">
            <button>Choose your Weed</button>
          </div>
        </div>
      </div>

      <div className="what_makes_us_the_no_one">
        <div className="what_makes_us_the_no_one_header">
          <h1>
            WHAT MAKES US THE <span>#1</span> ONLINE MARIJUANA DISPENSARY IN
            CANADA?
          </h1>
          <p>
            When it comes to what makes us the foremost online marijuana
            dispensary in Canada, we could wax lyrical about our positive
            qualities. Instead, to make this information clearer, we’ve
            highlighted the six prioritized features that we feel makes us a cut
            above the rest.
          </p>
        </div>
        <div className="what_makes_us_the_no_one_box">
          {[1,2,3,4,5,6].map(()=>(

          <div className="what_makes_us_the_no_one_box_item">
            <div className="what_makes_us_the_no_one_box_item_header">
              <RiCustomerService2Line/>
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
          ))}
        </div>
      </div>

      <div className="recently_add_items">
        <ItemComp/>
      </div>
    </div>
  );
};

export default Home;
