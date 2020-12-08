const fs = require('fs');
const path = require('path');

const cartHandler = (req, res) => {
  // get req data
  const requestData = req.body;

  // compare if req data is already in the json file
  const processedData = fs.readFileSync(
    path.join(__dirname, '../data/cartData.json')
  );

  const searchData = (fileData, requestData) => {
    const parsedFileData = JSON.parse(fileData);
    // add quantity to the data id object
    return parsedFileData.map((el) => {
      if (el.productId === requestData.productId) {
        return {
          productId: requestData.productId,
          productPrice: requestData.productPrice,
          productQuantity: (el.productQuantity += 1),
        };
      } else {
        return el;
      }
    });
  };

  // save new data to the file
  const writeData = JSON.stringify(searchData(processedData, requestData));
  fs.writeFile(
    path.join(__dirname, '../data/cartData.json'),
    writeData,
    (err) => {
      if (err) throw new Error(err);
    }
  );
};

module.exports = {
  cart: cartHandler,
};
