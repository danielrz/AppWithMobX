/* eslint-disable react-refresh/only-export-components */
import { observer } from "mobx-react-lite";
import TradeForm from "./TradeForm";
import { useTeamStore } from "../states/TeamStore";

function Roster() {
  const { players } = useTeamStore();
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Teams</th>
        <th>Trade Form</th>
        <th>Birthday?</th>
        <th>Salary</th>
      </tr>
      {players.map((athlete) => {
        return (
          <tr key={athlete.name}>
            <td>{athlete.name}</td>
            <td>{athlete.age}</td>
            <td>{athlete.teamHistory.join()}</td>
            <td>
              <TradeForm athlete={athlete} />
            </td>
            <td>
              <button type="button" style={{width: '100%'}} onClick={() => athlete.wishHappyBirthday()}>
                Wish Happy Birthday!
              </button>
            </td>
            <td>{athlete.salary}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default observer(Roster);
