import express, { Express, Request, Response, json } from 'express';
import { DataSource } from 'typeorm';

import { ProductsRouter } from './features/products/products.router';
// Make sure to import the env file first
import './utils/env';
// eslint-disable-next-line import/order
import { setupDatabase } from './database';

export async function createServer() {
  const app: Express = express();

  // Serve static files
  app.use(express.static('public'));

  // Parse JSON request bodies
  app.use(json());

  app.get('/', (req: Request, res: Response) => {
    res.json({ data: 'Hello World!' });
  });

  const dataSource: DataSource = await setupDatabase();

  // Create ProductsRouter and use it
  app.use(ProductsRouter(dataSource));

  return app;
}
