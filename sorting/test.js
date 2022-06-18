arr = [3,2,6,5,8,1,2,4];
n = arr.length;
ub = n-1;
lb = 0;
console.log(arr)
quick_sort(arr,lb,ub);
console.log(arr)

function quick_sort(a,lb,ub){
    if (lb < ub){
        loc = partition_func(a, lb, ub);
        quick_sort(a,lb,loc-1);
        quick_sort(a,loc+1,ub);
    }
}

function partition_func(a,lb,ub) {
    pivot = a[lb];
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
            temp = a[start]
            a[start] = a[end]
            a[end] = temp
        }
    }
    temp = a[lb];
    a[lb] = a[end];
    a[end] = temp;
    return end;
    
}
