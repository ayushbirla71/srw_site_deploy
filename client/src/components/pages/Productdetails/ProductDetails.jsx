import React, { useState } from "react";
import "./ProductDetails.css";
import Slider from "react-slick";
import SingleComp from "../components/ListComponents/SingleComp";
import {AiOutlineClose} from 'react-icons/ai';

const ProductDetails = () => {
    const [options, setoptions]=useState({
        disc: 'none',
        review:false

    });

    const onHendel=({target:{name, value}})=>{

    }





  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            style={{ height: "40px", width: "40px" }}
            src="https://www.pngkey.com/png/full/1-19334_free-png-dell-laptop-png-images-transparent-dell.png"
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="productdetails">
<div className="productdetails_item_img_popup">

      <div className="productdetails_item_img_popup_box">
        <div className="productdetails_item_img_popup_box_div">
        


          <img src="https://th.bing.com/th/id/R.bf63c82bf1128cc387ee868b5cdb948a?rik=GJJHEXXS%2fjiPmA&riu=http%3a%2f%2fg-ecx.images-amazon.com%2fimages%2fG%2f01%2fwireless%2fdetail-page%2fsamsung-doubletime-att-open-lg.jpg&ehk=k6D4e%2bLDAHbmxvpWpB9y1KniqCVqxrk1iPq7R8LsUyA%3d&risl=&pid=ImgRaw&r=0"/>

          <label><AiOutlineClose/></label>
        </div>
        <div className="productdetails_item_img_popup_box_options">
          {[1,2,3,4].map(()=>(

          <label>
          <img src="https://th.bing.com/th/id/R.bf63c82bf1128cc387ee868b5cdb948a?rik=GJJHEXXS%2fjiPmA&riu=http%3a%2f%2fg-ecx.images-amazon.com%2fimages%2fG%2f01%2fwireless%2fdetail-page%2fsamsung-doubletime-att-open-lg.jpg&ehk=k6D4e%2bLDAHbmxvpWpB9y1KniqCVqxrk1iPq7R8LsUyA%3d&risl=&pid=ImgRaw&r=0"/>
          </label>
          ))}
        </div>


      </div>
</div>


      <div className="productdetails_item">
        <div className="productdetails_item_img">
          <div className="productdetails_item_img_logo">
            <img src="https://i1.wp.com/stsbiz.com.au/wp-content/uploads/2020/01/Dell-inspiron-13-7348-laptop-AuStock.Pic-2.jpg?w=1000&ssl=1" />
          </div>
          <div className="productdetails_item_img_option_img">
            <img />
            <img />
            <img />
            <img />
          </div>
        </div>

        <div className="productdetails_item_info">
          <div className="productdetails_item_info_box">
            <div className="productdetails_item_info_box_header">
              <label>CONCENTRATES</label>
              <h3>Mix And Match Shatter/Budder 28g (4 X 7G)</h3>
              <div className="productdetails_item_info_box_header_contents">
                <label>Indica</label>
                <label>Sativa 100%</label>
              </div>
              <div className="productdetails_item_info_box_header_price">
                <label>
                  <span id="mrp">$200.00</span>
                  <span id="rs">$120.00</span>
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
                  <label>EFFECTS</label>
                  <p>Calming, Creative, Happy, Relaxing, Sleepy, Uplifting</p>
                </div>
              </div>
              <div className="productdetails_item_info_box_effect_box">
                <div className="productdetails_item_info_box_effect_box_logo">
                  <img />
                </div>

                <div className="productdetails_item_info_box_effect_box_content">
                  <label>EFFECTS</label>
                  <p>Calming, Creative, Happy, Relaxing, Sleepy, Uplifting</p>
                </div>
              </div>
              <div className="productdetails_item_info_box_effect_box">
                <div className="productdetails_item_info_box_effect_box_logo">
                  <img />
                </div>

                <div className="productdetails_item_info_box_effect_box_content">
                  <label>EFFECTS</label>
                  <p>Calming, Creative, Happy, Relaxing, Sleepy, Uplifting</p>
                </div>
              </div>
            </div>

            <div className="productdetails_item_info_box_discription"
            style={{display:`${options.disc}`}}>
              <label>DESCRIPTION</label>
              <p>
                Jungle Diamonds is a slightly indica dominant hybrid strain (60%
                indica/40% sativa) created through crossing the infamous
                Slurricane X Gorilla Glue #4 strains.
              </p>
            </div>

            <div className="productdetails_item_info_box_options">
              <div className="productdetails_item_info_box_options_list">
                <div className="productdetails_item_info_box_options_list_left">
                  <label>WEIGHT</label>
                  <div className="productdetails_item_info_box_options_list_left_btn">
                    <button>28g</button>
                    <button>1/2lb</button>
                    <button>1/4lb</button>
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
                    <button>-</button>
                    <span>2</span>
                    <button>+</button>
                  </div>
                  <span></span>
                  <label>In Stock</label>
                </div>
                <div className="productdetails_item_info_box_addcart_add_cart_right">
                  <button>Add to Cart</button>
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
            <button>Description</button>
            <button>
              Reviews <span>(350)</span>
            </button>
            <button>Refer a Friend</button>
          </div>

          <div className="productdetails_item_info_releted_btn_content">
            {/* <div className="productdetails_item_info_releted_btn_content_description">
              <p>
                Jungle Diamonds is a slightly indica dominant hybrid strain (60%
                indica/40% sativa) created through crossing the infamous
                Slurricane X Gorilla Glue #4 strains. Named for its gorgeous
                appearance and breeder, Jungle Diamonds is a favorite of indica
                and hybrid lovers alike thanks to its delicious taste and
                tingly, arousing high. Jungle Diamonds buds have sparkling
                oversized spade-shaped olive green nugs with vivid amber hairs
                and a thick frosty blanket of glittering tiny blue-tinted white
                crystal trichomes. As you pull apart each sticky little nugget,
                aromas of spicy mocha coffee and fruity herbs are released.{" "}
              </p>

              <p>
                The flavor is of sweet chocolate with hints of fresh ripe
                berries to it, too. The Jungle Diamonds high is just as
                delicious, with happy effects that will boost the spirits and
                kick negative thoughts and moods to the curb. You’ll feel a
                tingly sense in your body from start to finish that serves to
                remove any aches or pains while leaving you pretty aroused at
                times. This is accompanied by a blissfully unfocused heady lift
                that leaves your head in the clouds without causing sedation.
                With these effects and its pretty high 17-24% THC level, Jungle
                Diamonds is ideal for experienced patients with chronic pain,
                cramps or muscle spasms and appetite loss or nausea.
              </p>
            </div> */}

            <div className="productdetails_item_info_releted_btn_content_reviews">
              {[1, 2, 3, 4].map(() => (
                <div className="productdetails_item_info_releted_btn_content_reviews_list">
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
          {[1, 2, 3, 4].map(() => (
            <div>
              <SingleComp />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
