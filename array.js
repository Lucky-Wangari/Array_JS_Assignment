// last element of the array//
arr1=[3,7,34,90,12];
let nums = arr1.slice(-1);
console.log(nums);

arr2=["true","green", "where", 12, 56];
let statement = arr2.slice(-1);
console.log(statement);


//join the element array into a string//
myPets = ["Cow", "Bird", "Snake", "Dog"];
let animals = myPets.join();
console.log(animals);

//Write a JS script to sort the following array items
let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let nums2 = arr3.sort((p, q) => p-q);
console.log(nums2);

//Write a program to remove duplicates from the following array.//

var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];
             let fruits = [...new Set(arr)];
            console.log(fruits);
            console.log(arr);

            //Write a JS script to search for the following word in the array.//
            //If the word is present, console it else console "the search word was not found"//
            let arr5 = ["the", "way", "x", 4];
            let letter = "we"

            if(arr5.includes(letter)){
                console.log(letter + "the search word was found");
            } else{
                console.log("the search word was not found")
            }

                       

//Write a JS script to sort the following string//
let word = "sevink" 
let sortword1 = word.split('').sort().join(''); 
console.log(sortword1);      


