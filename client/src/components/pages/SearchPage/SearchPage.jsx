import React, { useEffect, useState } from "react";
import { FaShippingFast } from "react-icons/fa";
import "./SearchPage.css";
import { AiFillStar } from "react-icons/ai";
import { TbArrowBadgeDown } from "react-icons/tb";
import SingleComp from "../components/ListComponents/SingleComp";
import { RxDividerVertical } from "react-icons/rx";
import { useNavigate, useParams } from "react-router-dom";
import FeachApi from "../../../utils/FeachAPI";
import { useSelector, useDispatch } from "react-redux";
import { Search_page_data_act } from "../../../redux/actions/search_page_data/Search_page_data";
import { Header_Details_act } from "../../../redux/actions/header/Header_Details";

const SearchPage = () => {
  const Dispatch = useDispatch();
  const navigate= useNavigate();

  const { title, category, OrderFilter } = useParams();
  const { Search_page_data } = useSelector((state) => state);
  const [filterOptn, setfilterOptn] = useState({
    categoryFilter: category,
    priceFilter: "",
    orderd_by: OrderFilter,
    reviewsFilter: "",
  });

  useEffect(() => {
    Dispatch(Header_Details_act(title))
    Feach_Search_page_data();
    console.log(filterOptn.categoryFilter);
  }, []);


  const Feach_Search_page_data = async () => {
    let Obj = {
      url: "products/filter",
      method: "get",
      params: {
        category: category,
        title: title,
      },
    };
    let data = await FeachApi(Obj);
    if(data.status === true){

      Dispatch(Search_page_data_act(data.data));
      console.log(data);
    }
  };

  const OnHandel = (name, value) => {
    // setfilterOptn({ ...filterOptn, [name]: value });

    // navigate(`/search/${title}/${filterOptn.categoryFilter}/${filterOptn.orderd_by}`)
    window.location.reload();
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
            <div className="search_main_div_filters_option_list">
                <div className="search_main_div_filters_option_list_checkbox">
                  <label
                    onClick={() => {
                      navigate(`/search/${title}/All/${filterOptn.orderd_by}`)
                      OnHandel("categoryFilter", "All");
                    }}
                    style={
                      filterOptn.categoryFilter == "All"
                        ? { backgroundColor: "var(--primary-500, #17af26)" }
                        : {}
                    }
                  >
                    <span></span>
                  </label>
                </div>
                <span id="search_main_div_filters_option_list_label">
                  {" "}
                  All
                </span>
                <span id="search_main_div_filters_option_list_davider"></span>
                <span id="search_main_div_filters_option_list_value">34</span>
              </div>
              {/* Mobile */}
              <div className="search_main_div_filters_option_list">
                <div className="search_main_div_filters_option_list_checkbox">
                  <label
                    onClick={() => {
                      navigate(`/search/${title}/Mobile/${filterOptn.orderd_by}`)
                      OnHandel("categoryFilter", "Mobile");
                    }}
                    style={
                      filterOptn.categoryFilter == "Mobile"
                        ? { backgroundColor: "var(--primary-500, #17af26)" }
                        : {}
                    }
                  >
                    <span></span>
                  </label>
                </div>
                <span id="search_main_div_filters_option_list_label">
                  {" "}
                  Mobile
                </span>
                <span id="search_main_div_filters_option_list_davider"></span>
                <span id="search_main_div_filters_option_list_value">34</span>
              </div>

              {/* Laptop */}

              <div className="search_main_div_filters_option_list">
                <div className="search_main_div_filters_option_list_checkbox">
                  <label
                    onClick={() => {
                      navigate(`/search/${title}/Laptop/${filterOptn.orderd_by}`)
                      OnHandel("categoryFilter", "Laptop");
                    }}
                    style={
                      filterOptn.categoryFilter == "Laptop"
                        ? { backgroundColor: "var(--primary-500, #17af26)" }
                        : {}
                    }
                  >
                    <span></span>
                  </label>
                </div>
                <span id="search_main_div_filters_option_list_label">
                  {" "}
                  Laptop
                </span>
                <span id="search_main_div_filters_option_list_davider"></span>
                <span id="search_main_div_filters_option_list_value">34</span>
              </div>

              {/* EarPhones */}

              <div className="search_main_div_filters_option_list">
                <div className="search_main_div_filters_option_list_checkbox">
                  <label
                    onClick={() => {
                      navigate(`/search/${title}/EarPhone/${filterOptn.orderd_by}`)
                      OnHandel("categoryFilter", "EarPhone");
                    }}
                    style={
                      filterOptn.categoryFilter == "EarPhone"
                        ? { backgroundColor: "var(--primary-500, #17af26)" }
                        : {}
                    }
                  >
                    <span></span>
                  </label>
                </div>
                <span id="search_main_div_filters_option_list_label">
                  {" "}
                  EarPhone
                </span>
                <span id="search_main_div_filters_option_list_davider"></span>
                <span id="search_main_div_filters_option_list_value">34</span>
              </div>

              {/* Mouse */}

              <div className="search_main_div_filters_option_list">
                <div className="search_main_div_filters_option_list_checkbox">
                  <label
                    onClick={() => {
                      navigate(`/search/${title}/Mouse/${filterOptn.orderd_by}`)
                      OnHandel("categoryFilter", "Mouse");
                    }}
                    style={
                      filterOptn.categoryFilter == "Mouse"
                        ? { backgroundColor: "var(--primary-500, #17af26)" }
                        : {}
                    }
                  >
                    <span></span>
                  </label>
                </div>
                <span id="search_main_div_filters_option_list_label">
                  {" "}
                  Mouse
                </span>
                <span id="search_main_div_filters_option_list_davider"></span>
                <span id="search_main_div_filters_option_list_value">34</span>
              </div>

              {/* KeyBoard */}

              <div className="search_main_div_filters_option_list">
                <div className="search_main_div_filters_option_list_checkbox">
                  <label
                    onClick={() => {
                      navigate(`/search/${title}/KeyBoard/${filterOptn.orderd_by}`)
                      OnHandel("categoryFilter", "KeyBoard");
                    }}
                    style={
                      filterOptn.categoryFilter == "KeyBoard"
                        ? { backgroundColor: "var(--primary-500, #17af26)" }
                        : {}
                    }
                  >
                    <span></span>
                  </label>
                </div>
                <span id="search_main_div_filters_option_list_label">
                  {" "}
                  KeyBoard
                </span>
                <span id="search_main_div_filters_option_list_davider"></span>
                <span id="search_main_div_filters_option_list_value">34</span>
              </div>
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
                  <label  
                   onClick={() => {
                     navigate(`/search/${title}/${filterOptn.categoryFilter}/Default`)
                     OnHandel("orderd_by", "Default");
                    }}
                    style={
                      filterOptn.orderd_by == "Default"
                        ? { backgroundColor: "var(--primary-500, #17af26)" }
                        : {}
                    }
                    >
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
                  <label 
                      onClick={() => {
                        navigate(`/search/${title}/${filterOptn.categoryFilter}/Review Count`)
                        OnHandel("orderd_by", "Review Count");
                      }}
                      style={
                        filterOptn.orderd_by == "Review Count"
                          ? { backgroundColor: "var(--primary-500, #17af26)" }
                          : {}
                      }
                  >
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
                  <label 
                      onClick={() => {
                        navigate(`/search/${title}/${filterOptn.categoryFilter}/Popularity`)
                        OnHandel("orderd_by", "Popularity");
                      }}
                      style={
                        filterOptn.orderd_by == "Popularity"
                          ? { backgroundColor: "var(--primary-500, #17af26)" }
                          : {}
                      }>
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
                  <label
                      onClick={() => {
                        navigate(`/search/${title}/${filterOptn.categoryFilter}/Average Rating`)
                        OnHandel("orderd_by", "Average Rating");
                      }}
                      style={
                        filterOptn.orderd_by == "Average Rating"
                          ? { backgroundColor: "var(--primary-500, #17af26)" }
                          : {}
                      }>
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
                  <label     onClick={() => {
                    navigate(`/search/${title}/${filterOptn.categoryFilter}/Newness`)
                    OnHandel("orderd_by", "Newness");
                    }}
                    style={
                      filterOptn.orderd_by == "Newness"
                        ? { backgroundColor: "var(--primary-500, #17af26)" }
                        : {}
                    }>
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
                  <label     onClick={() => {
                    navigate(`/search/${title}/${filterOptn.categoryFilter}/Price: Low to High`)
                    OnHandel("orderd_by", "Price: Low to High");
                    }}
                    style={
                      filterOptn.orderd_by == "Price: Low to High"
                        ? { backgroundColor: "var(--primary-500, #17af26)" }
                        : {}
                    }>
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
                  <label     onClick={() => {
                    navigate(`/search/${title}/${filterOptn.categoryFilter}/Price: High to Low`)
                    OnHandel("orderd_by", "Price: High to Low");
                    }}
                    style={
                      filterOptn.orderd_by == "Price: High to Low"
                        ? { backgroundColor: "var(--primary-500, #17af26)" }
                        : {}
                    }>
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
                  <label     onClick={() => {
                    navigate(`/search/${title}/${filterOptn.categoryFilter}/Random Products`)
                    OnHandel("orderd_by", "Random Products");
                    }}
                    style={
                      filterOptn.orderd_by == "Random Products"
                        ? { backgroundColor: "var(--primary-500, #17af26)" }
                        : {}
                    }>
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
                  <label     onClick={() => {
                    navigate(`/search/${title}/${filterOptn.categoryFilter}/Product Name`)
                    OnHandel("orderd_by", "Product Name");
                    }}
                    style={
                      filterOptn.orderd_by == "Product Name"
                        ? { backgroundColor: "var(--primary-500, #17af26)" }
                        : {}
                    }>
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
                    <label     onClick={() => {
                      OnHandel("orderd_by", "KeyBoard");
                    }}
                    style={
                      filterOptn.orderd_by == "KeyBoard"
                        ? { backgroundColor: "var(--primary-500, #17af26)" }
                        : {}
                    }>
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

        {/* main contents */}

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
                  Sort By <TbArrowBadgeDown />{" "}
                </button>
                <div className="search_main_div_contents_sort_dropdownd-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contents */}
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
              {Search_page_data.map((item, _id) => (
                <div
                  key={_id}
                  className="search_main_div_contents_top_selling_list_item"
                >
                  <SingleComp item={item} />
                </div>
              ))}
            </div>
          </div>

          <br />

          <div className="search_main_div_contents_gid_box_one">
            {Search_page_data.map((item, _id) => (
              <SingleComp item={item} key={_id} />
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
            {Search_page_data?.map((item, _id) => (
              <SingleComp item={item} key={_id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
