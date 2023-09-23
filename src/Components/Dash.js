import React from "react";
import styles from "./Dash.module.css"
function SettingsPage() {
  return (
    <main className={styles.main}>
      <div className={styles.responsiveWrapper}>
        <div className={styles.mainHeader}>
          <h1>My Dashboard</h1>
        </div>
        <div className={styles.column}>
          <div class={styles.card}>
            <p class={styles.cardTitle}>Product Name</p>
            <p class={styles.smallDesc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
              officia deleniti. Expedita iste et illum, quaerat pariatur
              consequatur eum nihil itaque!
            </p>
            <div class={styles.goCorner}>
              <div class={styles.goArrow}>→</div>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div class={styles.card}>
            <p class={styles.cardTitle}>Product Name</p>
            <p class={styles.smallDesc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
              officia deleniti. Expedita iste et illum, quaerat pariatur
              consequatur eum nihil itaque!
            </p>
            <div class={styles.goCorner}>
              <div class={styles.goArrow}>→</div>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div class={styles.card}>
            <p class={styles.cardTitle}>Product Name</p>
            <p class={styles.smallDesc}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
              officia deleniti. Expedita iste et illum, quaerat pariatur
              consequatur eum nihil itaque!
            </p>
            <div class={styles.goCorner}>
              <div class={styles.goArrow}>→</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SettingsPage;
