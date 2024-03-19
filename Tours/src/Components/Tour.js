import React, { useState } from "react";
import styles from "../styles/index.module.css";
import { _convertToNaira } from "../helpers/helperFunction";

const Tour = ({ id, image, info, price, removeTour, name }) => {
  const [readMore, setReadMore] = useState(false);

  

  return (
    <div
      className={styles.body}
      // className=" w-3/4 px-2 pt-3 shadow-lg border-black-1 bg-slate-100 border  mb-4 rounded-lg mx-auto"
    >
      <div className="mb-4 w-full">
        <img className="border-2 shadow-2xl" src={image} alt="imsge loading..."></img>
      </div>

      <section
        //  className="flex space-x-20 px-6 pb-4"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 className="font-sans text-xl font-bold">{name}</h2>
        <h4 className="font-sans text-2xl font-bold text-green-500">
          {_convertToNaira(price)}
        </h4>
      </section>
      <p className="font-sans font-semibold">
        {readMore ? info : `${info.substring(0, 100)}...`}
        
      </p>
      <button
        className="border-white-2 relative left-3/4 bottom-11 right-6 font-bold font-sans p-1 bg-blue-50 text-blue-200"
        onClick={() => setReadMore(!readMore)}
      >
        {readMore ? "show less" : "read more"}
      </button>

      <button
        className="font-sans text-center w-52 rounded-md border-indigo-500/50  border-2 ml-10 my-4 py-1 transition hover:translate-y-1 text-red-300"
        onClick={() => removeTour(id)}
      >
        Not Interested
      </button>
    </div>
  );
};

export default Tour;
