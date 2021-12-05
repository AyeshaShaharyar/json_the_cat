const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`,
    (error, response, body) => {
      const Objdata = JSON.parse(body);

      if (Objdata.message) {
        return callback(Objdata.message, null);
      } else if (Objdata.length === 0) {
        return callback("Invalid breed: breed not found", null);
      } else {
        return callback(null, Objdata[0].description);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
