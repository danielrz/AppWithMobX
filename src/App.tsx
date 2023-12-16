import "./App.css";
import MoneyForm from "./components/MoneyFormNew";
import Roster from "./components/Roster";
import TeamInfo from "./components/TeamInfo";
import Athlete from "./states/Athlete";
import { TeamStoreProvider } from "./states/TeamStore";
import { useState, useEffect } from "react";

const lebronJames = new Athlete("Lebron James", 23, 100);
const stephCurry = new Athlete("Steph Curry", 30, 102);

function fetchPlayers() {
  return new Promise<Athlete[]>((resolve) => {
    setTimeout(() => {
      resolve([lebronJames, stephCurry]);
    }, 1000);
  });
}

function App() {
  const [players, setPlayers] = useState<Athlete[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedPlayers = await fetchPlayers();
      setPlayers(fetchedPlayers);
    }
    fetchData();
  }, []);

  return (
    <>
      {players.length > 0 && (
        <TeamStoreProvider players={players}>
          <TeamInfo />
          <Roster />
          <MoneyForm />
        </TeamStoreProvider>
      )}
      {players.length === 0 && <p>Loading...</p>}
    </>
  );
}

export default App;
