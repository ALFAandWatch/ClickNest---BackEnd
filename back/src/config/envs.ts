import dotenv from 'dotenv';
dotenv.config();

export const PORT: number = Number(process.env.PORT) || 3000;
export const DB_NAME: string = process.env.DB_NAME || 'proyecto_m4_front';
export const DB_USER: string = process.env.DB_USER || 'postgres';
export const DB_PASSWORD: string = process.env.DB_PASSWORD || 'admin';
export const DB_HOST: string = process.env.DB_HOST || 'localhost';
export const DB_PORT: number = Number(process.env.DB_PORT) || 5432;
export const JWT_SECRET: string = process.env.JWT_SECRET || 'secret';

export const DATABASE_URL: string =
   process.env.DATABASE_URL ||
   'postgresql://postgres.nmmpnkmldxgmuxfwxikw:DZi6dJHCF4F224cC@aws-0-us-west-1.pooler.supabase.com:5432/postgres';
