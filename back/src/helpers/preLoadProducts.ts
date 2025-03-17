import { AppDataSource } from '../config/dataSource';
import { Product } from '../entities/Product';
import { ProductRepository } from '../repositories/product.repository';

interface IProduct {
   name: string;
   price: number;
   description: string;
   image: string;
   categoryId: number;
   stock: number;
}

const productsToPreLoad: IProduct[] = [
   {
      name: 'iPhone 11',
      price: 699,
      description:
         'Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!',
      image: 'https://http2.mlstatic.com/D_Q_NP_986824-MLU78511047276_082024-O.webp',
      categoryId: 1,
      stock: 10,
   },
   {
      name: 'MacBook Air',
      price: 999,
      description:
         'Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.',
      image: 'https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg',
      categoryId: 2,
      stock: 10,
   },
   {
      name: 'iPad Pro',
      price: 799,
      description:
         'Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.',
      image: 'https://http2.mlstatic.com/D_NQ_NP_874813-MLU78263719618_082024-O.webp',
      categoryId: 3,
      stock: 10,
   },
   {
      name: 'Apple Watch Series 6',
      price: 399,
      description:
         'Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.',
      image: 'https://m.media-amazon.com/images/I/41+UF6PgvEL._AC_.jpg',
      categoryId: 4,
      stock: 10,
   },
   {
      name: 'AirPods Pro',
      price: 249,
      description:
         'Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.',
      image: 'https://f.fcdn.app/imgs/33fc9e/amvstore.com.uy/amvsuy/ccde/original/catalogo/2559_2559_1/2000-2000/airpods-pro-apple-mtjv3am-2nd-gen-con-magsafe-case-usb-c-white-airpods-pro-apple-mtjv3am-2nd-gen-con-magsafe-case-usb-c-white.jpg',
      categoryId: 5,
      stock: 10,
   },
   {
      name: 'HomePod mini',
      price: 99,
      description:
         'Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.',
      image: 'https://f.fcdn.app/imgs/e21f47/www.zonatecno.com.uy/zoteuy/9e6e/original/catalogo/98775_98775_1/1500-1500/parlante-smart-apple-homepod-mini-my5g2ll-space-gray-parlante-smart-apple-homepod-mini-my5g2ll-space-gray.jpg',
      categoryId: 6,
      stock: 10,
   },
];

export const preLoadProducts = async () => {
   const products = await ProductRepository.find();
   if (!products.length)
      await AppDataSource.createQueryBuilder()
         .insert()
         .into(Product)
         .values(productsToPreLoad)
         .execute();
   console.log('Products preloaded');
};
