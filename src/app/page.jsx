"use client";
import ProductCard from './components/ProductCard/ProductCard';
import styles from './page.module.css';
import { productsData } from '../../public/data/products.js';


export default function Home() {
  return (
    <div className={styles.products}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}