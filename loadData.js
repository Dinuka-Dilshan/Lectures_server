const Subject = require("./models/Subject");
const data = require("./data");

const loadData = async () => {
  try {
    await Subject.insertMany(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = loadData;
