const { setupApp } = require('./express-server');

const port = process.env.PORT || 4445;
setupApp()
  .then((app) => {
    app.listen({ port }, () => console.log(`app running on port ${port}`));
    return app;
  })
  .catch((error) => {
    console.log(error);
  });
