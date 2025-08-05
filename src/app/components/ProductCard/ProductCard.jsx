import Image from "react";
import styles from "./ProductCard.module.css"

export default function ProductCard({ product }) {

    return (
        <div className={styles.products}>
            {/* PRODUTO 1 - SMARTPHONE */}
            <div className={styles.productCard} data-category="smartphones">
                <div className={styles.productImage}>
                    <Image src="https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=300&h=200&fit=crop"
                        alt="iPhone 15 Pro Max"
                        width={300}
                        height={200}
                    />
                </div>
                <div className={styles.productTitle}>{product.title}</div>
                <div className={styles.productPrice}>R$ {product.price}</div>
                <div className={styles.productDescription}>{product.description}</div>
                <div className={styles.productRating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span>(4.8) - 1.234 avaliações</span>
                </div>
            </div>
        </div>
    );
}