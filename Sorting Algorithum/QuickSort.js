

// ========QuickSort==========//


function quicksort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let right =[]
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quicksort(left),pivot,...quicksort(right)]
}

let arr=[9,6,1,2,9,2,4,-1,-9,0]

let sort=quicksort(arr)
console.log(sort);