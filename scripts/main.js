const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
]
const chartEl = document.querySelector(`[data-chart]`)

const date = new Date()
const maxValue = Math.max(...data.map((object) => object.amount))

const getDay = (date) => {
  switch (date.getDay()) {
    case 0:
      return `sun`

    case 1:
      return `mon`

    case 2:
      return `tue`

    case 3:
      return `wed`

    case 4:
      return `thu`

    case 5:
      return `fri`

    case 6:
      return `sat`

    default:
      return ``
  }
}

chartEl.innerHTML = ``
data.forEach((object) => {
  const { day, amount } = object
  const height = Math.round((Number(amount) / maxValue) * 100)

  const today =
    getDay(date).toLowerCase() == day.toLowerCase() ? `data-today` : ``

  chartEl.innerHTML += `
        <div class="chart-column">
            <button class="chart-bar" ${today} style="--height: ${height}%">
                <div class="chart-popup">$${amount}</div>
            </button>
            <div class="chart-label">${day}</div>
        </div>
    `
})
