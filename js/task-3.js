function checkForSpam(message) {
    let word1 = "spam";
    let word2 = "sale"

    let wordCase1 = word1.toLowerCase();
    let wordCase2 = word2.toLowerCase();
    if (message.toLowerCase().includes(wordCase1) || message.toLowerCase().includes(wordCase2)) {
        return true;
    } else {
        return false;
    } 
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
