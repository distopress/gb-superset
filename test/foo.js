let obj = {
    undefined,
    "blockId h1.test": {
        "color": "red",
        "foo": undefined,
        "font-size": "30px"
    }
}

function removeUndefinedProperties(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    let newObj = {};
    for (let key in obj) {
        if (obj[key] !== undefined) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                newObj[key] = removeUndefinedProperties(obj[key]); // recursive call
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}


console.log(removeUndefinedProperties(obj));
// {
//     'blockId h1.test': { color: 'red', foo: undefined, 'font-size': '30px' }
// }