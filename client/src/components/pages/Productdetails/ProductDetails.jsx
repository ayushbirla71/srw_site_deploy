import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import SingleComp from "../components/ListComponents/SingleComp";
import { AiOutlineClose } from "react-icons/ai";
import { json, useParams } from "react-router-dom";
import FeachApi from "../../../utils/FeachAPI";
import { useDispatch, useSelector } from "react-redux";
import { Product_Page_Details_act } from "../../../redux/actions/productDetails_actions/ProductDetails";
import { Home_Product_List_Action } from "../../../redux/actions/productList_actions/Product_List_action";
import { CartItems_actions } from "../../../redux/actions/cartItems_actions/CartItems_actions";

const ProductDetails = () => {
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
    }
  };

  return (
    <div className="productdetails">
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
              <div className="productdetails_item_info_box_header_contents">
                <label>Indica</label>
                <label>Sativa 100%</label>
              </div>
              <div className="productdetails_item_info_box_header_price">
                <label>
                  <span id="mrp">₹ {Product_Page?.Price}</span>
                  <span id="rs">₹ {Product_Page?.MRP}</span>
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
                  <label>RAM</label>
                  <div className="productdetails_item_info_box_options_list_left_btn">
                    {Product_Page?.Processor_Memory_Features?.Mobile_RAM.map(
                      (item, index) => (
                        <button
                          key={index}
                          onClick={() => setOptions({ ...options, RAM: item })}
                          style={Options?.RAM == item ? { color: "blue" } : {}}
                        >
                          {item}
                        </button>
                      )
                    )}
                  </div>
                </div>
                <div className="productdetails_item_info_box_options_list_right">
                  <label>Add Integra Pack</label>
                  <div className="productdetails_item_info_box_options_list_right_btn">
                    <label>
                      <input type="checkbox" />
                      <span>4g (+$2.00)</span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span>8g (+$3.00)</span>
                    </label>
                  </div>
                </div>
              </div>
              <span>
                Purchase this product now and earn <span>80</span> Points!
              </span>
            </div>

            <div
              style={popup ? { display: "flex" } : {}}
              className="productdetails_popup_message"
            >
              <label>successfully add</label>
            </div>

            <div className="productdetails_item_info_box_addcart">
              <div className="productdetails_item_info_box_addcart_price">
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
              </div>

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
                  <label>$242.00</label>
                </div>
              </div>

              <div className="productdetails_item_info_box_addcart_offer">
                <div>
                  <img />
                  <label>
                    Free Xpress Shipping on orders over
                    <span>$149</span>
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
                        {Product_Page?.General_info?.InTheBox ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>In The Box</label>
                            <span>{Product_Page?.General_info?.InTheBox}</span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.General_info?.Model_Name ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Model Number</label>
                            <span>
                              {Product_Page?.General_info?.Model_Name}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.General_info?.Color ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Color</label>
                            <span>{Product_Page?.General_info?.Color}</span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.General_info?.Series ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Series</label>
                            <span>{Product_Page?.General_info?.Series}</span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.General_info?.SIM_type ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>SIM type</label>
                            <span>{Product_Page?.General_info?.SIM_type}</span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.General_info?.Battert_cell ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Battert cell</label>
                            <span>
                              {Product_Page?.General_info?.Battert_cell}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.General_info?.connectivity ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>connectivity</label>
                            <span>
                              {Product_Page?.General_info?.connectivity}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.General_info?.Supported_Os ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Supported OS</label>
                            <span>
                              {Product_Page?.General_info?.Supported_Os}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.General_info?.Read_Speed ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Read Speed</label>
                            <span>
                              {Product_Page?.General_info?.Read_Speed}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.General_info?.System_Requirements ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>System Requirements</label>
                            <span>
                              {Product_Page?.General_info?.System_Requirements}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.General_info?.Type ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Type</label>
                            <span>{Product_Page?.General_info?.Type}</span>
                          </div>
                        ) : (
                          ""
                        )}
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
                        {Product_Page?.Display_feature?.Touch_screen ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Touch screen</label>
                            <span>
                              {Product_Page?.Display_feature?.Touch_screen}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Display_feature?.Screen_size ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Screen size</label>
                            <span>
                              {Product_Page?.Display_feature?.Screen_size}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Display_feature?.Resolution ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Resolution</label>
                            <span>
                              {Product_Page?.Display_feature?.Resolution}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Display_feature?.Resolution_type ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Resolution type</label>
                            <span>
                              {Product_Page?.Display_feature?.Resolution_type}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      ""
                    )}

                    {Product_Page?.OS_Processors ? (
                      <div>
                        <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_header">
                          <label>OS & Processors</label>
                        </div>
                        {Product_Page?.OS_Processors?.Operating_St ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Operating St</label>
                            <span>
                              {Product_Page?.OS_Processors?.Operating_St}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.OS_Processors?.Processor_Core ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Processor Core</label>
                            <span>
                              {Product_Page?.OS_Processors?.Processor_Core}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.OS_Processors?.Primary_Clock ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Primary Clock</label>
                            <span>
                              {Product_Page?.OS_Processors?.Primary_Clock}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.OS_Processors?.Supported_Oprating_St ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Supported Oprating St</label>
                            <span>
                              {
                                Product_Page?.OS_Processors
                                  ?.Supported_Oprating_St
                              }
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.OS_Processors?.System_Architecture ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>System Architecture</label>
                            <span>
                              {Product_Page?.OS_Processors?.System_Architecture}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      ""
                    )}

                    {Product_Page?.Processor_Memory_Features ? (
                      <div>
                        <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_header">
                          <label>Processor & Memory Features</label>
                        </div>
                        {Product_Page?.Processor_Memory_Features
                          ?.Processor_Brand ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Processor Brand</label>
                            <span>
                              {
                                Product_Page?.Processor_Memory_Features
                                  ?.Processor_Brand
                              }
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Processor_Memory_Features
                          ?.Processor_Name ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Processor Name</label>
                            <span>
                              {
                                Product_Page?.Processor_Memory_Features
                                  ?.Processor_Name
                              }
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Processor_Memory_Features
                          ?.Processor_Generation ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Processor Generation</label>
                            <span>
                              {
                                Product_Page?.Processor_Memory_Features
                                  ?.Processor_Generation
                              }
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Processor_Memory_Features?.SSD ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>SSD</label>
                            <span>
                              {Product_Page?.Processor_Memory_Features?.SSD}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Processor_Memory_Features?.RAM ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>RAM</label>
                            <span>
                              {Product_Page?.Processor_Memory_Features?.RAM}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Processor_Memory_Features?.RAM_Type ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>RAM Type</label>
                            <span>
                              {
                                Product_Page?.Processor_Memory_Features
                                  ?.RAM_Type
                              }
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Processor_Memory_Features
                          ?.Number_Cores ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Number Cores</label>
                            <span>
                              {
                                Product_Page?.Processor_Memory_Features
                                  ?.Number_Cores
                              }
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Processor_Memory_Features
                          ?.Graphic_Processor ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Graphic Processor</label>
                            <span>
                              {
                                Product_Page?.Processor_Memory_Features
                                  ?.Graphic_Processor
                              }
                            </span>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      ""
                    )}

                    {Product_Page?.Camera_Features ? (
                      <div>
                        <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_header">
                          <label>Camera Features</label>
                        </div>
                        {Product_Page?.Camera_Features?.Primary_Camera ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Primary Camera</label>
                            <span>
                              {Product_Page?.Camera_Features?.Primary_Camera}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Camera_Features?.Secondary_Camera ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Secondary Camera</label>
                            <span>
                              {Product_Page?.Camera_Features?.Secondary_Camera}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Camera_Features?.Video_Recording ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Video Recording</label>
                            <span>
                              {Product_Page?.Camera_Features?.Video_Recording}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      ""
                    )}

                    {Product_Page?.Connectivity_Features ? (
                      <div>
                        <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_header">
                          <label>Connectivity Features</label>
                        </div>
                        {Product_Page?.Connectivity_Features?.Network_Type ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Network Type</label>
                            <span>
                              {
                                Product_Page?.Connectivity_Features
                                  ?.Network_Type
                              }
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Connectivity_Features
                          ?.Supported_Networks ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Supported Networks</label>
                            <span>
                              {
                                Product_Page?.Connectivity_Features
                                  ?.Supported_Networks
                              }
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Connectivity_Features?.Wireless_LAN ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Wireless LAN</label>
                            <span>
                              {
                                Product_Page?.Connectivity_Features
                                  ?.Wireless_LAN
                              }
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Connectivity_Features?.Bluetooth ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Bluetooth</label>
                            <span>
                              {Product_Page?.Connectivity_Features?.Bluetooth}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Connectivity_Features?.Battery_Life ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Battery Life</label>
                            <span>
                              {
                                Product_Page?.Connectivity_Features
                                  ?.Battery_Life
                              }
                            </span>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      ""
                    )}

                    {Product_Page?.Additional_Features ? (
                      <div>
                        <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_header">
                          <label>Additional Features</label>
                        </div>
                        {Product_Page?.Additional_Features?.Disk_Drive ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Disk Drive</label>
                            <span>
                              {Product_Page?.Additional_Features?.Disk_Drive}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Additional_Features?.Web_Camera ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Web Camera</label>
                            <span>
                              {Product_Page?.Additional_Features?.Web_Camera}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Additional_Features
                          ?.Finger_Print_Sensor ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Finger Print Sensor</label>
                            <span>
                              {
                                Product_Page?.Additional_Features
                                  ?.Finger_Print_Sensor
                              }
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Additional_Features?.Keyboard ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Keyboard</label>
                            <span>
                              {Product_Page?.Additional_Features?.Keyboard}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Additional_Features?.SIM_Size ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>SIM Size</label>
                            <span>
                              {Product_Page?.Additional_Features?.SIM_Size}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Additional_Features?.Sensors ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Sensors</label>
                            <span>
                              {Product_Page?.Additional_Features?.Sensors}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      ""
                    )}

                    {Product_Page?.Warranty ? (
                      <div>
                        <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_header">
                          <label>Warranty</label>
                        </div>
                        {Product_Page?.Warranty?.Warranty_Summary ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Warranty Summary</label>
                            <span>
                              {Product_Page?.Warranty?.Warranty_Summary}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Warranty?.Covered_Warranty ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Covered Warranty</label>
                            <span>
                              {Product_Page?.Warranty?.Covered_Warranty}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}

                        {Product_Page?.Warranty?.Domestic_Warranty ? (
                          <div className="productdetails_item_info_releted_btn_content_description_extra_info_box_item_list">
                            <label>Domestic Warranty</label>
                            <span>
                              {Product_Page?.Warranty?.Domestic_Warranty}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}
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
