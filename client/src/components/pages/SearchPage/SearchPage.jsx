import React from "react";
import { FaShippingFast } from "react-icons/fa";
import "./SearchPage.css";
import { AiFillStar } from "react-icons/ai";
import { TbArrowBadgeDown } from "react-icons/tb";
import SingleComp from "../components/ListComponents/SingleComp";
import Slider from "react-slick";
import { RxDividerVertical } from "react-icons/rx";

const SearchPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="search_OurQuality">
        {[1, 2, 3].map(() => (
          <div className="search_OurQuality_content">
            <div className="search_OurQuality_content_logo">
              <FaShippingFast />
            </div>
            <div className="search_OurQuality_content_detail">
              <h3>Reliable Shipping</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="search_main_div">
        <div className="search_main_div_filters">
          <div className="search_main_div_filters_header">
            <h2>Filters</h2>
          </div>

          <div className="search_main_div_filters_product_category">
            <div className="search_main_div_filters_product_category_header">
              <h4 id="search_main_div_filters_option_headers">
                PRODUCT CATEGORY
              </h4>
            </div>
            <div className="search_main_div_filters_product_category_options">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1].map(() => (
                <div className="search_main_div_filters_option_list">
                  <div className="search_main_div_filters_option_list_checkbox">
                    <label>
                      <span></span>
                    </label>
                  </div>
                  <span id="search_main_div_filters_option_list_label">
                    {" "}
                    Magic Mushrooms
                  </span>
                  <span id="search_main_div_filters_option_list_davider"></span>
                  <span id="search_main_div_filters_option_list_value">34</span>
                </div>
              ))}
            </div>
          </div>

          <div className="search_main_div_filters_filter_by_price">
            <div className="search_main_div_filters_filter_by_price_header">
              <h4>FILTER BY PRICE</h4>
            </div>
            <div className="search_main_div_filters_filter_by_price_range">
              <div className="search_main_filters_filter_by_price_range_slider">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value="50"
                  class="slider"
                  id="myRange"
                />
              </div>
              <div className="search_main_div_filters_filter_by_price_apply">
                <div className="search_main_div_filtres_filter_by_price_apply_btn">
                  <button>Apply</button>
                </div>
              </div>
            </div>
          </div>

          <div className="search_main_div_filters_order_by">
            <div className="search_main_div_filters_order_by_header">
              <h4 id="search_main_div_filters_option_headers">ORDER BY</h4>
            </div>
            <div className="search_main_div_filters_order_by_options">
              <div className="search_main_div_filters_option_list">
                <div className="search_main_div_filters_option_list_checkbox">
                  <label>
                    <span></span>
                  </label>
                </div>
                <span id="search_main_div_filters_option_list_label">
                  {" "}
                  Default
                </span>
              </div>
              <div className="search_main_div_filters_option_list">
                <div className="search_main_div_filters_option_list_checkbox">
                  <label>
                    <span></span>
                  </label>
                </div>
                <span id="search_main_div_filters_option_list_label">
                  {" "}
                  Review Count
                </span>
              </div>
              <div className="search_main_div_filters_option_list">
                <div className="search_main_div_filters_option_list_checkbox">
                  <label>
                    <span></span>
                  </label>
                </div>
                <span id="search_main_div_filters_option_list_label">
                  {" "}
                  Popularity
                </span>
              </div>
              <div className="search_main_div_filters_option_list">
                <div className="search_main_div_filters_option_list_checkbox">
                  <label>
                    <span></span>
                  </label>
                </div>
                <span id="search_main_div_filters_option_list_label">
                  {" "}
                  Average Rating
                </span>
              </div>
              <div className="search_main_div_filters_option_list">
                <div className="search_main_div_filters_option_list_checkbox">
                  <label>
                    <span></span>
                  </label>
                </div>
                <span id="search_main_div_filters_option_list_label">
                  {" "}
                  Newness
                </span>
              </div>
              <div className="search_main_div_filters_option_list">
                <div className="search_main_div_filters_option_list_checkbox">
                  <label>
                    <span></span>
                  </label>
                </div>
                <span id="search_main_div_filters_option_list_label">
                  {" "}
                  Price: Low to High
                </span>
              </div>
              <div className="search_main_div_filters_option_list">
                <div className="search_main_div_filters_option_list_checkbox">
                  <label>
                    <span></span>
                  </label>
                </div>
                <span id="search_main_div_filters_option_list_label">
                  {" "}
                  Price: High to Low
                </span>
              </div>
              <div className="search_main_div_filters_option_list">
                <div className="search_main_div_filters_option_list_checkbox">
                  <label>
                    <span></span>
                  </label>
                </div>
                <span id="search_main_div_filters_option_list_label">
                  {" "}
                  Random Products
                </span>
              </div>
              <div className="search_main_div_filters_option_list">
                <div className="search_main_div_filters_option_list_checkbox">
                  <label>
                    <span></span>
                  </label>
                </div>
                <span id="search_main_div_filters_option_list_label">
                  {" "}
                  Product Name
                </span>
              </div>
            </div>
          </div>

          <div className="search_main_div_filters_filter_by_reviews">
            <div className="search_main_div_filters_filter_by_reviews_header">
              <h4>FILTER BY REVIEWS</h4>
            </div>
            <div className="search_main_div_filters_filter_by_reviews_options">
              {[1, 2, 3, 4, 5].map(() => (
                <div className="search_main_div_filters_option_list">
                  <div className="search_main_div_filters_option_list_checkbox">
                    <label>
                      <span></span>
                    </label>
                  </div>
                  <span id="search_main_div_filters_option_list_starts">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="search_main_div_filters_clear_btn">
            <button>Clear Filters</button>
          </div>
        </div>

        <div className="search_main_div_contents">
          <div className="search_main_div_contents_header">
            <h4>Shop</h4>
            <div className="search_main_div_contents_filter">
              <div className="search_main_div_contents_filter_dropdown">
                <button className="search_main_div_contents_filter_dropdownd_btn">
                  Dropdown <TbArrowBadgeDown />{" "}
                </button>
                <div className="search_main_div_contents_filter_dropdownd-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>

            <div className="search_main_div_contents_sort">
              <div className="search_main_div_contents_sort_dropdown">
                <button className="search_main_div_contents_sort_dropdownd_btn">
                  Dropdown <TbArrowBadgeDown />{" "}
                </button>
                <div className="search_main_div_contents_sort_dropdownd-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
          </div>

          <div className="search_main_div_contents_about">
            <h3>Cannabis</h3>
            <div className="search_main_div_contents_about_content">
              <p>
                Here at WestCoastSupply’s “ cannabis section, we showcase the
                best Indica, Hybrid, and Sativa medical cannabis strain
                selections at the best prices online. You can be assured that
                all our strains go through a strict screening process to ensure
                that all your cannabis needs are top-quality. All of our flowers
                are sourced from reputable growers, based in British Columbia,
                Canada. We have hige grade selection comes from growers that
                produce AAAA+ quality cannabis flowers and have many years of
                experience in the cannabis industry. You are guaranteed to be
                receiving high-quality flowers at the best prices online with
                our unbeatable sales!
              </p>
            </div>
          </div>

          <br />

          <div className="search_main_div_contents_top_selling">
            <h3>Top Selling</h3>
            <div className="search_main_div_contents_top_selling_list">
              {[1, 2, 3, 4, 5, 6, 7].map(() => (
                <div className="search_main_div_contents_top_selling_list_item">
                  <SingleComp />
                </div>
              ))}
            </div>
          </div>

          <br />

          <div className="search_main_div_contents_gid_box_one">
            {[1, 2, 3, 1, 2, 3].map(() => (
              <SingleComp />
            ))}
          </div>

          <br />

          <div className="search_main_div_contents_popup_box">
            <div className="search_main_div_contents_popup_box_left">
              <div className="search_main_div_contents_popup_box_left_header">
                <label>CONCENTRATES</label>
                <h3>Mix And Match Shatter/Budder 28g (4 X 7G)</h3>
              </div>

              <div className="search_main_div_contents_popup_box_left_content">
                <div className="search_main_div_contents_popup_box_left_content_rating">
                  <label>4.6/5 </label>
                  <span></span>
                  <label>
                    135
                    <a> Reviews</a>
                  </label>
                </div>
                <div className="search_main_div_contents_popup_box_left_content_options">
                  <button>28g</button>
                  <button>1/2lb</button>
                  <button>1/4lb</button>
                </div>
              </div>

              <div className="search_main_div_contents_popup_box_left_price">
                <div className="search_main_div_contents_popup_box_left_price_btn">
                  <button>Add to Cart</button>
                </div>
                <label className="search_main_div_contents_popup_box_left_price_rs">
                  <span id="price">$102.00</span>
                  <span id="mrp">$200.00</span>
                </label>
              </div>
            </div>

            <div className="search_main_div_contents_popup_box_right">
              <img src="https://img.freepik.com/free-psd/elegant-computer-mockup_1310-736.jpg?w=996&t=st=1687780687~exp=1687781287~hmac=4fcc2ee571fd4c1dae2aac6693cfe60c8eae7c5289a3647a55cef5e94d665817" />
            </div>
          </div>

          <br />

          <div className="search_main_div_contents_gid_box_one">
            {[1, 2, 3, 1, 2, 3].map(() => (
              <SingleComp />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
