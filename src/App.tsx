import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ApiData } from "./interface/ApiData";
import Card from "./components/card/card";

export default function App() {
  const api = "https://jsonplaceholder.typicode.com/albums";
  const [arr, setArr] = useState<ApiData[]>([]);

  // Async function inside useEffect
  useEffect(() => {
    async function getFromServer() {
      try {
        let data = await axios.get<ApiData[]>(api);
        setArr(data.data);
      } catch (err) {
        console.error(err);
      }
    }
    getFromServer();
  }, []);

  return (
    <div className="App">
      <Card data={arr} />
    </div>
  );
}
