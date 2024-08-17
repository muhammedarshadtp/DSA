

// ===========SelectionSort===========//


function SelectionSort(arr){
    let n= arr.length;
    for(let i=0; i<n-1; i++){
        let small=i
        for(let j=i+1; j<n; j++){
            if(arr[j] < arr[small]){
                small=j
            }
        }
        if(small !== i){
            let temp=arr[i]
            arr[i]=arr[small]
            arr[small]=temp
        }
    }
    return arr
}

let arr=[7,8,9,3,1,9,5,3,2]

let sorted=SelectionSort(arr)

console.log(sorted);