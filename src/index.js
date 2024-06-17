// import express from 'express';

// const PORT = 1488;

// const app = express();

// app.get('/', (req, res) => {
//   res.json({
//       message: 'Hello motherfucker!',
//       description: '',
//   });
// });

// app.use((req, res, next) => {
//   console.log(`Time: ${new Date().toLocaleString()}`);
//   next();
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';

const bootstrap = async () => {
  await initMongoDB();
  startServer();
};

bootstrap();
