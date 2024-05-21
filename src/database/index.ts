import 'reflect-metadata';
import path from 'path';

import { DataSource } from 'typeorm';

import { findRootDirectory } from '../utils/path';

// Exported function to initialize the Data Source (initiate the database connection)
export const setupDatabase = async () => {
  // =============================================================================================
  // Get the name to database from the environment variables and create the path to it
  const dbName: string = process.env.DB_NAME || 'db.sqlite';

  // Put the database in /db in the root of the project
  const dbPath: string = path.join(findRootDirectory(), 'db', dbName);

  // =============================================================================================
  // Set the correct entities path glob, based on ENV
  const entitiesPath: string = process.env.ENV?.trim() === 'prod' ? 'dist/**/*.entity.*' : 'src/**/*.entity.*';

  // =============================================================================================
  // Defining the Data Source
  const dataSource = new DataSource({
    type: 'sqlite',
    database: dbPath,
    entities: [entitiesPath],
    logging: ['error', 'warn'],
    synchronize: true,
  });

  // =============================================================================================

  return dataSource.initialize();
};
