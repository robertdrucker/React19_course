import { useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header/header";
import NewsList from "./components/news_list";
import { newsData } from "./utils/data";
import "./styles/styles.css";

const App = () => {
  let [news, setNews] = useState(newsData);

  return (
    <>
      <Header />
      <div className="container">
        <NewsList news={news} />
      </div>
    </>
  );
};

createRoot(document.getElementById("root")).render(<App />);
