//examples

//define logger
["@logger"]
    .ann(function (originalFn, originalFnArgs, annoInput,annoNamedInput) {
        if(annoNamedInput && annoNamedInput.length>1){
            console.log("Name of logger is :"+annoNamedInput[1]);
        }
        return originalFn.apply(null, originalFnArgs);
    });


//simple logger annotation that executes right away.
["@logger"]
    .ex(function () {
        var sum = 10 + 20;
        console.log("the sum is:", sum);
        return sum;
    });


//execute right away ("ex"), explicitly passed static params with annotation name ("SuperLogger")
["@logger:SuperLogger"]
    .ex(function () {
        var sum = 1 + 2;
        console.log("the sum is:", sum);
        return sum;
    });

//returns a function ("rt")
var sum = ["@logger:SuperLogger"]
    .rt(function (x, y) {
        var sum = x + y;
        console.log("the sum is:", sum);
        return sum;
    });


console.log(sum(10, 20 ));

