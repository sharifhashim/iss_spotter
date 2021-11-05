const request = require('request-promise-native')

const fetchMyIP = () => {
  return request("https://api.ipify.org?format=json")
}
const fetchCoordsByIP = () => {
  return request("https://api.freegeoip.app/json/?apikey=c821fd20-3dc1-11ec-938b-3b99643c4b64")
}
const fetchISSFlyOverTimes = (body) => {
  const {latitude, longitude} = JSON.parse(body)
  const url = `https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`
  return request(url)
}
const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const {response} = JSON.parse(data)
      return response
    })
  
}
module.exports = { nextISSTimesForMyLocation }