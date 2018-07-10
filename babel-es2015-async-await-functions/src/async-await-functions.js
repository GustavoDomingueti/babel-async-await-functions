function promiseFunc(x) {
    console.log('PROMISE FUNCTION - ', x);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(false);
        }, 5000);
    });
}

async function validate() {
    if (!await conference1().then(v => v)) {
        return 'validate-1';
    }
    if (!await conference2().then(v => v)) {
        return 'validate-2';
    }
    return 'validate-3';
}

async function conference1() {
    const logic = true;
    const err = false;
    if (err) {
        console.log('conference1 - 111');
        await promiseFunc('conference1 - err');
        return false;
    }
    if (logic) {
        console.log('conference1 - 222');
        await promiseFunc('conference1 - logic');
        return true;
    }
    console.log('conference1 - 333');
    return true;
}

async function conference2() {
    const logic = true;
    const err = false;
    if (err) {
        console.log('conference2 - 111');
        await promiseFunc('conference2 - err');
        return false;
    }
    if (logic) {
        console.log('conference2 - 222');
        await promiseFunc('conference2 - logic');
        return true;
    }
    console.log('conference2 - 333');
    return true;
}

async function finalize() {
    const result =  await validate().then(v => v);
    if (parseInt(result.charAt(result.length - 1)) <= 3) {
        console.log('Resultado: ', result.charAt(result.length - 1));
    } else {
        console.log('Resultado: ', '000');
    }
}

finalize();