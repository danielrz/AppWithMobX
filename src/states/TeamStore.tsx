import { makeAutoObservable } from "mobx";
import Athlete from "./Athlete";
import { createContext, useContext, useRef } from "react";

class TeamStore {
  constructor(players: Athlete[]) {
    makeAutoObservable(this);
    this.players = players
  }

  state: string = 'Our '
  setState = (state: string) => {
    this.state = state
  }

  mascot: string = 'Big Bang'
  setMascot = (mascot: string) => {
    this.mascot = mascot
  }

  players: Athlete[] = []
  setPlayers = (players: Athlete[]) => {
    this.players = players
  }

  get teamName() {
    return `${this.state} ${this.mascot}`
  }

  get totalYearlyCost() {
    return this.players.reduce((total, player) => total + player.salary, 0)
  }

  addPlayer = (player: Athlete) => {
    this.players.push(player)
  }
}

const TeamStoreContext = createContext<TeamStore>(null as unknown as TeamStore)

const useTeamStore = () => {
  const store = useContext(TeamStoreContext)
  if (!store) {
    throw new Error('Please use TeamStoreProvider')
  }
  return store
}

type Props = {
  children: React.ReactNode
  players: Athlete[]
}

function TeamStoreProvider({ children, players }: Props) {
  const store = useRef(new TeamStore(players))
  return (
    <TeamStoreContext.Provider value={store.current}>
      {children}
    </TeamStoreContext.Provider>
  )
}

export default TeamStore
export {
  TeamStoreProvider,
  useTeamStore
}