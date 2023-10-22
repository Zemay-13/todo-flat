import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

type CardListType = null | {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: [
    {
      id: number;
      name: string;
      status: string;
      species: string;
      type: string;
      gender: string;
      origin: {
        name: string;
        url: string;
      };
      location: {
        name: string;
        url: string;
      };
      image: string;
      episode: string[];
      url: string;
      created: string;
    }
  ];
};

function App() {
  const [cardList, setCardList] = useState<CardListType>(null);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      const data = await fetch("https://rickandmortyapi.com/api/character");
      const json = await data.json();
      return json;
    };
    fetchData()
      .then((json) => {
        setCardList(json);
        setLoader(false);
      })
      .finally(() => console.log("запрос выполнен"));
  }, []);

  return (
    <div>
      {cardList?.results?.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          sex={card.gender}
          image={card.image}
        />
      ))}
    </div>
  );
}

export default App;
