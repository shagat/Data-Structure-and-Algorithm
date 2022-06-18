a = [5, 4, 10, 1, 6, 2];
console.log(a)
const n = a.length;
for (i = 1; i < n; i++) {
    temp = a[i];
    j = (i - 1);
    while (j >= 0 && a[j] > temp) {
        a[j + 1] = a[j];
        j--;
    }
    a[j + 1] = temp;
    console.log('Pass: ' + i)
}
console.log(a)

//Notes: 
// An insertion sort divides the array into 
// two sub array namely- unsorted and sorted array,
// the sorted list consist of the first 
// element of the array and the rest is in unsorted array
// in the first pass we then take 1 element from the unsorted array 
// and compares it with the sorted array from the last element and till
//  the starting index, and place it in the sorted array accordingly. 