import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://api.jikan.moe/v4/top/anime")
        .then((response) => response.json())
        .then((data) => console.log(data));

      return data;
    };

    const data = fetchData();

    console.log(data);
  }, []);

  return <div className={styles.container}></div>;
};

export default Home;
