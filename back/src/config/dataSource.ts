import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Credential } from '../entities/Credential';
import { Order } from '../entities/Order';
import { Category } from '../entities/Category';
import { Product } from '../entities/Product';

export const AppDataSource = new DataSource({
   type: 'postgres',
   url: process.env.DATABASE_URL,
   synchronize: true,
   logging: false,
   entities: [User, Credential, Order, Product, Category],
   subscribers: [],
   migrations: [],
   ssl: { rejectUnauthorized: false },
});
