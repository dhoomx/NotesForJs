// explainion
/*
We use arrays. A lot of arrays. We use arrays to show search lists, items added into a user cart, 
How many time you logged into your system right ?

-- Javascript Array inbuilt object provides some really cool and helpful 
functions to manage our data stored in arrays.

1. Foreach

  * The easy one right ? we all know why this method is used for and even you don’t know about this method the name pretty much explains everything.
  * Foreach takes a callback function and run that callback function on each element of array one by one.

2. Filter

  * Whenever you have to filter an array Javascript inbuilt method to filter your array is the right choice to use.
  *Filter let you provide a callback for every element and returns a filtered array.


3. Map

  * most used array method of all time.
  * Map like filter & foreach takes a callback and run it against every element on the array.
  * but whats makes it unique is it generate a new array based on your existing array.
  * Like filter, map also returns an array. 
    The provided callback to map modifies the array elements 
    and save them into the new array upon completion that array get returned as the mapped array.


4. Sort 
  
  * You can sort data in alphabetical and numerical order, or 
  * use filters to hide data you don't want to see.


5. Reduce

  * is used to reduce the array to one single value.
  * it reduces the array into one single value and returns it upon completion.
  *
  * For example:
    if you have to add all the elements of an array you can do something like this.

       var sample = [1, 2, 3] // here we meet again
       // es5
       var sum = sample.reduce(function(sum, elem){
           return sum + elem;
       })
       // es6
       var sum = sample.reduce((sum, elem) => sum + elem)
       console.log(sum)
*/



const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [
    33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32
];


// 0- for loop      "don't use it it's very old"
// 1- forEach
// 2- filter
// 3- map
// 4- sort
// 5- reduce



//0 for loop        "don't use it it's very old" //

// for (let i = 0; i < companies.length; i++) {
//     const element = companies[i];
//     console.log(element.end);
// } 
/////////////////////////////////////////////////////////////////////////////////ForLoop End.


//1 forEach //
// Foreach takes a callback function and run that callback function on each element of array one by one.
/* 
Basically forEach works as a traditional for loop looping over the array 
and providing you array elements to do operations on them.
*/ 

//1.1
// companies.forEach(function(company){
//     console.log(company.start);
// });

//1.2
// companies.forEach(company => console.log(company.start));

/////////////////////////////////////////////////////////////////////////////////ForEach End.


//2 .filter //
/**
 Whenever you have to filter an array Javascript inbuilt method to filter your array is the right choice to use.
  Filter let you provide a callback for every element and returns a filtered array.

  * 
The main difference between forEach and filter is that
     
     * forEach just loop over the array and executes the callback but

     * filter executes the callback and check its return value. 
      If the value is true element remains in the resulting array but if the return value 
      is false the element will be removed for the resulting array.

     * Also take notice filter does not update the existing array it will return a new filtered array every time.
 */
//2.1
// let canDrink = [];

// for(let i = 0; i < ages.length; i++){
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

//2.2
// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//         // console.log(age)
//         return true;
//     }  
// });
// console.log(canDrink); 

//2.3
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

//filter companyes
//2.1
//es5
// const retailCompnies = companies.filter(function(company){
//     if(company.category == 'Retail'){
//         //console.log(`${company.name} is a ${company.category}`);
//         return true;
//     }
// })
// console.log(retailCompnies);

//2.2
//es6
// const retailCompnies = companies.filter(company => company.category === 'Retail')
// console.log(retailCompnies)

// Get 80s companies
//2.1

//es5
// const ehghtsCompany = companies.filter(function(company){
//     if(company.start >= 1980 && company.end <= 2000){
//         return true
//     }
// })
// console.log(ehghtsCompany);

//2.2

//es6
// const ehghtsCompany = companies.filter(company => (company.start >= 1980) &&  (company.end <= 2000));
// console.log(ehghtsCompany);

// get company that lasted 10 yers or more

//es6
// const companyLastedTenYear = companies.filter(company => company.end - company.start >= 10)
// console.log(companyLastedTenYear);

