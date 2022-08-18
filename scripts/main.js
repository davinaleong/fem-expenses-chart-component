import data from "./data.json"

const chartEl = document.querySelector(`[data-chart]`)
const chartHeight = chartEl.clientHeight

const maxValue = Math.max(...data.map((object) => object.amount))
console.log(`maxValue: `, maxValue)