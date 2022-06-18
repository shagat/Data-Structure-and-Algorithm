// a = [15, 16, 6, 8, 5]
a = [16, 14, 5, 6, 8,43,2,25,37,68,0]
console.log(a)
const n = a.length;
for (let i = 0; i < (n - 1); i++) {
    let isChanged = false;
    console.log('Pass: '+ (i+1))
    for (let j = 0; j < (n - 1 - i); j++) {
        // console.log(a[j])
        if (a[j + 1] < a[j]) {
            temp = a[j + 1];
            a[j + 1] = a[j];
            a[j] = temp;
            isChanged = true;
        }
    }
    if (isChanged == false){
        break;
    }
}
console.log('Array length: '+n)
console.log(a)

//Notes:

// A bubble sort compares the value of a starting index and its next index and 
// swap the value based on the comparision (incresing or decresing order).  
// This sorting technique can be optimized by two ways: 
// 1. Each pass the inner loop is decremented because the first pass would have 
//    placed the highest or smallest value at its place.
// 2. we can check if the current pass have any changes, if 
//    not then the array is sorted
//    and we dont need to go through any more passes. This can be 
//    implemented by introducing a flag variable (isChanged).