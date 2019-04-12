const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft,completionCallback) {

  if (numsLeft > 0) {
      rl.question('What is your number ', (answer) => {
          console.log(sum += parseInt(answer));
          addNumbers(sum, numsLeft -= 1, completionCallback);
        });
      
    }  else {
        completionCallback(sum);
  }

}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
