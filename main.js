
//hayley's fibonacci function
function fibonacci() {
    let last = 0;
    let cur = 1;
    for (let i =0; i<10; i++) {
        console.log(cur);
        temp = cur;
        cur = cur+last;
        last = temp;
    }
}

