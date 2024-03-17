import { createContext, useContext, useState } from "react";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";
import img7 from "../img/7.jpg";
import img8 from "../img/8.jpg";

const TripsContext = createContext(undefined);

const cities = [
  {
    country: "Ukraine",
    id: 132132,
    photos: [img1, img2, img2, img3, img4, img5, img6, img7, img8],
  },
  {
    country: "Berlin",
    id: 11313,
    photos: [img6, img2, img1, img2, img3, img4, img5, img7, img8],
  },
  {
    country: "Germany",
    id: 3123,
    photos: [img1, img6, img7, img2, img3, img4, img5, img2, img8],
  },
  {
    country: "Dragobrat",
    id: 3123213,
    photos: [img2, img6, img7, img2, img3, img4, img5, img1, img8],
  },
  {
    country: "Egypt",
    id: 31121123,
    photos: [img2, img1, img7, img8, img2, img3, img4, img5, img6],
  },
];

function TripsProvider({ children }) {
  const [place, setPlace] = useState(cities[0].country);
  const [activePlace, setActivePlace] = useState(false);
  const [media, setMedia] = useState(cities[0].photos);
  const [description, setDescription] = useState("");

  return (
    <TripsContext.Provider
      value={{
        place,
        setPlace,
        activePlace,
        setActivePlace,
        cities,
        media,
        setMedia,
      }}
    >
      {children}
    </TripsContext.Provider>
  );
}

function useTrips() {
  const context = useContext(TripsContext);
  if (context === undefined) throw new Error("error");
  return context;
}

export { TripsProvider, useTrips };
