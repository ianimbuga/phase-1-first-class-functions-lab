const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2); // Returns the first two elements
};

// Function to return the last two drivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2); // Returns the last two elements
};

// Array containing the two driver functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function to create a fare multiplier
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier; // Multiplies fare by the given multiplier
    };
}

// Function to double the fare
const fareDoubler = createFareMultiplier(2); // Doubles the fare

// Function to triple the fare
const fareTripler = createFareMultiplier(3); // Triples the fare

// Function to select different drivers based on provided function
function selectDifferentDrivers(drivers, selectFunction) {
    return selectFunction(drivers); // Calls the provided function with the drivers array
}