import Image from "next/image";
import styles from "./ProductCard.module.css";

export default function ProductCard({ title, price, description, image }) {
  return (
    <div className={styles.productCard} data-category="smartphones">
      <div className={styles.productImage}>
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <div className={styles.productTitle}>{title}</div>
      <div className={styles.productPrice}>R${price}</div>
      <div className={styles.productDescription}>{description}</div>
      <div className={styles.productRating}>
        <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
        <span>(4.8) - 1.234 avaliações</span>
      </div>
    </div>
  );
}