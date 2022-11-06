import "./style.css";
import Header from "./components/Header";
import SpiceList from "./components/SpiceList";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("spices.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const updateList = (spice: string) => {
    const newList = data.filter((item) => item["name"] !== spice);
    setData(newList);
  };
  return (
    <div className="App">
      <Header />
      <SpiceList data={data} updateList={updateList} />
    </div>
  );
}

export default App;
