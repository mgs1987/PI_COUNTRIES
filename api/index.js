const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT;
const dbFiller = require("../api/src/controllers/dbFiller");
var isExecuted = false;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  if (!isExecuted) {
    isExecuted = true;
    dbFiller.dataBFiller();
  }
  server.listen(3001, () => {
    console.log(`Server raised in port ${port}`); // eslint-disable-line no-console
  });
});
