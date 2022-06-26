/*
    The word “async” before a function means function f() always returns a resolved Promise.
    Values are wrapped in a resolved promise automatically.
    For instance, this function returns a resolved promise with the result of 'I'm from async function f'
*/
const test = async function f() { //note: entire function is async
    setTimeout(() => {
        console.log("doing and finished async task after 3 seconds")
    }, 3000); // note: even though it's timer, but it's non-blocking. because of timer it will wait for 3 seconds and does job
    console.log("task2 is going on inside function f") //: it will be done immediately
    return "async task has been submitted successfully! or it could be final result for f().then"; // note: this entire return is wrapped with Promise.resolve
}
// Both function f() are same. the below explicitly return a promise.
// In JavaScript same overloaded function is allowed and last one wins.
/*async function f() {
    setTimeout(() => {
        console.log("doing and finished async task after 3 seconds")
    }, 3000);
    console.log("task2 is going on inside function f") //: it will be done immediately
    return Promise.resolve("async task has been submitted successfully! or it could be final result for f().then");
}*/

console.log("worked task1")
// the below call is non-blocking
test().then(returnResultFromf => console.log("f().then Task2 calls Return Value From function f()", returnResultFromf));
console.log('worked task 3 and is done before task 2')