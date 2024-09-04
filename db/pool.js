const { Pool } = require("pg");
module.exports = new Pool({
  host: process.env.PGHOST || "meticulous-empathy.railway.internal",
  user: process.env.PGUSER || "postgres",
  database: process.env.PGDATABASE || "railway",
  password: process.env.PGPASSWORD || "buphecovvsuJeZMdKwZCCrhMhTXXNdCT",
  port: process.env.PGPORT || "5432",
});

/*module.exports = new Pool({
  connectionString:
    "postgresql://postgres:buphecovvsuJeZMdKwZCCrhMhTXXNdCT@autorack.proxy.rlwy.net:25805/railway",
});*/
