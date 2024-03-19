import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Components/Loading";
import Tours from "./Components/Tours";
import styles from "./styles/index.module.css";
import axios from "axios";

// import List from './Components/List';

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tour, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      let response = await fetch(url);
    let tour = await response.json();
    setLoading(false);
    setTours(tour);
    } catch (error) {
      console.log(error)  
    }
    
  };

  // const fetchTours2 = async () => {
  //   try {
  //     const { data } = await axios.get(url);
  //     console.log(data, "data");
  //   } catch (error) {
  //     console.log(error, "error");
  //   }
  // };

  useEffect(() => {
    fetchTours();
  }, []);

  const removetour = (i) => {
    const newtours = tour.filter((nomtour) => nomtour.id !== i);
    console.log(newtours);
    setTours(newtours);
  };

  if (loading) {
    return (
      <section>
        <Loading />
      </section>
    );
  }

  if (tour.length === 0) {
    return (
      <main>
        <div className="">
          <h2>No Tours Left</h2>
          <button className="btn-primary" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main
      className={styles.main}
      //  className="bg-slate-200"
    >
      {<Tours tour={tour} removeTour={removetour} />}
    </main>
  );
}

export default App;
