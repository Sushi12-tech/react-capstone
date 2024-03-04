import { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.worldnewsapi.com/search-news?text=cricket&language=en&api-key=5929b5b09874415bb3146ab5495bff95"
    )
      .then((data) => data.json())
      .then((data) => setNews(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div style={{ marginTop: "20px", borderRadius: "19px", width: "25vw", height: "90vh" }}>
      {news ? <img width={200} height={200} src={news.news[0].image} /> : <></>}
      {news ? <h1 >{news.news[0].title}</h1> : <></>}
      {news ? <p>{news.news[0].text.slice(0, 500)}...</p> : <></>}
    </div>
  );
}