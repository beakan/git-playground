import { createServer } from './app';

// Because ./app is imported above, and it imports the env file, we can use the environment variables here
const port = process.env.PORT || 1111;

createServer().then((app) => {
  // Listen on provided port when app is ready to be launched
  app.listen(port, () => {
    console.log(`⚡️[server]: API is listening at http://localhost:${port}`);
  });
});
