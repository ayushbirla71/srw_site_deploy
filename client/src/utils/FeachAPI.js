import axios from "axios";
const bassUrl = `http://localhost:3001`;

const FeachApi = async (Obj) => {
  try {
    Obj.baseURL='http://localhost:3001'

    let {data}= await axios(Obj);
  
    return data;

  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};


export default FeachApi;