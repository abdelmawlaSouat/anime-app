import type { NextPage } from "next";
// import { useEffect } from "react";
// import styles from "../styles/Home.module.css";

const AnimeDetail: NextPage = () => {
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const data = await fetch("https://api.jikan.moe/v4/top/anime")
  //         .then((response) => response.json())
  //         .then((data) => console.log(data));

  //       return data;
  //     };

  //     const data = fetchData();

  //     console.log(data);
  //   }, []);

  return (
    <div className="container">
      <h1>Anime R</h1>
    </div>
  );
};

export default AnimeDetail;

// query Media($media : Int, $episodes: Int) {
//     Media(id: $media, episodes: $episodes) {
//       id,
//       title {
//         english
//       }
//       startDate {
//         year
//       }
//     }
//   }
