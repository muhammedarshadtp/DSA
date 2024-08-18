

// ==========Merge Sort===========//

function MergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    let middle=Math.floor(arr.length/2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)
    return merge(MergeSort(left),MergeSort(right))
}

function merge(left,right){
    let sort=[]
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sort.push(left.shift())
        }else{
            sort.push(right.shift())
        }
    }
    return [...sort,...left,...right]
}

const arr=[6,3,8,9,2,5,2,0]

let Sorted=MergeSort(arr)

console.log(Sorted);