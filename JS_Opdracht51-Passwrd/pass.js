// password is korter dan 9 karakters
// password is niet null
// password heeft 1 of meer uppercase karakters
// password heeft 1 of meer lowercase karakters
// password heeft 1 of meer cijfers
// EN
// MIN. 3 conidties en de 4e MOET TRUE zijn
// Utility functions
const isNotNull = (str) => str;

const hasRightLength = (str) => str;

const hasUpperCaseCharacter = (str) => str;

const hasLowerCaseCharacter = (str) => str;

const hasDigit = (str) => str;

const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
};