function getExecutor() {
    // Tried with multiple parameters, but it takes only first parameters
    // return (well, test) => {
    //     setTimeout(() => {
    //         well('cool');
    //         test('I did something in new Promise style');
    //     }, 1000)
    // };
    return (test) => {
        setTimeout(() => {
            console.log('typeof test', typeof test);
            test('I did something in new Promise style');
        }, 1000)
    };
}

const doSomethingAsync = () => {
    return new Promise(getExecutor())
}

const doSomething = async () => {
    return await doSomethingAsync();
}


console.log('new Promise style Before')
doSomething().then(r => console.log("r:", r));
console.log('new Promise style After')


const doSomethingAsyncWithDifferentPromise = () => {
    setTimeout(() => 'I did something', 1000);
    return Promise.resolve('I did something in Promise.resolve style');
}

const doSomethingWithDifferentPromise = async () => {
    return await doSomethingAsyncWithDifferentPromise();
}

console.log('Promise.resolve style Before')
doSomethingWithDifferentPromise().then(r => console.log("r:", r));
console.log('Promise.resolve style After')
