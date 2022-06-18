a = [7, 4, 10, 8, 3, 1];
const n = a.length;
console.log(n)
for (i = 0; i < n; i++) {
    min = i;
    for (j = i + 1; j < n; j++) {
        if (a[j] < a[min]) {
            min = j;
        }
    }
    if (min != i) {
        temp = a[i]
        a[i] = a[min]
        a[min] = temp;
    }
    console.log('Pass: ' + i)
    console.log(a)
}