//Bestand functions.js

const { isNull, checkValue, createUser } = require("../Test_map/functions");


const functions = {
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = {firstName: "Brad", lastName: "Traversy"}
        return user;
    },
}

module.exports = functions;

