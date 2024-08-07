

// ==========BinarySearch============//


// function BinarySearch(arr,target){
//     let leftIndex = 0
//     let rigthIndex = arr.length -1
//     while(leftIndex<=rigthIndex){
//         let middleIndex = Math.floor((leftIndex + rigthIndex)/2)
//         if(target === arr[middleIndex]){
//             return middleIndex
//         }
//         if(target <arr[middleIndex]){
//             rigthIndex = middleIndex - 1
//         }else{
//             leftIndex = middleIndex + 1
//         }
//     }
//     return -1
// }

// console.log(BinarySearch([1,2,3,4,5,6],5));  //(4)
// console.log(BinarySearch([1,2,3,4,5,6],8));  //(-1)


// function BinarySearch(arr,target){
//     let leftIndex=0
//     let rigthIndex=arr.length-1
//     while(leftIndex<=rigthIndex){
//         let middleIndex = Math.floor((leftIndex + rigthIndex)/2)
//         // console.log(arr[middleIndex])
//         if(target === arr[middleIndex]){
//             return middleIndex
//         }
//         if(target>arr[middleIndex]){
//             rigthIndex=middleIndex-1
//         }else{
//             leftIndex=middleIndex +1
//         }
//     }
//     return -1
// }

// console.log(BinarySearch([9,8,7,6,5,4,],4));
// console.log(BinarySearch([9,8,7,6,5,4,],1));
// console.log(BinarySearch([9,8,7,6,5,4,],9));



// ============RecursionBinarySearch============//

// function RecursionBinarySearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,leftIndex,rigthIndex){
//     if(leftIndex>rigthIndex){
//         return -1
//     }
//     let middleIndex = Math.floor((leftIndex + rigthIndex)/2)
//     if(target === arr[middleIndex]){
//         return middleIndex
//     }
//     if(target<arr[middleIndex]){
//         return search(arr,target,leftIndex,middleIndex-1)
//     }else{
//         return search(arr,target,middleIndex+1,rigthIndex)
//     }
// }


// function BinarySearch(arr,target){
//     let leftIndex=0
//     let rigthIndex=arr.length-1
//     while(leftIndex<=rigthIndex){
//         let middleIndex = Math.floor((leftIndex+rigthIndex)/2)
//         if(target===arr[middleIndex]){
//             return middleIndex
//         }
//         if(target<arr[middleIndex]){
//             rigthIndex=middleIndex-1
//         }else{
//             leftIndex=middleIndex+1
//         }
//     }
//     return -1
// }

// console.log(BinarySearch([1,2,3,4,5,6,7],6));
// console.log(BinarySearch([1,2,3,4,5,6,7],10));
// console.log(BinarySearch([1,2,3,4,5,6,7],3));


function BinarySearch(arr,target){
    let leftIndex=0
    let rigthIndex=arr.length-1
    while(leftIndex<=rigthIndex){
        let middleIndex=Math.floor((leftIndex + rigthIndex)/2)
        if(target===arr[middleIndex]){
            return middleIndex
        }
        if(target<arr[middleIndex]){
            rigthIndex=middleIndex-1
        }else{
            leftIndex=middleIndex+1
        }
    }
    return -1
}


console.log(BinarySearch([1,2,3,4,5,6,7],3));


function RecursionBinarySearch(arr,target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,leftIndex,rigthIndex){
    if(leftIndex>rigthIndex){
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rigthIndex)/2)
    if(target===arr[middleIndex]){
        return middleIndex
    }
    if(target<arr[middleIndex]){
        return search(arr,target,leftindex,middleIndex-1,)
    }else{
        return search(arr,target,middleIndex+1,rigthIndex)
    }
}

console.log(BinarySearch([1,2,3,4,5,6,7],6));