

// // ===========Insertion Sort==========//

// function insertionSort(arr){
//     for(let i=0; i<arr.length; i++){
//         let current=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j] > current){
//             arr[j+1] = arr[j]
//             j=j-1
//         }
//         arr[j+1] = current
//     }
// }

// let arr=[7,45,7,2,-9,-3,3]

// insertionSort(arr)
// console.log(arr);

function insertionSort(arr){
    for(let i=0; i<arr.length;i++){
        let current = arr[i]
        let j=i-1
        while(j>=0 && arr[j] > current){
            arr[j+1] = arr[j]
            j=j-1
        }
        arr[j+1]=current
    }
}
let arr=[9,6,2,6,0,2,5]

insertionSort(arr)
console.log(arr);