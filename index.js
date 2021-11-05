const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

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

// const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTimes(exampleCoords, (error, passTImes) => {
//   if (error) {
//     console.log('error:', error)
//   }
//   console.log("data:", passTImes)
// })
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date();
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
}
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error)
  }
  //console.log(passTimes)
  printPassTimes(passTimes)
})
