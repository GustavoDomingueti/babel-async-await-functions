function promiseFunc() {
    return new Promise(resolve => {
        setTimeout( () => {
            resolve(7);
        }, 5000);
    });
}

async function asyncAwait() {
    const result = await promiseFunc();
    console.log(result);
}

asyncAwait();