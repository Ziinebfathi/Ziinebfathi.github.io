const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name ? ", function(name) {
    rl.question("how old are you ? ", function(age) {
        if(age < 16){
            console.log('“You’re not allowed to drive in Iowa')
          }else{
            console.log('you are allowed to get a drivers license in iowa ')
          }
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});