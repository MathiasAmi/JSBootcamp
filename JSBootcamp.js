//While exercises
//Exercise 1
function sum(n) {
    var sum = 0;
    for (var i =0; 1 <= arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
  }
  sum(3); // => 6
  sum(4); // => 10
  sum(5); // => 15

  //Exercise 2