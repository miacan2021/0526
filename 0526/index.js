

function power(n1, n2){
    if(n2 === 0){
        return 1;
    }
    return n1 * power(n1, n2-1);
}
console.log(power(2, 2));


function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    let n = arr.pop();
    return n * productOfArray(arr);
  }
  console.log(productOfArray([1, 2, 3]));


function recursiveRange(n){
    if(n === 0){
       return;
    }
    return n + recursiveRange(n - 1);
}

​console.log(recursiveRange(6));


function reverse(word){
    const rev = '';
    if(word.reverse() === rev){
        return;
    }
    return rev = reverse(word[word.length - 1]++);
    
}

console.log(reverse('hello'));


function isPalindromes(str){
    if(str.length < 2){
        return true;
    }

    let firstWord = str[0];
    let lastWord = str[str.length - 1];

    if(firstWord === lastWord){
    let rev = str.substr(1).slice(0, -1);
    console.log(rev);
    return isPalindromes(rev);  
    }
    else{
      return false;
    }
}
 console.log(isPalindromes('ana'));




