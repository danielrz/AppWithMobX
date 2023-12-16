import { action, makeObservable, observable } from "mobx";

class Athlete {
  constructor(
    public name: string,
    public age: number,
    public salary: number,
    public teamHistory: string[] = []
  ) {
    makeObservable(this, {
      name: observable,
      age: observable,
      teamHistory: true,
      wishHappyBirthday: action,
      tradePlayer: action,
      salary: true
    })

  }
  wishHappyBirthday() {
    this.age++;
  }

  tradePlayer(team: string) {
    this.teamHistory.push(team);
  }
}

export default Athlete;
