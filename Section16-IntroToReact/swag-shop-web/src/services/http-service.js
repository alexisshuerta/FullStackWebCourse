import "whatwg-fetch"; //we don't have to store in a variable

class HttpService {
  //this is equivalent to var getProducts = function(){}
  getProducts = () => {
    var promise = new Promise((resolve, reject) => {
      fetch("http://localhost:3004/product").then(response => {
        resolve(response.json());
      });
    });

    return promise;
  };
}

export default HttpService; //equal to module.exports ==....
