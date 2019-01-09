// Working with callbacks and asynchronous code
const fetchData = callback => {
  setTimeout(() => {
    callback('Test');
  }, 1500);
};

setTimeout(() => {
  console.log('Timer is done');
  fetchData(text => {
    console.log(text)
  });
}, 2000);


console.log('Welcome to Node!');
console.log('Hello again!');