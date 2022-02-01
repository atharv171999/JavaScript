// print

console.log("hello pepcoders")

let a = 2
let b = 5
console.log(b-a)

// print even Number. 
let n = 0;
while(n == 10){
    console.log(n);
    n++;
}

// is a prime 
let num = 10;
let isprime = true;
for(let i=2; i*1<num; i++){
    if(num%i == 0){
        isprime = false;
    }
}
    if(isprime == true){
        console.log("isprime");

    }else{
        console.log("not a prime");
    }
