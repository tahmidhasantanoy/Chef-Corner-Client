import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [chefInfo, setChefInfo] = useState([]);

  useEffect(() => {
    fetch("https://chef-corner-server-tahmidhasantanoy.vercel.app/chefInfo")
      .then((res) => res.json())
      .then((data) => setChefInfo(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-20 my-5">
      {chefInfo.map((info, idx) => (
        <Card key={idx} info={info}></Card>
      ))}
    </div>
  );
};

export default Cards;