/////////////////////////////////////////////////////////////////////////////////Filter End.

//3 .map //

/*
One of my favourite and most used array method of all time. 
As a ReactJS developer I use map a lot inside my application UI.
    * Map like filter & foreach takes a callback and run it against every element on the array.
     
    * but whats makes it unique is it generate a new array based on your existing array.

    * Like filter, map also returns an array. 
      The provided callback to map modifies the array elements 
      and save them into the new array upon completion that array get returned as the mapped array.

    

*/ 

// 3.1
// const compMap = companies.map((function(company){
//     return company.name;
// }))

// console.log(compMap);

//3.2
// const compRetailMap = companies.map(function(company){
//     if (company.category == "Retail") {
//         console.log(company.name);      
//     }
// } )

//3.3
//es5
// const StartEndCompiniesMap = companies.map(function(company){
//     return `${company.name}  [${company.start} - ${company.end}]`;
// })
// console.log(StartEndCompiniesMap);

//es6
// const StartEndCompiniesMap = companies.map(company => `${company.name}  [${company.start} - ${company.end}]`);
// console.log(StartEndCompiniesMap);

//3.4
//es5
// const agesSqur = ages.map(function(age){
//     return Math.sqrt(age);
// })
// console.log(agesSqur);

//es6
// const agesSqur = ages.map(age => Math.sqrt(age));
// console.log(agesSqur)

//3.5
//es5
// const agesTimesTwo = ages.map(function(age){
//     return age * 2;
// })
// console.log(agesTimesTwo);

//es6
// const agesTimesTwo = ages.map(age => age * 2);
// console.log(agesTimesTwo);

/////////////////////////////////////////////////////////////////////////////////Map End.



//4 .sort //

/*
What is sort and filter function?

    * You can sort data in alphabetical and numerical order, or 
    * use filters to hide data you don't want to see.
*/

// 4.1
//es5
// const sortCompany = companies.sort(function(c1, c2){
//     if (c1.start > c2.start) {
//         return 1;
//     }
//     else{
//         return -1;
//     }  
// })
// console.log(sortCompany);

//es6
//const sortCompany = companies.sort((c1,c2) => c1.start > c2.start ? 1 : -1);
//console.log(sortCompany);
// or
//const sortCompany = companies.sort((c1,c2) => c1.start - c2.start);
//console.log(sortCompany);


// 4.2
//es5
// const sortAges = ages.sort(function(a, b){
//     if(a > b){
//         return 1;
//     }else{
//         return -1;
//     }
// })

//es6

// const sortAges = ages.sort((a, b) => a > b ? 1 : -1 );
// console.log(sortAges);
// or
// const sortAges = ages.sort((a, b) => a - b );
// console.log(sortAges);

/////////////////////////Sort End

//5 .reduce //

/*
As the name already suggest reduce method of the array object is used to reduce the array to one single value.
For example:
if you have to add all the elements of an array you can do something like this.

       var sample = [1, 2, 3] // here we meet again
       // es5
       var sum = sample.reduce(function(sum, elem){
           return sum + elem;
       })
       // es6
       var sum = sample.reduce((sum, elem) => sum + elem)
       console.log(sum)


* it reduces the array into one single value and returns it upon completion.
*/


// 5.1
// with for loop

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }
// console.log(ageSum);

//es5
// const agesSum = ages.reduce(function(total, age){
//     return total + age;
// },0);
// console.log(agesSum);

//es6
// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// 5.2
//es5
// const companiesTotalYears = companies.reduce(function(total,company){
//     return total + (company.end - company.start);
// },0);
// console.log(companiesTotalYears);

//es6
// const companiesTotalYears = companies.reduce((total, company)=> total + (company.end - company.start),0);
// console.log(companiesTotalYears);

/////////////////////////////////////////////////////////////////////////////////Reduce End.


//6 .Use All Methods //

const allMethods = ages
.map(age =>  age *2)
.filter(age => age < 40)
.sort((a, b) => a -b)
.reduce((total, age) => total + age, 0)

console.log(allMethods);