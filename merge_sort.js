arr = [3,2,6,5,8,1,2,4];
n = arr.length;
ub = n-1;
lb = 0;
console.log(arr)
merge_sort(arr,lb,ub)
console.log(arr)

function merge_sort(a,lb,ub){
    if (lb < ub){
        var mid = Math.floor((lb + ub /2));
        // var mid = lb+ parseInt((ub-lb)/2);
        console.log(mid)
        merge_sort(a,lb,mid)
        merge_sort(a,mid+1,ub)
        merge(a,lb,mid,ub);
    }
}

function merge(a,lb,mid,ub){
    i = lb;
    j = mid+1;
    k = lb;
    b = [];
    while(i <= mid && j <= ub){
        if (a[i] <= a[j]){
            b[k] = a[i];
            i++;
        } else {
            b[k] = a[j];
            j++;
        }
        k++;
    }
    if(i > mid){
        while(j <= ub){
            b[k] = a[j]
            j++;
            k++;
        }
    } 
    if(j > ub) {
        while(i <= mid) {
            b[k] = a[i];
            i++;
            k++;
        }
    }
    for(k = lb;k <= ub;k++){
        a[k] = b[k] ;
    }
}

// Space Complexity
// Theta (m+n) 
// Best and worst time n(logn)