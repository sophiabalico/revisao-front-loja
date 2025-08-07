import Image from "react";
import styles from "./ProductCard.module.css"

export default function ProductCard({title, price, description, image}) {

    return (

            <div className={styles.productCard} data-category="smartphones">
                <div className={styles.productImage}>
                    <Image src={image}
                        alt={title}
                        width={300}
                        height={200}
                    />
                </div>
                <div className={styles.productTitle}>{title}</div>
                <div className={styles.productPrice}>R$ </div>
                <div className={styles.productDescription}>teste</div>
                <div className={styles.productRating}>
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    <span>(4.8) - 1.234 avaliações</span>
                </div>
            </div>
    );
}