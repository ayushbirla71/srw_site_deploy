const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    Title: { type: String },

    Highlights: { type: [String] },
    Price : {type: Number},
    MRP : {type: Number},
    Color :{type:[String]},
    Description: { type: String },

    Category: {type: [String]},

    Stock : {type : String,required:true, enum :["IN STOCK", "OUT OF STOCK"]},

    ImageUrlList : {type:[String]},

    Best_Sellers : {type :Boolean, default : false},
    
    
    //general lifo
    General_info: {
      type: Object,
      InTheBox: { type: String },
      Model_no: { type: String },
      Model_Name: { type: String },
      Color: { type: String },
      Series: { type: String },
      SIM_type: { type: String },
      Battert_cell: { type: String },
      connectivity: {type : String},
      Supported_Os :{type :String},
      Read_Speed :{ type :String},
      System_Requirements : {type :String},
      Type : {type : String}
    },

    // Display Feature

    Display_feature: {
      type: Object,

      Touch_screen: { type: String },
      Screen_size: { type: String },
      Resolution: { type: String },
      Resolution_type: { type: String },
    },

    // OS & processors

    OS_Processors: {
      type: Object,
      Operating_St: { type: String },
      Processor_Core: { type: String },
      Primary_Clock: { type: String },
      Supported_Oprating_St: { type: String },
      System_Architecture: { type: String },
    },

    // Processor and memory Features

    Processor_Memory_Features: {
      type: Object,
      Processor_Brand: { type: String },
      Processor_Name: { type: String },
      Processor_Generation: { type: String },
      Mobile_RAM: { type: [String] },
      Mobile_ROM: { type: [String] },
      SSD: { type: String },
      RAM: { type: String },
      RAM_Type: { type: String },
      Number_Cores: { type: String },
      Graphic_Processor: { type: String },
    },

    // Camera Features
    Camera_Features: {
      type: Object,

      Primary_Camera: { type: String },
      Secondary_Camera: { type: String },
      Video_Recording: { type: String },
    },

    // Connectivity Features

    Connectivity_Features: {
      type: Object,
      Network_Type: { type: String },
      Supported_Networks: { type: String },
      Wireless_LAN: { type: String },
      Bluetooth: { type: String },
      Battery_Life :{type :String}
    },

    // Product Details 
    Product_Details:{
        type: Object,
        Deep_Bass :{type :String},
        Water_Resistant :{type :String}
    },

    // Additional Features
    Additional_Features: {
      type: Object,

      Disk_Drive: { type: String },
      Web_Camera: { type: String },
      Finger_Print_Sensor: { String },
      Keyboard: { String },
      SIM_Size: { String },
      Sensors: { String },
    },

    // Battery & Power Features

    Battery_Features: {
      type: Object,
      Battery_Capacity: { String },
    },

    // Warranty

    Warranty: {
      type: Object,

      Warranty_Summary: { type: String },
      Covered_Warranty: { type: String },
      Domestic_Warranty: { type: String },
    },

    Ratings: {
      type: Object,
      Ratings_no: { type: String },
      Total_Ratings: { type: Number },
      User_Rating_info: {
        type: [
          {
            type: Object,
            User_Name: { type: String, ref: "" },
            Comment: { type: String },
          },
        ],
      },
    },

    deletedAt: { type: Date, default: null },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
