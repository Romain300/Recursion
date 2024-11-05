function fibs(n) {
    let array = [];
    if (n <= 0) return array;
    for (let i = 0; i < n; i ++) {
        if (i === 0 || i === 1) {
            array.push(i)
        } else {
            let nextValue = array[i-1] + array[i-2];
            array.push(nextValue);
        }
    };

    return array
};

function fibsRec(n) {
    let array = [0, 1];
    if (n <= 0) return [];
    if (n === 1) return [0]
    if (n === 2) return array;
    
    let result = fibsRec(n-1)
    let lenght = result.length;

    const newValue =  result[lenght-1] + result[lenght-2]
    result.push(newValue);

    return result
};

