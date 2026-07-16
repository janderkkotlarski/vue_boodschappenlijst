/// Rounding to the specified amount of digits bahind the point
export const digitRounding = (decimal, digits) => {
    return isNaN(decimal) || decimal < 0 ? 0 : Math.round(decimal * 10 ** digits) / 10 ** digits;
};

/// Get an array entry of the key has a certain value
export const arrayEntry = (array, key, value) => {
    for (const entry of array) {
        if (entry[key] === value) {
            return entry;
        }
    }

    return null;
};
