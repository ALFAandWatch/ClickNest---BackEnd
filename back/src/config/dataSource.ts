import { DataSource } from 'typeorm';
import { DATABASE_URL } from './envs';
import { User } from '../entities/User';
import { Credential } from '../entities/Credential';
import { Order } from '../entities/Order';
import { Category } from '../entities/Category';
import { Product } from '../entities/Product';

export const AppDataSource = new DataSource(
   DATABASE_URL
      ? {
           type: 'postgres',
           url: DATABASE_URL, // ✅ Use DATABASE_URL
           synchronize: true,
           logging: false,
           entities: [User, Credential, Order, Product, Category],
           subscribers: [],
           migrations: [],
        }
      : {
           type: 'postgres',
           host: process.env.DB_HOST || 'localhost',
           port: Number(process.env.DB_PORT) || 5432,
           username: process.env.DB_USER || 'postgres',
           password: process.env.DB_PASSWORD || 'admin',
           database: process.env.DB_NAME || 'proyecto_m4_front',
           synchronize: true,
           logging: false,
           entities: [User, Credential, Order, Product, Category],
           subscribers: [],
           migrations: [],
        }
);
