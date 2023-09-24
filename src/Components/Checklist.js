import React from "react"
import styles from "./Checklist.module.css"
export default function Checklist(){
    return (
      <div>
        <div className={styles.checklist}>
           
          <input value="1" name="r" type="checkbox" id="01"></input>
          <label for="01">Bread</label>
        
          <input value="2" name="r" type="checkbox" id="02"></input>
          <label for="02">Cheese</label>
          <input value="3" name="r" type="checkbox" id="03"></input>
          <label for="03">Coffee</label>
        </div>
      </div>
    );
}