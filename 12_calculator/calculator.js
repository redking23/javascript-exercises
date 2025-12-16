const add = function(a,b) {

  return a+b;
	
};

const subtract = function(a,b) {
  
  return a-b;
};

const sum = function(array) {

  if(array.length == 0){
    return 0;
  }
  else{
    return array.reduce((a,b) => a+b);
  }

}

const multiply = function(array) {
let toplam = 0;
return array.reduce((toplam, sayi)=>{
  return toplam*sayi;
});

};

const power = function(a,b) {
  let sum= 1;
	for(let i=0; i<b; i++ ){
    sum= sum *a;
  }
  return sum;
};

const factorial = function(a) {
  let sum = 1;
	if(a==0){
    return 1;
  }else{
    for(let i=1; i<=a; i++){
      sum = sum *i
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
