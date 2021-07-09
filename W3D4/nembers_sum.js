const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let sum = 0;
function getNumber() {
    readline.question("Enter a number: ", number => {
        if(number === "stop") {
            console.log(sum);
            return readline.close();
        }
        sum += parseInt(number);
        getNumber();
    });
};

getNumber();