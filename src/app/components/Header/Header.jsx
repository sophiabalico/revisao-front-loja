import React from "react";
import styles from "./Header.module.css";

export default function Header({ title, subtitle, totalProducts }) {
    return (
         <div className={styles.header}>
            <h1>🛒 Loja de Eletrônicos</h1>
            <p>Os melhores produtos com os melhores preços!</p>
            <p>📊 Total de produtos: <span id="totalProducts">0</span></p>
        </div>
    );
    
}