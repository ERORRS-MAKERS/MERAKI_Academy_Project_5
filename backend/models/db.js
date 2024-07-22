const { Pool } = require("pg");
const connectionString =
  "postgresql://Project_3_v05_owner:huvgdKWJ62LZ@ep-solitary-glitter-a1ga27pc.ap-southeast-1.aws.neon.tech/Error%27s-Maker%27s?sslmode=require";
const pool = new Pool({
  connectionString,
});
pool
  .connect()
  .then((res) => {
    console.log(`DB connected to ${res.database}`);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = {pool};
