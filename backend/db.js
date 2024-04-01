const mongoose = require("mongoose");
const mongoURI =
  "mongodb://custombite:niki1178@ac-0ngriq6-shard-00-00.lwusl8c.mongodb.net:27017,ac-0ngriq6-shard-00-01.lwusl8c.mongodb.net:27017,ac-0ngriq6-shard-00-02.lwusl8c.mongodb.net:27017/custombitemern?ssl=true&replicaSet=atlas-11gi7v-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ClusterCB";
const mongoDB = async () => {
  mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("_-_", err)
      else {
        console.log("connected..");
        const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(function (err, data) {
          if (err) console.log(err);
          else console.log(); //data ayega andr
        });
      }
    }
  );
};

module.exports = mongoDB;
