import { createContext, useContext, useState } from "react";

const TripsContext = createContext(undefined);

function TripsProvider({ children }) {
  const [place, setPlace] = useState("");
  const [activePlace, setActivePlace] = useState(false);

  return (
    <TripsContext.Provider
      value={{ place, setPlace, activePlace, setActivePlace }}
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
