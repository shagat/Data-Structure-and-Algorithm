a = [16, 14, 5, 6, 8, 43, 2, 25, 37, 68, 0]
console.log(a)
lb = 0;
ub = (a.length)-1;

quickSort(a,lb,ub)
console.log(a)

function quickSort(a,lb,ub){
    if(lb < ub){
        pIndex = partition(a,lb,ub);
        quickSort(a,lb,pIndex-1);
        quickSort(a,pIndex+1,ub);
    }
}

function partition(a,lb,ub) {
    pivot = a[lb]
    start = lb;
    end = ub;
    while(start < end){
        while(a[start] <= pivot){
            start++;
        }
        while(a[end] > pivot){
            end--;
        }
        if (start < end){
            temp = a[start];
            a[start] = a[end];
            a[end] = temp;
        }
    }
    temp = a[lb];
    a[lb] = a[end];
    a[end] = temp;
    return end;
}