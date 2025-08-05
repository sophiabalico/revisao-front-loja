"use client";
import { useState, useEffect } from 'react';
import { productsData } from '../data/products';


export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);

  // Carregar produtos do arquivo data/products.js
  useEffect(() => {
    // Simular carregamento (opcional - pode ser síncrono)
    setProducts(productsData);
  }, []);

  // Atualizar contador automaticamente quando produtos mudarem
  useEffect(() => {
    setProductCount(products.length);
  }, [products]);

  
  
  return (
    <div>
      <h1>Total de produtos: {productCount}</h1>
      <ProductCard product={title} />
    </div>
  );

  
}
