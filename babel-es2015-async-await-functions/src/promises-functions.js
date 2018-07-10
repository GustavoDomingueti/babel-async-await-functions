function promiseFunc(lgc) {
    return new Promise(resolve => {
        setTimeout( () => {
            return resolve(lgc);
        }, 3000);
    });
}

function asyncAwait(awaitFunc) {
    return Promise.resolve().then( () => awaitFunc());
}

function validate() {
    const cns = true, cpf = true, nP = false, logic = false;

    if (!logic) {
        return 78987887;
    }
    return validateCNS();

    function encapsuleFunctions(field, conferenceFunc, callFunc) {
        if (field) {
            return asyncAwait(conferenceFunc)
            .then(response => {
                if (response) {
                    return field;
                }
                return callFunc();
            });  
        }
        return callFunc();
    }

    function validateCNS() {
        return encapsuleFunctions(cns, conference1, validateCPF);
    }

    function validateCPF() {
        return encapsuleFunctions(cpf, conference1, validateNP);
    }

    function validateNP() {
        return encapsuleFunctions(nP, conference1, defaultsResponse);
    }

    function defaultsResponse() {
        return 5;
    }
}

function conference1() {
    const logic = false;
    const err = true;

    return verifyIsError();

    function verifyIsError() {
        if (err) {
            return promiseFunc(false)
            .then(response => {
                if (response) {
                    return console.log(1);
                }
                return verifyIsLogic();
            });
        }
        return verifyIsLogic();
    }

    function verifyIsLogic() {
        if (logic) {
            return promiseFunc(true)
            .then(response => {
                if (response) {
                    return console.log(2);
                }
                return defaults();
            });
        }
        return defaults();
    }

    function defaults() {
        return true;
    }
}

function finalize() {
    return asyncAwait(validate)
    .then(response => {
        if (response) {
            return console.log(response);
        }
        return console.log(456);
    });
}

finalize();