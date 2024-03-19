import { useState } from "react";
import "./App.css";
import Review from "./Review";
import styles from './index.module.css'

function App() {
  return (
    
      <main className=''>
        <section className={styles.body}>
          <div className="">
            <h2 className="text-center">Our Reviews</h2>
            <div className={styles.underline}></div>
          </div>
          <Review />
        </section>
      </main>
  );
}

export default App;
