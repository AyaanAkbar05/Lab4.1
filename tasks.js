//Task 1
function formatFullName(firstName, lastName) {
    if (!firstName || !lastName) {
        return "Invalid name input.";
    }

    formattedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    return `${formattedLastName}, ${formattedFirstName}`;
}

//Task 2
function calculateTotalCost(price, quantity, taxRate) {
    if (typeof price !== 'number' || typeof quantity !== 'number' || typeof taxRate !== 'number') {
        return "Invalid input.";
    }

    totalCost = (price * quantity) * (1 + taxRate);
    return totalCost;
}

//Task 3
function checkEligibility(age, isEmployed) {
    if (age <= 18) {
        return "Not eligible.";
    } else if (age > 18 && isEmployed) {
        return "Eligible.";
    } else if (age > 18 && !isEmployed) {
        return "Conditionally eligible.";
    }
}

//Task 4
function calculateTotalCostWithDiscount(price, quantity, taxRate, discount = 0) {
    if (typeof price !== 'number' || typeof quantity !== 'number' || typeof taxRate !== 'number' || typeof discount !== 'number') {
        return "Invalid input.";
    }

    totalCost = ((price * quantity) - discount) * (1 + taxRate);
    return totalCost;
}

//Testing
console.log(formatFullName("john", "doe"));
console.log(calculateTotalCost(10, 5, 0.1));
console.log(checkEligibility(25, true));
console.log(calculateTotalCostWithDiscount(10, 5, 0.1, 5));
