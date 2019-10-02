const PORT = 3000;

const app = require("./app");
const logger = require("./config/logger.cofig");

app.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}`);
});
