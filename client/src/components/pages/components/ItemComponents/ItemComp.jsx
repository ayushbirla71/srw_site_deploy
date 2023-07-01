import React from 'react';
import SingleComp from '../ListComponents/SingleComp';
import './ItemComp.css';

const ItemComp = () => {
  return (
    <div className="item_comp_choose_your_weed">
    <div className="item_comp_choose_your_weed_header">
      <h3>CHOOSE YOUR WEED</h3>
    </div>
    <div className="item_comp_choose_your_weed_div">
      <div className="item_comp_choose_your_weed_div_filter">
        <label>Filter by Interest</label>
        <div className="item_comp_choose_your_weed_div_filter_buttons">
          <button>Flowers</button>
          <button>Mushrooms</button>
          <button>Concentrate</button>
          <button>Edibles</button>
          <button>Shop All Weed</button>
        </div>
      </div>
    </div>
    <div className="item_comp_choose_your_weed_content">
      {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
        <SingleComp />
      ))}
    </div>
  </div>
  )
}

export default ItemComp