import React, { useState } from "react";
import SingleComp from "../ListComponents/SingleComp";
import "./ItemComp.css";

const ItemComp = ({ data }) => {
  let [typeOfData, settypeOfData] = useState("Laptop");

  const OnHandel = ({target:{value}}) => {
    settypeOfData(value);
  };

  return (
    <div className="item_comp_choose_your_weed">
      <div className="item_comp_choose_your_weed_header">
        <h3>CHOOSE YOUR WEED</h3>
      </div>
      <div className="item_comp_choose_your_weed_div">
        <div className="item_comp_choose_your_weed_div_filter">
          <label>Filter by Interest</label>
          <div className="item_comp_choose_your_weed_div_filter_buttons">
            <button style={typeOfData=="Laptop"?{color:"green"}:{}} value="Laptop" onClick={OnHandel}>
              Laptop
            </button>
            <button style={typeOfData=="Mobile"?{color:"green"}:{}} value="Mobile" onClick={OnHandel}>
              Mobile
            </button>
            <button style={typeOfData=="EarPhone"?{color:"green"}:{}} value="EarPhone" onClick={OnHandel}>
              Earphones
            </button>
            <button onClick={OnHandel}>Edibles</button>
            <button onClick={OnHandel}>Shop All Weed</button>
          </div>
        </div>
      </div>
      <div className="item_comp_choose_your_weed_content">
        {
        
        data?.map((item, _id) => {
          
          if (item.Category == typeOfData) {
          
            return <SingleComp key={_id} item={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default ItemComp;
