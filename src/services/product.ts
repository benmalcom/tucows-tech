import { Product } from 'types/product';
import http from './http';
export const getProducts = async (): Promise<Product[]> =>
  await http.get('products');
