const { Pool } = require("pg");
module.exports = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT || "5432",
});

/*module.exports = new Pool({
  connectionString:
    "postgresql://postgres:buphecovvsuJeZMdKwZCCrhMhTXXNdCT@autorack.proxy.rlwy.net:25805/railway",
});*/
