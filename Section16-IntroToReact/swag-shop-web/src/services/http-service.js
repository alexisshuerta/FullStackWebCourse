import "whatwg-fetch"; //we don't have to store in a variable

class HttpService {
  //this is equivalent to var getProducts = function(){}
  getProducts = () => {
    fetch("http//localhost:3004/product").then(res => {
      console.log(res.json());
    });
  };
}

export default HttpService; //equal to module.exports ==....
