const { Client } = require("pg");

const SQL = `
    CREATE TABLE IF NOT EXISTS messages
    (
        id       INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        text     VARCHAR(255),
        username VARCHAR(50),
        date     DATE
    );

    INSERT INTO messages (text, username, date)
    VALUES ('Hi there!', 'Andrew Lincoln', CURRENT_DATE),
           ('Hello World!', 'Marissa Conelly', CURRENT_DATE);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      "postgresql://postgres:buphecovvsuJeZMdKwZCCrhMhTXXNdCT@autorack.proxy.rlwy.net:25805/railway",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
