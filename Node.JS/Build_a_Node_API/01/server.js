import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './sendJSONResponse.js'
import { sendFilteredData } from './sendFilteredData.js'
import { sendQueryData } from './sendQueryData.js'

const PORT = 8000

// ✅ Load data once (not on every request)
const destinations = await getDataFromDB()

const server = http.createServer((req, res) => {

  const urlObj = new URL(req.url, `http://${req.headers.host}`)
  const queryObj = Object.fromEntries(urlObj.searchParams)
  const pathname = urlObj.pathname

  // ===== /api (with query params) =====
  if (req.method === 'GET' && pathname === '/api') {
    const filteredData = sendQueryData(destinations, queryObj)
    return sendJSONResponse(res, filteredData, 200)
  }

  // ===== /api/continent/:continent =====
  if (req.method === 'GET' && pathname.startsWith('/api/continent')) {
    const continent = pathname.split('/').filter(Boolean).pop()

    let data = sendFilteredData(destinations, 'continent', continent)
    data = sendQueryData(data, queryObj)

    return sendJSONResponse(res, data, 200)
  }

  // ===== /api/country/:country =====
  if (req.method === 'GET' && pathname.startsWith('/api/country')) {
    const country = pathname.split('/').filter(Boolean).pop()

    let data = sendFilteredData(destinations, 'country', country)
    data = sendQueryData(data, queryObj)

    return sendJSONResponse(res, data, 200)
  }

  // ===== 404 =====
  return sendJSONResponse(res, { message: 'Route not found' }, 404)
})

server.listen(PORT, () => {
  console.log(`Connected on port: ${PORT}`)
})
