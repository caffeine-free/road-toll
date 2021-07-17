const { setupApp } = require('./express-server');

const port = 4445;
setupApp()
  .then((app) => {
    app.listen({ port }, () => console.log(`app running on port ${port}`));
    return app;
  })
  .catch((error) => {
    console.log(error);
  });
