const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP(fetchMyIP, (error, data) => {
//   if (error) {
//     console.log("error:", error)
//   }
//   console.log("data:", data)
// })

const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTimes(exampleCoords, (error, passTImes) => {
  if (error) {
    console.log('error:', error)
  }
  console.log("data:", passTImes)
})
