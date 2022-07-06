const helloWorld = require("./helloWorld")

//describe method groups together related tests
describe("Hello World", () => {
  //test method used to for testing
  //The first argument is the test name; the second argument is a function that 
  //contains the expectations to test. The third argument (optional) is timeout (in milliseconds) 
  //for specifying how long to wait before aborting. Note: The default timeout is 5 seconds.
  test('says "Hello, World!"', () => {
    expect(helloWorld()).toEqual("Hello, World!")
  })
})
