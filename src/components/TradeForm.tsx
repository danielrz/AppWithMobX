import { useState } from "react"
import Athlete from "../states/Athlete"

type Props = {
  athlete: Athlete
}

function TradeForm({ athlete }: Props) {
  const [teamName, setTeamName] = useState("")

  return (
    <>
      <input type="text" placeholder="type team name" onChange={(e) => setTeamName(e.target.value)} />
      <span>
        <button type="button" onClick={() => athlete.tradePlayer(teamName)}>Trade</button>
      </span>
    </>
  )

}

export default TradeForm