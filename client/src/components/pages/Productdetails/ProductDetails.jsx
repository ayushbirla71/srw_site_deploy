import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import SingleComp from "../components/ListComponents/SingleComp";
import { AiOutlineClose } from "react-icons/ai";
import { json, useNavigate, useParams } from "react-router-dom";
import FeachApi from "../../../utils/FeachAPI";
import { useDispatch, useSelector } from "react-redux";
import { Product_Page_Details_act } from "../../../redux/actions/productDetails_actions/ProductDetails";
import { Home_Product_List_Action } from "../../../redux/actions/productList_actions/Product_List_action";
import { CartItems_actions } from "../../../redux/actions/cartItems_actions/CartItems_actions";

const ProductDetails = () => {
  const navigate = useNavigate();
  const {
    Product_Page,
    User_credentials_login,
    User_details,
    Home_actions,
    Home_product_List,
  } = useSelector((state) => state);
  const [quantity, setquantity] = useState(1);
  const [logoImg, setlogoImg] = useState(false);
  const [product_action_btn, setproduct_action_btn] = useState({
    more_info: true,
    product_details_opt: "Description",
    popup_img: true,
  });
  const [Options, setOptions] = useState({
    RAM: null,
    ROM: null,
    Color: null,
  });

  const [popup, setpopup] = useState(false);

  const Dispatch = useDispatch();
  const { _id } = useParams();
  const [options, setoptions] = useState({
    disc: "none",
  });

  const OnPopup = () => {
    setpopup(true);
    setTimeout(() => {
      setpopup(false);
    }, 1000);
  };

  useEffect(() => {
    FeachDetails();
    ProductList();
  }, [_id]);

  const FeachDetails = async () => {
    let Obj = {
      url: `products/${_id}`,
      method: "get",
    };
    try {
      let data = await FeachApi(Obj);
      if (data?.status === true) {
        Dispatch(Product_Page_Details_act(data.data));
        console.log(data.data);
        setOptions({
          ...options,
          RAM: data?.Processor_Memory_Features?.Mobile_RAM[0],
          ROM: data?.Processor_Memory_Features?.Mobile_RAM[0],
          Color: data?.General_info?.Color,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const ProductList = async () => {
    try {
      let Obj = {
        url: `products`,
        method: "get",
      };
      let data = await FeachApi(Obj);
      if (data?.status === true) {
        Dispatch(Home_Product_List_Action(data.data));
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const OnHandel = ({ target: { name, value } }) => {
    if (name == "product_details_opt") {
      setproduct_action_btn({ ...product_action_btn, [name]: value });
    } else {
      setproduct_action_btn({
        ...product_action_btn,
        [name]: !product_action_btn[name],
      });
    }
  };

  const AddCart = async () => {
    console.log("add");
    if (User_details?._id) {
      let Obj_product_Options = { productId: _id, quantity };
      if (Options?.RAM) {
        Obj_product_Options.RAM = Options.RAM;
      }
      if (Options?.Color) {
        Obj_product_Options.Color = Options.Color;
      }
      let Obj = {
        url: `users/${User_details._id}/cart/`,
        headers: { Authorization: `Bearer ${User_credentials_login.token}` },
        method: "post",
        data: Obj_product_Options,
      };

      let data = await FeachApi(Obj);
      if (data?.status === true) {
        Dispatch(CartItems_actions(data.data));
        console.log(data);
        OnPopup();
      }
    } else {
      console.log(User_details);
      navigate("/login");
    }
  };

  return (
    <div className="productdetails">
      <div
        style={popup ? { display: "flex" } : {}}
        className="productdetails_popup_message"
      >
        <label>successfully add</label>
      </div>

      <div
        style={product_action_btn?.popup_img ? { display: "none" } : {}}
        className="productdetails_item_img_popup"
      >
        <div className="productdetails_item_img_popup_box">
          <div className="productdetails_item_img_popup_box_div">
            <img src={!logoImg ? Product_Page?.ImageUrlList?.[0] : logoImg} />

            <label>
              <AiOutlineClose
                name="popup_img"
                onClick={() => {
                  setproduct_action_btn({
                    ...product_action_btn,
                    popup_img: true,
                  });
                }}
              />
            </label>
          </div>
          <div className="productdetails_item_img_popup_box_options">
            {Product_Page?.ImageUrlList?.map((item, index) => (
              <a
                key={index}
                onClick={() => {
                  setlogoImg(item);
                }}
              >
                <img src={item} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="productdetails_item">
        <div className="productdetails_item_img">
          <div className="productdetails_item_img_logo">
            <img
              onClick={() => {
                setproduct_action_btn({
                  ...product_action_btn,
                  popup_img: false,
                });
              }}
              src={!logoImg ? Product_Page?.ImageUrlList?.[0] : logoImg}
            />
          </div>
          <div className="productdetails_item_img_option_img">
            {Product_Page?.ImageUrlList?.map((item, index) => (
              <a
                key={index}
                onClick={() => {
                  setlogoImg(item);
                }}
              >
                <img src={item} />
              </a>
            ))}
          </div>
        </div>

        <div className="productdetails_item_info">
          <div className="productdetails_item_info_box">
            <div className="productdetails_item_info_box_header">
              <label>CONCENTRATES</label>
              <h3>{Product_Page?.Title}</h3>
              {/* <div className="productdetails_item_info_box_header_contents">
                <label>Indica</label>
                <label>Sativa 100%</label>
              </div> */}
              <div className="productdetails_item_info_box_header_price">
                <label>
                  <span id="mrp">₹ {Product_Page?.MRP}</span>
                  <span id="rs">₹ {Product_Page?.Price}</span>
                </label>

                <div>
                  <label>4.6/5</label>
                  <span></span>
                  <label>
                    135 <span>Reviews</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="productdetails_item_info_box_effect">
              <div className="productdetails_item_info_box_effect_box">
                <div className="productdetails_item_info_box_effect_box_logo">
                  <img />
                </div>

                <div className="productdetails_item_info_box_effect_box_content">
                  <label>Available offers</label>
                  <p>
                    Bank OfferAdditional ₹750 Off On Credit and Debit Card
                    Transaction
                  </p>

                  <p>Bank Offer5% Cashback on Flipkart Axis Bank Card</p>
                </div>
              </div>
              <div className="productdetails_item_info_box_effect_box">
                <div className="productdetails_item_info_box_effect_box_logo">
                  <img />
                </div>

                <div className="productdetails_item_info_box_effect_box_content">
                  <label>Highlights</label>

                  {Product_Page?.Highlights?.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>
              <div className="productdetails_item_info_box_effect_box">
                <div className="productdetails_item_info_box_effect_box_logo">
                  <img />
                </div>

                <div className="productdetails_item_info_box_effect_box_content">
                  <label>Seller</label>
                  <p>7 Days Service Center Replacement/Repair ?</p>
                  <p>GST invoice available ?</p>
                </div>
              </div>
            </div>

            <div className="productdetails_item_info_box_discription">
              <label>DESCRIPTION</label>
              <p>{Product_Page?.Description}</p>
            </div>

            <div className="productdetails_item_info_box_options">
              <div className="productdetails_item_info_box_options_list">
                <div className="productdetails_item_info_box_options_list_left">
                  {Product_Page?.Processor_Memory_Features?.Mobile_RAM
                    ?.length >= 1 && (
                    <>
                      <label>RAM</label>
                      <div className="productdetails_item_info_box_options_list_left_btn">
                        {Product_Page?.Processor_Memory_Features?.Mobile_RAM?.map(
                          (item, index) => (
                            <button
                              key={index}
                              onClick={() =>
                                setOptions({ ...options, RAM: item })
                              }
                              style={
                                Options?.RAM == item ? { color: "blue" } : {}
                              }
                            >
                              {item}
                            </button>
                          )
                        )}
                      </div>
                    </>
                  )}

                  {!Product_Page?.Processor_Memory_Features?.Mobile_RAM
                    ?.length && (
                    <>
                      <label>RAM</label>
                      <div className="productdetails_item_info_box_options_list_left_btn">
                        {Product_Page?.Processor_Memory_Features?.RAM ? (
                          <button
                            onClick={() =>
                              setOptions({ ...options, RAM: Product_Page?.Processor_Memory_Features?.RAM })
                            }
                            style={
                              Options?.RAM == Product_Page?.Processor_Memory_Features?.RAM ? { color: "blue" } : {}
                            }
                          >
                            {Product_Page?.Processor_Memory_Features?.RAM}
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </>
                  )}
                </div>
                <div className="productdetails_item_info_box_options_list_right">
                  {Product_Page?.Color?.length >= 1 ? (
                    <>
                      <label>Color Options</label>
                      <div className="productdetails_item_info_box_options_list_right_btn">
                        {Product_Page?.Color?.map((item, index) => (
                          <label>
                            <label
                              style={{ backgroundColor: `${item}` }}
                              onClick={() =>
                                setOptions({ ...options, Color: item })
                              }
                            >
                              <span
                                style={
                                  item === Options?.Color
                                    ? { backgroundColor: `${item}` }
                                    : {}
                                }
                              ></span>
                            </label>
                          </label>
                        ))}
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <span>
                Purchase this product now and earn <span>80</span> Points!
              </span>
            </div>

            <div className="productdetails_item_info_box_addcart">
              {/* <div className="productdetails_item_info_box_addcart_price">
                <div className="productdetails_item_info_box_addcart_price_top">
                  <label>
                    <span> Khalifa Kush (AAAA)</span> <span id="into">2x</span>
                  </label>
                  <label>$120.00</label>
                </div>
                <div className="productdetails_item_info_box_addcart_price_bottom">
                  <label>
                    <span>Add Integra Pack - 4g</span>
                  </label>
                  <label>$2.00</label>
                </div>
              </div> */}

              <div className="productdetails_item_info_box_addcart_add_cart">
                <div className="productdetails_item_info_box_addcart_add_cart_left">
                  <div className="productdetails_item_info_box_addcart_add_cart_left_quantity">
                    <button
                      onClick={() => {
                        if (quantity > 1) {
                          setquantity((e) => e - 1);
                        }
                      }}
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => setquantity((e) => e + 1)}>+</button>
                  </div>
                  <span></span>
                  <label>In Stock</label>
                </div>
                <div className="productdetails_item_info_box_addcart_add_cart_right">
                  <button onClick={() => AddCart()}>Add to Cart</button>
                  <span></span>
                  <label>₹ {Product_Page?.Price * quantity}</label>
                </div>
              </div>

              <div className="productdetails_item_info_box_addcart_offer">
                <div>
                  <img />
                  <label>
                    Free Xpress Shipping on orders over
                    <span> ₹ 500</span>
                  </label>
                </div>
                <div>
                  <img />
                  <label>
                    Order before 12:00pm for same day dispatch
                    <span></span>
                  </label>
                </div>
                <div>
                  <img />
                  <label>
                    Support & ordering open 7 day a week
                    <span></span>
                  </label>
                </div>
              </div>
            </div>

            <div className="productdetails_item_info_box_suk">
              <div>
                <label>
                  SKU<span>:</span>
                  <span>N/A</span>
                </label>
              </div>
              <div>
                <label>
                  Categories <span>:</span> <span> AAAA Weed, Indica</span>
                </label>
              </div>
            </div>
          </div>

          <hr />

          <div className="productdetails_item_info_releted_btn">
            <button
              style={
                product_action_btn?.product_details_opt == "Description"
                  ? { color: "green" }
                  : {}
              }
              name="product_details_opt"
              value="Description"
              onClick={OnHandel}
            >
              Description
            </button>
            <button
              style={
                product_action_btn?.product_details_opt == "Reviews"
                  ? { color: "green" }
                  : {}
              }
              name="product_details_opt"
              value="Reviews"
              onClick={OnHandel}
            >
              Reviews <span>(350)</span>
            </button>
            <button
              style={
                product_action_btn?.product_details_opt == "Refer_a_Friend"
                  ? { color: "green" }
                  : {}
              }
              name="product_details_opt"
              value="Refer_a_Friend"
              onClick={OnHandel}
            >
              Refer a Friend
            </button>
          </div>

          <div className="productdetails_item_info_releted_btn_content">
            <div
              style={
                product_action_btn?.product_details_opt != "Description"
                  ? { display: "none" }
                  : {}
              }
              className="productdetails_item_info_releted_btn_content_description"
            >
              <div className="productdetails_item_info_releted_btn_content_description_extra_info">
                <div className="productdetails_item_info_releted_btn_content_description_extra_info_box">
                  <h4>Specifications</h4>
                  <div>
                    {Product_Page?.General_info ? (
                      <div>
                        <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_header">
                          <label>General</label>
                        </div>
                        {Object.entries(Product_Page?.General_info).map(([key, value])=>(
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                          <label>{key}</label>
                          <p>{" "}{value}</p>
                        </div>

                        ))}
                      </div>
                    ) : (
                      ""
                    )}
                    <div
                      style={
                        !product_action_btn?.more_info
                          ? { display: "none" }
                          : {}
                      }
                      className="productdetails_item_info_releted_btn_content_description_extra_info_box_btn"
                    >
                      <button name="more_info" onClick={OnHandel}>
                        Read More
                      </button>
                    </div>
                  </div>

                  <div
                    style={
                      product_action_btn?.more_info ? { display: "none" } : {}
                    }
                  >
                    {Product_Page?.Display_feature ? (
                      <div>
                        <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_header">
                          <label>Display Features</label>
                        </div>
                        
                        {Object.entries(Product_Page?.Display_feature).map(([key, value])=>(
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                          <label>{key}</label>
                          <span>{" "}{value}</span>
                        </div>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}

                    {Product_Page?.OS_Processors ? (
                      <div>
                        <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_header">
                          <label>OS & Processors</label>
                        </div>
                        {Object.entries(Product_Page?.OS_Processors).map(([key, value])=>(
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                          <label>{key}</label>
                          <span>{" "}{value}</span>
                        </div>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}

                    {Product_Page?.Processor_Memory_Features ? (
                      <div>
                        <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_header">
                          <label>Processor & Memory Features</label>
                        </div>
                        {Object.entries(Product_Page?.Processor_Memory_Features).map(([key, value])=>(
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                          <label>{key}</label>
                          <span>{" "}{value}</span>
                        </div>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}

                    {Product_Page?.Camera_Features ? (
                      <div>
                        <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_header">
                          <label>Camera Features</label>
                        </div>
                        {Object.entries(Product_Page?.Camera_Features).map(([key, value])=>(
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                          <label>{key}</label>
                          <span>{" "}{value}</span>
                        </div>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}

                    {Product_Page?.Connectivity_Features ? (
                      <div>
                        <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_header">
                          <label>Connectivity Features</label>
                        </div>
                        {Object.entries(Product_Page?.Connectivity_Features).map(([key, value])=>(
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                          <label>{key}</label>
                          <span>{" "}{value}</span>
                        </div>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}

                    {Product_Page?.Additional_Features ? (
                      <div>
                        <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_header">
                          <label>Additional Features</label>
                        </div>
                        {Object.entries(Product_Page?.Additional_Features).map(([key, value])=>(
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                          <label>{key}</label>
                          <span>{" "}{value}</span>
                        </div>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}

                    {Product_Page?.Warranty ? (
                      <div>
                        <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_header">
                          <label>Warranty</label>
                        </div>
                        {Object.entries(Product_Page?.Warranty).map(([key, value])=>(
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                          <label>{key}</label>
                          <span> {" "}{value}</span>
                        </div>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div
              style={
                product_action_btn?.product_details_opt != "Reviews"
                  ? { display: "none" }
                  : {}
              }
              className="productdetails_item_info_releted_btn_content_reviews"
            >
              {[1, 2, 3, 4].map((item, index) => (
                <div
                  key={index}
                  className="productdetails_item_info_releted_btn_content_reviews_list"
                >
                  <div className="productdetails_item_info_releted_btn_content_reviews_header">
                    <img />
                    <label>Vikki Starr</label>
                    <span id="devaider"></span>
                    <span>January 15, 2023</span>
                  </div>
                  <div className="productdetails_item_info_releted_btn_content_reviews_reting">
                    <label>*</label>
                  </div>
                  <div className="productdetails_item_info_releted_btn_content_reviews_comment">
                    <p>
                      Absolutely love TopShelfBC; affordable on any budget and
                      such fast delivery, straight to my door! I recommend them
                      to all my friends and family for their 420 needs.
                    </p>
                  </div>
                </div>
              ))}

              <div className="productdetails_item_info_releted_btn_content_reviews_add">
                <h3>Add A Review</h3>
                <div className="productdetails_item_info_releted_btn_content_reviews_add_content">
                  <div className="productdetails_item_info_releted_btn_content_reviews_add_content_header">
                    <label>Your rating</label>
                    <span>:</span>
                    <div>******</div>
                  </div>
                  <div className="productdetails_item_info_releted_btn_content_reviews_add_content_text">
                    <label>
                      Your Review <span>*</span>
                    </label>
                    <div>
                      <textarea placeholder="Enter your review" />
                    </div>
                  </div>
                  <button className="productdetails_item_info_releted_btn_content_reviews_add_content_btn">
                    Submit
                  </button>
                </div>
              </div>
            </div>

            <div className="productdetails_item_info_releted_btn_content_Refer_a_Friend"></div>
          </div>
        </div>
      </div>

      <hr />

      <div className="productdetails_releted_item">
        <h2>Featured Product</h2>

        <div className="productdetails_releted_item_list">
          {Home_product_List?.map((item, _id) => {
            // if (item?.Category == Product_Page?.Category) {
            return (
              <div key={_id}>
                <SingleComp item={item} />
              </div>
            );
            // }
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
