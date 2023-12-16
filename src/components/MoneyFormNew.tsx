/* eslint-disable react-refresh/only-export-components */
import { action, observable } from "mobx";
import { observer } from "mobx-react-lite";
import { useTeamStore } from "../states/TeamStore";
import Athlete from "../states/Athlete";

type FormState = {
  name: string;
  age: number;
  salary: number;
};

const initialState: FormState = { name: "", age: 0, salary: 0 };

const state: FormState = observable({ ...initialState });

function MoneyForm() {
  const { totalYearlyCost, addPlayer } = useTeamStore();

  const resetState = () => {
    return action(() => {
      state.name = "";
      state.age = 0;
      state.salary = 0;
    })
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ marginBottom: 0 }}>Money Talks</h1>
      <p>Total: {totalYearlyCost}</p>
      <input
        type="text"
        placeholder="type player name"
        style={{ height: "40px" }}
        value={state.name}
        onChange={action((e) => {
          state.name = e.target.value;
        })}
      />
      <input
        type="number"
        placeholder="type player age"
        style={{ height: "40px" }}
        value={state.age}
        onChange={action((e) => {
          state.age = Number(e.target.value);
        })}
      />
      <input
        type="number"
        placeholder="type player salary"
        style={{ height: "40px" }}
        value={state.salary}
        onChange={action((e) => {
          state.salary = Number(e.target.value);
        })}
      />
      <button
        type="button"
        onClick={action(() => {
          addPlayer(new Athlete(state.name, state.age, state.salary));
          // state = { ...initialState };
          resetState()()
        })}
      >
        Add player
      </button>
    </div>
  );
}

export default observer(MoneyForm);
