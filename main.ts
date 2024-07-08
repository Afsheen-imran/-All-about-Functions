// Basic Function

function myfunc() {
  console.log("hello i am from functions");
}
myfunc();
myfunc();
myfunc();

// //functions with parameter and Arguments

let myname: string = "Afsheen";
//myname: string //parameter
//"Afsheen"// Argument

function username(myname: string, myname2: string) {
  console.log(myname, myname2);
}
username("Afsheen", "imran");

// // function Return keyword/type

function sum(Bio: number, Maths: number, phys: number) {
  return Bio + Maths + phys;
}
console.log(sum(90, 95, 75));

//Explicit typing means we give type by ourselves
//implicit typing, typescript infer the type byitself

// // function Default parameter

function calculate(a: number = 2, b: number = 4, c: number = 6) {
  return a + b + c;
}

console.log(calculate(4));

//optional parameter with condition

function movie(name: string, releaseyear?: number) {
  if (releaseyear) {
    return `This movie name is ${name} and release year is ${releaseyear}`;
  }

  return `This movie name is ${name}`;

  }

  console.log(movie("Avengers", 2019));

  // // Rest parameters and spread operator

  function box(name: string, ...eidi: number[]) {
    console.log(...eidi);
    return name + eidi;
  }
  console.log(box("Sumaira", 50, 100, 200, 700, 800, 600, 400, 5000));

  // // Arrow Function
  // //()=>{}

  let gift1 = (mygift: string) => mygift;

  console.log(gift1("gold ring"));

  //Anonymous function

  //Immediately invoke function expression

  //This function call itself immediately

  (function (y: string) {
    console.log(y);
  })("i am immediately invoked function");


(function (y: number, z: number) {
  console.log(y + z);
})(5, 6);

//This function automatically call  itself in parenthesis()

//Recursive function

//This function call from inside and outside
function myfunction(a: number): number {
  if (a <= 1) {
    return 1;
  } else {
    return a * myfunction(a - 1);
  }
}
console.log(myfunction(5));
