import React from "react";
import Tour from "./Tour";


const Tours = ({ tour, removeTour }) => {
  return (
    <section>
      <div className="text-center font-serif text-lg">
        <h2>Our Tours</h2>
        <div className="w-1/12 h-1.5 bg-black-1 mx-auto"></div>
      </div>

      <div
        className="pt-2"
      >
        {tour.map((tours) => {
          return <Tour key={tours.id} {...tours} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
