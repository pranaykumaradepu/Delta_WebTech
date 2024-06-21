// Practice Qs

// Qs. For the Give String :
// let msg = "help!"
// Trim it & convert it to uppercase.

// let msg = 'help!'

// console.log(msg.trim().toUpperCase())
// console.log("")

// Qs. For the String -> let name = "ApnaCollege", predict the output for following :
// name.sIice(4, 9)
// name.index0f("na")
// name.repIace("Apna","0ur")

// let name = 'ApnaCollege'

// console.log(name.slice(4,9))
// console.log(name.indexOf('na'))
// console.log(name.replace('Apna', 'Our'))
// console.log("")

// Qs. Separate the "College" part in above string & replace 'I' with 't' in it.
// let sWord = name.slice(4).replace('l', 't')
// console.log(sWord)
// console.log("")


// Qs. For the given start state of an array, change it to final form using methods.
// start : ['january', 'july' 'march', 'august']
// final : ['july', 'june', 'march', 'august']

let months =  ['january', 'july', 'march', 'august']

months.shift()
months.shift()
months.unshift('june')
months.unshift('july')

console.log(months)

// Qs. Return the index of the "javascript" from the given array, if it was reversed.

let pLang = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql']

console.log("the index value of javascript is",pLang.reverse().indexOf('javascript'))


// tic tac to

// [
//  [x, , o]
//  [ ,x,  ]
//  [o, , x]  ]

let game = [['x', null, 'o'], [null, 'x', null], ['o',null, 'x']]

console.log(game)

// Practice Questions


//  Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
//  For example: for array [7, 9, 0,-2] and n=3
//  Print, [7, 9, 0]

let numArr = [7, 9, 0,-2]

let uNum = prompt('enter number of elements you want to extract : ')

console.log(`elements you extracted [${numArr.slice(0,uNum)}]`)



//  Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any positive number].
//  For example: for array [7, 9, 0,-2] and n=3
//  Print, [9, 0,-2]


let lNumArr =  [7, 9, 0,-2]

let lnum = prompt('enter value : ')

console.log('elements extracted from last ', lNumArr.slice(-lnum))



//  Qs3. Write a JavaScript program to check whether a string is blank or not.

let str = ""

if (str.length === 0){
    console.log('blank')
}else{
    console.log('it"s not a blank')
}

//  Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.4

let str1 = 'hello'

let uLow = prompt('enter index of character you want to check : ') 

if (str1[uLow] == str1[uLow].toLowerCase()){
    console.log('lower')
}else{
    console.log('not a lower')
}

//  Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

let tStr = '   hello   '

console.log("original string : ",tStr)
console.log("after spaced removed ",tStr.trim())

//  Qs6. Write a JavaScript program to check if an element exists in an array or 

let sArr = [1,2,3]

let val = prompt('enter value you wantn to check')

if (sArr.indexOf(val) != -1){
    console.log('item found')
}else{
    console.log('not found')
}