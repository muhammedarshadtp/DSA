

// ==============Bubble sort================//


function BubbleSort(arr){
    let swapped;
    
    do{
        swapped = false
        for(let i=0; i<arr.length-1; i++){
            if(arr[i] > arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped = true
            }
        }
    } while(swapped)
}

const arr=[6,9,1,3,4,84,7]

BubbleSort(arr)
console.log(arr);  //[1,3,4,6,7,9,84]