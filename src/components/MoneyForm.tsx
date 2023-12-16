/* eslint-disable react-refresh/only-export-components */
import { action, computed, observable, toJS } from "mobx"
import { observer } from "mobx-react-lite"

type FormState = {
  years: number
  salary: number
}

const state: FormState = observable({
  years: 0,
  salary: 0,
})


function MoneyForm() {
  const totalValue = computed(() => {
    return state.years * state.salary
  })

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h1 style={{marginBottom: 0}}>
        Money Talks
      </h1>
      <p>Total: {toJS(totalValue).toString()}</p>
      <input type="number" placeholder="type numberof years" style={{height: '40px'}} onChange={action((e) => {
        state.years = (Number(e.target.value))
      })} />
      <input type="number" placeholder="type yearly salary" style={{height: '40px'}} onChange={action((e) => {
        state.salary = (Number(e.target.value))
      })} />
    </div>
  )
}

export default observer(MoneyForm)