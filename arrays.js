// 2.1 
// Function to find first and last index 
// Output: [[FIRST_INDEX], [LAST_INDEX]]
// Default: [-1,-1]

let arr = [5, 7, 7, 8, 8, 10]

const findFirstLast = (arr, n) => {
    let l = 0
    let r = arr.length - 1

    for (let i = 0; i < arr.length; i++) {
        if(arr[l] != n) l++
        if(arr[r] != n) r--
    }
    l = l > arr.length - 1 ? -1 : l
    r = r < 0 ? -1 : r
    return [l, r]
} 

console.log(findFirstLast(arr, 6))
console.log(findFirstLast(arr, 8))

// 2.2 
// Function to find conjunction of 2 arrays

let arr1 = [1, 2, 2, 1]
let arr2 = [2, 2]

const conjunction = (arr1, arr2) => arr1.filter(element => {
    if(arr2.includes(element)) {
        const index = arr2.indexOf(element)
        arr2.splice(index, 1)
        return true
    }
    return false
})

console.log(conjunction(arr1, arr2))

// 2.3 
// Function to insert one array into another one by index

let arr3 = [1, 2, 3, 4, 5]
let arr4 = [6, 7, 8]

const insertArr = (arr1, arr2, index) => {
    arr2.forEach(element => {
        arr1.splice(index, 0, element)
        index++
    })
    return arr1
}

console.log(insertArr(arr3, arr4, 1))

// 2.4
// Sort an array(task1) by decreasing id

const sortArrById = () => {
    console.log("Before: ", array);
    let sortedArray = [...array];
    console.log("After: ", sortedArray.sort((a, b) => b.id - a.id)
    );
};

// You can test this in file obj.js: