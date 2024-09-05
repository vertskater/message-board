const { Pool } = require("pg");
module.exports = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT || "5432",
});

/*module.exports = new Pool({
  connectionString:
    "postgresql://postgres:buphecovvsuJeZMdKwZCCrhMhTXXNdCT@autorack.proxy.rlwy.net:25805/railway",
});*/
