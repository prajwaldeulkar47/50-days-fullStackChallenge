import { getStockData } from './fakeStockAPI.js'

setInterval(() => {
  renderStockTicker(getStockData())
}, 1500)

let prevPrice = null

function renderStockTicker(stockData) {
  const { name, sym, price, time } = stockData
  const priceIconDirection = price > prevPrice ? '🟢' : price < prevPrice ? '🔴' : '🌚'

  document.getElementById('name').innerText = name
  document.getElementById('sym').innerText = sym
  document.getElementById('price').innerText = price
  document.getElementById('priceIcon').innerText = priceIconDirection
  document.getElementById('time').innerText = time

  prevPrice = price
}
