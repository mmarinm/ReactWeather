// function getPromise(location) {
//   return new Promise(function(resolve, reject) {
//     resolve(79);
//     reject('City not found')
//   });
// }
//
// getPromise("New York").then(function(temp){
//   console.log("promise succes", temp);
// }, function (err) {
//   console.log("promise fail", err);
// })

function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof(a) && typeof(b) === "number") {
      var result = a + b;
      resolve(result);
    }
    reject('Wrong input');
  });
}
addPromise(3, 2).then(function(result){
  console.log("promise succes", result);
}, function (err) {
  console.log("promise fail", err);
})
