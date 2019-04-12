const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function absurdBubbleSort(arr, sortCompletionCallback){

    function outerBubbleSortLoop(madeAnySwaps) {
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
        if(madeAnySwaps){
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        }
        else{
            sortCompletionCallback(arr);
        }

    }

    // Kick the first outer loop off, starting `madeAnySwaps` as true.
    outerBubbleSortLoop(true);
}
    



function askIfGreaterThan(el1, el2, callback){
    rl.question(`Is ${el1} > ${el2} ?`, (answer)=> {
        // let greater = true;
        if (answer==="yes"){
            callback(true);
        }else{
            callback(false);
        }

    });
}


function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){

    if(i < arr.length-1){
        askIfGreaterThan(arr[i],arr[i+1], (isGreaterThan)=> {
            if(isGreaterThan){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
        });
    }else{
        outerBubbleSortLoop(madeAnySwaps);
    }

}

absurdBubbleSort([3, 2, 1], function (arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    rl.close();
});