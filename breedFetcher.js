const args = process.argv.slice(2);
const request = require("request");
request(
  `https://api.thecatapi.com/v1/breeds/search/?q=${args}`,
  (error, response, body) => {
    const Objdata = JSON.parse(body);

    if (Objdata.message) {
      return console.log("Error Found");
    }

    if (Objdata.length === 0) {
      return console.log("Breed not found");
    }

    console.log(Objdata[0].description);
  }
);
