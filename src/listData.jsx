import { useEffect, useState } from "react";
import Data from "./components/data";
function ListData() {
  const [data, usedata] = useState([]);
  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((res) => res.json())
      .then((data) => usedata(data.map(item=>item.name)));
  });
  const datashow = data.map((item, index)=> <Data key={index} name={item} />)
  return <div>{datashow}</div>;
}

export default ListData;
